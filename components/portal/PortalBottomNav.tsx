'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function HomeIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ width: 22, height: 22, display: 'block', flexShrink: 0 }}>
      <path stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function CheckinIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ width: 22, height: 22, display: 'block', flexShrink: 0 }}>
      <circle stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="12" r="9" />
      <polyline stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" points="9 12 11 14 15 10" />
    </svg>
  )
}

function ProgressIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ width: 22, height: 22, display: 'block', flexShrink: 0 }}>
      <polyline stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" points="3 17 8 12 13 15 21 7" />
      <line stroke={color} strokeWidth="1.5" strokeLinecap="round" x1="3" y1="21" x2="21" y2="21" />
    </svg>
  )
}

function CoachIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ width: 22, height: 22, display: 'block', flexShrink: 0 }}>
      <path stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function CommunityIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ width: 22, height: 22, display: 'block', flexShrink: 0 }}>
      <circle stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" cx="9" cy="7" r="3" />
      <path stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <path stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 0 1 0 7.75" />
      <path stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 21v-2a4 4 0 0 0-3-3.85" />
    </svg>
  )
}

const navItems = [
  { label: 'Home',      href: '/portal',           Icon: HomeIcon },
  { label: 'Check-in',  href: '/portal/checkin',   Icon: CheckinIcon },
  { label: 'Progress',  href: '/portal/progress',  Icon: ProgressIcon },
  { label: 'Coach',     href: '/portal/coach',     Icon: CoachIcon },
  { label: 'Community', href: '/portal/community', Icon: CommunityIcon },
]

const ACTIVE   = '#C8832A'
const INACTIVE = '#9E9388'

export default function PortalBottomNav() {
  const pathname = usePathname()

  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#FDFAF5',
        borderTop: '1px solid rgba(61,43,26,0.12)',
        zIndex: 100,
        display: 'flex',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      {navItems.map(({ label, href, Icon }) => {
        const isActive = href === '/portal'
          ? pathname === '/portal'
          : pathname.startsWith(href)
        const color = isActive ? ACTIVE : INACTIVE

        return (
          <Link
            key={href}
            href={href}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4, minHeight: 64, textDecoration: 'none' }}
          >
            <Icon color={color} />
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 10, fontWeight: isActive ? 500 : 300, color }}>
              {label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
