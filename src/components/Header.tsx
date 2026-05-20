import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.content}>
        <div className={styles.badge}>📚 BTS Communication · Bloc 01</div>
        <h1 className={styles.title}>
          Fiche de Révision<br />
          <span className={styles.highlight}>Complète</span>
        </h1>
        <p className={styles.subtitle}>
          Plan de Communication · Cadre Légal · Outils de Veille · Acteurs
        </p>
      </div>
    </header>
  )
}
