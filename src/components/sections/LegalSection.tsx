import { Section, SectionTitle, SectionSubtitle, Card, CardTitle, Example, Warning, Tip, StyledList, TableWrap } from '../ui'

export default function LegalSection() {
  return (
    <Section>
      <SectionTitle icon="⚖️">Le Cadre Légal</SectionTitle>
      <SectionSubtitle>Toutes les lois à connaître avec leurs obligations et exemples de justification en copie</SectionSubtitle>

      <Card accent="red">
        <CardTitle badge="1" badgeColor="red">Loi Toubon (1994) — La langue française</CardTitle>
        <StyledList items={[
          <><strong>Le français est obligatoire</strong> dans tout message publicitaire diffusé en France</>,
          <>Exceptions : noms de marques déposées, slogans déposés, produits typiques étrangers</>,
        ]} />
        <Example>Une pub avec « Just Do It » est autorisée (signature déposée Nike). Mais « Our products are the best » sans traduction serait illégale.</Example>
        <Tip>En copie : « Conformément à la loi Toubon, tous les messages de notre campagne seront rédigés en français. »</Tip>
      </Card>

      <Card accent="red">
        <CardTitle badge="2" badgeColor="red">Loi Évin (1991) — Alcool &amp; Tabac</CardTitle>
        <TableWrap>
          <thead>
            <tr><th>Produit</th><th>Ce qui est interdit</th><th>Ce qui est autorisé</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: 700, color: '#dc2626', whiteSpace: 'nowrap' }}>Tabac</td>
              <td>Toute publicité, sans exception</td>
              <td>Rien. Interdiction totale.</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 700, color: '#dc2626', whiteSpace: 'nowrap' }}>Alcool</td>
              <td>TV, cinéma, affichage pour les moins de 18 ans</td>
              <td>Presse adulte, radio (certaines heures), internet + message sanitaire obligatoire.</td>
            </tr>
          </tbody>
        </TableWrap>
        <Example>Une marque de bière ne peut pas faire de spot TV en France. Elle peut faire une campagne presse adulte avec « L'abus d'alcool est dangereux pour la santé. »</Example>
        <Tip>En copie : « Ce support n'étant pas autorisé par la loi Évin, nous optons pour la presse spécialisée adulte. »</Tip>
      </Card>

      <Card accent="red">
        <CardTitle badge="3" badgeColor="red">Droit d'auteur &amp; Contrefaçon</CardTitle>
        <StyledList items={[
          <>Toute utilisation d'une œuvre sans autorisation = <strong>délit de contrefaçon</strong></>,
          <>Les personnes dans une pub doivent avoir signé un <strong>accord écrit</strong> (droit à l'image)</>,
          <>Le droit à la vie privée est protégé : pas de photo/vidéo sans consentement</>,
        ]} />
        <Tip>En copie : « Toutes les visuels seront libres de droits. Les personnes apparaissant auront signé une autorisation. »</Tip>
      </Card>

      <Card accent="red">
        <CardTitle badge="4" badgeColor="red">RGPD (2018) — Protection des données</CardTitle>
        <StyledList items={[
          <>Toute collecte de données personnelles nécessite le <strong>consentement explicite</strong></>,
          <>Les personnes ont le droit d'accéder, modifier et effacer leurs données (<strong>droit à l'oubli</strong>)</>,
          <>Toute base de données marketing doit être déclarée</>,
          <>En cas de violation : amendes jusqu'à <strong>4% du chiffre d'affaires mondial</strong></>,
        ]} />
        <Example>Lors d'une campagne emailing, on ne peut envoyer des mails qu'aux contacts ayant explicitement coché « J'accepte de recevoir des communications ».</Example>
        <Tip>En copie : « Conformément au RGPD, notre campagne ne ciblera que des contacts ayant donné leur consentement opt-in. »</Tip>
      </Card>

      <Card accent="red">
        <CardTitle badge="5" badgeColor="red">Recommandations ARPP — Publicité responsable</CardTitle>
        <StyledList items={[
          <>L'<strong>ARPP</strong> fixe des règles déontologiques pour la publicité</>,
          <>Interdit : publicités sexistes, stéréotypes dégradants, contenus discriminatoires</>,
          <>Interdit : le <strong>greenwashing</strong> = prétendre être écologique sans preuve</>,
          <>Obligatoire : toute allégation environnementale doit être vérifiable et prouvée</>,
        ]} />
        <Warning>Le greenwashing est une faute grave. Si tu proposes une campagne avec un argument écologique, tu dois mentionner les preuves (label, certification, données chiffrées).</Warning>
        <Tip>En copie : « Conformément aux recommandations de l'ARPP, nos arguments RSE s'appuieront sur des données certifiées. »</Tip>
      </Card>

      <Card accent="green">
        <CardTitle badge="+" badgeColor="green">Autres réglementations sectorielles</CardTitle>
        <TableWrap>
          <thead><tr><th>Secteur</th><th>Obligation</th></tr></thead>
          <tbody>
            <tr><td style={{ fontWeight: 700, color: '#dc2626' }}>Médicaments</td><td>Autorisation de l'ANSM requise avant toute diffusion.</td></tr>
            <tr><td style={{ fontWeight: 700, color: '#dc2626' }}>Alimentaire</td><td>Mentions sanitaires obligatoires (ex : « Mangez 5 fruits et légumes ») ou taxe de 1,5%.</td></tr>
            <tr><td style={{ fontWeight: 700, color: '#dc2626' }}>Crédit bancaire</td><td>Affichage obligatoire du TAEG, de la durée et du coût total.</td></tr>
            <tr><td style={{ fontWeight: 700, color: '#dc2626' }}>Pub comparative</td><td>Doit se baser sur des éléments objectifs et être loyale. Sinon = tromperie.</td></tr>
            <tr><td style={{ fontWeight: 700, color: '#dc2626' }}>Énergies fossiles</td><td>Publicité interdite depuis 2023, sauf exceptions (biocarburants).</td></tr>
          </tbody>
        </TableWrap>
      </Card>

      <Card accent="yellow">
        <CardTitle badge="🎓" badgeColor="yellow">Contrôle &amp; Régulation</CardTitle>
        <StyledList items={[
          <><strong>ARCOM</strong> : Régule l'audiovisuel (TV, radio). Surveille le respect des règles de diffusion.</>,
          <><strong>ARPP</strong> : Organisme professionnel qui émet des recommandations déontologiques.</>,
          <><strong>DGCCRF</strong> : Réprime les fraudes (publicité mensongère, pratiques déloyales).</>,
        ]} />
      </Card>
    </Section>
  )
}
