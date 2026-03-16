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
    tagline: "For someone who knows something needs to change — and wants a knowledgeable guide in their corner from day one.",
    outcome: "You stop guessing. You have a real coach who knows your name, your diet, your life — and checks in regularly to make sure you're moving in the right direction. Most people never get this. You will.",
    whoFor: "For someone who knows something needs to change — and wants a knowledgeable guide in their corner from day one.",
    coverNote: null,
    features: [
      'Dedicated health coach — yours for as long as you\'re a member',
      'Monthly 1:1 coaching call, 30 minutes',
      'Async coach check-ins twice a week — questions answered, habits reinforced, between sessions',
      'Nutrition coaching built around the way you actually eat',
      'Movement guidance for where you\'re starting, not where you should be',
      'Structured 12-week onboarding — your first three months have a clear arc, not a blank page',
      'Access to your personal cohort — a small group of members who join the same month as you and go through the journey together',
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
    dark: false,
    featured: true,
    isFamily: false,
    isNeuro: false,
    tagline: "For someone ready to make health a real, daily part of their life — not just something they think about.",
    outcome: "Health stops being abstract. Every day, food arrives that was built for your body. Every quarter, a physician reviews your numbers. Every two weeks, your coach adjusts the plan based on what's actually happening. You stop wondering if you're doing the right things — you know.",
    whoFor: "For someone ready to make health a real, daily part of their life — not just something they think about.",
    coverNote: null,
    features: [
      'Dedicated senior coach, bi-weekly 45-min 1:1 sessions',
      'Async coach support between sessions — WhatsApp access for questions, wins, and hard days',
      'Nutrition and movement coaching that evolves with you month to month',
      'Daily Aayu meal delivery, 5 days a week — chef-prepared, nutritionally calibrated for your health profile, delivered to your door',
      'Quarterly at-home health screening — bloodwork, vitals, and a full review coordinated by our medical team',
      'Monthly progress report — beautifully designed, every number that matters',
      'Aayu welcome kit — supplement starter pack and branded essentials',
      'Your own cohort — a private group of members who started the same month, with a shared feed, leaderboard, and group chat',
    ],
  },
  {
    label: 'AAYU CONCIERGE',
    name: 'Aayu Concierge',
    bdtPrice: '৳1,00,000',
    usdPrice: '($800 / month)',
    period: '/ month',
    tag: 'Signature',
    dark: false,
    isFamily: false,
    isNeuro: false,
    tagline: "For someone who wants the full picture — and a team that treats their health like the long-term investment it is.",
    outcome: "You have a physician who knows you by name, visits your home every month, and is reachable between visits. Your meals are calibrated to your latest screening results. Your pharmacy is handled. Nothing falls through the cracks. This is what serious, sustained health transformation looks like when you remove every obstacle.",
    whoFor: "For someone who wants the full picture — and a team that treats their health like the long-term investment it is.",
    coverNote: null,
    note: 'Aayu accepts a maximum of 50 Concierge members at any time.',
    features: [
      'Dedicated senior coach plus monthly home visit from your named Aayu physician',
      'Direct WhatsApp access to your physician between visits',
      'Daily meal delivery 7 days a week including breakfast — calibrated to your quarterly screening results',
      'Quarterly at-home health screening — bloodwork, vitals, full review',
      'Pharmacy coordination handled directly by your Aayu physician',
      'Quarterly printed health report — bound, beautifully designed, delivered to your home',
      'Priority scheduling and guaranteed same-week response on all requests',
      'First access to new Aayu services and programs',
      'Priority access to Aayu Neuro sessions',
      'Your own cohort — a private group of members who started the same month, with a shared feed, leaderboard, and group chat',
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
    tagline: "For the family that understands that health is not an individual achievement — it's a collective one.",
    outcome: "Everyone in your household gets the same level of care you do. Your spouse has a coach. Your parents have a physician who visits the home. Your children have health documentation handled. One membership covers the people who matter most — because your health and theirs are not separate things.",
    whoFor: "For the family that understands that health is not an individual achievement — it's a collective one.",
    coverNote: 'Covers: primary member, spouse, children, and parents in the household.',
    note: 'Aayu Family is not publicly listed. Access is by referral from an existing Concierge member only.',
    features: [
      'Everything in Aayu Concierge for the primary member',
      'Dedicated coach for each adult family member',
      'Monthly physician home visit covers every member of the household',
      'Daily meal delivery for the whole family, 7 days a week — each member\'s meals calibrated to their health profile',
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
    bdtPrice: '৳50,000',
    usdPrice: '($400 / session)',
    period: '/ session',
    tag: 'Add-on · All members',
    dark: false,
    isFamily: false,
    isNeuro: true,
    tagline: "Your brain is the organ that runs everything else. Most people never check on it until something goes wrong.",
    outcome: "You get a clear picture of your cognitive health from a US-based neurologist — not a general wellness check, a real clinical conversation about memory, sleep, stress, and long-term neurological risk. Most people in Dhaka have never had access to this. Aayu members do.",
    whoFor: "Your brain is the organ that runs everything else. Most people never check on it until something goes wrong.",
    coverNote: null,
    note: 'Available quarterly or biannually. Aayu Concierge members receive priority scheduling.',
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
              className="p-10 lg:p-14 bg-warm-white"
              style={'featured' in tier && tier.featured ? { borderLeft: '3px solid #C8832A' } : undefined}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                {/* Left */}
                <div>
                  <h2
                    className="font-display font-light text-5xl md:text-[48px] mb-1 text-earth leading-tight"
                  >
                    {tier.name}
                  </h2>
                  <p
                    className="font-body text-xs font-light mb-4 text-stone"
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
                    className={`font-body font-light italic text-[13px] leading-relaxed text-earth-mid/70 ${tier.coverNote ? 'mb-3' : 'mb-4'}`}
                  >
                    {tier.tagline}
                  </p>
                  {tier.coverNote && (
                    <p className="font-body font-light text-[12px] text-stone leading-relaxed mb-4">
                      {tier.coverNote}
                    </p>
                  )}
                  <p className="font-body font-normal text-[14px] text-earth leading-[1.7] mb-6">
                    {tier.outcome}
                  </p>
                  <Link
                    href="#apply"
                    className="inline-block font-body text-sm font-medium py-3 px-7 rounded-sm tracking-wide"
                    style={{ backgroundColor: '#3D2B1A', border: '2px solid #C8832A', color: '#F0C078' }}
                  >
                    Apply for {tier.name} — April Cohort
                  </Link>
                </div>

                {/* Right */}
                <div>
                  <ul className="flex flex-col gap-3 mb-5">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className="font-body text-sm font-light flex items-start gap-2 text-earth/65"
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

                  <div
                    className="border-t pt-6 border-earth/10"
                  >
                    <p
                      className="font-body text-[10px] font-medium tracking-[0.2em] uppercase mb-2 text-stone"
                    >
                      Who it&apos;s for
                    </p>
                    <p
                      className="font-body font-light text-sm leading-relaxed text-earth/55"
                    >
                      {tier.whoFor}
                    </p>
                  </div>
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
