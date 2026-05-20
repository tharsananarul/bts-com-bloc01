import styles from './SmartGrid.module.css'

interface SmartItem { letter: string; color: string; label: string; desc: string }
export default function SmartGrid({ items }: { items: SmartItem[] }) {
  return (
    <div className={styles.grid}>
      {items.map(({ letter, color, label, desc }) => (
        <div key={label} className={styles.item}>
          <div className={styles.letter} style={{ color }}>{letter}</div>
          <div className={styles.label}>{label}</div>
          <div className={styles.desc}>{desc}</div>
        </div>
      ))}
    </div>
  )
}
