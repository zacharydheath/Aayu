import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services — Aayu',
  description:
    'Premium longevity coaching for Bangladeshi families. Choose the level of support that fits your life.',
}

const tiers = [
  {
    label: 'AAYU CORE',
    name: 'Aayu Core',
    bdtPrice: '৳25,000',
    usdPrice: '($200 / month)',
    period: '/ month',
    tag: 'Foundation',
    dark: false,
    isFamily: false,
    isNeuro: false,
    tagline: 'For someone who\'s ready to start — and wants the right guidance from day one.',
    whoFor: 'Available to new members with no minimum commitment. Your coach will build your first framework within 48 hours of your intake call.',
    month: 'A typical month includes a weekly 30-minute video check-in, an updated nutrition and movement plan, and a written summary after each session. You also have access to the Aayu app for daily habit tracking.',
    coverNote: null,
    ctaNote: null,
    features: [
      'Dedicated health coach, monthly 30-min video check-in',
      'Nutrition coaching built around the way you actually eat',
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
    isFamily: false,
    isNeuro: false,
    tagline: 'For someone ready to make health a visible, daily part of their life.',
    whoFor: 'Best for members who want coaching that goes beyond the session — daily meals handled, quarterly screenings done, and a progress report you\'d actually want to keep.',
    month: 'A typical month includes bi-weekly 45-minute coaching sessions, daily meal delivery 3 days a week, and a quarterly at-home screening coordinated by our medical team. Your monthly report arrives beautifully designed.',
    coverNote: null,
    ctaNote: null,
    features: [
      'Dedicated senior coach, bi-weekly 45-min 1:1 sessions',
      'Nutrition and movement coaching that evolves with you',
      'Daily Aayu meal delivery, 3 days a week — chef-prepared, nutritionally calibrated, delivered to your door',
      'Quarterly at-home health screening — bloodwork, vitals, and a full review coordinated by our medical team',
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
    isFamily: false,
    isNeuro: false,
    tagline: 'For someone who wants the full picture — and the full experience.',
    whoFor: 'For members who want physician-level oversight, daily meals, and the kind of membership that makes health feel effortless. Family included.',
    month: 'A typical month includes weekly coaching, a physician home visit, daily meal delivery, and a quarterly printed health report delivered to your home. Your family members join the quarterly health consultation.',
    coverNote: null,
    ctaNote: null,
    note: 'Aayu accepts a maximum of 50 Concierge members at any time.',
    features: [
      'Dedicated senior coach plus monthly home visit from your named Aayu physician',
      'Daily meal delivery 5 days a week, including breakfast — calibrated to your quarterly screening results',
      'Quarterly at-home health screening — bloodwork, vitals, full review',
      'Quarterly printed health report — bound, beautifully designed, delivered to your home',
      'Annual health letter from your physician, on Aayu letterhead',
      'Pharmacy coordination handled directly by your Aayu physician',
      'Direct WhatsApp access to your physician between visits',
      'Priority scheduling and guaranteed same-week response on all requests',
      'First access to new Aayu services and programs',
      'Priority access to Aayu Neuro sessions',
    ],
  },
  {
    label: 'AAYU FAMILY',
    name: 'Aayu Family',
    bdtPrice: '৳1,50,000',
    usdPrice: '($1,200 / month)',
    period: '/ month',
    tag: 'Legacy',
    dark: false,
    isFamily: true,
    isNeuro: false,
    tagline: 'For the family that takes care of each other — the way family should.',
    whoFor: 'For households where health is a shared priority. Covers the primary member, spouse, children, and parents living in the household.',
    month: 'A typical month includes dedicated coaching for each adult, a physician home visit for the whole household, daily meal delivery, and quarterly health screenings for every family member. One annual family health report.',
    coverNote: 'Covers: primary member, spouse, children, and parents in the household.',
    ctaNote: 'Our most comprehensive membership. Not publicly listed — if you\'re being referred by an existing member, we\'d love to hear from you.',
    note: 'Aayu Family is not publicly listed. Access is by referral from an existing Concierge member only.',
    features: [
      'Everything in Aayu Concierge for the primary member',
      'Dedicated coach for each adult family member',
      'Monthly physician home visit covers every member of the household',
      'Daily meal delivery for the whole family, 7 days a week — meals calibrated to each member\'s health profile',
      'One special occasion meal per quarter — Eid, anniversaries, family gatherings, handled by Aayu Kitchen',
      'Annual in-home family health day — full screenings for every member, back to back, in your home',
      'Individual quarterly health screening for each family member',
      'School and travel health letters for children, issued by your Aayu physician',
      'Annual family health report — every member, one beautifully bound document',
      'Pharmacy coordination for the entire household',
      'Priority Aayu Neuro access for all adult members',
      'Direct physician WhatsApp line for anyone in the household',
    ],
  },
  {
    label: 'AAYU NEURO',
    name: 'Aayu Neuro',
    bdtPrice: '৳75,000',
    usdPrice: '($600 / session)',
    period: '/ session',
    tag: 'Add-on · All members',
    dark: false,
    isFamily: false,
    isNeuro: true,
    tagline: 'Your brain is the most important organ you\'re probably not tracking.',
    whoFor: 'Available to all Aayu members as a standalone add-on. Aayu Concierge members receive priority scheduling and a discounted rate.',
    month: 'Each session is self-contained: a 60-minute remote consultation, followed by a written summary with personalized recommendations within 48 hours. Findings are shared with your coach and integrated into your overall plan.',
    coverNote: null,
    ctaNote: null,
    features: [
      '60-minute remote consultation with our US-based neurologist',
      'Cognitive performance and memory assessment',
      'Sleep architecture review and recommendations',
      'Stress and cortisol pattern analysis based on your health history',
      'Early neurological risk screening',
      'Written summary with personalized recommendations within 48 hours',
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
            A membership built around your life.{' '}
            <em className="text-saffron not-italic italic">Not a generic plan.</em>
          </h1>
          <p className="font-body font-light text-lg text-earth/60 leading-relaxed max-w-2xl">
            Aayu operates in Dhaka with a small, carefully selected membership.
            Choose the tier that fits your family&apos;s needs — every level
            includes dedicated coaching, physician oversight, and the kind of
            attention that produces real, lasting change.
          </p>
        </div>
      </section>

      {/* Tier cards */}
      <section className="bg-warm-white">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 flex flex-col gap-px bg-earth/10">
          {tiers.map((tier) => (
            <div key={tier.name}>
              {tier.isNeuro && (
                <div className="flex items-center gap-4 py-10">
                  <div className="flex-1 h-px bg-saffron/20" />
                  <p className="font-body text-[10px] font-medium tracking-[0.25em] text-stone uppercase">
                    Add-on · Available to all members
                  </p>
                  <div className="flex-1 h-px bg-saffron/20" />
                </div>
              )}
            <div
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
                  <div className="mb-6">
                    <p className="font-display font-light text-5xl text-saffron leading-tight">
                      {tier.bdtPrice}
                      <span className="text-xl font-body font-light text-stone"> {tier.period}</span>
                    </p>
                    {tier.usdPrice && (
                      <p className="font-body font-light text-[11px] text-stone mt-1">
                        {tier.usdPrice}
                      </p>
                    )}
                  </div>
                  <p
                    className={`font-body font-light italic text-[13px] leading-relaxed ${tier.coverNote ? 'mb-3' : 'mb-6'} ${
                      tier.dark ? 'text-saffron-light/50' : 'text-earth-mid/70'
                    }`}
                  >
                    {tier.tagline}
                  </p>
                  {tier.coverNote && (
                    <p className="font-body font-light text-[12px] text-stone leading-relaxed mb-6">
                      {tier.coverNote}
                    </p>
                  )}
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
                  <ul className="flex flex-col gap-3 mb-5">
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

                  {'note' in tier && tier.note && (
                    <p className="font-body font-light italic text-[11px] text-stone mb-5 leading-relaxed">
                      {tier.note}
                    </p>
                  )}

                  {tier.ctaNote && (
                    <p className="font-body font-light text-[12px] text-stone leading-relaxed mb-8 italic">
                      {tier.ctaNote}
                    </p>
                  )}

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
            </div>
          ))}
          <p className="font-body font-light italic text-sm text-earth-mid/60 text-center mt-6">
            Available quarterly or biannually. Aayu Concierge members receive priority scheduling.
          </p>
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
            Aayu accepts a small number of new members at a time. If you're
            ready to invest in your health seriously, we'd love to hear from you.
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
