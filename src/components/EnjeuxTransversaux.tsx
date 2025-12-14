import { useState, useEffect } from 'react';
import { Network, X, User, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useModalContext } from "../context/ModalContext";

interface EnjeuxTransversauxProps {
  setActiveSection: (section: string, sourceId?: string) => void;
}

export function EnjeuxTransversaux({ setActiveSection }: EnjeuxTransversauxProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { setModalOpen } = useModalContext();

  useEffect(() => {
    setModalOpen(!!selectedId);
  }, [selectedId, setModalOpen]);

  // Helper to determine target slide and source ID
  const getTarget = (source: string) => {
    if (source.includes("Ballout") || source.includes("Mercier")) {
      return { target: "experts", id: undefined };
    }
    if (source.includes("Cases")) {
      return { target: "documentation-articles2", id: "Cases" };
    }
    if (source.includes("CNIL")) {
      return { target: "documentation-sites-web", id: "CNIL" };
    }
    if (source.includes("HAS")) {
      return { target: "documentation-rapports", id: "HAS" };
    }
    return { target: "accueil", id: undefined };
  };

  const enjeux = [
    {
      id: "1",
      titre: "Fracture numérique",
      description: "Inégalités d'accès et exclusion des populations fragiles.",
      details: "La fracture numérique représente un obstacle majeur à l'équité des soins. Elle concerne non seulement l'accès aux équipements (smartphones, ordinateurs, connexion haut débit), mais aussi la littératie numérique (capacité à utiliser ces outils). Les personnes âgées, les populations rurales et les ménages à faibles revenus sont particulièrement touchés, risquant une rupture de la continuité des soins si le numérique devient la seule porte d'entrée.",
      sources: ["Ballout", "Cases"]
    },
    {
      id: "2",
      titre: "Protection des données",
      description: "Risques de cybersécurité et confidentialité.",
      details: "La numérisation massive des données de santé expose les établissements et les patients à des risques accrus de cyberattaques (ransomwares, vol de données). La confidentialité, pilier de la relation patient-médecin, est fragilisée par le partage des données sur des plateformes parfois peu sécurisées ou hébergées hors de juridictions protectrices.",
      sources: ["CNIL", "Mercier"]
    },
    {
      id: "3",
      titre: "Modèle économique",
      description: "Soutenabilité et équité du système de santé.",
      details: "Le modèle économique de l'e-santé reste à consolider. Qui paie pour l'innovation ? Comment tarifer les actes de télémédecine sans inciter à la suroffre ? Il existe un risque de marchandisation de la santé, où des acteurs privés pourraient privilégier la rentabilité au détriment de la qualité et de l'accessibilité des soins pour tous.",
      sources: ["Mercier", "HAS"]
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-y-auto flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <Network className="text-gray-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Enjeux Transversaux</h1>
        </div>

        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Les problématiques communes aux différents arguments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {enjeux.map((enjeu, index) => (
            <motion.div
              layoutId={enjeu.id}
              key={enjeu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onClick={() => setSelectedId(enjeu.id)}
              className="p-6 bg-white border-2 border-gray-300 rounded-2xl hover:border-gray-500 hover:shadow-xl transition-all cursor-pointer"
            >
              <motion.h3 className="text-gray-900 mb-2 text-lg font-semibold">{enjeu.titre}</motion.h3>
              <motion.p className="text-gray-600 mb-4 leading-relaxed text-sm">{enjeu.description}</motion.p>
              <div className="flex flex-wrap gap-2">
                {enjeu.sources.map((source, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
                    {source}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm" onClick={() => setSelectedId(null)}>
              {enjeux.filter(item => item.id === selectedId).map(item => (
                <motion.div
                  layoutId={item.id}
                  key={item.id}
                  className="bg-white p-6 rounded-2xl w-full max-w-lg shadow-2xl relative border-2 border-gray-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <X size={20} className="text-gray-600" />
                  </button>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gray-100 rounded-xl">
                      <Network className="text-gray-600" size={32} />
                    </div>
                    <motion.h3 className="text-2xl font-bold text-gray-900">{item.titre}</motion.h3>
                  </div>

                  <motion.div className="space-y-4">
                    <p className="text-lg text-gray-700 font-medium">{item.description}</p>
                    <div className="h-px bg-gray-200 w-full my-4" />
                    <p className="text-gray-600 leading-relaxed text-sm font-medium mb-2">Sources liées :</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.sources.map((source, i) => {
                        const { target, id } = getTarget(source);
                        return (
                          <button
                            key={i}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedId(null);
                              setActiveSection(target, id);
                            }}
                            className="flex items-center gap-1 text-xs px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 hover:text-gray-900 transition-colors"
                          >
                            <User size={12} />
                            {source}
                            <ArrowRight size={12} className="ml-1 opacity-50" />
                          </button>
                        );
                      })}
                    </div>

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