import { Network } from 'lucide-react';
import { motion } from 'motion/react';

export function EnjeuxTransversaux() {
  const enjeux = [
    {
      titre: "Fracture numérique",
      description: "Inégalités d'accès et exclusion des populations fragiles.",
      sources: ["Ballout", "Cases"]
    },
    {
      titre: "Protection des données",
      description: "Risques de cybersécurité et confidentialité.",
      sources: ["CNIL", "Mercier"]
    },
    {
      titre: "Modèle économique",
      description: "Soutenabilité et équité du système de santé.",
      sources: ["Mercier", "HAS"]
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-y-auto flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <Network className="text-gray-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Enjeux Transversaux</h1>
        </div>
        
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Les problématiques communes aux différents arguments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {enjeux.map((enjeu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-6 bg-white border-2 border-gray-300 rounded-2xl hover:border-gray-500 hover:shadow-xl transition-all"
            >
              <h3 className="text-gray-900 mb-2 text-lg font-semibold">{enjeu.titre}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">{enjeu.description}</p>
              <div className="flex flex-wrap gap-2">
                {enjeu.sources.map((source, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
                    {source}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}