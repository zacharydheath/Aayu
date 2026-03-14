import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services — Aayu',
  description:
    'Three tiers of premium South Asian lifestyle coaching. Choose the level of support that fits your life.',
}

const tiers = [
  {
    label: 'AAYU ESSENTIALS',
    name: 'Essentials',
    price: '$200',
    period: '/mo',
    tag: 'Foundation tier',
    dark: false,
    tagline: 'For someone who knows something needs to change and wants a knowledgeable guide in their corner — without overhauling their entire life overnight.',
    whoFor:
      'Best for: Members who want a clear plan and accountability without high-frequency coaching. You\'re motivated but you need the framework, the starting point, and someone to check in with.',
    month:
      'A typical month looks like: a 60-minute strategy call at the start of the month, your updated nutrition framework and movement plan delivered within 48 hours, and a written check-in midway through to adjust.',
    features: [
      'Monthly 1:1 call with your dedicated coach',
      'Nutrition coaching built around your actual life',
      'Movement guidance for where you\'re starting, not where you "should" be',
      'Weekly check-ins to stay honest and on track',
      'Access to the Aayu member community',
      'Habit tracking via the Aayu app',
    ],
  },
  {
    label: 'AAYU PREMIER',
    name: 'Premier',
    price: '$500',
    period: '/mo',
    tag: 'Most Popular',
    dark: true,
    tagline: 'For someone ready to go deeper. You want to understand your body, build real habits, and have a coach who actually knows you between sessions.',
    whoFor:
      'Best for: Members who want ongoing support, accountability, and the experience of having a dedicated expert in their corner. You know the stakes. You\'re ready to invest accordingly.',
    month:
      'A typical month looks like: bi-weekly 45-minute coaching calls, a continuously updated nutrition and movement program, biomarker reviews when new labs come in, and unlimited async messaging between sessions.',
    features: [
      'Bi-weekly 1:1 with your dedicated coach',
      'Nutrition and movement coaching that evolves with you',
      'Understanding your biomarkers — what the numbers mean and what to do about them',
      'Wearable guidance so your data actually tells you something',
      'WhatsApp access between sessions — not just for emergencies',
      'Priority scheduling, always',
    ],
  },
  {
    label: 'AAYU ELITE',
    name: 'Elite',
    price: '$1,000',
    period: '/mo',
    tag: 'Concierge tier',
    dark: false,
    tagline: 'For someone who wants the full picture. You\'re ready to treat your health like the long-term investment it is — and you want a partner, not a program.',
    whoFor:
      'Best for: Executives, high-performers, and members for whom time is the limiting factor. You want expert guidance that fits around your life, not the other way around.',
    month:
      'A typical month looks like: weekly 60-minute coaching sessions, same-day response to any message, a dedicated support representative who manages scheduling and coordination, and a comprehensive annual longevity plan reviewed quarterly.',
    features: [
      'Weekly 1:1 plus unlimited async support',
      'Custom lab panel review with your coach',
      'Coordination with your physician when it matters',
      'A full audit of how you\'re living — sleep, stress, food, movement, all of it',
      'One family member included, because health doesn\'t happen in isolation',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 bg-linen">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
          <p className="font-body text-[10px] font-medium tracking-[0.25em] text-saffron uppercase mb-6">
            Services
          </p>
          <h1 className="font-display font-light text-5xl md:text-6xl lg:text-7xl text-earth leading-[1.1] mb-8">
            Premium coaching.{' '}
            <em className="text-saffron not-italic italic">Real humans.</em>{' '}
            Real results.
          </h1>
          <p className="font-body font-light text-lg text-earth/60 leading-relaxed max-w-2xl">
            Every Aayu program is delivered by a dedicated coach who
            understands South Asian bodies, diets, and family dynamics. No
            algorithms. No PDFs. No generic plans.
          </p>
        </div>
      </section>

      {/* Tier cards */}
      <section className="bg-warm-white">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 flex flex-col gap-px bg-earth/10">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-10 lg:p-14 ${tier.dark ? 'bg-earth' : 'bg-warm-white'}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                {/* Left */}
                <div>
                  <p
                    className={`font-body text-[9px] font-medium tracking-[0.22em] uppercase mb-2 ${
                      tier.dark ? 'text-saffron-light/60' : 'text-stone'
                    }`}
                  >
                    {tier.label}
                  </p>
                  <h2
                    className={`font-display font-light text-4xl mb-1 ${
                      tier.dark ? 'text-saffron-light' : 'text-earth'
                    }`}
                  >
                    {tier.name}
                  </h2>
                  <p
                    className={`font-body text-xs font-light mb-4 ${
                      tier.dark ? 'text-saffron-light/40' : 'text-stone'
                    }`}
                  >
                    {tier.tag}
                  </p>
                  <p className="font-display font-light text-5xl text-saffron mb-6">
                    {tier.price}
                    <span className="text-xl font-body font-light text-stone">
                      {tier.period}
                    </span>
                  </p>
                  <p
                    className={`font-body font-light italic text-[13px] leading-relaxed mb-6 ${
                      tier.dark ? 'text-saffron-light/50' : 'text-earth-mid/70'
                    }`}
                  >
                    {tier.tagline}
                  </p>
                  <Link
                    href="#apply"
                    className={`inline-block font-body text-sm font-medium py-3 px-7 rounded-sm tracking-wide transition-colors ${
                      tier.dark
                        ? 'bg-saffron text-white hover:bg-saffron-light hover:text-earth'
                        : 'bg-earth text-saffron-light hover:bg-earth-mid'
                    }`}
                  >
                    Apply for {tier.name}
                  </Link>
                </div>

                {/* Right */}
                <div>
                  <ul className="flex flex-col gap-3 mb-8">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className={`font-body text-sm font-light flex items-start gap-2 ${
                          tier.dark ? 'text-saffron-light/70' : 'text-earth/65'
                        }`}
                      >
                        <span className="text-saffron mt-0.5 shrink-0">—</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`border-t pt-6 ${
                      tier.dark ? 'border-saffron/20' : 'border-earth/10'
                    }`}
                  >
                    <p
                      className={`font-body text-[10px] font-medium tracking-[0.2em] uppercase mb-2 ${
                        tier.dark ? 'text-saffron-light/40' : 'text-stone'
                      }`}
                    >
                      Who it&apos;s for
                    </p>
                    <p
                      className={`font-body font-light text-sm leading-relaxed mb-5 ${
                        tier.dark ? 'text-saffron-light/55' : 'text-earth/55'
                      }`}
                    >
                      {tier.whoFor}
                    </p>
                    <p
                      className={`font-body text-[10px] font-medium tracking-[0.2em] uppercase mb-2 ${
                        tier.dark ? 'text-saffron-light/40' : 'text-stone'
                      }`}
                    >
                      A typical month
                    </p>
                    <p
                      className={`font-body font-light text-sm leading-relaxed ${
                        tier.dark ? 'text-saffron-light/55' : 'text-earth/55'
                      }`}
                    >
                      {tier.month}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application CTA */}
      <section id="apply" className="bg-earth">
        <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <p className="font-body text-[10px] font-medium tracking-[0.25em] text-saffron uppercase mb-6">
            Limited Availability
          </p>
          <h2 className="font-display font-light text-4xl md:text-5xl text-saffron-light leading-tight mb-6">
            Spots are limited.
          </h2>
          <p className="font-body font-light text-base text-saffron-light/60 leading-relaxed mb-10 max-w-xl mx-auto">
            We work with a small number of members at a time. Every coach at
            Aayu carries a limited client load so that you receive the attention
            your program demands.
          </p>
          <Link
            href="mailto:hello@aayu.health?subject=Application"
            className="inline-block font-body text-sm font-medium bg-saffron text-white px-10 py-4 rounded-sm hover:bg-saffron-light hover:text-earth transition-colors tracking-wide"
          >
            Apply for a spot →
          </Link>
          <p className="font-body text-xs font-light text-saffron-light/30 mt-6 tracking-wide">
            We&apos;ll respond within 48 hours with next steps.
          </p>
        </div>
      </section>
    </>
  )
}
