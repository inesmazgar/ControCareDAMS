import { XCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function ArgumentsDefavorables() {
  const argumentsList = [
    {
      titre: "Fracture numérique",
      description: "Exclusion des personnes âgées, précaires ou non équipées.",
    },
    {
      titre: "Qualité du diagnostic",
      description: "Impossibilité d'examen clinique complet et risque d'erreurs.",
    },
    {
      titre: "Protection des données",
      description: "Risques de piratage et de violation de la confidentialité.",
    },
    {
      titre: "Déshumanisation",
      description: "Perte du contact humain et de la relation de confiance.",
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-red-50 via-white to-red-50 overflow-y-auto flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <XCircle className="text-red-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Arguments Défavorables</h1>
        </div>
        
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Les limites et risques de la télémédecine.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {argumentsList.map((arg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white border-2 border-red-200 rounded-2xl hover:border-red-400 hover:shadow-xl transition-all"
            >
              <h3 className="text-gray-900 mb-2 text-lg font-semibold">{arg.titre}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{arg.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}