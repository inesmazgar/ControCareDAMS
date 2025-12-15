import { useState, useEffect } from 'react';
import { FileText, Shield, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useModalContext } from "../context/ModalContext";

export function SourcesDonnees() {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const { setModalOpen } = useModalContext();

  useEffect(() => {
    setModalOpen(!!selectedItem);
  }, [selectedItem, setModalOpen]);

  const sources = [
    {
      id: "1",
      titre: "CNIL",
      type: "Autorité de régulation",
      description: "Recommandations sur la protection des données de santé.",
      pointsCles: [
        "Risques de cyberattaques",
        "Chiffrement des échanges",
        "Conformité RGPD"
      ],
      lien: "https://www.cnil.fr/fr/decisions/lignes-directrices-recommandations-CNIL"
    },
    {
      id: "2",
      titre: "Cybersécurité en santé",
      type: "Rapport technique",
      description: "Rapports d'incidents et recommandations de sécurisation.",
      pointsCles: [
        "Cyberattaques sur infrastructures",
        "Vulnérabilités des systèmes",
        "Authentification forte"
      ],
      details: "Le rapport annuel de l'Agence du Numérique en Santé et de l'ANSSI fait état de la recrudescence des cyberattaques (ransomwares) ciblant les hôpitaux français. Il détaille les vulnérabilités techniques souvent exploitées (systèmes non mis à jour, mots de passe faibles) et préconise une politique de sécurité robuste incluant le chiffrement de bout en bout et l'authentification à double facteur."
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
              className={`p-8 bg-white border-2 border-red-200 rounded-2xl hover:border-red-400 hover:shadow-xl transition-all cursor-pointer`}
              onClick={() => handleCardClick(source)}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 rounded-lg">
                  <Shield className="text-red-600" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.h3 className="text-gray-900 text-xl font-semibold">{source.titre}</motion.h3>
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">
                      {source.type}
                    </span>
                  </div>
                  <motion.p className="text-gray-600 mb-4">{source.description}</motion.p>
                  <div className="space-y-2">
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
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm" onClick={() => setSelectedItem(null)}>
              <motion.div
                layoutId={selectedItem.id}
                className="bg-white p-6 rounded-2xl w-full max-w-lg shadow-2xl relative border-2 border-red-200"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <X size={20} className="text-gray-600" />
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-red-100 rounded-xl">
                    <Shield className="text-red-600" size={32} />
                  </div>
                  <motion.h3 className="text-2xl font-bold text-gray-900">{selectedItem.titre}</motion.h3>
                </div>

                <motion.div className="space-y-4">
                  <p className="text-lg text-gray-700 font-medium">{selectedItem.description}</p>
                  <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                    <h4 className="font-semibold text-red-800 mb-2">Points critiques identifiés :</h4>
                    <ul className="space-y-2">
                      {selectedItem.pointsCles.map((point: string, i: number) => (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <span className="text-red-600 mr-2">⚠</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="h-px bg-red-100 w-full my-4" />
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