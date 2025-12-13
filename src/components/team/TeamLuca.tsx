import { TeamMember } from '../TeamMember';

export function TeamLuca() {
  return (
    <TeamMember
      nom="Luca Figlie"
      role="Documentation et contenu"
      responsabilites={[
        "Bibliographie",
        "Rédaction contenus",
        "Compilation des sources"
      ]}
      email="luca.figlie@etu.umontpellier.fr"
      color="indigo"
    />
  );
}
