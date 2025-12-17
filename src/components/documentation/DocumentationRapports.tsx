import { FileText, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

interface DocumentationRapportsProps {
  highlightedSourceId?: string | null;
}

export function DocumentationRapports({ highlightedSourceId }: DocumentationRapportsProps) {
  const rapports = [
    {
      titre: "Rapport sur le déploiement de la télémédecine en France",
      organisme: "Ministère de la Santé",
      annee: "2023",
      description: "Évaluation de l'état des lieux de la télémédecine et recommandations pour son développement.",
      lien: "https://sante.gouv.fr/IMG/pdf/Rapport_final_Telemedecine.pdf"
    },
    {
      titre: "Évaluation économique de la télémédecine",
      organisme: "Haute Autorité de Santé (HAS)",
      annee: "2022",
      description: "Analyse coûts-bénéfices de l'intégration de la télémédecine dans le système de santé.",
      lien: "https://www.has-sante.fr/jcms/c_1622477/fr/efficience-de-la-telemedecine-etat-des-lieux-de-la-litterature-internationale-et-cadre-d-evaluation"
    },
    {
      titre: "Cybersécurité et données de santé",
      organisme: "ANSSI",
      annee: "2023",
      description: "Rapport sur les risques et recommandations en matière de protection des données médicales.",
      lien: "https://cyber.gouv.fr/"
    },
    {
      titre: "Baromètre de la fracture numérique en santé",
      organisme: "Agence du Numérique en Santé",
      annee: "2023",
      description: "Étude des inégalités d'accès aux technologies de santé numériques.",
      lien: "https://esante.gouv.fr/rapport-dactivite-2023"
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-red-50 via-white to-red-50 overflow-y-auto flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-center mb-4">
          <FileText className="text-red-600 mr-4" size={40} />
          <h1 className="text-gray-900 text-3xl font-bold">Rapports Officiels</h1>
        </div>

        <p className="text-gray-600 text-center mb-4 max-w-3xl mx-auto">
          Rapports gouvernementaux et institutionnels sur la télémédecine.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {rapports.map((rapport, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: highlightedSourceId && (rapport.organisme.includes(highlightedSourceId) || rapport.titre.includes(highlightedSourceId)) ? 1.05 : 1,
                borderColor: highlightedSourceId && (rapport.organisme.includes(highlightedSourceId) || rapport.titre.includes(highlightedSourceId)) ? "#ef4444" : "#fecaca"
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-4 bg-white border-2 rounded-2xl transition-all ${highlightedSourceId && (rapport.organisme.includes(highlightedSourceId) || rapport.titre.includes(highlightedSourceId)) ? 'shadow-2xl ring-4 ring-red-100 z-10' : 'hover:border-red-400 hover:shadow-xl'}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 rounded-lg">
                  <FileText className="text-red-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full font-semibold">
                      Rapport
                    </span>
                    <span className="text-xs text-gray-500">{rapport.annee}</span>
                  </div>
                  <h3 className="text-gray-900 mb-2 font-semibold">{rapport.titre}</h3>
                  <p className="text-sm text-gray-500 mb-2">{rapport.organisme}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{rapport.description}</p>
                  <a href={rapport.lien} target="_blank" rel="noopener noreferrer" className="text-red-600 text-sm font-semibold mt-2 flex items-center">
                    <ExternalLink className="mr-1" size={16} />
                    Consulter le rapport
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