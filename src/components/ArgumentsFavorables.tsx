import { CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function ArgumentsFavorables() {
  const argumentsList = [
    {
      titre: "Accessibilité des soins",
      description: "Accès aux soins pour les populations isolées et les déserts médicaux.",
    },
    {
      titre: "Optimisation du temps médical",
      description: "Réduction des déplacements et meilleure organisation du temps médical.",
    },
    {
      titre: "Continuité des soins",
      description: "Suivi régulier des patients chroniques et maintien du lien médecin-patient.",
    },
    {
      titre: "Réduction des coûts",
      description: "Diminution des frais de transport et des hospitalisations évitables.",
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-green-50 via-white to-green-50 overflow-y-auto flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <CheckCircle className="text-green-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Arguments Favorables</h1>
        </div>
        
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Les avantages de la télémédecine et de l'e-santé.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {argumentsList.map((arg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white border-2 border-green-200 rounded-2xl hover:border-green-400 hover:shadow-xl transition-all"
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