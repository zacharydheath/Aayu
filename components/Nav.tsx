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
        <Link href="/" className="font-display font-light text-2xl tracking-widest text-earth">
          AA<span className="text-saffron">Y</span>U
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
