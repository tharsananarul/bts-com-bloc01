import { useState, useEffect, useCallback } from 'react'
import { TabId, TABS } from './types'
import Header from './components/Header'
import TopNav from './components/TopNav'
import BottomNav from './components/BottomNav'
import ProgressBar from './components/ProgressBar'
import BackToTop from './components/BackToTop'
import PlanSection from './components/sections/PlanSection'
import LegalSection from './components/sections/LegalSection'
import VeilleSection from './components/sections/VeilleSection'
import ActeursSection from './components/sections/ActeursSection'
import Footer from './components/Footer'

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('plan')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackTop, setShowBackTop] = useState(false)

  const handleScroll = useCallback(() => {
    const st = document.documentElement.scrollTop || document.body.scrollTop
    const dh = document.documentElement.scrollHeight - document.documentElement.clientHeight
    setScrollProgress(dh > 0 ? (st / dh) * 100 : 0)
    setShowBackTop(st > 300)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const switchTab = useCallback((id: TabId) => {
    setActiveTab(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <ProgressBar progress={scrollProgress} />
      <Header />
      <TopNav tabs={TABS} activeTab={activeTab} onTabChange={switchTab} />
      <BottomNav tabs={TABS} activeTab={activeTab} onTabChange={switchTab} />
      <BackToTop visible={showBackTop} />

      <main>
        {activeTab === 'plan'    && <PlanSection />}
        {activeTab === 'legal'   && <LegalSection />}
        {activeTab === 'veille'  && <VeilleSection />}
        {activeTab === 'acteurs' && <ActeursSection />}
      </main>

      <Footer />
    </>
  )
}
