import Link from 'next/link'

const pillars = [
  {
    num: '01',
    name: 'Nutrition',
    desc: 'Culturally grounded food frameworks that work with South Asian diets, not against them.',
  },
  {
    num: '02',
    name: 'Movement',
    desc: 'Progressive, sustainable physical practice rooted in where you actually are today.',
  },
  {
    num: '03',
    name: 'Mindset',
    desc: 'Identity-based habit formation that accounts for family dynamics and cultural pressure.',
  },
  {
    num: '04',
    name: 'Biomarkers',
    desc: 'Lab literacy, wearable guidance, and working with your doctor — not around them.',
  },
]

const tiers = [
  {
    label: 'AAYU CORE',
    name: 'Aayu Core',
    bdtPrice: '৳25,000',
    usdPrice: '($200 / month)',
    period: '/ month',
    tag: 'Foundation',
    dark: false,
    neuro: false,
    features: [
      'Dedicated health coach, weekly 30-min video check-in',
      'Nutrition coaching built around your actual diet and culture',
      'Movement guidance for where you\'re starting, not where you should be',
      'Weekly check-ins to stay honest and on track',
      'Access to the Aayu member community',
      'Habit tracking via the Aayu app',
    ],
  },
  {
    label: 'AAYU PLUS',
    name: 'Aayu Plus',
    bdtPrice: '৳50,000',
    usdPrice: '($400 / month)',
    period: '/ month',
    tag: 'Most Popular',
    dark: true,
    neuro: false,
    features: [
      'Dedicated senior coach, bi-weekly 45-min 1:1 sessions',
      'Nutrition and movement coaching that evolves with you',
      'Daily Aayu meal delivery, 5 days a week',
      'Quarterly at-home health screening by our medical team',
      'Aayu welcome kit — supplement starter pack, branded essentials',
      'Monthly progress report, beautifully designed',
    ],
  },
  {
    label: 'AAYU CONCIERGE',
    name: 'Aayu Concierge',
    bdtPrice: '৳75,000',
    usdPrice: '($600 / month)',
    period: '/ month',
    tag: 'Signature',
    dark: false,
    neuro: false,
    features: [
      'Dedicated senior coach plus monthly physician home visit',
      'Daily meal delivery 7 days a week, including breakfast',
      'Oura ring gifted at signup',
      'Matte black Aayu membership card',
      'Quarterly printed health report, delivered to your home',
      'Family health consultation quarterly',
      'Invitation to the annual Aayu Retreat',
      'Direct WhatsApp access to your physician between visits',
    ],
  },
  {
    label: 'AAYU NEURO',
    name: 'Aayu Neuro',
    bdtPrice: 'From $600',
    usdPrice: null,
    period: '/ session',
    tag: 'Add-on · All members',
    dark: false,
    neuro: true,
    features: [
      '60-min remote consultation with our neurologist',
      'Cognitive performance and memory assessment',
      'Sleep architecture review and recommendations',
      'Stress and cortisol pattern analysis',
      'Early neurological risk screening',
      'Written summary delivered within 48 hours',
    ],
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 bg-linen">
        <div className="px-8 md:px-14 lg:px-20 pt-10 pb-12 md:pt-16 md:pb-20 w-full">
          <p className="font-body text-[10px] font-medium tracking-[0.3em] text-saffron uppercase mb-5">
            Premium Lifestyle Coaching
          </p>
          <h1 className="font-display font-light text-6xl md:text-7xl lg:text-8xl text-earth leading-[1.05] mb-5 max-w-4xl">
            Your life,{' '}
            <em className="text-saffron not-italic italic">fully lived.</em>
          </h1>
          <p className="font-body font-light text-base text-earth/60 leading-relaxed max-w-md mb-8">
            Aayu brings together South Asian culture and modern longevity science
            into a coaching experience built uniquely for every member.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/services"
              className="font-body text-sm font-medium bg-saffron text-white border-0 px-7 min-h-[44px] flex items-center justify-center rounded-[2px] hover:bg-earth-mid transition-colors tracking-wide w-full sm:w-auto"
            >
              Apply for coaching
            </Link>
            <a
              href="#method"
              className="font-body text-sm font-light text-saffron underline underline-offset-4 min-h-[44px] flex items-center tracking-wide hover:text-earth-mid transition-colors"
            >
              How it works ↓
            </a>
          </div>
        </div>
      </section>

      {/* Story strip */}
      <section className="bg-earth">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
          <div>
            <p
              className="font-display italic font-light text-6xl md:text-7xl lg:text-8xl text-saffron-light leading-none select-none"
              style={{ opacity: 0.18 }}
            >
              The Why.
            </p>
          </div>
          <div className="border-l-2 border-saffron/40 pl-8">
            <p className="font-body font-light text-[15px] text-saffron-light/70 leading-relaxed">
              Heart disease. Osteoporosis. Metabolic dysfunction. These aren't
              random — they're the predictable result of cultural norms that no
              one is talking about.
            </p>
            <p className="font-body font-light text-[15px] text-saffron-light/70 leading-relaxed mt-4">
              Aayu was founded after watching someone we love pay the price. We
              built the coaching we wish had existed. We're not a generic
              wellness app. We understand South Asian bodies, South Asian diets,
              and South Asian family dynamics. That context is everything.
            </p>
            <Link
              href="/story"
              className="inline-block font-body text-sm font-light text-saffron underline underline-offset-4 mt-7 hover:text-saffron-light transition-colors tracking-wide"
            >
              Read our story →
            </Link>
          </div>
        </div>
      </section>

      {/* Method section */}
      <section id="method" className="bg-linen">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="mb-8 md:mb-10">
            <p className="font-body text-[10px] font-medium tracking-[0.3em] text-saffron uppercase mb-3">
              The Method
            </p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-earth leading-tight mb-4">
              Four pillars.{' '}
              <em className="text-saffron not-italic italic">One coherent life.</em>
            </h2>
            <p className="font-body font-light text-[15px] text-earth/60 leading-relaxed max-w-2xl">
              We don't hand you a PDF and call it a plan. Every member works with
              a dedicated coach across nutrition, movement, mindset, and biomarker
              tracking — adjusted monthly as your body and life evolves.
            </p>
          </div>

          {/* 2x2 on mobile/tablet, 4-col on lg */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-earth/10">
            {pillars.map((p) => (
              <div key={p.num} className="bg-linen p-5 md:p-6 relative overflow-hidden">
                <p
                  className="font-display font-light text-7xl text-earth leading-none absolute top-3 right-4 select-none"
                  style={{ opacity: 0.06 }}
                >
                  {p.num}
                </p>
                <p className="font-body text-[10px] font-medium tracking-[0.2em] text-saffron uppercase mb-2 relative">
                  {p.num}
                </p>
                <h3 className="font-display font-light text-xl md:text-2xl text-earth mb-3 relative">
                  {p.name}
                </h3>
                <p className="font-body font-light text-[14px] md:text-[15px] text-earth/55 leading-relaxed relative">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/method"
              className="font-body text-sm font-light text-saffron underline underline-offset-4 hover:text-earth-mid transition-colors tracking-wide"
            >
              Explore the full method →
            </Link>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="mb-8 md:mb-10">
            <p className="font-body text-[10px] font-medium tracking-[0.3em] text-saffron uppercase mb-3">
              Services
            </p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-earth leading-tight mb-4">
              Choose your{' '}
              <em className="text-saffron not-italic italic">level of support.</em>
            </h2>
            <p className="font-body font-light text-[15px] text-earth/60 leading-relaxed max-w-2xl">
              From daily meal delivery to physician home visits — every tier of Aayu is built around one idea: your health deserves real investment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-px bg-earth/10">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`p-6 lg:p-8 flex flex-col ${tier.dark ? 'bg-earth' : 'bg-warm-white'} ${tier.neuro ? 'border-t-2 border-saffron' : ''}`}
              >
                <p
                  className={`font-body text-[9px] font-medium tracking-[0.22em] uppercase mb-2 ${
                    tier.dark ? 'text-saffron-light/60' : 'text-stone'
                  }`}
                >
                  {tier.label}
                </p>
                <h3
                  className={`font-display font-light text-3xl mb-1 ${
                    tier.dark ? 'text-saffron-light' : 'text-earth'
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`font-body text-xs font-light mb-5 ${
                    tier.dark ? 'text-saffron-light/40' : 'text-stone'
                  }`}
                >
                  {tier.tag}
                </p>
                <div className="mb-6">
                  <p className="font-display font-light text-4xl text-saffron leading-tight">
                    {tier.bdtPrice}
                    <span className="text-lg font-body font-light text-stone"> {tier.period}</span>
                  </p>
                  {tier.usdPrice && (
                    <p className="font-body font-light text-[11px] text-stone mt-0.5">
                      {tier.usdPrice}
                    </p>
                  )}
                </div>
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className={`font-body text-[15px] font-light flex items-start gap-2 ${
                        tier.dark ? 'text-saffron-light/70' : 'text-earth/65'
                      }`}
                    >
                      <span className="text-saffron mt-0.5 shrink-0">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className={`font-body text-sm font-medium text-center min-h-[44px] flex items-center justify-center rounded-[2px] tracking-wide transition-colors ${
                    tier.dark
                      ? 'bg-saffron text-white hover:bg-saffron-light hover:text-earth'
                      : 'bg-earth text-saffron-light hover:bg-earth-mid'
                  }`}
                >
                  Apply for {tier.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
