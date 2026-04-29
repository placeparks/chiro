import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaChevronUp } from 'react-icons/fa'

const footerLinks = [
  { label: 'Admin', href: '#' },
  { label: 'Accessibility', href: '#' },
  { label: 'Anti-Discrimination', href: '#' },
  { label: 'Healthcare Disclaimer', href: '#' },
  { label: 'HIPAA Policy', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Kauffman', href: '#' },
  { label: 'Good Faith Estimate', href: '#' },
  { label: 'AI Generated Content Disclaimer', href: '#' },
]

export default function Footer() {
  const [footerOpen, setFooterOpen] = useState(false)

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#022c2f] text-white">
      <div className="mx-auto hidden w-full flex-col items-center justify-center gap-4 px-4 py-6 text-center text-[13px] font-medium uppercase leading-none md:flex">
        <div className="tracking-normal">
          COPYRIGHT &copy; {new Date().getFullYear()}
        </div>
        <nav className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-3">
          {footerLinks.map((link) => (
            link.href === '#'
              ? (
                <a key={link.label} href={link.href} className="transition hover:text-[#35a7bb]">
                  {link.label}
                </a>
              )
              : (
                <Link key={link.label} to={link.href} className="transition hover:text-[#35a7bb]">
                  {link.label}
                </Link>
            )
          ))}
        </nav>
      </div>

      <div className="px-4 py-4 text-center md:hidden">
        <div className="mb-6 text-[12px] font-medium uppercase leading-none">
          COPYRIGHT &copy; {new Date().getFullYear()}
        </div>

        <button
          type="button"
          onClick={() => setFooterOpen((open) => !open)}
          className="mx-auto flex h-10 w-10 items-center justify-center text-3xl text-[#35a7bb] transition hover:text-white"
          aria-label="Toggle footer links"
          aria-expanded={footerOpen}
        >
          <FaBars />
        </button>

        {footerOpen && (
          <nav className="mt-6 flex flex-col items-center gap-8 pb-3 text-[16px] font-medium uppercase leading-none">
            {footerLinks.map((link) => (
              link.href === '#'
                ? (
                  <a key={link.label} href={link.href} className="transition hover:text-[#35a7bb]">
                    {link.label}
                  </a>
                )
                : (
                  <Link key={link.label} to={link.href} className="transition hover:text-[#35a7bb]">
                    {link.label}
                  </Link>
                )
            ))}
          </nav>
        )}
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-40 flex h-[52px] w-[56px] items-center justify-center bg-[#04272a] text-2xl text-white transition hover:bg-[#08383c]"
        aria-label="Scroll to top"
      >
        <FaChevronUp />
      </button>
    </footer>
  )
}
