import { FileSearch } from 'lucide-react';
import { motion } from 'motion/react';

export function MethodologieAnalyse() {
  const elements = [
    {
      titre: "Retranscription et analyse",
      description: "Retranscription intégrale des entretiens et analyse thématique pour identifier les arguments récurrents et divergences."
    },
    {
      titre: "Triangulation des sources",
      description: "Mise en perspective des témoignages avec la littérature académique et les documents officiels pour validation et enrichissement."
    },
    {
      titre: "Objectifs de l'approche",
      description: "Comprendre en profondeur les différentes positions, identifier les enjeux pratiques, recueillir des témoignages authentiques et enrichir l'analyse documentaire."
    },
    {
      titre: "Considérations éthiques",
      description: "Consentement éclairé des participants, anonymisation possible des données si demandée, utilisation des enregistrements uniquement à des fins pédagogiques et académiques."
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-green-50 via-white to-green-50 overflow-y-auto flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <FileSearch className="text-green-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Analyse et traitement</h1>
        </div>
        
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Notre approche méthodologique pour garantir la rigueur et la validité de notre étude.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {elements.map((element, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white border-2 border-green-200 rounded-2xl hover:border-green-400 hover:shadow-xl transition-all"
            >
              <h3 className="text-gray-900 mb-2 text-lg font-semibold">{element.titre}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{element.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}