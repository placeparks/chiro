const APPS_SCRIPT_URL =
  process.env.SCHEDULER_URL || process.env.VITE_SCHEDULER_URL
const SCHEDULER_SECRET =
  process.env.SCHEDULER_SECRET || process.env.VITE_SCHEDULER_SECRET

function sendJson(res, status, data) {
  res.statusCode = status
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.end(JSON.stringify(data))
}

async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body
  if (typeof req.body === 'string') return JSON.parse(req.body || '{}')

  const chunks = []
  for await (const chunk of req) {
    chunks.push(Buffer.from(chunk))
  }

  const raw = Buffer.concat(chunks).toString('utf8')
  return raw ? JSON.parse(raw) : {}
}

export default async function handler(req, res) {
  if (!APPS_SCRIPT_URL) {
    return sendJson(res, 500, { ok: false, error: 'Scheduler URL is not configured' })
  }

  try {
    if (req.method === 'GET') {
      const incomingUrl = new URL(req.url, 'http://localhost')
      const upstreamUrl = new URL(APPS_SCRIPT_URL)
      incomingUrl.searchParams.forEach((value, key) => {
        upstreamUrl.searchParams.set(key, value)
      })

      const upstream = await fetch(upstreamUrl, { redirect: 'follow' })
      const text = await upstream.text()
      res.statusCode = upstream.status
      res.setHeader('content-type', upstream.headers.get('content-type') || 'application/json; charset=utf-8')
      return res.end(text)
    }

    if (req.method === 'POST') {
      if (!SCHEDULER_SECRET) {
        return sendJson(res, 500, { ok: false, error: 'Scheduler secret is not configured' })
      }

      const body = await readBody(req)
      const upstream = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        redirect: 'follow',
        headers: {
          'content-type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          ...body,
          secret: SCHEDULER_SECRET,
        }),
      })

      const text = await upstream.text()
      res.statusCode = upstream.status
      res.setHeader('content-type', upstream.headers.get('content-type') || 'application/json; charset=utf-8')
      return res.end(text)
    }

    res.setHeader('allow', 'GET, POST')
    return sendJson(res, 405, { ok: false, error: 'Method not allowed' })
  } catch (err) {
    return sendJson(res, 500, { ok: false, error: err.message || 'Scheduler request failed' })
  }
}
