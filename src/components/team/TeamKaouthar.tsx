import { TeamMember } from '../TeamMember';

export function TeamKaouthar() {
  return (
    <TeamMember
      nom="Kaoutar ElFenni"
      role="Cheffe de projet"
      responsabilites={[
        "Coordination générale",
        "Gestion d'équipe",
        "Organisation du travail"
      ]}
      email="kaoutar.elfenni@et.umontpellier.fr"
      color="green"
    />
  );
}