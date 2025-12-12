import { Users, Mail } from 'lucide-react';

export function Team() {
  const members = [
    {
      nom: "Isabelle Bourdon",
      role: "Superviseur",
      responsabilites: ["Encadrement pédagogique", "Méthodologie", "Suivi du projet"],
      email: "isabelle.bourdon@umontpellier.fr"
    },
    {
      nom: "Kaoutar ElFenni",
      role: "Cheffe de projet",
      responsabilites: ["Coordination générale", "Gestion d'équipe", "Organisation du travail"],
      email: "kaoutar.elfenni@et.umontpellier.fr"
    },
    {
      nom: "Ines Mazgar",
      role: "Design et développement",
      responsabilites: ["Design interface", "Développement web", "Expérience utilisateur"],
      email: "ines.mazgar@et.umontpellier.fr"
    },
    {
      nom: "Hugo Saulig",
      role: "Design et développement",
      responsabilites: ["Design interface", "Développement web", "Intégration"],
      email: "hugo.saulig@et.umontpellier.fr"
    },
    {
      nom: "Valentin Blanc",
      role: "Recherche et analyse",
      responsabilites: ["Revue bibliographique", "Analyse des arguments", "Recherche"],
      email: "valentin.blanc@et.umontpellier.fr"
    },
    {
      nom: "Luca Figlie",
      role: "Documentation et contenu",
      responsabilites: ["Bibliographie", "Rédaction contenus", "Compilation des sources"],
      email: "luca.figlie@et.umontpellier.fr"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center mb-6">
          <Users className="mr-3" size={32} />
          <h1 className="text-gray-900">L'Équipe</h1>
        </div>
        
        <p className="text-gray-600 mb-16 max-w-3xl">
          Ce projet a été réalisé dans le cadre du cours d'introduction au système d'information 
          du département DAMS à Polytech Montpellier. Notre équipe a travaillé pour explorer 
          cette controverse sous tous ses angles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {members.map((member, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
              <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                <span className="text-2xl text-gray-500">
                  {member.nom.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <h3 className="text-gray-900 mb-1">{member.nom}</h3>
              <p className="text-sm text-gray-600 mb-4">{member.role}</p>
              
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2">Responsabilités :</p>
                <ul className="space-y-1">
                  {member.responsabilites.map((resp, i) => (
                    <li key={i} className="text-xs text-gray-600 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {member.email && (
                <div className="flex items-center text-xs text-gray-500">
                  <Mail size={12} className="mr-2" />
                  {member.email}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-12">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-gray-900 mb-3">Remerciements</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Nous tenons à remercier chaleureusement tous les experts qui ont accepté de nous 
              accorder de leur temps pour les entretiens. Leurs témoignages et analyses ont été 
              essentiels à la compréhension de cette controverse. Nous remercions également notre 
              enseignante pour son accompagnement méthodologique tout au long du projet, ainsi que 
              les documentalistes de la bibliothèque universitaire pour leur aide dans nos recherches.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}