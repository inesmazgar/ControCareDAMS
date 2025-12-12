import { TeamMember } from '../TeamMember';

export function TeamHugo() {
  return (
    <TeamMember
      nom="Hugo Saulig"
      role="Design et développement"
      responsabilites={[
        "Design interface",
        "Développement web",
        "Intégration"
      ]}
      email="hugo.saulig@et.umontpellier.fr"
      color="teal"
    />
  );
}
