import { useEffect, useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  FaChevronDown,
  FaChevronRight,
  FaAngleDoubleRight,
} from 'react-icons/fa'

const LOGO_URL =
  'https://www.kauffmanchiros.com/wp-content/uploads/2019/05/Kauffman-Chiropractic-Header-Logo.png'

const symptomsMenu = [
  {
    label: 'SPINE RELATED',
    sub: [
      { label: 'BACK PAIN', path: '/symptoms/back-pain' },
      { label: 'HEADACHES & MIGRAINES', path: '/symptoms/headaches' },
      { label: 'NECK PAIN', path: '/symptoms/neck-pain' },
      { label: 'SCIATICA', path: '/symptoms/sciatica' },
      { label: 'SCOLIOSIS', path: '/symptoms/scoliosis' },
    ],
  },
  {
    label: 'INJURIES',
    sub: [
      { label: 'DISC INJURY', path: '/symptoms/disc-injury' },
      { label: 'WHIPLASH', path: '/symptoms/whiplash' },
      { label: 'WORK INJURY', path: '/symptoms/work-injury' },
    ],
  },
  {
    label: 'EXTREMITIES',
    sub: [
      { label: 'ARM AND LEG PAIN', path: '/symptoms/arm-leg-pain' },
      { label: 'CARPAL TUNNEL', path: '/symptoms/carpal-tunnel' },
      { label: 'SHOULDER PAIN', path: '/symptoms/shoulder-pain' },
    ],
  },
  {
    label: 'FAMILY CHIROPRACTIC',
    sub: [
      { label: "CHIROPRACIC CARE FOR KIDS", path: '/symptoms/children' },
      { label: 'PREGNANCY CARE', path: '/symptoms/pregnancy' },
      { label: 'WELLNESS CARE', path: '/symptoms/wellness' },
    ],
  },
  {
    label: 'OTHER SYMPTOMS',
    sub: [
      { label: 'VERTIGO', path: '/symptoms/vertigo' },
    ],
  },
]

const aboutMenu = [
  { label: 'TEAM', path: '/about' },
  { label: 'TESTIMONIALS', path: '/testimonials' },
]

const patientsMenu = [
  { label: 'PAPERWORK', path: '/patients' },
  { label: 'FIRST VISIT', path: '/patients' },
  { label: 'REVIEWS', path: '/testimonials' },
  { label: 'BLOG', path: '/patients' },
]

function DropdownItem({ label, path, sub, onClose }) {
  const [subOpen, setSubOpen] = useState(false)
  const timeoutRef = useRef(null)

  function onEnter() {
    clearTimeout(timeoutRef.current)
    setSubOpen(true)
  }

  function onLeave() {
    timeoutRef.current = setTimeout(() => setSubOpen(false), 100)
  }

  if (sub) {
    return (
      <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <button className="flex w-full items-center justify-between gap-4 px-4 py-2.5 text-left text-[12px] font-semibold tracking-wide text-[#555] hover:bg-gray-100 whitespace-nowrap">
          {label}
          <FaChevronRight className="text-[10px] text-gray-400" />
        </button>

        {subOpen && (
          <div className="absolute left-full top-0 z-50 min-w-[190px] rounded-sm border border-gray-200 bg-white py-1 shadow-xl">
            {sub.map((item) => (
              <Link
                key={item.path + item.label}
                to={item.path}
                onClick={onClose}
                className="block px-4 py-2.5 text-[12px] font-semibold tracking-wide text-[#555] hover:bg-gray-100 whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      to={path}
      onClick={onClose}
      className="block px-4 py-2.5 text-[12px] font-semibold tracking-wide text-[#555] hover:bg-gray-100 whitespace-nowrap"
    >
      {label}
    </Link>
  )
}

function BrandLogo({ compact = false }) {
  return (
    <img
      src={LOGO_URL}
      alt="Kauffman Chiropractic"
      className={compact ? 'kc-logo-img kc-logo-img--compact' : 'kc-logo-img'}
      loading="eager"
      decoding="async"
    />
  )
}

function NavDropdown({ label, path, items, active }) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef(null)

  function onEnter() {
    clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  function onLeave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 150)
  }

  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <Link
        to={path}
        className={`kc-nav-link ${
          active ? 'text-[#2f9db2]' : 'text-[#444] hover:text-[#2f9db2]'
        }`}
      >
        {label}
        <FaChevronDown className="text-[9px]" />
      </Link>

      {open && (
        <div className="absolute left-0 top-full z-50 min-w-[205px] rounded-sm border border-gray-200 bg-white py-1 shadow-xl">
          {items.map((item) => (
            <DropdownItem
              key={item.label}
              {...item}
              onClose={() => setOpen(false)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [showOfferBar, setShowOfferBar] = useState(false)
  const location = useLocation()

  useEffect(() => {
    function onScroll() {
      setShowOfferBar(window.scrollY > 360)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <header className="relative z-50 bg-white">
      <div className={`kc-offer-bar ${showOfferBar ? 'kc-offer-bar--visible' : ''}`}>
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-5 py-3">
          <Link to="/" className="shrink-0" aria-label="Kauffman Chiropractic home">
            <BrandLogo compact />
          </Link>

          <div className="hidden text-center text-[24px] leading-none text-[#4a4a4a] md:block">
            There is <strong className="font-extrabold">No Risk</strong> to see what we can do for you
          </div>

          <Link
            to="/patients"
            className="inline-flex items-center gap-3 rounded-sm bg-[#f8a500] px-6 py-3 text-[15px] font-extrabold uppercase tracking-wide text-white transition hover:bg-[#e69600]"
          >
            New Patient Special Offer <FaAngleDoubleRight />
          </Link>
        </div>
      </div>

      <div className="kc-main-header">
        <div className="kc-header-inner">
          <Link to="/" className="kc-logo-disc" aria-label="Kauffman Chiropractic home">
            <BrandLogo />
          </Link>

          <div className="kc-phone-wrap">
            <a href="tel:2197367363" className="kc-phone-link">
              Merrillville (219) 736-7363
            </a>

            <a href="tel:2196629855" className="kc-phone-link">
              Crown Point (219) 662-9855
            </a>
          </div>
        </div>
      </div>

      <nav className="kc-nav">
        <div className="kc-nav-inner">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="kc-mobile-menu-label"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? 'CLOSE' : 'MENU'}
          </button>

          <div className="hidden items-center md:flex">
            <Link
              to="/"
              className={`kc-nav-link ${
                isActive('/') ? 'text-[#2f9db2]' : 'text-[#444] hover:text-[#2f9db2]'
              }`}
            >
              HOME
            </Link>

            <NavDropdown
              label="ABOUT"
              path="/about"
              items={aboutMenu}
              active={location.pathname.startsWith('/about') || location.pathname === '/testimonials'}
            />

            <NavDropdown
              label="PATIENTS"
              path="/patients"
              items={patientsMenu}
              active={location.pathname === '/patients'}
            />

            <NavDropdown
              label="SYMPTOMS"
              path="/symptoms"
              items={symptomsMenu}
              active={location.pathname.startsWith('/symptoms')}
            />

            <Link
              to="/locations"
              className={`kc-nav-link ${
                isActive('/locations') ? 'text-[#2f9db2]' : 'text-[#444] hover:text-[#2f9db2]'
              }`}
            >
              LOCATIONS
            </Link>

            <Link
              to="/contact"
              className={`kc-nav-link ${
                isActive('/contact') ? 'text-[#2f9db2]' : 'text-[#444] hover:text-[#2f9db2]'
              }`}
            >
              SCHEDULER
            </Link>

            <Link
              to="/contact"
              className={`kc-nav-link ${
                isActive('/contact') ? 'text-[#2f9db2]' : 'text-[#444] hover:text-[#2f9db2]'
              }`}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </nav>

      {open && (
        <div className="border-t bg-white px-4 pb-4 md:hidden">
          {[
            { label: 'Home', path: '/' },
            { label: 'About', path: '/about' },
            { label: 'Testimonials', path: '/testimonials' },
            { label: 'Patients', path: '/patients' },
            { label: 'Symptoms', path: '/symptoms' },
            { label: 'Locations', path: '/locations' },
            { label: 'Scheduler', path: '/contact' },
            { label: 'Contact', path: '/contact' },
          ].map(({ path, label }) => (
            <Link
              key={label}
              to={path}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 text-[14px] font-semibold uppercase tracking-wide ${
                location.pathname === path
                  ? 'text-[#2f9db2]'
                  : 'text-[#444] hover:text-[#2f9db2]'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}