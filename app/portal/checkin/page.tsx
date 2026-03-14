'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCheckin } from '@/lib/checkin-context'

type Answers = {
  nutrition: string
  movement: string
  mindset: string
}

export default function CheckinPage() {
  const router = useRouter()
  const { markCheckedIn } = useCheckin()
  const [answers, setAnswers] = useState<Answers>({
    nutrition: '',
    movement: '',
    mindset: '',
  })

  const isComplete =
    answers.nutrition !== '' && answers.movement !== '' && answers.mindset !== ''

  const handleSubmit = () => {
    if (!isComplete) return
    markCheckedIn()
    router.push('/portal')
  }

  const OptionButton = ({
    group,
    value,
    label,
  }: {
    group: keyof Answers
    value: string
    label: string
  }) => {
    const isSelected = answers[group] === value
    return (
      <button
        onClick={() => setAnswers((prev) => ({ ...prev, [group]: value }))}
        className="flex-1 rounded-lg py-2.5 text-sm font-body font-medium min-h-[44px] transition-colors"
        style={
          isSelected
            ? { background: '#3D2B1A', color: '#F0C078', border: '1px solid #3D2B1A' }
            : { background: '#FDFAF5', color: '#6B4C30', border: '1px solid rgba(61,43,26,0.15)' }
        }
      >
        {label}
      </button>
    )
  }

  return (
    <div>
      {/* Header */}
      <div className="pt-6 px-4 mb-4">
        <p className="font-body font-medium text-[9px] tracking-[0.22em] uppercase text-saffron mb-2">
          Daily Check-in
        </p>
        <h1 className="font-display font-light text-[28px] text-earth leading-tight">
          30 seconds.{' '}
          <em className="text-saffron italic not-italic">Honest answers.</em>
        </h1>
      </div>

      <div className="px-4 flex flex-col gap-3">
        {/* Card 1: Nutrition */}
        <div
          className="rounded-xl p-4"
          style={{ background: '#FDFAF5', border: '0.5px solid rgba(61,43,26,0.1)' }}
        >
          <p className="font-body font-medium text-[9px] tracking-[0.22em] uppercase text-saffron mb-2">
            Nutrition
          </p>
          <p className="font-display italic font-light text-xl text-earth leading-snug mb-4">
            Did your eating today feel aligned with your goals?
          </p>
          <div className="flex gap-2">
            <OptionButton group="nutrition" value="yes" label="Yes" />
            <OptionButton group="nutrition" value="mostly" label="Mostly" />
            <OptionButton group="nutrition" value="not-really" label="Not really" />
          </div>
        </div>

        {/* Card 2: Movement */}
        <div
          className="rounded-xl p-4"
          style={{ background: '#FDFAF5', border: '0.5px solid rgba(61,43,26,0.1)' }}
        >
          <p className="font-body font-medium text-[9px] tracking-[0.22em] uppercase text-saffron mb-2">
            Movement
          </p>
          <p className="font-display italic font-light text-xl text-earth leading-snug mb-4">
            Did you move your body intentionally today?
          </p>
          <div className="flex gap-2">
            <OptionButton group="movement" value="yes" label="Yes" />
            <OptionButton group="movement" value="no" label="No" />
          </div>
        </div>

        {/* Card 3: Mindset */}
        <div
          className="rounded-xl p-4"
          style={{ background: '#FDFAF5', border: '0.5px solid rgba(61,43,26,0.1)' }}
        >
          <p className="font-body font-medium text-[9px] tracking-[0.22em] uppercase text-saffron mb-2">
            Mindset
          </p>
          <p className="font-display italic font-light text-xl text-earth leading-snug mb-4">
            How present were you with your health today?
          </p>
          <div className="flex gap-2">
            <OptionButton group="mindset" value="locked-in" label="Locked in" />
            <OptionButton group="mindset" value="distracted" label="Distracted" />
            <OptionButton group="mindset" value="checked-out" label="Checked out" />
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="px-4 mt-4 mb-4">
        <button
          onClick={handleSubmit}
          disabled={!isComplete}
          className="w-full min-h-[44px] rounded-lg font-body font-medium text-sm text-white transition-opacity"
          style={{
            background: '#C8832A',
            opacity: isComplete ? 1 : 0.4,
            cursor: isComplete ? 'pointer' : 'not-allowed',
          }}
        >
          Submit check-in
        </button>
      </div>
    </div>
  )
}
