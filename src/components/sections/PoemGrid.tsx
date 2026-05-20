import styles from './PoemGrid.module.css'

const CARDS = [
  { cls: styles.paid,   letter: 'P', title: 'Paid Media',   desc: 'Espace acheté : pub TV, display, Google Ads, posts sponsorisés LinkedIn.' },
  { cls: styles.owned,  letter: 'O', title: 'Owned Media',  desc: 'Ce qu\'on possède : site web, réseaux sociaux, newsletter, brochures.' },
  { cls: styles.earned, letter: 'E', title: 'Earned Media', desc: 'Ce qu\'on gagne gratuitement : articles de presse, partages, avis, bouche-à-oreille.' },
]

export default function PoemGrid() {
  return (
    <div className={styles.grid}>
      {CARDS.map(({ cls, letter, title, desc }) => (
        <div key={title} className={`${styles.card} ${cls}`}>
          <div className={styles.letter}>{letter}</div>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.desc}>{desc}</p>
        </div>
      ))}
    </div>
  )
}
