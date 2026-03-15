import PortalTopBar from '@/components/portal/PortalTopBar'
import PortalBottomNav from '@/components/portal/PortalBottomNav'
import { CheckinProvider } from '@/lib/checkin-context'

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <CheckinProvider>
      <div style={{ display: 'flex', justifyContent: 'center', height: '100dvh', background: '#EDE8DF' }}>
        <div style={{ width: '100%', maxWidth: 420, display: 'flex', flexDirection: 'column', height: '100dvh', background: '#FDFAF5' }}>
          <PortalTopBar />
          <main style={{ flex: 1, overflowY: 'auto', paddingBottom: 24 }}>
            {children}
          </main>
          <PortalBottomNav />
        </div>
      </div>
    </CheckinProvider>
  )
}
