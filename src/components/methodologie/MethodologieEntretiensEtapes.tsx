import { FileText } from 'lucide-react';
import { motion } from 'motion/react';

export function MethodologieEntretiensEtapes() {
  const etapes = [
    {
      titre: "Sélection des experts",
      description: "Identification et prise de contact avec des experts représentant différentes perspectives de la controverse : praticien, chercheur en e-santé, économiste de la santé."
    },
    {
      titre: "Planification des entretiens",
      description: "Organisation de 3 entretiens semi-directifs entre octobre et novembre 2024, d'une durée moyenne de 1h15 à 1h30."
    },
    {
      titre: "Grille d'entretien",
      description: "Préparation d'une grille commune avec questions ouvertes sur les enjeux, bénéfices, limites et perspectives de la télémédecine."
    },
    {
      titre: "Enregistrement",
      description: "Enregistrement audio des entretiens avec consentement des participants pour analyse ultérieure et traçabilité."
    },
    {
      titre: "Retranscription et analyse",
      description: "Retranscription intégrale des entretiens et analyse thématique pour identifier les arguments récurrents et divergences."
    },
    {
      titre: "Triangulation des sources",
      description: "Mise en perspective des témoignages avec la littérature académique et les documents officiels pour validation et enrichissement."
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-y-auto flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <FileText className="text-gray-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Méthodologie des entretiens</h1>
        </div>
        
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Notre approche méthodologique pour collecter et analyser les témoignages d'experts sur la controverse de la télémédecine et de l'e-santé.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {etapes.map((etape, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white border-2 border-green-200 rounded-2xl hover:border-green-400 hover:shadow-xl transition-all"
            >
              <h3 className="text-green-700 mb-3 text-lg font-semibold">{etape.titre}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{etape.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
