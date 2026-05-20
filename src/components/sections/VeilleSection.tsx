import { Section, SectionTitle, SectionSubtitle, Card, SubsectionTitle, Example } from '../ui'
import styles from './VeilleSection.module.css'

interface ToolCardProps {
  name: string;
  type: string;
  typeClass: string;
  desc: React.ReactNode;
  example?: React.ReactNode;
}

function ToolCard({ name, type, typeClass, desc, example }: ToolCardProps) {
  return (
    <div className={styles.toolCard}>
      <div className={styles.toolName}>{name}</div>
      <span className={`${styles.toolType} ${styles[typeClass]}`}>{type}</span>
      <div className={styles.toolDesc}>{desc}</div>
      {example && <div className={styles.example}>{example}</div>}
    </div>
  )
}

export default function VeilleSection() {
  return (
    <Section>
      <SectionTitle icon="🔍">Veille &amp; Outils Professionnels</SectionTitle>
      <SectionSubtitle>Quel outil choisir et pourquoi — comment argumenter en examen</SectionSubtitle>

      <Card accent="green" style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: '15.5px', fontWeight: 700, marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--ink)' }}>
          <span style={{ background: 'var(--accent2)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, flexShrink: 0 }}>💡</span>
          Pourquoi faire de la veille ?
        </h3>
        <p style={{ fontSize: 14, color: '#334155' }}>
          La veille permet de <strong>rester informé</strong> en continu sur le marché, la concurrence, les tendances et les performances de ses propres campagnes. C'est la base du diagnostic (étape 1 du plan de com).
        </p>
      </Card>

      <SubsectionTitle>📊 Analyse Audience &amp; Comportement</SubsectionTitle>
      <div className={styles.toolGrid}>
        <ToolCard 
          name="Google Analytics" type="Analyse Web" typeClass="tt-analyse"
          desc={<>Mesure le trafic d'un site web : qui visite, d'où viennent les visiteurs, combien de temps restent-ils. <strong>Gratuit.</strong></>}
          example={<Example>« Nous utiliserons GA pour mesurer le taux de rebond et le temps de visite sur la landing page. »</Example>}
        />
        <ToolCard 
          name="Hotjar / Crazy Egg" type="UX / Heatmaps" typeClass="tt-analyse"
          desc="Montre sur quelles zones une page est cliquée via des cartes de chaleur. Idéal pour optimiser l'ergonomie d'un site."
        />
        <ToolCard 
          name="Adobe Analytics" type="Analyse avancée" typeClass="tt-analyse"
          desc="Version entreprise, plus puissante que Google Analytics. Segmentation fine des audiences, attribution multi-touch."
        />
        <ToolCard 
          name="Matomo" type="RGPD friendly" typeClass="tt-analyse"
          desc="Alternative à GA respectueuse du RGPD. Les données restent sur vos serveurs. Idéal pour les organisations publiques."
          example={<Example>« Nous choisissons Matomo car il est 100% RGPD-compliant, sans transfert vers des serveurs américains. »</Example>}
        />
      </div>

      <SubsectionTitle>📺 Mesure Médias Traditionnels</SubsectionTitle>
      <div className={styles.toolGrid}>
        <ToolCard 
          name="Médiamétrie (Médiamat)" type="Audience TV/Radio" typeClass="tt-mesure"
          desc={<>Mesure les audiences télévisées et radio en France. Fournit la <strong>PDA</strong> (Part d'Audience) et la durée d'écoute moyenne.</>}
          example={<Example>« Selon Médiamétrie, TF1 réalise une PDA de 20% en prime time — c'est pourquoi nous y diffuserons notre spot. »</Example>}
        />
        <ToolCard 
          name="Kantar Media" type="Pression publicitaire" typeClass="tt-mesure"
          desc="Mesure les investissements publicitaires de la concurrence. Permet de savoir combien dépense un concurrent et sur quels médias."
        />
        <ToolCard 
          name="Kantar Sofres / BVA" type="Études opinion" typeClass="tt-mesure"
          desc="Instituts de sondage qui mesurent la notoriété des marques, la satisfaction client, les perceptions."
        />
      </div>

      <SubsectionTitle>📅 Planification Réseaux Sociaux</SubsectionTitle>
      <div className={styles.toolGrid}>
        <ToolCard 
          name="Hootsuite" type="Planification" typeClass="tt-planning"
          desc="Planifie et publie sur tous les réseaux sociaux depuis un seul tableau de bord. Mesure l'engagement en temps réel."
        />
        <ToolCard 
          name="Buffer" type="Planification" typeClass="tt-planning"
          desc="Plus simple et moins cher que Hootsuite. Idéal pour les petites structures. Propose des analyses de performance par post."
        />
        <ToolCard 
          name="Sprout Social" type="Planification avancée" typeClass="tt-planning"
          desc="Outil complet incluant CRM sur les réseaux sociaux + analyse approfondie."
        />
      </div>

      <SubsectionTitle>📧 Outils d'Emailing</SubsectionTitle>
      <div className={styles.toolGrid}>
        <ToolCard 
          name="Mailchimp" type="Emailing" typeClass="tt-emailing"
          desc="Solution leader pour newsletters. Segmentation, A/B testing, suivi des taux d'ouverture et de clics."
        />
        <ToolCard 
          name="Brevo (ex-Sendinblue)" type="Emailing" typeClass="tt-emailing"
          desc="Solution française. Email + SMS + CRM. RGPD-compliant. Idéal pour les campagnes BtoB."
          example={<Example>« Nous utiliserons Brevo pour notre campagne B2B car il est RGPD-compliant. »</Example>}
        />
        <ToolCard 
          name="ActiveCampaign" type="Marketing automation" typeClass="tt-emailing"
          desc="Automatise des séquences (ex : envoyer un email J+3 si le prospect n'a pas ouvert le premier)."
        />
      </div>

      <SubsectionTitle>📰 Veille Informationnelle</SubsectionTitle>
      <div className={styles.toolGrid}>
        <ToolCard 
          name="Feedly / Inoreader" type="Flux RSS" typeClass="tt-veille"
          desc="Agrège les flux RSS de tous les sites et blogs. Permet une veille sectorielle quotidienne automatisée."
        />
        <ToolCard 
          name="Google Alerts" type="Veille marque" typeClass="tt-veille"
          desc="Gratuit et simple : reçoit un email dès qu'une mention de ta marque ou d'un mot-clé apparaît sur le web."
        />
        <ToolCard 
          name="Mention / Talkwalker" type="E-réputation" typeClass="tt-veille"
          desc="Surveille en temps réel les mentions d'une marque sur les réseaux sociaux, la presse et les forums."
        />
      </div>

      <Card accent="yellow" style={{ marginTop: 24 }}>
        <h3 style={{ fontSize: '15.5px', fontWeight: 700, marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--ink)' }}>
          <span style={{ background: 'var(--accent3)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, flexShrink: 0 }}>🎓</span>
          Comment choisir un outil à l'examen ?
        </h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '10px 0 10px 26px', position: 'relative', fontSize: 14, color: '#334155', borderBottom: '1px solid var(--border)' }}>
            <span style={{ position: 'absolute', left: 2, color: 'var(--accent1)', fontWeight: 900, fontSize: 18 }}>›</span>
            Si on parle de <strong>trafic web</strong> → Google Analytics ou Matomo
          </li>
          <li style={{ padding: '10px 0 10px 26px', position: 'relative', fontSize: 14, color: '#334155', borderBottom: '1px solid var(--border)' }}>
            <span style={{ position: 'absolute', left: 2, color: 'var(--accent1)', fontWeight: 900, fontSize: 18 }}>›</span>
            Si on parle de <strong>TV ou radio</strong> → Médiamétrie
          </li>
          <li style={{ padding: '10px 0 10px 26px', position: 'relative', fontSize: 14, color: '#334155', borderBottom: '1px solid var(--border)' }}>
            <span style={{ position: 'absolute', left: 2, color: 'var(--accent1)', fontWeight: 900, fontSize: 18 }}>›</span>
            Si on parle de <strong>concurrence / pression pub</strong> → Kantar Media
          </li>
          <li style={{ padding: '10px 0 10px 26px', position: 'relative', fontSize: 14, color: '#334155', borderBottom: '1px solid var(--border)' }}>
            <span style={{ position: 'absolute', left: 2, color: 'var(--accent1)', fontWeight: 900, fontSize: 18 }}>›</span>
            Si on parle d'<strong>emailing</strong> → Mailchimp ou Brevo
          </li>
          <li style={{ padding: '10px 0 10px 26px', position: 'relative', fontSize: 14, color: '#334155', borderBottom: '1px solid var(--border)' }}>
            <span style={{ position: 'absolute', left: 2, color: 'var(--accent1)', fontWeight: 900, fontSize: 18 }}>›</span>
            Si on parle de <strong>réseaux sociaux</strong> → Hootsuite ou Buffer
          </li>
          <li style={{ padding: '10px 0 10px 26px', position: 'relative', fontSize: 14, color: '#334155' }}>
            <span style={{ position: 'absolute', left: 2, color: 'var(--accent1)', fontWeight: 900, fontSize: 18 }}>›</span>
            Si le contexte est <strong>RGPD / données sensibles</strong> → Matomo, Brevo
          </li>
        </ul>
      </Card>
    </Section>
  )
}
