import { useState, useEffect } from 'react';
import { CheckCircle, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useModalContext } from "../context/ModalContext";

interface ArgumentsFavorablesProps {
  setActiveSection: (section: string, sourceId?: string) => void;
}

export function ArgumentsFavorables({ setActiveSection }: ArgumentsFavorablesProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { setModalOpen } = useModalContext();

  useEffect(() => {
    setModalOpen(!!selectedId);
  }, [selectedId, setModalOpen]);

  // Source target mapping
  // Thouvenot -> documentation-articles2
  // Bourdel -> documentation-articles2
  // Cases -> documentation-articles2
  // Atmaja -> documentation-articles1
  const defaultSourceTarget = "documentation-articles1";

  const argumentsList = [
    {
      id: "1",
      titre: "Accès aux soins amélioré",
      description: "Réduit les déserts médicaux, plus d’équité (Thouvenot, 2014).",
      details: "La télémédecine permet de briser les barrières géographiques et d'offrir une solution concrète aux déserts médicaux. Elle assure une plus grande équité dans l'accès aux soins, permettant aux populations isolées de consulter des spécialistes sans contrainte de distance majeure.",
      source: "Thouvenot, 2014",
      linkTarget: "documentation-articles3"
    },
    {
      id: "2",
      titre: "Réduction des coûts",
      description: "Moins de transports, moins d’hospitalisations inutiles (Bourdel, 2019).",
      details: "L'usage de la télémédecine engendre une diminution significative des frais liés aux transports sanitaire et permet d'éviter bon nombre d'hospitalisations inutiles grâce à une prise en charge plus précoce et un suivi régulier à domicile.",
      source: "Bourdel, 2019",
      linkTarget: "documentation-articles3"
    },
    {
      id: "3",
      titre: "Autonomie du patient",
      description: "Le patient devient acteur de sa santé (Cases, 2017).",
      details: "Les outils numériques favorisent l'empowerment du patient, qui devient un véritable acteur de sa santé. Mieux informé et plus impliqué grâce aux dispositifs connectés, il participe activement à la gestion de son parcours de soins.",
      source: "Cases, 2017",
      linkTarget: "documentation-articles2"
    },
    {
      id: "4",
      titre: "Rapidité et sécurité",
      description: "Avis médical plus rapide, moins de risques en période de crise (Atmaja et al., 2024).",
      details: "En situation de crise sanitaire ou d'urgence relative, la e-santé garantit une obtention d'avis médical beaucoup plus rapide. Elle réduit également les risques de contamination en limitant les contacts physiques inutiles lors des épidémies.",
      source: "Atmaja et al., 2024",
      linkTarget: "documentation-articles1"
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

                    <div className="pt-4 flex justify-end">
                      <button
                        onClick={() => {
                          setSelectedId(null);
                          // Extract just the name or year for simpler matching if needed, 
                          // but passing the full source string often works if the logic uses .includes()
                          // The logic I changed in doc components uses .includes(), so "Thouvenot, 2014" will match "Thouvenot, Véronique-Inès" if passed partially or if logic is loose.
                          // Actually, doc components check `article.auteur.includes(highlightedSourceId)`.
                          // "Thouvenot, 2014" won't match "Thouvenot, Véronique-Inès" via includes in that direction.
                          // I should pass just "Thouvenot" or "Bourdel".
                          // Let's refine the source to pass a better key.
                          const sourceKey = item.source.split(',')[0].trim();
                          setActiveSection(item.linkTarget, sourceKey);
                        }}
                        className="flex items-center text-green-700 hover:text-green-800 font-medium transition-colors text-sm"
                      >
                        Voir la source ({item.source})
                        <ArrowRight size={16} className="ml-2" />
                      </button>
                    </div>
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