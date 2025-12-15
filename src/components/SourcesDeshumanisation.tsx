import { useState, useEffect } from 'react';
import { FileText, Users, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useModalContext } from "../context/ModalContext";

export function SourcesDeshumanisation() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { setModalOpen } = useModalContext();

  useEffect(() => {
    setModalOpen(!!selectedId);
  }, [selectedId, setModalOpen]);

  const sources = [
    {
      id: "1",
      titre: "Études sociologiques",
      type: "Étude académique",
      description: "Impact de la télémédecine sur la relation médecin-patient.",
      pointsCles: [
        "Importance du contact physique",
        "Perte d'indices non-verbaux",
        "Affaiblissement du lien thérapeutique"
      ],
      details: "Les études sociologiques, notamment celles de la DREES, mettent en évidence une modification profonde de la relation de soin. L'écran interpose une distance qui gomme la dimension « toucher » de l'examen clinique, pourtant essentielle pour le diagnostic et la réassurance. De plus, la communication non-verbale (posture, regard, soupirs), riche d'enseignements pour le praticien, est en grande partie perdue, risquant de conduire à une médecine plus technicienne et moins empathique."
    },
    {
      id: "2",
      titre: "Témoignages professionnels",
      type: "Retour d'expérience",
      description: "Vécu des médecins et limites relationnelles.",
      pointsCles: [
        "Difficulté à créer la confiance via écran",
        "Impossibilité d'examen complet",
        "Distance émotionnelle"
      ],
      details: "De nombreux médecins généralistes rapportent un sentiment de frustration, voire de danger, face à l'impossibilité de réaliser un examen physique complet (palpation, auscultation). Certains évoquent le risque de passer à côté d'une pathologie grave ou la difficulté d'annoncer une mauvaise nouvelle à distance. Ils décrivent parfois une transformation de leur métier vers une prestation de service désincarnée, assimilable à un centre d'appels médical."
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-red-50 via-white to-red-50 overflow-y-auto flex items-center justify-center relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <FileText className="text-red-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Documentation - Arguments défavorables</h1>
        </div>

        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Sources académiques et rapports mettant en lumière les risques de la télémédecine.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 max-w-6xl mx-auto">
          {sources.map((source, index) => (
            <motion.div
              layoutId={source.id}
              key={source.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onClick={() => setSelectedId(source.id)}
              className="p-8 bg-white border-2 border-red-200 rounded-2xl hover:border-red-400 hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4 flex-col">
                <div className="flex items-start gap-4 w-full">
                  <div className="p-3 bg-red-100 rounded-lg">
                    <Users className="text-red-600" size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <motion.h3 className="text-gray-900 text-xl font-semibold">{source.titre}</motion.h3>
                      <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">
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
                        <span className="text-red-600 mr-2">⚠</span>
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
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm" onClick={() => setSelectedId(null)}>
              {sources.filter(item => item.id === selectedId).map(item => (
                <motion.div
                  layoutId={item.id}
                  key={item.id}
                  className="bg-white p-6 rounded-2xl w-full max-w-lg shadow-2xl relative border-2 border-red-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <X size={20} className="text-gray-600" />
                  </button>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-red-100 rounded-xl">
                      <Users className="text-red-600" size={32} />
                    </div>
                    <motion.h3 className="text-2xl font-bold text-gray-900">{item.titre}</motion.h3>
                  </div>

                  <motion.div className="space-y-4">
                    <p className="text-lg text-gray-700 font-medium">{item.description}</p>
                    <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                      <h4 className="font-semibold text-red-800 mb-2">Analyse détaillée :</h4>
                      <ul className="space-y-2">
                        {item.pointsCles.map((point: string, i: number) => (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <span className="text-red-600 mr-2">⚠</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="h-px bg-red-100 w-full my-4" />
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