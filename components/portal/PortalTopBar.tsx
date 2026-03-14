export default function PortalTopBar() {
  return (
    <header
      className="sticky top-0 z-50 h-14 bg-warm-white flex items-center justify-between px-4"
      style={{ borderBottom: '1px solid rgba(61,43,26,0.08)' }}
    >
      {/* Left: Wordmark */}
      <span className="font-display font-light text-base tracking-[0.18em] text-earth select-none">
        AAY<span className="text-saffron">U</span>
      </span>

      {/* Center: Greeting */}
      <span className="font-body font-light text-[13px] text-earth/60 absolute left-1/2 -translate-x-1/2">
        Good morning, Zach
      </span>

      {/* Right: Avatar */}
      <div
        className="w-8 h-8 rounded-full bg-earth flex items-center justify-center shrink-0"
      >
        <span className="font-body font-medium text-[11px] text-saffron-light">ZH</span>
      </div>
    </header>
  )
}
