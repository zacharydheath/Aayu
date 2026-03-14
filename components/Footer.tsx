import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      {/* Bengali script band */}
      <div className="bg-earth overflow-hidden pt-12 pb-10">
        <p
          className="font-display font-light text-center leading-none select-none w-full"
          style={{
            fontSize: 'clamp(120px, 18vw, 220px)',
            color: 'rgba(240,192,120,0.15)',
          }}
        >
          আয়ু
        </p>
        <p
          className="font-display italic font-light text-center tracking-[0.2em] mt-2"
          style={{
            fontSize: 'clamp(18px, 2vw, 22px)',
            color: 'var(--saffron-light, #F0C078)',
          }}
        >
          life · lifespan · vitality
        </p>
        <div className="grid grid-cols-3 border-t border-saffron/20 mt-10 pt-8 mx-0">
          {[
            { stat: '3', label: 'Coaching tiers' },
            { stat: '1:1', label: 'Dedicated rep' },
            { stat: '∞', label: 'Year approach' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-display font-light text-3xl text-saffron-light mb-1">
                {item.stat}
              </p>
              <p className="font-body text-xs font-light text-saffron-light/50 tracking-wide leading-tight">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA strip */}
      <div className="bg-saffron-pale px-6 py-12 md:py-16 text-center flex flex-col items-center gap-6">
        <p className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-earth leading-tight max-w-2xl">
          Ready to invest in the rest of{' '}
          <em className="text-saffron not-italic">your life?</em>
        </p>
        <Link
          href="/services"
          className="font-body text-sm font-medium bg-saffron text-white border-0 w-full sm:w-auto px-10 min-h-[44px] flex items-center justify-center rounded-[2px] hover:bg-earth-mid transition-colors tracking-wide"
        >
          Apply for a spot →
        </Link>
      </div>

      {/* Bottom bar */}
      <div className="bg-earth px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <Link href="/" className="font-display font-light text-xl tracking-widest text-saffron-light/80">
            AA<span className="text-saffron-light">Y</span>U
          </Link>
          <p className="font-body text-xs font-light text-saffron-light/40 tracking-wide">
            © 2026 Aayu Health · hello@aayu.health
          </p>
        </div>
      </div>
    </footer>
  )
}
