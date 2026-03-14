'use client'
import { useState } from 'react'

type Message = {
  from: 'coach' | 'member'
  text: string
  time: string
}

const messages: Message[] = [
  {
    from: 'coach',
    text: "Hi Zach! How are you feeling after this week's sessions? I noticed your movement score dipped slightly — let's focus on that evening walk routine.",
    time: 'Yesterday 4:32 PM',
  },
  {
    from: 'member',
    text: "Hey Priya! Feeling good overall. The walk has been tough to fit in — been working late most nights.",
    time: 'Yesterday 6:14 PM',
  },
  {
    from: 'coach',
    text: "Totally understandable. Let's try 10 minutes right after dinner instead of waiting until later. Even a short one counts.",
    time: 'Yesterday 6:45 PM',
  },
  {
    from: 'member',
    text: "That actually makes more sense. I'll try it tonight.",
    time: 'Yesterday 7:02 PM',
  },
  {
    from: 'coach',
    text: "Perfect. And remember — consistency beats intensity every time. You're doing well. See you Thursday 🌿",
    time: 'Today 9:15 AM',
  },
]

export default function CoachPage() {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div
        className="pt-6 px-4 pb-3"
        style={{ borderBottom: '1px solid rgba(61,43,26,0.08)' }}
      >
        <p className="font-body font-medium text-[9px] tracking-[0.22em] uppercase text-saffron mb-1">
          Coach
        </p>
        <h1 className="font-display font-light text-[28px] text-earth leading-tight">
          Priya <em className="text-saffron italic not-italic">Sharma</em>
        </h1>
      </div>

      {/* Message thread */}
      <div className="flex-1 px-4 py-4 flex flex-col gap-3 overflow-y-auto pb-24">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex flex-col ${msg.from === 'member' ? 'items-end' : 'items-start'}`}
          >
            <div
              className="max-w-[85%] p-3 text-sm font-body font-light leading-relaxed"
              style={
                msg.from === 'coach'
                  ? {
                      background: '#F7F1E8',
                      color: '#3D2B1A',
                      borderRadius: '16px 16px 16px 4px',
                    }
                  : {
                      background: '#3D2B1A',
                      color: 'rgba(247,241,232,0.9)',
                      borderRadius: '16px 4px 16px 16px',
                    }
              }
            >
              {msg.text}
            </div>
            <span className="font-body text-[10px] text-stone mt-1 px-1">{msg.time}</span>
          </div>
        ))}
      </div>

      {/* Text input — fixed above bottom nav */}
      <div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] px-4 py-3"
        style={{ background: '#FDFAF5', borderTop: '1px solid rgba(61,43,26,0.08)', bottom: '44px' }}
      >
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Message Priya..."
            className="flex-1 bg-warm-white border rounded-lg px-3 py-2.5 text-sm font-body font-light text-earth placeholder-stone outline-none"
            style={{ border: '1px solid rgba(61,43,26,0.15)' }}
          />
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white font-body text-base"
            style={{ background: '#C8832A' }}
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}
