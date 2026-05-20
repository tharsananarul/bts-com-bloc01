import { ReactNode } from 'react'
import styles from './Steps.module.css'

export default function Steps({ children }: { children: ReactNode }) {
  return <div className={styles.steps}>{children}</div>
}
