import { useState, useEffect } from 'react';
import { Clipboard, Mic, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useModalContext } from "../../context/ModalContext";

export function MethodologieStep2() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { setModalOpen } = useModalContext();

  useEffect(() => {
    setModalOpen(!!selectedId);
  }, [selectedId, setModalOpen]);

  const etapes = [
    {
      id: "1",
      icon: Clipboard,
      titre: "Grille d'entretien",
      description: "Préparation d'une grille commune avec questions ouvertes sur les enjeux, bénéfices, limites et perspectives de la télémédecine.",
      details: "La grille d'entretien a été structurée en quatre grands axes : 1) La pratique quotidienne et les changements organisationnels induits par la télémédecine. 2) La relation soignant-soigné et la question de la déshumanisation. 3) Les aspects éthiques et la protection des données. 4) La vision prospective de l'intégration des technologies (IA). Cette structure a permis de garantir une comparabilité des réponses tout en laissant les experts libres de développer leur pensée."
    },
    {
      id: "2",
      icon: Mic,
      titre: "Enregistrement",
      description: "Enregistrement audio des entretiens avec consentement des participants pour analyse ultérieure et traçabilité.",
      details: "Pour capturer toute la richesse du discours (hésitations, ton, vocabulaire spécifique), l'enregistrement audio intégral a été privilégié à la prise de notes seule. Cela a permis de revenir précisément sur certains passages lors de l'analyse et de citer les experts mot pour mot dans le rendu final, garantissant une fidélité absolue à leur pensée."
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-green-50 via-white to-green-50 overflow-y-auto flex items-center justify-center relative">
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
                layoutId={etape.id}
                key={etape.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedId(etape.id)}
                className="p-6 bg-white border-2 border-green-200 rounded-2xl hover:border-green-400 hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                  <Icon className="text-green-600" size={28} />
                </div>
                <motion.h3 className="text-gray-900 mb-2 text-lg font-semibold text-center">{etape.titre}</motion.h3>
                <motion.p className="text-gray-600 leading-relaxed text-sm text-center">{etape.description}</motion.p>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm" onClick={() => setSelectedId(null)}>
              {etapes.filter(item => item.id === selectedId).map(item => {
                const Icon = item.icon;
                return (
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
                        <Icon className="text-green-600" size={32} />
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
                );
              })}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}