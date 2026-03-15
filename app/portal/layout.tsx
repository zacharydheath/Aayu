import PortalTopBar from '@/components/portal/PortalTopBar'
import PortalBottomNav from '@/components/portal/PortalBottomNav'
import { CheckinProvider } from '@/lib/checkin-context'

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <CheckinProvider>
      <div className="min-h-screen bg-linen flex justify-center">
        <div className="w-full max-w-[420px] bg-warm-white min-h-screen">
          <PortalTopBar />
          <main className="pt-14 pb-32">
            {children}
          </main>
          <PortalBottomNav />
        </div>
      </div>
    </CheckinProvider>
  )
}
