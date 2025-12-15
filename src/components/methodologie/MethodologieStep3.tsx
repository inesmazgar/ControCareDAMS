import { useState, useEffect } from 'react';
import { FileText, Users, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useModalContext } from "../../context/ModalContext";

export function MethodologieStep3() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { setModalOpen } = useModalContext();

  useEffect(() => {
    setModalOpen(!!selectedId);
  }, [selectedId, setModalOpen]);

  const etapes = [
    {
      id: "1",
      icon: FileText,
      titre: "Retranscription et analyse",
      description: "Retranscription intégrale des entretiens et analyse thématique pour identifier les arguments récurrents et divergences.",
      details: "Après la transcription verbatim de l'ensemble des enregistrements, nous avons procédé à un codage thématique manuel. Cette étape a consisté à identifier, surligner et classer les fragments de discours selon des catégories prédéfinies (économique, éthique, technique) mais aussi à faire émerger de nouvelles catégories issues directement du terrain (ex: la dimension anxiogène de la technique)."
    },
    {
      id: "2",
      icon: Users,
      titre: "Triangulation des sources",
      description: "Mise en perspective des témoignages avec la littérature académique et les documents officiels pour validation et enrichissement.",
      details: "Pour éviter l'écueil du subjectivisme, chaque argument avancé par les experts a été confronté à la littérature scientifique existante (revues systématiques, rapports de la HAS, études économiques). Cette triangulation méthodologique permet de vérifier si le ressenti terrain corrobore les statistiques nationales ou s'il révèle des spécificités locales ou disciplinaires."
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-green-50 via-white to-green-50 overflow-y-auto flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <FileText className="text-green-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Analyse et validation</h1>
        </div>

        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Traitement et validation des données collectées.
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