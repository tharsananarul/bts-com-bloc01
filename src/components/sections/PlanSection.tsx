import { Section, SectionTitle, SectionSubtitle, Card, CardTitle, Example, Warning, Tip, StyledList } from '../ui'
import Mnemonic from './Mnemonic'
import SmartGrid from './SmartGrid'
import CiblesVisual from './CiblesVisual'
import PoemGrid from './PoemGrid'
import Steps from './Steps'
import styles from './PlanSection.module.css'

export default function PlanSection() {
  return (
    <Section>
      <SectionTitle icon="📋">Le Plan de Communication</SectionTitle>
      <SectionSubtitle>Les étapes dans l'ordre chronologique — de l'analyse au bilan</SectionSubtitle>

      <Mnemonic />

      <Steps>
        {/* Étape 1 */}
        <div className={styles.step} data-n="1">
          <span className={styles.tag}>DIAGNOSTIC</span>
          <h4>Étape 1 — Le Diagnostic (SWOT)</h4>
          <p>On photographie la situation de l'organisation <strong>avant</strong> de faire quoi que ce soit. On utilise la matrice <strong>SWOT</strong> (Forces / Faiblesses / Opportunités / Menaces).</p>
          <StyledList items={[
            <><strong>Forces &amp; Faiblesses</strong> = internes (ce que l'on maîtrise)</>,
            <><strong>Opportunités &amp; Menaces</strong> = externes (le marché, l'environnement)</>,
          ]} />
          <Example>Une marque de sport voit que le running est en plein boom (opportunité), mais qu'elle est peu connue des jeunes (faiblesse). Son SWOT le fait apparaître clairement.</Example>
          <Tip>À l'examen : colorise ton SWOT avec 2 couleurs (vert = positif, rouge = négatif). Tu marques des points en lisibilité.</Tip>
        </div>

        {/* Étape 2 */}
        <div className={styles.step} data-n="2">
          <span className={styles.tag}>PROBLÈME</span>
          <h4>Étape 2 — Le Problème de Communication</h4>
          <p>C'est <strong>le défi central</strong> que ta campagne doit résoudre. Formule toujours : <strong>« Comment... alors que... ? »</strong></p>
          <Example>Comment faire de Recyclea LA référence du reconditionnement B2B alors que les entreprises ont une image vieillotte et méfiante du reconditionné ?</Example>
          <Tip>Cette phrase doit apparaître dans ta copie dès le début. C'est le fil conducteur de toute ta réponse.</Tip>
        </div>

        {/* Étape 3 */}
        <div className={styles.step} data-n="3">
          <span className={styles.tag}>POSITIONNEMENT</span>
          <h4>Étape 3 — Le Positionnement</h4>
          <p>La place que la marque veut occuper <strong>dans l'esprit de la cible</strong>. Un bon positionnement répond aux 4 critères :</p>
          <SmartGrid items={[
            { letter: 'C', color: 'var(--accent2)', label: 'Crédible',   desc: 'Justifié par des preuves réelles' },
            { letter: 'D', color: 'var(--accent1)', label: 'Distinctif', desc: 'Différent de la concurrence' },
            { letter: 'A', color: 'var(--accent3)', label: 'Attractif',  desc: 'Répond à un besoin réel' },
            { letter: 'D', color: 'var(--accent4)', label: 'Durable',    desc: 'Pas un simple effet de mode' },
          ]} />
          <Example>Recyclea : « Le partenaire IT des entreprises qui veulent croître de façon responsable. » → Crédible, Distinctif, Attractif.</Example>
        </div>

        {/* Étape 4 */}
        <div className={styles.step} data-n="4">
          <span className={styles.tag}>OBJECTIFS SMART</span>
          <h4>Étape 4 — Les Objectifs SMART</h4>
          <p>On ne communique jamais pour rien. Les objectifs se classent en <strong>3 niveaux psychologiques</strong> :</p>
          <StyledList items={[
            <><strong>Cognitif</strong> (Faire SAVOIR) → Informer, faire connaître. Ex : « augmenter la notoriété de 20% »</>,
            <><strong>Affectif</strong> (Faire AIMER) → Modifier l'image, créer de la sympathie. Ex : « rajeunir l'image »</>,
            <><strong>Conatif</strong> (Faire AGIR) → Pousser à l'achat, à l'inscription. Ex : « générer 200 leads en 3 mois »</>,
          ]} />
          <SmartGrid items={[
            { letter: 'S', color: 'var(--accent1)', label: 'Spécifique',  desc: 'Précis, pas vague' },
            { letter: 'M', color: 'var(--accent2)', label: 'Mesurable',   desc: 'On peut le quantifier' },
            { letter: 'A', color: 'var(--accent3)', label: 'Atteignable', desc: 'Réaliste avec les ressources' },
            { letter: 'R', color: 'var(--accent4)', label: 'Réaliste',    desc: 'Cohérent avec le marché' },
            { letter: 'T', color: 'var(--accent1)', label: 'Temporel',    desc: 'Défini dans le temps' },
          ]} />
          <Example>MAUVAIS : « améliorer la notoriété ». BON : « Augmenter le taux de notoriété assistée de 15% auprès des DSI en Île-de-France d'ici septembre 2025. »</Example>
        </div>

        {/* Étape 5 */}
        <div className={styles.step} data-n="5">
          <span className={styles.tag}>CIBLES</span>
          <h4>Étape 5 — Les Cibles de Communication</h4>
          <p>Si on parle à tout le monde, on ne parle à personne. On segmente toujours :</p>
          <CiblesVisual />
        </div>

        {/* Étape 6 */}
        <div className={styles.step} data-n="6">
          <span className={styles.tag}>MOYENS</span>
          <h4>Étape 6 — Les Moyens (POEM)</h4>
          <p>On choisit les canaux selon la cible et le budget. La classification <strong>POEM</strong> est incontournable :</p>
          <PoemGrid />
          <Warning>Justifie toujours tes choix de moyens ! Dire « je choisis LinkedIn » sans expliquer pourquoi = 0 point. Dire « je choisis LinkedIn car 80% des DSI y sont actifs » = plein de points.</Warning>
        </div>

        {/* Étape 7 */}
        <div className={styles.step} data-n="7">
          <span className={styles.tag}>BUDGET</span>
          <h4>Étape 7 — Le Budget</h4>
          <p>Il définit les limites de la campagne et conditionne tous les choix précédents. On répartit entre :</p>
          <StyledList items={[
            'Achat d\'espace (Paid Media)',
            'Production créative (agence, graphiste, vidéo)',
            'Événementiel et salons',
            'Outils numériques (logiciels, emailing)',
          ]} />
        </div>

        {/* Étape 8 */}
        <div className={styles.step} data-n="8">
          <span className={styles.tag}>KPIs / BILAN</span>
          <h4>Étape 8 — Les KPIs (Indicateurs de Performance)</h4>
          <p>On définit des KPIs <strong>avant</strong> de lancer, pour mesurer <strong>après</strong>.</p>
          <StyledList items={[
            <><strong>Cognitif</strong> → Taux de notoriété, nombre d'impressions, portée</>,
            <><strong>Affectif</strong> → Taux d'engagement, sentiment analysis, score d'image</>,
            <><strong>Conatif</strong> → Taux de conversion, nombre de leads, CTR, ventes générées</>,
          ]} />
          <Example>Pour une campagne emailing B2B : taux d'ouverture (cognitif), taux de clics (conatif), nombre de demandes de devis générées (conatif).</Example>
        </div>
      </Steps>

      {/* Brief créatif */}
      <Card accent="purple" style={{ marginTop: 28 }}>
        <CardTitle badge="+" badgeColor="purple">Le Brief Créatif — Bonus indispensable</CardTitle>
        <p style={{ fontSize: 13.5, color: '#475569', marginBottom: 12 }}>Document transmis à l'agence ou au créatif pour cadrer la campagne.</p>
        <StyledList items={[
          <><strong>La Promesse</strong> : L'idée centrale à faire passer. Ex : « Recyclea, le choix responsable et intelligent »</>,
          <><strong>La Preuve</strong> : Ce qui rend la promesse crédible. Ex : Expertise, label RSE, 10 ans d'expérience</>,
          <><strong>Le Ton</strong> : Registre de communication. Ex : Professionnel, rassurant, moderne</>,
          <><strong>Les Contraintes</strong> : Légales (pas de greenwashing) et annonceur (charte graphique)</>,
        ]} />
        <Tip>3 modèles de brief : Copy Strategy (Procter &amp; Gamble), Plan de Travail Créatif (Y&amp;R), Star Strategy (Havas). Citez-en un pour briller à l'examen.</Tip>
      </Card>
    </Section>
  )
}
