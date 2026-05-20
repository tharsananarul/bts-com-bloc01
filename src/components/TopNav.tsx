import { Tab, TabId } from '../types'
import styles from './TopNav.module.css'

interface Props {
  tabs: Tab[]
  activeTab: TabId
  onTabChange: (id: TabId) => void
}

export default function TopNav({ tabs, activeTab, onTabChange }: Props) {
  return (
    <nav className={styles.nav}>
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          <span>{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </nav>
  )
}
