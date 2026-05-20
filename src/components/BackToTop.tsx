import styles from './BackToTop.module.css'

interface Props { visible: boolean }

export default function BackToTop({ visible }: Props) {
  return (
    <button
      className={`${styles.btn} ${visible ? styles.visible : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Retour en haut"
    >
      ↑
    </button>
  )
}
