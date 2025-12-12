import { FileText, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export function SourcesDonnees() {
  const sources = [
    {
      titre: "CNIL",
      type: "Autorité de régulation",
      description: "Recommandations sur la protection des données de santé.",
      pointsCles: [
        "Risques de cyberattaques",
        "Chiffrement des échanges",
        "Conformité RGPD"
      ]
    },
    {
      titre: "Cybersécurité en santé",
      type: "Rapport technique",
      description: "Rapports d'incidents et recommandations de sécurisation.",
      pointsCles: [
        "Cyberattaques sur infrastructures",
        "Vulnérabilités des systèmes",
        "Authentification forte"
      ]
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-red-50 via-white to-red-50 overflow-y-auto flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <FileText className="text-red-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Documentation - Arguments défavorables</h1>
        </div>
        
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Sources académiques et rapports mettant en lumière les risques de la télémédecine.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 max-w-6xl mx-auto">
          {sources.map((source, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-8 bg-white border-2 border-red-200 rounded-2xl hover:border-red-400 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 rounded-lg">
                  <Shield className="text-red-600" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-gray-900 text-xl font-semibold">{source.titre}</h3>
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">
                      {source.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{source.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">Points clés :</p>
                    <ul className="space-y-2">
                      {source.pointsCles.map((point, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <span className="text-red-600 mr-2">⚠</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}