import { TeamMember } from '../TeamMember';

export function TeamValentin() {
  return (
    <TeamMember
      nom="Valentin Blanc"
      role="Recherche et analyse"
      responsabilites={[
        "Revue bibliographique",
        "Analyse des arguments",
        "Recherche documentaire"
      ]}
      email="valentin.blanc@et.umontpellier.fr"
      color="orange"
    />
  );
}
