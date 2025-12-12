import { TeamMember } from '../TeamMember';

export function TeamInes() {
  return (
    <TeamMember
      nom="Ines Mazgar"
      role="Design et développement"
      responsabilites={[
        "Design interface",
        "Développement web",
        "Expérience utilisateur"
      ]}
      email="ines.mazgar@et.umontpellier.fr"
      color="blue"
    />
  );
}
