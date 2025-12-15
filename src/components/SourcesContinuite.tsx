import { useState, useEffect } from 'react';
import { FileText, BookOpen, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useModalContext } from "../context/ModalContext";

export function SourcesContinuite() {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const { setModalOpen } = useModalContext();

  useEffect(() => {
    setModalOpen(!!selectedItem);
  }, [selectedItem, setModalOpen]);

  const sources = [
    {
      id: "1",
      titre: "OMS Guidelines",
      type: "Document officiel",
      description: "Recommandations de l'OMS sur la télémédecine.",
      pointsCles: [
        "Continuité des soins pour maladies chroniques",
        "Suivi régulier à distance"
      ],
      lien: "https://www.who.int/fr/news/item/17-04-2019-who-releases-first-guideline-on-digital-health-interventions"
    },
    {
      id: "2",
      titre: "Témoignages patients",
      type: "Étude qualitative",
      description: "Retours d'expérience de patients.",
      pointsCles: [
        "Facilitation du suivi médical",
        "Réduction des déplacements"
      ],
      details: "Les études qualitatives et les retours d'associations de patients montrent un fort taux de satisfaction (plus de 80%) chez les utilisateurs réguliers, notamment pour le renouvellement d'ordonnances et le suivi psychologique. Ils apprécient le gain de temps considérable, les économies de transport et le confort de consulter depuis chez eux. Cependant, une minorité souligne le manque de contact physique pour certains types de soins."
    }
  ];

  const handleCardClick = (source: any) => {
    if (source.lien) {
      window.open(source.lien, '_blank');
    } else {
      setSelectedItem(source);
    }
  };

  return (
    <div className="h-full w-full bg-gradient-to-br from-green-50 via-white to-green-50 overflow-y-auto flex items-center justify-center relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <FileText className="text-green-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Documentation - Arguments favorables</h1>
        </div>

        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Sources académiques et officielles validant les bénéfices de la télémédecine.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 max-w-6xl mx-auto">
          {sources.map((source, index) => (
            <motion.div
              layoutId={source.id}
              key={source.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`p-8 bg-white border-2 border-green-200 rounded-2xl hover:border-green-400 hover:shadow-xl transition-all cursor-pointer`}
              onClick={() => handleCardClick(source)}
            >
              <div className="flex items-start gap-4 flex-col">
                <div className="flex items-start gap-4 w-full">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <BookOpen className="text-green-600" size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <motion.h3 className="text-gray-900 text-xl font-semibold">{source.titre}</motion.h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                        {source.type}
                      </span>
                    </div>
                    <motion.p className="text-gray-600 mb-4">{source.description}</motion.p>
                  </div>
                </div>
                <div className="space-y-2 w-full">
                  <p className="text-sm text-gray-500">Points clés :</p>
                  <ul className="space-y-2">
                    {source.pointsCles.map((point, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm" onClick={() => setSelectedItem(null)}>
              <motion.div
                layoutId={selectedItem.id}
                className="bg-white p-6 rounded-2xl w-full max-w-lg shadow-2xl relative border-2 border-green-200"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <X size={20} className="text-gray-600" />
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <BookOpen className="text-green-600" size={32} />
                  </div>
                  <motion.h3 className="text-2xl font-bold text-gray-900">{selectedItem.titre}</motion.h3>
                </div>

                <motion.div className="space-y-4">
                  <p className="text-lg text-gray-700 font-medium">{selectedItem.description}</p>
                  <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                    <h4 className="font-semibold text-green-800 mb-2">Points clés analysés :</h4>
                    <ul className="space-y-2">
                      {selectedItem.pointsCles.map((point: string, i: number) => (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="h-px bg-green-100 w-full my-4" />
                  <p className="text-gray-600 leading-relaxed">
                    {selectedItem.details}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}