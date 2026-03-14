'use client'
import { createContext, useContext, useState, useEffect } from 'react'

interface CheckinContextType {
  isCheckedIn: boolean
  markCheckedIn: () => void
}

const CheckinContext = createContext<CheckinContextType>({
  isCheckedIn: false,
  markCheckedIn: () => {},
})

export function CheckinProvider({ children }: { children: React.ReactNode }) {
  const [isCheckedIn, setIsCheckedIn] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('aayu_checkin_date')
    const today = new Date().toDateString()
    if (stored === today) setIsCheckedIn(true)
  }, [])

  const markCheckedIn = () => {
    const today = new Date().toDateString()
    localStorage.setItem('aayu_checkin_date', today)
    setIsCheckedIn(true)
  }

  return (
    <CheckinContext.Provider value={{ isCheckedIn, markCheckedIn }}>
      {children}
    </CheckinContext.Provider>
  )
}

export const useCheckin = () => useContext(CheckinContext)
