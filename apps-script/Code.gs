/**
 * Kauffman Scheduler — Google Apps Script
 *
 * Deploy as Web App:
 *   - Execute as: Me
 *   - Who has access: Anyone
 * Then copy the /exec URL into the React app's .env as VITE_SCHEDULER_URL
 */

const CONFIG = {
  // Long random string. Must match VITE_SCHEDULER_SECRET in the frontend .env
  secret: 'kauffman-2026-9f3a2c8b71e4f0d2',

  // Where booking notifications go (the doctor)
  clinicEmail: 'mirac@cardify.club',


  // 'primary' = the Workspace user running this script.
  // Or paste a specific calendar id like 'xxxx@group.calendar.google.com'
  calendarId: 'primary',


  slotMinutes: 20,    // appointment length
  bufferMinutes: 10,  // gap before next appointment can start

  // 0 = Sunday, 6 = Saturday
  hours: {
    0: null,
    1: { start: '09:00', end: '18:00' },
    2: { start: '09:00', end: '18:00' },
    3: { start: '09:00', end: '18:00' },
    4: { start: '09:00', end: '18:00' },
    5: { start: '09:00', end: '18:00' },
    6: { start: '09:00', end: '13:00' },
  },

  locations: {
    'merrillville': {
      label: 'Merrillville',
      address: '8585 Broadway, Suite 440, Merrillville, IN 46410',
      // PASTE Merrillville calendar ID here (looks like xxxx@group.calendar.google.com)
      calendarId: 'c_1c6a2fb48de160f949f76af85818b647beebf5a2f4fee37b58ad0308c59379f8@group.calendar.google.com',
    },
    'crown-point': {
      label: 'Crown Point',
      address: '11055 Broadway, Suite B, Crown Point, IN 46307',
      // PASTE Crown Point calendar ID here
      calendarId: 'c_6b28c4d25d5b4e39e18b101800b6e2f4948a61e426e2015406decb80a5209c82@group.calendar.google.com',
    },
  },

  // Phone (E.164 format, e.g. '+12195551234') that should receive booking SMS alerts
  clinicPhone: '+923219010050',

  // Default country code if patient enters a 10-digit US number without prefix
  defaultCountryCode: '+92',
};

/**
 * Twilio credentials are stored in Script Properties (not in code).
 * Set them once via:
 *   Project Settings (gear icon) → Script Properties → Add property
 *   - TWILIO_SID
 *   - TWILIO_TOKEN
 *   - TWILIO_FROM   (your Twilio phone number, E.164, e.g. '+15005550006')
 */
function getTwilioConfig_() {
  const props = PropertiesService.getScriptProperties();
  // TWILIO_CHANNEL: 'sms' (default) or 'whatsapp'
  const channel = (props.getProperty('TWILIO_CHANNEL') || 'sms').toLowerCase();
  return {
    sid: props.getProperty('TWILIO_SID'),
    token: props.getProperty('TWILIO_TOKEN'),
    from: props.getProperty('TWILIO_FROM'),
    channel: channel,
  };
}

function withChannelPrefix_(num, channel) {
  if (!num) return num;
  if (channel === 'whatsapp') {
    return num.indexOf('whatsapp:') === 0 ? num : 'whatsapp:' + num;
  }
  return num.indexOf('whatsapp:') === 0 ? num.replace('whatsapp:', '') : num;
}

function normalizePhone_(raw) {
  if (!raw) return null;
  const digits = String(raw).replace(/[^\d+]/g, '');
  if (digits.startsWith('+')) return digits;
  if (digits.length === 10) return CONFIG.defaultCountryCode + digits;
  if (digits.length === 11 && digits.startsWith('1')) return '+' + digits;
  // Pakistani local format: 03XXXXXXXXX (11 digits starting with 0)
  if (digits.length === 11 && digits.startsWith('0')) {
    return CONFIG.defaultCountryCode + digits.substring(1); // strip leading 0
  }
  return CONFIG.defaultCountryCode + digits;
}
/**
 * DEBUG: run this from the editor to test SMS without going through a booking.
 * 1. In the toolbar's function dropdown, choose "testSms"
 * 2. Click Run
 * 3. View → Logs (or Ctrl+Enter) to see the output
 *
 * Edit TEST_TO below to your verified number before running.
 */
function testSms() {
  const TEST_TO = '+923219010050'; // <-- put your verified Twilio number here

  const props = PropertiesService.getScriptProperties();
  const sid = props.getProperty('TWILIO_SID');
  const token = props.getProperty('TWILIO_TOKEN');
  const from = props.getProperty('TWILIO_FROM');

  Logger.log('--- Twilio config check ---');
  Logger.log('TWILIO_SID present: ' + !!sid + (sid ? ' (starts ' + sid.substring(0, 6) + '...)' : ''));
  Logger.log('TWILIO_TOKEN present: ' + !!token + (token ? ' (length ' + token.length + ')' : ''));
  Logger.log('TWILIO_FROM: ' + (from || '(missing)'));
  Logger.log('TEST_TO: ' + TEST_TO);

  if (!sid || !token || !from) {
    Logger.log('ABORT: one or more Script Properties missing.');
    Logger.log('Fix: Project Settings (gear) → Script Properties → add TWILIO_SID / TWILIO_TOKEN / TWILIO_FROM');
    return;
  }

  const channel = (props.getProperty('TWILIO_CHANNEL') || 'sms').toLowerCase();
  Logger.log('TWILIO_CHANNEL: ' + channel);

  const fromAddr = withChannelPrefix_(from, channel);
  const toAddr = withChannelPrefix_(TEST_TO, channel);

  Logger.log('--- Calling Twilio API ---');
  Logger.log('From: ' + fromAddr);
  Logger.log('To:   ' + toAddr);
  try {
    const url = 'https://api.twilio.com/2010-04-01/Accounts/' + sid + '/Messages.json';
    const response = UrlFetchApp.fetch(url, {
      method: 'post',
      payload: { From: fromAddr, To: toAddr, Body: 'Test message from Kauffman Scheduler — ' + new Date().toISOString() },
      headers: { Authorization: 'Basic ' + Utilities.base64Encode(sid + ':' + token) },
      muteHttpExceptions: true,
    });
    Logger.log('HTTP status: ' + response.getResponseCode());
    Logger.log('Body: ' + response.getContentText());
  } catch (err) {
    Logger.log('Exception: ' + err.message);
  }
}

function sendSms_(to, body) {
  const t = getTwilioConfig_();
  if (!t.sid || !t.token || !t.from) {
    Logger.log('Twilio not configured — skipping message to ' + to);
    return;
  }
  try {
    const fromAddr = withChannelPrefix_(t.from, t.channel);
    const toAddr = withChannelPrefix_(to, t.channel);
    const url = 'https://api.twilio.com/2010-04-01/Accounts/' + t.sid + '/Messages.json';
    const payload = { From: fromAddr, To: toAddr, Body: body };
    const response = UrlFetchApp.fetch(url, {
      method: 'post',
      payload: payload,
      headers: {
        Authorization: 'Basic ' + Utilities.base64Encode(t.sid + ':' + t.token),
      },
      muteHttpExceptions: true,
    });
    Logger.log('Twilio (' + t.channel + ') response (' + toAddr + '): ' + response.getResponseCode() + ' ' + response.getContentText());
  } catch (err) {
    Logger.log('Twilio send failed to ' + to + ': ' + err.message);
  }
}

function doGet(e) {
  try {
    const action = e.parameter.action;
    if (action === 'slots') {
      return jsonOut(getSlots(e.parameter.date, e.parameter.location));
    }
    if (action === 'ping') {
      return jsonOut({ ok: true, message: 'Scheduler is live' });
    }
    return jsonOut({ ok: false, error: 'unknown action' });
  } catch (err) {
    return jsonOut({ ok: false, error: err.message });
  }
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.secret !== CONFIG.secret) {
      return jsonOut({ ok: false, error: 'unauthorized' });
    }
    if (data.action === 'book') {
      return jsonOut(book(data));
    }
    return jsonOut({ ok: false, error: 'unknown action' });
  } catch (err) {
    return jsonOut({ ok: false, error: err.message });
  }
}

function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function getCalendarForLocation_(locationKey) {
  const loc = CONFIG.locations[locationKey];
  if (!loc) return null;
  const id = loc.calendarId;
  if (!id || id.indexOf('PASTE_') === 0) {
    // Fallback to default calendar if location IDs not configured yet
    return CalendarApp.getDefaultCalendar();
  }
  return CalendarApp.getCalendarById(id);
}

function getSlots(dateStr, locationKey) {
  if (!dateStr) return { ok: false, error: 'date required (YYYY-MM-DD)' };
  if (!locationKey) return { ok: false, error: 'location required' };
  const cal = getCalendarForLocation_(locationKey);
  if (!cal) return { ok: false, error: 'unknown location: ' + locationKey };

  const date = new Date(dateStr + 'T00:00:00');
  if (isNaN(date.getTime())) return { ok: false, error: 'invalid date' };

  const hours = CONFIG.hours[date.getDay()];
  if (!hours) return { ok: true, slots: [] };

  const [sh, sm] = hours.start.split(':').map(Number);
  const [eh, em] = hours.end.split(':').map(Number);
  const dayStart = new Date(date); dayStart.setHours(sh, sm, 0, 0);
  const dayEnd = new Date(date); dayEnd.setHours(eh, em, 0, 0);

  const events = cal.getEvents(dayStart, dayEnd);
  const busy = events.map(function (ev) {
    return { start: ev.getStartTime().getTime(), end: ev.getEndTime().getTime() };
  });

  const slotMs = CONFIG.slotMinutes * 60 * 1000;
  const bufferMs = CONFIG.bufferMinutes * 60 * 1000;
  const stepMs = slotMs + bufferMs; // slots step every (slot + buffer) so 9:00, 9:30, 10:00...
  const now = Date.now();
  const slots = [];

  for (let t = dayStart.getTime(); t + slotMs <= dayEnd.getTime(); t += stepMs) {
    if (t < now) continue;
    const slotEnd = t + slotMs;
    const conflict = busy.some(function (b) {
      return !(slotEnd + bufferMs <= b.start || t >= b.end + bufferMs);
    });
    if (!conflict) {
      const d = new Date(t);
      const hh = String(d.getHours()).padStart(2, '0');
      const mm = String(d.getMinutes()).padStart(2, '0');
      slots.push(hh + ':' + mm);
    }
  }
  return { ok: true, slots: slots };
}

function book(data) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const required = ['date', 'time', 'firstName', 'lastName', 'email', 'phone', 'location'];
    for (let i = 0; i < required.length; i++) {
      if (!data[required[i]]) return { ok: false, error: 'missing ' + required[i] };
    }

    const [hh, mm] = data.time.split(':').map(Number);
    const start = new Date(data.date + 'T00:00:00');
    start.setHours(hh, mm, 0, 0);
    const end = new Date(start.getTime() + CONFIG.slotMinutes * 60 * 1000);

    const cal = getCalendarForLocation_(data.location);
    if (!cal) return { ok: false, error: 'unknown location: ' + data.location };

    // Re-check conflict inside the lock
    const checkStart = new Date(start.getTime() - CONFIG.bufferMinutes * 60000);
    const checkEnd = new Date(end.getTime() + CONFIG.bufferMinutes * 60000);
    const existing = cal.getEvents(checkStart, checkEnd);
    if (existing.length > 0) {
      return { ok: false, error: 'That slot was just booked. Please pick another time.' };
    }

    const loc = CONFIG.locations[data.location] || { label: data.location, address: '' };
    const title = data.firstName + ' ' + data.lastName + ' — Appointment (' + loc.label + ')';
    const description =
      'Patient: ' + data.firstName + ' ' + data.lastName + '\n' +
      'Email: ' + data.email + '\n' +
      'Phone: ' + data.phone + '\n' +
      'Location: ' + loc.label + '\n\n' +
      'Note:\n' + (data.note || '(none)');

    // Workspace admin has "Auto-add video conferencing" set to OFF,
    // so the simple CalendarApp will NOT attach Meet.
    const event = cal.createEvent(title, start, end, {
      description: description,
      location: loc.address,
      guests: data.email + ',' + CONFIG.clinicEmail,
      sendInvites: true,
    });

    // Plain-text confirmation emails (in case the .ics invite is filtered)
    const tz = Session.getScriptTimeZone();
    const dateStr = Utilities.formatDate(start, tz, 'EEEE, MMMM d, yyyy');
    const timeStr = Utilities.formatDate(start, tz, 'h:mm a');

    const patientBody =
      'Hi ' + data.firstName + ',\n\n' +
      'Your appointment at Kauffman Chiropractic (' + loc.label + ') is confirmed.\n\n' +
      'Date: ' + dateStr + '\n' +
      'Time: ' + timeStr + '\n' +
      'Location: ' + loc.address + '\n\n' +
      'If you need to cancel or reschedule, please call us.\n\n' +
      'Thank you,\nKauffman Chiropractic';
    MailApp.sendEmail({
      to: data.email,
      subject: 'Appointment Confirmed — ' + dateStr + ' at ' + timeStr,
      body: patientBody,
    });

    const clinicBody =
      'New booking:\n\n' +
      'Patient: ' + data.firstName + ' ' + data.lastName + '\n' +
      'Email: ' + data.email + '\n' +
      'Phone: ' + data.phone + '\n' +
      'Location: ' + loc.label + '\n' +
      'Date: ' + dateStr + '\n' +
      'Time: ' + timeStr + '\n\n' +
      'Note:\n' + (data.note || '(none)');
    MailApp.sendEmail({
      to: CONFIG.clinicEmail,
      subject: 'New Appointment — ' + data.firstName + ' ' + data.lastName + ' (' + loc.label + ')',
      body: clinicBody,
      replyTo: data.email,
    });

    // SMS notifications (Twilio). Failures are logged but do not break the booking.
    const patientPhone = normalizePhone_(data.phone);
    if (patientPhone) {
      sendSms_(
        patientPhone,
        'Kauffman Chiropractic: Your ' + loc.label + ' appointment is confirmed for ' +
          dateStr + ' at ' + timeStr + '. Reply or call to reschedule.'
      );
    }
    if (CONFIG.clinicPhone) {
      sendSms_(
        CONFIG.clinicPhone,
        'New booking: ' + data.firstName + ' ' + data.lastName + ' — ' +
          loc.label + ', ' + dateStr + ' ' + timeStr + '. Phone: ' + (patientPhone || data.phone)
      );
    }

    return { ok: true, eventId: event.getId() };
  } finally {
    lock.releaseLock();
  }
}

function debugLastBooking() {
  // Simulates normalizePhone_ on a test number
  const testNumbers = ['03219010050', '3219010050', '+923219010050'];
  testNumbers.forEach(function(n) {
    Logger.log(n + ' → ' + normalizePhone_(n));
  });
}


