import { useState, useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useModalContext } from "../context/ModalContext";

export function ArgumentsFavorables() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { setModalOpen } = useModalContext();

  useEffect(() => {
    setModalOpen(!!selectedId);
  }, [selectedId, setModalOpen]);

  const argumentsList = [
    {
      id: "1",
      titre: "Accessibilité des soins",
      description: "Accès aux soins pour les populations isolées et les déserts médicaux.",
      details: "La télémédecine permet de briser les barrières géographiques. Elle offre une solution concrète aux déserts médicaux en connectant les patients des zones rurales aux spécialistes situés dans les grandes villes. Elle facilite également l'accès aux soins pour les personnes à mobilité réduite ou en situation de handicap."
    },
    {
      id: "2",
      titre: "Optimisation du temps médical",
      description: "Réduction des déplacements et meilleure organisation du temps médical.",
      details: "En réduisant les tâches administratives et en filtrant les demandes via la téléconsultation, les médecins peuvent se concentrer sur les cas nécessitant une présence physique. Cela permet une meilleure gestion de l'agenda médical et réduit les délais d'attente pour les patients."
    },
    {
      id: "3",
      titre: "Continuité des soins",
      description: "Suivi régulier des patients chroniques et maintien du lien médecin-patient.",
      details: "Pour les patients souffrant de maladies chroniques (diabète, hypertension), la télésurveillance permet un suivi constant des constantes vitales. Cela favorise l'observance thérapeutique et permet d'ajuster les traitements rapidement sans attendre la prochaine visite physique."
    },
    {
      id: "4",
      titre: "Réduction des coûts",
      description: "Diminution des frais de transport et des hospitalisations évitables.",
      details: "Au-delà des économies directes sur les transports sanitaire, la télémédecine permet de réduire significativement les ré-hospitalisations évitables en détectant précocement les complications. C'est un levier d'efficience majeur pour le système de santé."
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-green-50 via-white to-green-50 overflow-y-auto flex items-center justify-center relative">
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
              layoutId={arg.id}
              key={arg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedId(arg.id)}
              className="p-6 bg-white border-2 border-green-200 rounded-2xl hover:border-green-400 hover:shadow-xl transition-all cursor-pointer"
            >
              <motion.h3 className="text-gray-900 mb-2 text-lg font-semibold">{arg.titre}</motion.h3>
              <motion.p className="text-gray-600 leading-relaxed text-sm">{arg.description}</motion.p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm" onClick={() => setSelectedId(null)}>
              {argumentsList.filter(item => item.id === selectedId).map(item => (
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
                      <CheckCircle className="text-green-600" size={32} />
                    </div>
                    <motion.h3 className="text-2xl font-bold text-gray-900">{item.titre}</motion.h3>
                  </div>

                  <motion.div className="space-y-4">
                    <p className="text-lg text-gray-700 font-medium">{item.description}</p>
                    <div className="h-px bg-green-100 w-full my-4" />
                    <p className="text-gray-600 leading-relaxed">
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