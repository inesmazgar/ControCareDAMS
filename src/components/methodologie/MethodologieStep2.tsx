import { Clipboard, Mic } from 'lucide-react';
import { motion } from 'motion/react';

export function MethodologieStep2() {
  const etapes = [
    {
      icon: Clipboard,
      titre: "Grille d'entretien",
      description: "Préparation d'une grille commune avec questions ouvertes sur les enjeux, bénéfices, limites et perspectives de la télémédecine."
    },
    {
      icon: Mic,
      titre: "Enregistrement",
      description: "Enregistrement audio des entretiens avec consentement des participants pour analyse ultérieure et traçabilité."
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-green-50 via-white to-green-50 overflow-y-auto flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <Clipboard className="text-green-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Collecte des données</h1>
        </div>
        
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Outils et protocoles pour la collecte des données.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {etapes.map((etape, index) => {
            const Icon = etape.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white border-2 border-green-200 rounded-2xl hover:border-green-400 hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                  <Icon className="text-green-600" size={28} />
                </div>
                <h3 className="text-gray-900 mb-2 text-lg font-semibold text-center">{etape.titre}</h3>
                <p className="text-gray-600 leading-relaxed text-sm text-center">{etape.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}