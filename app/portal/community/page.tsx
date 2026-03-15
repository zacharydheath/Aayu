// Cohort naming convention: cohorts are named after Bengali calendar months:
// Boishakh, Jyoishtho, Asharh, Shraban, Bhadro, Ashwin,
// Kartik, Agrahayon, Poush, Magh, Falgun, Chaitra.
// Current cohort: Falgun (February 2026 intake).

'use client'

import { useState } from 'react'

type Tab = 'feed' | 'leaderboard' | 'chat'

// ─── Shared dot strip ────────────────────────────────────────────────────────

function DotStrip({ days, size = 16 }: { days: (1 | 0.5 | 0)[]; size?: number }) {
  return (
    <div className="flex flex-col gap-0.5">
      <p className="font-body text-[10px] tracking-[0.2em] uppercase" style={{ color: '#9E9388' }}>
        Last 7 days
      </p>
      <div className="flex gap-1">
        {days.map((d, i) => (
          <div
            key={i}
            style={{
              width: size,
              height: size,
              borderRadius: '50%',
              background:
                d === 1 ? '#C8832A'
                : d === 0.5 ? '#FBF3E2'
                : 'rgba(61,43,26,0.08)',
              border: d === 0.5 ? '1px solid #C8832A' : 'none',
            }}
          />
        ))}
      </div>
    </div>
  )
}

// ─── Member avatar ────────────────────────────────────────────────────────────

function Avatar({ initials, size = 28 }: { initials: string; size?: number }) {
  return (
    <div
      className="rounded-full flex items-center justify-center shrink-0"
      style={{
        width: size,
        height: size,
        background: '#3D2B1A',
      }}
    >
      <span
        className="font-body font-medium text-saffron-light"
        style={{ fontSize: size * 0.38 }}
      >
        {initials}
      </span>
    </div>
  )
}

// ─── Feed tab ─────────────────────────────────────────────────────────────────

const feedItems = [
  {
    milestone: true,
    initials: 'RA',
    name: 'Rahel A.',
    time: '2h ago',
    text: 'Hit a 30-day check-in streak',
    dots: [1, 1, 1, 1, 1, 1, 1] as (1 | 0.5 | 0)[],
  },
  {
    milestone: false,
    initials: 'SM',
    name: 'Samira M.',
    time: '4h ago',
    text: 'Checked in today — nutrition was tough this week with Eid prep but movement was strong. Trying to stay consistent.',
    dots: [1, 1, 0, 1, 1, 1, 0] as (1 | 0.5 | 0)[],
  },
  {
    milestone: false,
    initials: 'KI',
    name: 'Karim I.',
    time: 'Yesterday',
    text: 'Week 6 done. LI% up to 74% — movement pillar finally turning around after the coach session.',
    dots: [1, 1, 1, 0, 1, 1, 1] as (1 | 0.5 | 0)[],
  },
  {
    milestone: false,
    initials: 'TH',
    name: 'Tanvir H.',
    time: 'Yesterday',
    text: 'Anyone else finding the evening mindset check harder than expected? Would love tips.',
    dots: [1, 0, 1, 1, 0, 1, 0] as (1 | 0.5 | 0)[],
  },
]

function FeedTab() {
  return (
    <div className="flex flex-col gap-3 px-4 pt-3 pb-4">
      {feedItems.map((item, i) => (
        <div
          key={i}
          className="rounded-xl p-4"
          style={{
            background: item.milestone ? '#FBF3E2' : '#FDFAF5',
            border: item.milestone ? '0.5px solid #C8832A' : '0.5px solid rgba(61,43,26,0.1)',
            borderRadius: 12,
          }}
        >
          {item.milestone && (
            <p
              className="font-body font-medium text-[10px] tracking-[0.22em] uppercase mb-3"
              style={{ color: '#C8832A' }}
            >
              Milestone
            </p>
          )}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Avatar initials={item.initials} />
              <span className="font-body font-medium text-[13px] text-earth">{item.name}</span>
            </div>
            <span className="font-body font-light text-[10px] text-stone">{item.time}</span>
          </div>
          <p
            className="font-body font-light text-[12px] mb-3 leading-[1.6]"
            style={{ color: '#6B4C30' }}
          >
            {item.text}
          </p>
          <DotStrip days={item.dots} size={16} />
        </div>
      ))}

      <button
        className="w-full min-h-[44px] flex items-center justify-center font-body font-light text-[12px] text-stone rounded-lg mt-1"
        style={{ border: '0.5px solid rgba(61,43,26,0.18)', borderRadius: 8, background: 'transparent' }}
      >
        Share with your cohort →
      </button>
    </div>
  )
}

// ─── Leaderboard tab ──────────────────────────────────────────────────────────

const leaderboardData = [
  { rank: 1, initials: 'RA', name: 'Rahel A.', streak: 30, pct: 91, dots: [1, 1, 1, 1, 1, 1, 1] as (1 | 0.5 | 0)[], isYou: false },
  { rank: 2, initials: 'SM', name: 'Samira M.', streak: 18, pct: 84, dots: [1, 1, 0, 1, 1, 1, 0] as (1 | 0.5 | 0)[], isYou: false },
  { rank: 3, initials: 'KI', name: 'Karim I.', streak: 12, pct: 74, dots: [1, 1, 1, 0, 1, 1, 1] as (1 | 0.5 | 0)[], isYou: false },
  { rank: 4, initials: 'ZH', name: 'You', streak: 9, pct: 78, dots: [1, 1, 0, 1, 1, 0, 1] as (1 | 0.5 | 0)[], isYou: true },
  { rank: 5, initials: 'TH', name: 'Tanvir H.', streak: 6, pct: 71, dots: [1, 0, 1, 1, 0, 1, 0] as (1 | 0.5 | 0)[], isYou: false },
]

const rankColors: Record<number, string> = { 1: '#C9922A', 2: '#9E9388', 3: '#A0785A' }

const badges = [
  { icon: '★', name: 'First Check-in', sub: 'All 14 members' },
  { icon: '🔥', name: '7-Day Streak', sub: '11 members' },
  { icon: '⚡', name: '30-Day Streak', sub: 'Rahel A.' },
  { icon: '◆', name: 'LI% 80+', sub: 'Rahel A. · Samira M.' },
  { icon: '↑', name: 'Movement Win', sub: 'Karim I.' },
]

function LeaderboardTab() {
  return (
    <div className="px-4 pt-3 pb-4 flex flex-col gap-4">
      <p className="font-body font-medium text-[10px] tracking-[0.25em] uppercase text-stone">
        This month · LI%
      </p>

      <div
        className="rounded-xl overflow-hidden"
        style={{ background: '#FDFAF5', border: '0.5px solid rgba(61,43,26,0.1)' }}
      >
        {leaderboardData.map((member, i) => (
          <div
            key={member.rank}
            style={{
              background: member.isYou ? '#FBF3E2' : 'transparent',
              borderBottom: i < leaderboardData.length - 1 ? '0.5px solid rgba(61,43,26,0.08)' : 'none',
            }}
          >
            <div className="flex items-center gap-3 px-4 pt-3 pb-2">
              <span
                className="font-display font-light w-5 text-center shrink-0"
                style={{
                  fontSize: 18,
                  color: member.isYou ? '#C8832A' : (rankColors[member.rank] ?? '#3D2B1A'),
                }}
              >
                {member.rank}
              </span>
              <Avatar initials={member.initials} size={32} />
              <div className="flex-1 min-w-0">
                <p className="font-body font-medium text-[13px] text-earth">{member.name}</p>
                <p className="font-body font-light text-[10px] text-stone">{member.streak} day streak</p>
              </div>
              <span className="font-display font-light text-[18px] text-saffron shrink-0">
                {member.pct}%
              </span>
            </div>
            <div className="px-4 pb-3 pl-[52px]">
              <DotStrip days={member.dots} size={12} />
            </div>
          </div>
        ))}
      </div>

      <p className="font-body font-light italic text-[11px] text-stone text-center">
        Showing top 5 of 14 cohort members
      </p>

      {/* Milestone badges */}
      <div>
        <p className="font-body font-medium text-[10px] tracking-[0.25em] uppercase text-stone mb-3">
          Cohort Milestones
        </p>
        <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
          {badges.map((badge, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1 px-3 py-3 shrink-0"
              style={{
                background: '#FBF3E2',
                border: '0.5px solid #C8832A',
                borderRadius: 8,
                minWidth: 80,
              }}
            >
              <span style={{ fontSize: 20 }}>{badge.icon}</span>
              <span className="font-body font-medium text-[10px] text-saffron text-center leading-tight">
                {badge.name}
              </span>
              <span className="font-body font-light text-[9px] text-stone text-center leading-tight">
                {badge.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Group chat tab ───────────────────────────────────────────────────────────

const chatMessages = [
  { isYou: false, initials: 'SM', name: 'Samira M.', text: 'Does anyone have tips for staying consistent with movement during Ramadan? Finding it hard this year.', time: '2:14 PM' },
  { isYou: false, initials: 'KI', name: 'Karim I.', text: 'I do light walks after iftar — 20 mins. Keeps the streak without draining energy.', time: '2:19 PM' },
  { isYou: true, initials: 'ZH', name: 'You', text: "That's what Priya recommended too. Morning stretches before sehri also helps.", time: '2:23 PM' },
  { isYou: false, initials: 'SM', name: 'Samira M.', text: 'Thank you both — going to try the iftar walk tonight.', time: '2:31 PM' },
]

function ChatTab() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col gap-3 px-4 pt-3 pb-4 overflow-y-auto">
        {chatMessages.map((msg, i) => (
          <div
            key={i}
            className={`flex flex-col gap-1 ${msg.isYou ? 'items-end' : 'items-start'}`}
          >
            {!msg.isYou && (
              <div className="flex items-center gap-1.5 ml-1">
                <Avatar initials={msg.initials} size={22} />
                <span className="font-body font-light text-[10px] text-stone">{msg.name}</span>
              </div>
            )}
            <div
              className="px-3 py-2 font-body font-light text-[13px] leading-relaxed"
              style={{
                maxWidth: '80%',
                background: msg.isYou ? '#3D2B1A' : '#F7F1E8',
                color: msg.isYou ? 'rgba(247,241,232,0.85)' : '#3D2B1A',
                borderRadius: msg.isYou
                  ? '12px 12px 0px 12px'
                  : '12px 12px 12px 0px',
              }}
            >
              {msg.text}
            </div>
            <span className="font-body font-light text-[10px] text-stone mx-1">{msg.time}</span>
          </div>
        ))}
      </div>

      {/* Input row */}
      <div
        className="px-4 py-3 flex gap-2"
        style={{ borderTop: '0.5px solid rgba(61,43,26,0.1)', background: '#FDFAF5' }}
      >
        <input
          type="text"
          placeholder="Message the Falgun cohort..."
          className="flex-1 font-body font-light text-[13px] text-earth placeholder:text-stone outline-none px-3 min-h-[44px]"
          style={{
            background: '#FDFAF5',
            border: '0.5px solid rgba(61,43,26,0.18)',
            borderRadius: 8,
          }}
        />
        <button
          className="min-w-[44px] min-h-[44px] flex items-center justify-center font-body font-medium text-white shrink-0"
          style={{ background: '#C8832A', borderRadius: 8 }}
          aria-label="Send"
        >
          →
        </button>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const cohortAvatars = [
  { initials: 'RA' },
  { initials: 'SM' },
  { initials: 'KI' },
  { initials: 'TH' },
  { initials: 'NB' },
]

export default function CommunityPage() {
  const [tab, setTab] = useState<Tab>('feed')

  return (
    <div className="flex flex-col min-h-full pb-8">
      {/* Cohort header card */}
      <div
        className="mx-4 mt-4 rounded-2xl p-5 relative overflow-hidden"
        style={{ background: '#3D2B1A', borderRadius: 16 }}
      >
        {/* Watermark */}
        <span
          className="font-display italic font-light absolute -right-3 -top-2 leading-none select-none pointer-events-none"
          style={{ fontSize: 96, color: '#5A3D26', opacity: 0.12 }}
        >
          Falgun
        </span>

        <p
          className="font-body font-medium text-[10px] tracking-[0.25em] uppercase mb-2 relative"
          style={{ color: 'rgba(240,192,120,0.5)' }}
        >
          Your Cohort · Month 2
        </p>
        <p
          className="font-display italic font-light relative mb-1"
          style={{ fontSize: 28, color: '#F0C078' }}
        >
          Falgun
        </p>
        <p
          className="font-body font-light text-[12px] relative mb-4"
          style={{ color: 'rgba(240,192,120,0.5)' }}
        >
          Started together · February 2026 · 14 members
        </p>

        {/* Avatar row */}
        <div className="flex items-center relative">
          {cohortAvatars.map((a, i) => (
            <div
              key={i}
              className="rounded-full flex items-center justify-center"
              style={{
                width: 28,
                height: 28,
                background: '#6B4C30',
                border: '1.5px solid #3D2B1A',
                marginLeft: i === 0 ? 0 : -6,
                zIndex: cohortAvatars.length - i,
              }}
            >
              <span className="font-body font-medium text-saffron-light" style={{ fontSize: 10 }}>
                {a.initials}
              </span>
            </div>
          ))}
          <span
            className="font-body font-medium text-[11px] ml-2"
            style={{ color: 'rgba(240,192,120,0.6)' }}
          >
            +9
          </span>
        </div>
      </div>

      {/* Tab row */}
      <div className="flex gap-2 px-4 mt-4">
        {(['feed', 'leaderboard', 'chat'] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="flex-1 font-body font-light text-[12px] min-h-[44px] rounded-full transition-colors capitalize"
            style={
              tab === t
                ? { background: '#3D2B1A', color: '#F0C078', border: 'none' }
                : { background: '#FDFAF5', color: '#9E9388', border: '0.5px solid rgba(61,43,26,0.18)' }
            }
          >
            {t === 'chat' ? 'Group Chat' : t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="flex-1 mt-2">
        {tab === 'feed' && <FeedTab />}
        {tab === 'leaderboard' && <LeaderboardTab />}
        {tab === 'chat' && <ChatTab />}
      </div>
    </div>
  )
}
