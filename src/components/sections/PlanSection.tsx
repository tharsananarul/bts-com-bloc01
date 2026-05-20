import { Section, SectionTitle, SectionSubtitle, Card, CardTitle, Example, Warning, Tip, StyledList, TableWrap } from '../ui'
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

          <div style={{ marginTop: 24, paddingTop: 20, borderTop: '2px dashed var(--border)' }}>
            <h5 style={{ fontSize: 14, fontWeight: 700, marginBottom: 8, color: 'var(--ink)' }}>L'Analyse PESTEL (Le Macro-environnement)</h5>
            <p style={{ fontSize: 13.5, color: '#475569', marginBottom: 12 }}>On scanne tout ce qui se passe à l'extérieur de l'entreprise pour repérer les grandes tendances qui vont l'impacter. C'est 100 % externe.</p>
            <StyledList items={[
              <><strong>Politique</strong> (stabilité de l'État, aides gouvernementales)</>,
              <><strong>Économique</strong> (inflation, pouvoir d'achat)</>,
              <><strong>Socioculturel</strong> (modes de vie, valeurs culturelles, tendances de consommation)</>,
              <><strong>Technologique</strong> (innovations, IA, réseaux sociaux)</>,
              <><strong>Environnemental</strong> (écologie, météo, climat)</>,
              <><strong>Légal</strong> (lois, RGPD, normes)</>,
            ]} />
            <Example>L'État passe une loi interdisant les emballages plastiques (Légal et Environnemental). C'est une menace pour une marque d'eau en bouteille, mais une grosse opportunité pour une marque de gourdes réutilisables.</Example>
            <Tip>À l'examen : Fais ton PESTEL au brouillon pour "fouiller" le macro-environnement. Ce que tu trouves de pertinent, tu le tries ensuite directement dans les cases "Opportunités" ou "Menaces" de ton SWOT sur ta copie. Le PESTEL nourrit le SWOT (l'externe). Ne mélange pas les deux !</Tip>
          </div>
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

          <div style={{ marginTop: 32, paddingTop: 24, borderTop: '2px dashed var(--border)' }}>
            <h5 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8, color: 'var(--ink)' }}>Les Motivations &amp; Freins</h5>
            <p style={{ fontSize: 13.5, color: '#475569', marginBottom: 16 }}>Pour chaque cible, il faut comprendre pourquoi elle achèterait (<strong>motivations</strong>) et pourquoi elle n'achèterait pas (<strong>freins</strong>). Ça permet de construire un message qui lève les freins et active les motivations.</p>
            
            <h6 style={{ fontSize: 13.5, fontWeight: 700, marginBottom: 12, color: 'var(--ink)' }}>Les types de motivations :</h6>
            <TableWrap>
              <thead><tr><th>Type</th><th>Explication</th><th>Exemple</th></tr></thead>
              <tbody>
                <tr><td style={{ fontWeight: 600 }}>Hédoniste</td><td>Plaisir, envie personnelle</td><td>« J'ai envie de ce produit »</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Oblative</td><td>Faire plaisir aux autres</td><td>« C'est pour offrir »</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Auto-expression</td><td>Montrer qui on est, ses valeurs</td><td>« Ça correspond à mon engagement RSE »</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Rationnelle</td><td>Logique, économie</td><td>« C'est moins cher et plus pratique »</td></tr>
              </tbody>
            </TableWrap>

            <h6 style={{ fontSize: 13.5, fontWeight: 700, marginTop: 24, marginBottom: 12, color: 'var(--ink)' }}>Les types de freins :</h6>
            <TableWrap>
              <thead><tr><th>Type</th><th>Explication</th><th>Exemple</th></tr></thead>
              <tbody>
                <tr><td style={{ fontWeight: 600 }}>Financier</td><td>Trop cher</td><td>« Je n'ai pas le budget »</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Psychologique</td><td>Peur, méfiance</td><td>« Je ne fais pas confiance au reconditionné »</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Manque d'information</td><td>Ne connaît pas la marque ou l'offre</td><td>« Je ne connais pas cette marque »</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Inertie</td><td>Habitude, résistance au changement</td><td>« J'ai toujours fait autrement »</td></tr>
              </tbody>
            </TableWrap>
          </div>
        </div>

        {/* Étape 6 */}
        <div className={styles.step} data-n="6">
          <span className={styles.tag}>MOYENS</span>
          <h4>Étape 6 — Les Moyens (POEM)</h4>
          <p>On choisit les canaux selon la cible et le budget. La classification <strong>POEM</strong> est incontournable :</p>
          <PoemGrid />
          
          <div style={{ marginTop: 24 }}>
            <h5 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: 'var(--ink)' }}>MÉDIAS (Mass media)</h5>
            <TableWrap>
              <thead><tr><th>Moyen</th><th>Exemples concrets</th></tr></thead>
              <tbody>
                <tr><td style={{ fontWeight: 600 }}>Télévision</td><td>Spot publicitaire, parrainage d'émission</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Radio</td><td>Spot audio, jingle, sponsoring d'émission</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Presse</td><td>Annonce presse magazine, presse quotidienne, presse spécialisée</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Cinéma</td><td>Spot avant séance</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Affichage OOH</td><td>Panneaux 4x3, abribus, sucettes, mobilier urbain</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Affichage DOOH</td><td>Écrans digitaux animés (gares, centres commerciaux, aéroports)</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Internet</td><td>Site web, SEO, SEA (Google Ads), display, bannières</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Réseaux sociaux</td><td>Posts organiques + sponsorisés (LinkedIn, Instagram, Facebook, TikTok)</td></tr>
              </tbody>
            </TableWrap>
          </div>

          <div style={{ marginTop: 24, marginBottom: 16 }}>
            <h5 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: 'var(--ink)' }}>HORS-MÉDIAS</h5>
            <TableWrap>
              <thead><tr><th>Moyen</th><th>Exemples concrets</th></tr></thead>
              <tbody>
                <tr><td style={{ fontWeight: 600 }}>Marketing direct</td><td>Emailing, SMS, courrier postal, phoning</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Relations presse (RP)</td><td>Communiqué de presse, dossier de presse, conférence de presse</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Relations publiques</td><td>Lobbying, événements institutionnels, portes ouvertes</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Événementiel</td><td>Lancement produit, soirée, festival, stand</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Foires &amp; Salons</td><td>Stand sur un salon professionnel ou grand public</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Street marketing</td><td>Distribution de flyers, opérations en rue, flash mob</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Promotion des ventes</td><td>Réductions, bons de réduction, jeux-concours, offres spéciales</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Édition</td><td>Brochures, plaquettes, catalogues, flyers</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Parrainage (Sponsoring)</td><td>Logo sur un maillot, naming d'un événement sportif</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Mécénat</td><td>Don à une association, mécénat culturel (sans contrepartie directe)</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Partenariats</td><td>Collaborations avec d'autres marques ou institutions</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Influence</td><td>Partenariat avec des influenceurs, UGC (contenu généré par les utilisateurs)</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Communication interne</td><td>Intranet, journal interne, séminaire, réunion d'équipe</td></tr>
              </tbody>
            </TableWrap>
          </div>

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
          <p style={{ marginTop: 12, fontSize: 13.5, color: '#475569' }}>Les KPIs se divisent en 2 types :</p>
          
          <h5 style={{ fontSize: 14, fontWeight: 700, marginTop: 16, marginBottom: 8, color: 'var(--ink)' }}>📊 KPIs Quantitatifs (ce qu'on mesure en chiffres)</h5>
          <StyledList items={[
            <><strong>Cognitif</strong> → Nombre d'impressions, taux de notoriété, portée, nombre de vues</>,
            <><strong>Affectif</strong> → Taux d'engagement, nombre de likes/partages, score de satisfaction</>,
            <><strong>Conatif</strong> → Taux de conversion, nombre de leads, CTR, chiffre d'affaires généré, nombre de ventes</>,
          ]} />

          <h5 style={{ fontSize: 14, fontWeight: 700, marginTop: 16, marginBottom: 8, color: 'var(--ink)' }}>💬 KPIs Qualitatifs (ce qu'on mesure en perception)</h5>
          <StyledList items={[
            <><strong>Cognitif</strong> → Qualité de la mémorisation du message, clarté du message perçu</>,
            <><strong>Affectif</strong> → Sentiment analysis (positif/négatif/neutre), perception de l'image de marque, avis clients</>,
            <><strong>Conatif</strong> → Qualité des leads générés, niveau de satisfaction après achat</>,
          ]} />

          <Example>
            <strong>Exemple Recyclea :</strong><br />
            <strong>Quantitatif :</strong> 200 leads générés en 3 mois, taux d'ouverture emailing de 25%, 10 000 impressions sur LinkedIn.<br />
            <strong>Qualitatif :</strong> Perception du reconditionné comme "fiable et professionnel" mesurée via sondage post-campagne.
          </Example>
          
          <Tip>À l'examen : Cite toujours au moins un KPI quantitatif ET un KPI qualitatif. Ça montre que tu mesures à la fois les résultats concrets et l'impact sur l'image.</Tip>
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
