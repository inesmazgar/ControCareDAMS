import { Clipboard, Users, Calendar, Mic, FileText, Target } from 'lucide-react';
import { motion } from 'motion/react';

export function Methodologie() {
  const etapes = [
    {
      icon: Target,
      titre: "Sélection des experts",
      description: "Identification et prise de contact avec des experts représentant différentes perspectives de la controverse : praticien, chercheur en e-santé, économiste de la santé."
    },
    {
      icon: Calendar,
      titre: "Planification des entretiens",
      description: "Organisation de 3 entretiens semi-directifs entre octobre et novembre 2024, d'une durée moyenne de 1h15 à 1h30."
    },
    {
      icon: Clipboard,
      titre: "Grille d'entretien",
      description: "Préparation d'une grille commune avec questions ouvertes sur les enjeux, bénéfices, limites et perspectives de la télémédecine."
    },
    {
      icon: Mic,
      titre: "Enregistrement",
      description: "Enregistrement audio des entretiens avec consentement des participants pour analyse ultérieure et traçabilité."
    },
    {
      icon: FileText,
      titre: "Retranscription et analyse",
      description: "Retranscription intégrale des entretiens et analyse thématique pour identifier les arguments récurrents et divergences."
    },
    {
      icon: Users,
      titre: "Triangulation des sources",
      description: "Mise en perspective des témoignages avec la littérature académique et les documents officiels pour validation et enrichissement."
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-y-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center mb-8">
          <Clipboard className="text-blue-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Méthodologie des entretiens</h1>
        </div>
        
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto text-lg">
          Notre approche méthodologique pour collecter et analyser les témoignages d'experts 
          sur la controverse de la télémédecine et de l'e-santé.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {etapes.map((etape, index) => {
            const Icon = etape.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white border border-blue-200 rounded-xl hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                    <Icon className="text-blue-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-2">{etape.titre}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{etape.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="p-8 bg-blue-50 border-2 border-blue-200 rounded-2xl"
        >
          <h3 className="text-gray-900 font-semibold mb-4 flex items-center">
            <Target className="text-blue-600 mr-2" size={24} />
            Objectifs de l'approche qualitative
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <p className="text-gray-700 text-sm">
                Comprendre en profondeur les différentes positions dans la controverse
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <p className="text-gray-700 text-sm">
                Identifier les enjeux pratiques au-delà de la théorie
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <p className="text-gray-700 text-sm">
                Recueillir des témoignages authentiques et nuancés
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <p className="text-gray-700 text-sm">
                Enrichir l'analyse documentaire par des perspectives de terrain
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 p-6 bg-white border border-gray-200 rounded-xl"
        >
          <h3 className="text-gray-900 font-semibold mb-3">Considérations éthiques</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Tous les entretiens ont été menés dans le respect de l'éthique de la recherche : 
            consentement éclairé des participants, anonymisation possible des données si demandée, 
            utilisation des enregistrements uniquement à des fins pédagogiques et académiques.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
