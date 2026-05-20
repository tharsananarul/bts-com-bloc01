import styles from './CiblesVisual.module.css'

const CIBLES = [
  { color: '#dc2626', name: '🎯 Cible principale', desc: 'Le groupe global visé. Ex : DSI et DAF des PME de 50 à 500 salariés en Île-de-France.' },
  { color: '#ef4444', name: '💎 Cœur de cible',    desc: 'La fraction la plus rentable. Ex : DSI des PME tech de 100 à 300 salariés.' },
  { color: '#0d9488', name: '➕ Cible secondaire',  desc: 'Complémentaire, peut influencer. Ex : Responsables RSE, DG.' },
  { color: '#b45309', name: '📣 Cible relais',      desc: 'Prescripteurs qui relaient le message. Ex : Influenceurs tech, journalistes IT.' },
  { color: '#6d28d9', name: '🏢 Cible interne',     desc: 'Les salariés — premiers ambassadeurs de la marque. À ne jamais oublier !' },
]

export default function CiblesVisual() {
  return (
    <div className={styles.list}>
      {CIBLES.map(({ color, name, desc }) => (
        <div key={name} className={styles.row}>
          <div className={styles.dot} style={{ background: color }} />
          <div>
            <div className={styles.name}>{name}</div>
            <div className={styles.desc}>{desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
