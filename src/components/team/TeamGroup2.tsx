import { TeamGroup } from '../TeamGroup';

export function TeamGroup2() {
  const members = [
    {
      nom: 'Hugo Saulig',
      role: 'Design et développement',
      responsabilites: [
        'Design interface',
        'Développement web',
        'Intégration',
      ],
      email: 'hugo.saulig@etu.umontpellier.fr',
    },
    {
      nom: 'Valentin Blanc',
      role: 'Recherche et analyse',
      responsabilites: [
        'Revue bibliographique',
        'Analyse des arguments',
        'Recherche documentaire',
      ],
      email: 'valentin.blanc02@etu.umontpellier.fr',
    },
    {
      nom: 'Luca Figlie',
      role: 'Documentation et contenu',
      responsabilites: [
        'Bibliographie',
        'Rédaction contenus',
        'Compilation des sources',
      ],
      email: 'luca.figlie@etu.umontpellier.fr',
    },
  ];

  return <TeamGroup members={members} title="Notre équipe - Développement et recherche" />;
}
