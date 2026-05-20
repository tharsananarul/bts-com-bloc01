import { Section, SectionTitle, SectionSubtitle, Card, SubsectionTitle, TableWrap, Tip } from '../ui'
import styles from './ActeursSection.module.css'

interface ActorCardProps { icon: string; title: string; desc: string }

function ActorCard({ icon, title, desc }: ActorCardProps) {
  return (
    <div className={styles.actorCard}>
      <span className={styles.actorIcon}>{icon}</span>
      <div className={styles.actorTitle}>{title}</div>
      <div className={styles.actorDesc}>{desc}</div>
    </div>
  )
}

export default function ActeursSection() {
  return (
    <Section>
      <SectionTitle icon="👥">Les Acteurs de la Communication</SectionTitle>
      <SectionSubtitle>Qui mobiliser selon la campagne et comment justifier tes choix</SectionSubtitle>

      <Card accent="purple" style={{ marginBottom: 24 }}>
        <h3 style={{ fontSize: '15.5px', fontWeight: 700, marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--ink)' }}>
          <span style={{ background: 'var(--accent4)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, flexShrink: 0 }}>💡</span>
          Le principe clé
        </h3>
        <p style={{ fontSize: 14, color: '#334155' }}>
          À l'examen, tu dois non seulement nommer les acteurs mais <strong>expliquer pourquoi tu les mobilises</strong> pour cette campagne précise. Un acteur sans justification ne rapporte aucun point.
        </p>
      </Card>

      <SubsectionTitle>🏢 Les acteurs côté Annonceur</SubsectionTitle>
      <div className={styles.actorGrid}>
        <ActorCard icon="👔" title="Direction Marketing / Com" desc="Définit la stratégie, valide les grandes orientations, gère le budget global." />
        <ActorCard icon="✍️" title="Chef de Projet / Traffic Manager" desc="Coordonne les intervenants, gère les plannings et s'assure que tout est livré en temps et en heure." />
        <ActorCard icon="📊" title="Chargé d'Études" desc="Réalise la veille et les études de marché pour alimenter le diagnostic." />
        <ActorCard icon="💻" title="Community Manager" desc="Gère les réseaux sociaux au quotidien : publications, interactions, modération." />
      </div>

      <SubsectionTitle>🎨 Les acteurs côté Agence</SubsectionTitle>
      <div className={styles.actorGrid}>
        <ActorCard icon="🏛️" title="Agence de Communication (360°)" desc="Gère toute la stratégie et la production. Mobilisée pour des campagnes d'envergure multi-support." />
        <ActorCard icon="🎭" title="Directeur Artistique (DA)" desc="Crée la direction visuelle de la campagne. Travaille avec un rédacteur pour former le binôme créatif." />
        <ActorCard icon="✒️" title="Concepteur-Rédacteur" desc="Écrit les textes (slogans, accroche, corps de texte). Binôme du DA dans la conception créative." />
        <ActorCard icon="📱" title="Agence Digitale" desc="Spécialisée web, réseaux sociaux, SEO/SEA, campagnes digitales." />
        <ActorCard icon="📺" title="Régie Publicitaire" desc="Commercialise les espaces publicitaires pour un média (TF1 Publicité, France Pub…)." />
        <ActorCard icon="🖨️" title="Imprimeur / Façonnier" desc="Produit les supports print (flyers, affiches, brochures)." />
      </div>

      <SubsectionTitle>📣 Les acteurs Relais (prescripteurs)</SubsectionTitle>
      <div className={styles.actorGrid}>
        <ActorCard icon="📰" title="Journalistes & RP" desc="Relaient le message dans la presse. Mobilisés via des communiqués et dossiers de presse." />
        <ActorCard icon="🌟" title="Influenceurs" desc="Relaient le message auprès de leur communauté. Pertinents si la cible est présente sur les réseaux sociaux." />
        <ActorCard icon="🤝" title="Partenaires & Associations" desc="Apportent de la crédibilité et un réseau complémentaire." />
      </div>

      <Card accent="red" style={{ marginTop: 24 }}>
        <h3 style={{ fontSize: '15.5px', fontWeight: 700, marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--ink)' }}>
          <span style={{ background: 'var(--accent1)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, flexShrink: 0 }}>🎓</span>
          Qui mobiliser selon le type de campagne ?
        </h3>
        <TableWrap>
          <thead><tr><th>Type de campagne</th><th>Acteurs clés à mobiliser</th></tr></thead>
          <tbody>
            <tr><td style={{ fontWeight: 700 }}>Lancement de produit grand public</td><td>Agence 360°, DA + Rédacteur, Régie TV, Influenceurs, RP</td></tr>
            <tr><td style={{ fontWeight: 700 }}>Campagne B2B (ex: Recyclea)</td><td>Agence digitale, Community Manager, Agence RP spécialisée, Chargé d'études</td></tr>
            <tr><td style={{ fontWeight: 700 }}>Événement / Salon</td><td>Agence événementielle, Chef de projet, Imprimeur, Régie pour l'affichage</td></tr>
            <tr><td style={{ fontWeight: 700 }}>Campagne emailing</td><td>Community Manager, Agence digitale, Chef de projet, Responsable RGPD</td></tr>
            <tr><td style={{ fontWeight: 700 }}>Relations presse</td><td>Attaché de presse, Journalistes ciblés, Rédacteur (communiqué)</td></tr>
          </tbody>
        </TableWrap>
        <Tip>En copie : « Nous ferons appel à une agence digitale spécialisée BtoB car notre cible (DSI de PME) est principalement active sur LinkedIn. »</Tip>
      </Card>
    </Section>
  )
}
