import { Tab, TabId } from '../types'
import styles from './BottomNav.module.css'

interface Props {
  tabs: Tab[]
  activeTab: TabId
  onTabChange: (id: TabId) => void
}

export default function BottomNav({ tabs, activeTab, onTabChange }: Props) {
  return (
    <nav className={styles.nav} role="navigation" aria-label="Navigation principale">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
          onClick={() => onTabChange(tab.id)}
          aria-label={tab.label}
        >
          <span className={styles.icon}>{tab.icon}</span>
          <span className={styles.label}>{tab.shortLabel}</span>
        </button>
      ))}
    </nav>
  )
}
