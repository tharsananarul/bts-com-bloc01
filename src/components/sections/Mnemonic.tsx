import styles from './Mnemonic.module.css'

const LETTERS = [
  { l: 'D', w: 'Diagnostic' }, { l: 'P', w: 'Problème' },
  { l: 'P', w: 'Positionn.' }, { l: 'O', w: 'Objectifs' },
  { l: 'C', w: 'Cibles' },    { l: 'M', w: 'Moyens' },
  { l: 'B', w: 'Budget' },    { l: 'K', w: 'KPIs' },
]

export default function Mnemonic() {
  return (
    <div className={styles.box}>
      <div className={styles.bg1} /><div className={styles.bg2} />
      <h4 className={styles.label}>Moyen mnémotechnique pour tout retenir</h4>
      <div className={styles.acronym}>D·P·P·O·C·M·B·K</div>
      <div className={styles.letters}>
        {LETTERS.map(({ l, w }) => (
          <div key={w} className={styles.block}>
            <div className={styles.letter}>{l}</div>
            <div className={styles.word}>{w}</div>
          </div>
        ))}
      </div>
      <p className={styles.phrase}>« Des Pandas Pas Ordinaires Construisent Magnifiquement Beaucoup de Kilomètres »</p>
    </div>
  )
}
