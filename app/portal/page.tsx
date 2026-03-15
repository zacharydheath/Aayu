'use client'
import Link from 'next/link'
import { useCheckin } from '@/lib/checkin-context'

const pillars = [
  { name: 'Nutrition', pct: 82 },
  { name: 'Movement', pct: 71 },
  { name: 'Mindset', pct: 80 },
]

export default function PortalHome() {
  const { isCheckedIn } = useCheckin()

  return (
    <div className="pt-4 pb-8">
      {/* Hero metric card */}
      <div
        className="mx-4 rounded-2xl p-5 relative overflow-hidden"
        style={{ background: '#3D2B1A' }}
      >
        {/* Watermark */}
        <span
          className="font-display font-light absolute -right-2 -top-4 text-[120px] leading-none select-none pointer-events-none"
          style={{ color: '#5A3D26', opacity: 0.08 }}
        >
          LI
        </span>

        {/* Label */}
        <p className="font-body font-medium text-[9px] tracking-[0.22em] uppercase mb-3 relative" style={{ color: 'rgba(240,192,120,0.5)' }}>
          Longevity Index
        </p>

        {/* Score */}
        <div className="flex items-end gap-1 mb-1 relative">
          <span className="font-display font-light text-[72px] leading-none text-saffron-light">78</span>
          <span className="font-display font-light text-[36px] leading-none text-saffron-light mb-2">%</span>
        </div>

        <p className="font-body font-light text-[11px] mb-4 relative" style={{ color: 'rgba(240,192,120,0.5)' }}>
          Rolling 30-day consistency
        </p>

        {/* Pillar cards */}
        <div className="grid grid-cols-3 gap-2 relative">
          {pillars.map((p) => (
            <div
              key={p.name}
              className="rounded-lg p-3"
              style={{ background: '#4A3422', border: '0.5px solid rgba(200,131,42,0.3)' }}
            >
              <p className="font-body font-medium text-[9px] tracking-[0.15em] uppercase mb-2" style={{ color: 'rgba(240,192,120,0.6)' }}>
                {p.name}
              </p>
              <div className="h-0.5 rounded-full mb-1.5" style={{ background: 'rgba(240,192,120,0.15)' }}>
                <div
                  className="h-full rounded-full"
                  style={{ width: `${p.pct}%`, background: '#C8832A' }}
                />
              </div>
              <p className="font-display font-light text-sm text-saffron-light">{p.pct}%</p>
            </div>
          ))}
        </div>
      </div>

      {/* Today's check-in card */}
      <div
        className="mx-4 mt-3 rounded-xl p-4"
        style={{ background: '#FDFAF5', border: '0.5px solid rgba(61,43,26,0.1)' }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="font-display font-light text-lg text-earth">Today&apos;s check-in</span>
          {isCheckedIn ? (
            <span className="font-body text-[11px] font-medium px-2 py-0.5 rounded-full" style={{ background: '#dcfce7', color: '#15803d' }}>
              Done ✓
            </span>
          ) : (
            <span className="font-body text-[11px] font-medium px-2 py-0.5 rounded-full" style={{ background: '#FBF3E2', color: '#C8832A' }}>
              Not done
            </span>
          )}
        </div>

        {isCheckedIn ? (
          <div
            className="w-full min-h-[44px] flex items-center justify-center rounded-lg font-body text-sm font-medium"
            style={{ background: 'rgba(61,43,26,0.06)', color: '#9E9388' }}
          >
            Check-in complete — see you tomorrow
          </div>
        ) : (
          <Link
            href="/portal/checkin"
            className="w-full min-h-[44px] flex items-center justify-center rounded-lg font-body text-sm font-medium text-white"
            style={{ background: '#C8832A' }}
          >
            Check in now →
          </Link>
        )}
      </div>

      {/* Coach message card */}
      <Link
        href="/portal/coach"
        className="mx-4 mt-3 rounded-xl p-4 flex items-center gap-3 block"
        style={{ background: '#FBF3E2', border: '0.5px solid #C8832A' }}
      >
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
          style={{ background: '#3D2B1A' }}
        >
          <span className="font-body font-medium text-[11px] text-saffron-light">PS</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-body font-medium text-[13px] text-earth">Priya Sharma</p>
          <p className="font-body font-light text-[12px] text-stone truncate">
            Keep focusing on your evening walk...
          </p>
        </div>
        <div
          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
          style={{ background: '#C8832A' }}
        >
          <span className="font-body font-medium text-[10px] text-white">2</span>
        </div>
      </Link>

      {/* Quick links row */}
      <div className="mx-4 mt-3 grid grid-cols-2 gap-3">
        <Link
          href="/portal/community"
          className="rounded-xl p-4 block"
          style={{ background: '#FDFAF5', border: '0.5px solid rgba(61,43,26,0.1)' }}
        >
          <p className="font-body font-medium text-[9px] tracking-[0.2em] uppercase text-saffron mb-1">Falgun Cohort</p>
          <p className="font-display font-light text-lg text-earth">Community</p>
          <p className="font-body font-light text-[11px] text-stone">3 members checked in today</p>
        </Link>
        <Link
          href="/portal/progress"
          className="rounded-xl p-4 block"
          style={{ background: '#FDFAF5', border: '0.5px solid rgba(61,43,26,0.1)' }}
        >
          <p className="font-body font-medium text-[9px] tracking-[0.2em] uppercase text-saffron mb-1">Progress</p>
          <p className="font-display font-light text-lg text-earth">LI up 6 pts</p>
          <p className="font-body font-light text-[11px] text-stone">from last month</p>
        </Link>
      </div>

      {/* Next session card */}
      <div
        className="mx-4 mt-3 mb-6 rounded-xl p-4"
        style={{ background: '#FDFAF5', border: '0.5px solid rgba(61,43,26,0.1)' }}
      >
        <p className="font-body font-medium text-[9px] tracking-[0.2em] uppercase text-saffron mb-1">Next Session</p>
        <p className="font-display font-light text-xl text-earth">Thursday, March 20</p>
        <p className="font-body font-light text-[12px] text-stone mt-1">45 min · Nutrition + Movement review</p>
      </div>
    </div>
  )
}
