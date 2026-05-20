import styles from './ProgressBar.module.css'

interface Props { progress: number }

export default function ProgressBar({ progress }: Props) {
  return <div className={styles.bar} style={{ width: `${progress}%` }} />
}
