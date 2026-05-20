import { ReactNode } from 'react'
import styles from './ui.module.css'

/* ── Section wrapper ── */
export function Section({ children }: { children: ReactNode }) {
  return <div className={styles.section}>{children}</div>
}

export function SectionTitle({ icon, children }: { icon: string; children: ReactNode }) {
  return <h2 className={styles.sectionTitle}><span>{icon}</span>{children}</h2>
}

export function SectionSubtitle({ children }: { children: ReactNode }) {
  return <p className={styles.sectionSubtitle}>{children}</p>
}

export function SubsectionTitle({ children }: { children: ReactNode }) {
  return <h3 className={styles.subsectionTitle}>{children}</h3>
}

/* ── Card ── */
type CardAccent = 'red' | 'green' | 'yellow' | 'purple'
interface CardProps { children: ReactNode; accent?: CardAccent; style?: React.CSSProperties }

export function Card({ children, accent, style }: CardProps) {
  const cls = [styles.card, accent ? styles[`accent_${accent}`] : ''].join(' ')
  return <div className={cls} style={style}>{children}</div>
}

export function CardTitle({ children, badge, badgeColor = 'red' }: {
  children: ReactNode; badge?: string; badgeColor?: CardAccent
}) {
  return (
    <h3 className={styles.cardTitle}>
      {badge && <span className={`${styles.badge} ${styles[`badge_${badgeColor}`]}`}>{badge}</span>}
      {children}
    </h3>
  )
}

/* ── Notice boxes ── */
export function Example({ children }: { children: ReactNode }) {
  return <div className={`${styles.notice} ${styles.example}`}><span>💡</span><div>{children}</div></div>
}
export function Warning({ children }: { children: ReactNode }) {
  return <div className={`${styles.notice} ${styles.warning}`}><span>⚠️</span><div>{children}</div></div>
}
export function Tip({ children }: { children: ReactNode }) {
  return <div className={`${styles.notice} ${styles.tip}`}><span>✏️</span><div>{children}</div></div>
}

/* ── Styled list ── */
export function StyledList({ items }: { items: ReactNode[] }) {
  return (
    <ul className={styles.list}>
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  )
}

/* ── Table ── */
export function TableWrap({ children }: { children: ReactNode }) {
  return <div className={styles.tableWrap}><table className={styles.table}>{children}</table></div>
}
