import { GraduationCap, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export function DocumentationTheses() {
  const theses = [
    {
      titre: "Optimisation d'une interface numérique de santé à distance",
      auteur: "Lourdais, Chloé",
      annee: "2022",
      description: "Recherche sur l'optimisation des interfaces utilisateur pour les plateformes de télémédecine.",
      lien: "https://theses.hal.science/tel-04128753"
    },
    {
      titre: "E-santé et milieu carcéral",
      auteur: "Py, Ulysse",
      annee: "2024",
      description: "Étude de l'implémentation et des enjeux de la e-santé dans les établissements pénitentiaires.",
      lien: "https://theses.fr/2024LORR0275"
    },
    {
      titre: "Appropriation de la plateforme de télépathologie I-PATH-INCTR",
      auteur: "Sossou, Komlanvi Etienne",
      annee: "2023",
      description: "Analyse de l'appropriation d'une plateforme de télépathologie dans un contexte africain.",
      lien: "https://theses.hal.science/tel-04876097"
    },
    {
      titre: "Intelligence artificielle et diagnostic médical à distance",
      auteur: "Dr. Ben Ali, Ahmed",
      annee: "2023",
      description: "Évaluation de l'efficacité des algorithmes d'IA dans les systèmes de télémédecine.",
      lien: "https://theses.fr/2023MONTP345"
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-red-50 via-white to-red-50 overflow-y-auto flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-center mb-4">
          <GraduationCap className="text-red-600 mr-4" size={40} />
          <h1 className="text-gray-900 text-3xl font-bold">Thèses de doctorat</h1>
        </div>

        <p className="text-gray-600 text-center mb-4 max-w-3xl mx-auto">
          Travaux de recherche doctorale consultés pour cette étude.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {theses.map((these, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 bg-white border-2 border-red-200 rounded-2xl hover:border-red-400 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 rounded-lg">
                  <GraduationCap className="text-red-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full font-semibold">
                      Thèse
                    </span>
                    <span className="text-xs text-gray-500">{these.annee}</span>
                  </div>
                  <h3 className="text-gray-900 mb-2 font-semibold">{these.titre}</h3>
                  <p className="text-sm text-gray-500 mb-1">{these.auteur}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{these.description}</p>
                  <a href={these.lien} target="_blank" rel="noopener noreferrer" className="text-red-600 text-sm font-semibold mt-2 flex items-center">
                    <ExternalLink className="mr-1" size={16} />
                    Lire la thèse
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}