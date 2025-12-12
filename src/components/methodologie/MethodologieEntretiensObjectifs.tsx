import { Target, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function MethodologieEntretiensObjectifs() {
  const objectifs = [
    "Comprendre en profondeur les différentes positions dans la controverse",
    "Identifier les enjeux pratiques au-delà de la théorie",
    "Recueillir des témoignages authentiques et nuancés",
    "Enrichir l'analyse documentaire par des perspectives de terrain"
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-y-auto flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <Target className="text-gray-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Objectifs de l'approche qualitative</h1>
        </div>
        
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Les objectifs clés de notre démarche méthodologique pour analyser la controverse.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {objectifs.map((objectif, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white border-2 border-green-200 rounded-2xl hover:border-green-400 hover:shadow-xl transition-all"
            >
              <div className="flex items-start">
                <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0 mt-0.5" size={24} />
                <p className="text-gray-700 leading-relaxed">{objectif}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
