import { TeamGroup } from '../TeamGroup';

export function TeamGroup1() {
  const members = [
    {
      nom: 'Isabelle Bourdon',
      role: 'Superviseur',
      responsabilites: [
        'Encadrement pédagogique',
        'Méthodologie de recherche',
        'Suivi du projet',
      ],
      email: 'isabelle.bourdon@umontpellier.fr',
    },
    {
      nom: 'Kaoutar ElFenni',
      role: 'Cheffe de projet',
      responsabilites: [
        'Coordination générale',
        'Gestion d\'équipe',
        'Organisation du travail',
      ],
      email: 'kaoutar.elfenni@etu.umontpellier.fr',
    },
    {
      nom: 'Ines Mazgar',
      role: 'Design et développement',
      responsabilites: [
        'Design interface',
        'Développement web',
        'Expérience utilisateur',
      ],
      email: 'ines.mazgar@etu.umontpellier.fr',
    },
  ];

  return <TeamGroup members={members} title="Notre équipe - Encadrement et coordination" />;
}