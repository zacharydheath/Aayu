'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function PortalTopBar() {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [open])

  return (
    <header
      className="sticky top-0 z-50 h-14 bg-warm-white flex items-center justify-between px-4"
      style={{ borderBottom: '1px solid rgba(61,43,26,0.08)' }}
    >
      {/* Left: Wordmark */}
      <Link href="/" className="font-display font-light text-2xl tracking-[0.15em] text-earth">
        Aa<span className="text-saffron">y</span>u
      </Link>

      {/* Center: Greeting */}
      <span className="font-body font-light text-[13px] text-earth/60 absolute left-1/2 -translate-x-1/2">
        Good morning, Zach
      </span>

      {/* Right: Avatar + Dropdown */}
      <div ref={dropdownRef} className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
          style={{ background: '#3D2B1A' }}
          aria-label="Account menu"
        >
          <span className="font-body font-medium text-[11px] text-saffron-light">ZH</span>
        </button>

        {open && (
          <div
            className="absolute right-0 top-10 rounded-lg overflow-hidden z-50"
            style={{
              width: 160,
              background: '#FDFAF5',
              border: '0.5px solid rgba(61,43,26,0.18)',
              borderRadius: 8,
              boxShadow: '0 4px 16px rgba(61,43,26,0.1)',
            }}
          >
            <Link
              href="/portal/plan"
              onClick={() => setOpen(false)}
              className="flex items-center px-4 min-h-[44px] font-body text-sm font-medium text-saffron hover:bg-saffron-pale transition-colors"
            >
              My Plan
            </Link>
            <div style={{ height: '0.5px', background: 'rgba(61,43,26,0.08)' }} />
            <button
              onClick={() => setOpen(false)}
              className="w-full flex items-center px-4 min-h-[44px] font-body text-sm font-light text-earth hover:bg-linen transition-colors text-left"
            >
              Profile
            </button>
            <div style={{ height: '0.5px', background: 'rgba(61,43,26,0.08)' }} />
            <button
              onClick={() => setOpen(false)}
              className="w-full flex items-center px-4 min-h-[44px] font-body text-sm font-light text-earth hover:bg-linen transition-colors text-left"
            >
              Settings
            </button>
            <div style={{ height: '0.5px', background: 'rgba(61,43,26,0.08)' }} />
            <button
              onClick={() => setOpen(false)}
              className="w-full flex items-center px-4 min-h-[44px] font-body text-sm font-light text-stone hover:bg-linen transition-colors text-left"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
