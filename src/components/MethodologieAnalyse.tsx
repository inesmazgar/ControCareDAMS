import { useState, useEffect } from 'react';
import { FileSearch, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useModalContext } from "../context/ModalContext";

export function MethodologieAnalyse() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { setModalOpen } = useModalContext();

  useEffect(() => {
    setModalOpen(!!selectedId);
  }, [selectedId, setModalOpen]);

  const elements = [
    {
      id: "1",
      titre: "Retranscription et analyse",
      description: "Retranscription intégrale des entretiens et analyse thématique pour identifier les arguments récurrents et divergences.",
      details: "Le processus de retranscription a été exhaustif pour ne rien perdre de la nuance des propos. L'analyse thématique qui a suivi a permis de structurer les arguments en grands blocs logiques, correspondant aux sections de notre site : impact clinique, modèle économique, relation soignant-patient, et enjeux sociétaux. Cette méthode assure que la structure du site reflète fidèlement la réalité des débats."
    },
    {
      id: "2",
      titre: "Triangulation des sources",
      description: "Mise en perspective des témoignages avec la littérature académique et les documents officiels pour validation et enrichissement.",
      details: "Chaque affirmation forte d'un expert a été passée au crible de la vérification documentaire. Par exemple, lorsqu'un praticien évoquait l'augmentation du temps administratif, nous avons cherché les études de la DREES confirmant ou nuançant ce point. Cette démarche dialectique entre terrain et théorie renforce la robustesse de notre argumentation."
    },
    {
      id: "3",
      titre: "Objectifs de l'approche",
      description: "Comprendre en profondeur les différentes positions, identifier les enjeux pratiques, recueillir des témoignages authentiques et enrichir l'analyse documentaire.",
      details: "Notre objectif n'était pas de trancher le débat \"pour ou contre\", mais de cartographier la controverse. En recueillant des témoignages authentiques, nous donnons de la chair à des concepts parfois abstraits (comme la « fracture numérique »), transformant des statistiques froides en réalités vécues. Cette approche qualitative complète nécessairement les données quantitatives."
    },
    {
      id: "4",
      titre: "Considérations éthiques",
      description: "Consentement éclairé des participants, anonymisation possible des données si demandée, utilisation des enregistrements uniquement à des fins pédagogiques et académiques.",
      details: "La confiance est la clé de voûte de l'entretien qualitatif. Le protocole éthique strict mis en place (explication claire des objectifs, droit de retrait, validation des citations) a permis aux experts de s'exprimer librement, y compris sur des sujets sensibles comme les erreurs de diagnostic potentielles ou les pressions économiques, sans crainte de jugement ou de répercussions."
    }
  ];

  return (
    <div className="min-h-full w-full bg-gradient-to-br from-green-50 via-white to-green-50 relative flex items-center justify-center py-12">
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
              layoutId={element.id}
              key={element.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedId(element.id)}
              className="p-6 bg-white border-2 border-green-200 rounded-2xl hover:border-green-400 hover:shadow-xl transition-all cursor-pointer"
            >
              <motion.h3 className="text-gray-900 mb-2 text-lg font-semibold">{element.titre}</motion.h3>
              <motion.p className="text-gray-600 leading-relaxed text-sm">{element.description}</motion.p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm" onClick={() => setSelectedId(null)}>
              {elements.filter(item => item.id === selectedId).map(item => (
                <motion.div
                  layoutId={item.id}
                  key={item.id}
                  className="bg-white p-6 rounded-2xl w-full max-w-lg shadow-2xl relative border-2 border-green-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <X size={20} className="text-gray-600" />
                  </button>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-green-100 rounded-xl">
                      <Search className="text-green-600" size={32} />
                    </div>
                    <motion.h3 className="text-2xl font-bold text-gray-900">{item.titre}</motion.h3>
                  </div>

                  <motion.div className="space-y-4">
                    <p className="text-lg text-gray-700 font-medium">{item.description}</p>
                    <div className="h-px bg-green-100 w-full my-4" />
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.details}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}