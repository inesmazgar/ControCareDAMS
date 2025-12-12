import { TeamMember } from '../TeamMember';

export function TeamIsabelle() {
  return (
    <TeamMember
      nom="Isabelle Bourdon"
      role="Superviseur"
      responsabilites={[
        "Encadrement pédagogique",
        "Méthodologie de recherche",
        "Suivi du projet"
      ]}
      email="isabelle.bourdon@umontpellier.fr"
      color="purple"
    />
  );
}
