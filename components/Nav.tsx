'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/story', label: 'Our Story' },
    { href: '/services', label: 'Services' },
    { href: '/method', label: 'The Method' },
    { href: '/blog', label: 'Blog' },
    { href: '/podcast', label: 'Podcast' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-white border-b border-earth/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Aayu">
          <svg width="200" height="56" viewBox="0 0 200 56" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
            <g transform="translate(22, 26)">
              <path d="M-14,18 L0,-18 L14,18" stroke="#2C2018" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="-8" y1="4" x2="8" y2="4" stroke="#2C2018" strokeWidth="1.6" strokeLinecap="round"/>
              <path d="M-14,-18 L0,18 L14,-18" stroke="#C8822A" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.65"/>
              <line x1="-8" y1="-4" x2="8" y2="-4" stroke="#C8822A" strokeWidth="1.1" strokeLinecap="round" opacity="0.65"/>
            </g>
            <text x="40" y="44" fontFamily="Georgia, 'Times New Roman', serif" fontSize="20" fill="#2C2018" letterSpacing="3" fontWeight="400">ayu</text>
          </svg>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-xs font-light text-earth/70 hover:text-earth tracking-[0.15em] uppercase transition-colors min-h-[44px] flex items-center"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/portal/"
            className="font-body text-sm font-light text-earth/70 hover:text-earth tracking-wide transition-colors min-h-[44px] flex items-center"
          >
            Member Login
          </Link>
          <Link
            href="/services"
            className="font-body text-sm font-medium bg-earth text-saffron-light px-5 min-h-[44px] flex items-center rounded-[2px] hover:bg-earth-mid transition-colors tracking-wide"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 min-h-[44px] min-w-[44px] items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-earth transition-transform ${open ? 'translate-y-2.5 rotate-45' : ''}`}
          />
          <span className={`block w-6 h-px bg-earth transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span
            className={`block w-6 h-px bg-earth transition-transform ${open ? '-translate-y-2.5 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-warm-white border-t border-earth/10 px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-body text-base font-light text-earth/70 hover:text-earth tracking-[0.12em] uppercase min-h-[44px] flex items-center"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/portal/"
            onClick={() => setOpen(false)}
            className="font-body text-sm font-light text-earth/70 tracking-wide min-h-[44px] flex items-center"
          >
            Member Login
          </Link>
          <Link
            href="/services"
            onClick={() => setOpen(false)}
            className="font-body text-sm font-medium bg-earth text-saffron-light px-5 min-h-[44px] flex items-center justify-center rounded-[2px] text-center tracking-wide hover:bg-earth-mid transition-colors"
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  )
}
