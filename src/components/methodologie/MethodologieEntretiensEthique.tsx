import { useState, useEffect } from 'react';
import { Shield, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useModalContext } from "../../context/ModalContext";

export function MethodologieEntretiensEthique() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { setModalOpen } = useModalContext();

  useEffect(() => {
    setModalOpen(!!selectedId);
  }, [selectedId, setModalOpen]);

  const etapes = [
    {
      id: "1",
      titre: "Consentement éclairé",
      description: "Information complète et recueil du consentement des participants avant chaque entretien.",
      details: "Avant le début de chaque entretien, une note explicative a été remise aux participants détaillant les objectifs de la recherche, la durée prévue, et les modalités d'enregistrement. Le consentement a été recueilli par écrit (ou enregistré oralement), garantissant que chaque expert participe de manière libre et éclairée, en toute connaissance de cause."
    },
    {
      id: "2",
      titre: "Anonymisation possible",
      description: "Garantie de l'anonymat des données si demandée par les experts pour préserver la confidentialité.",
      details: "Nous avons proposé systématiquement l'option de l'anonymat. Si la plupart des experts ont accepté d'être cités nominativement, cette option reste une sécurité indispensable pour libérer la parole, notamment sur des sujets sensibles où un avis critique pourrait porter préjudice à leur carrière ou à leur institution."
    },
    {
      id: "3",
      titre: "Utilisation des enregistrements",
      description: "Usage strictement limité aux fins pédagogiques et académiques de cette étude.",
      details: "Les fichiers audio et les retranscriptions brutes sont stockés sur un serveur sécurisé. Ils ne seront ni diffusés publiquement, ni commercialisés. Seuls les extraits pertinents pour l'analyse sont intégrés au site web, dans le respect de l'intégrité des propos tenus par les personnes interrogées."
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-green-50 via-white to-green-50 overflow-y-auto flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <Shield className="text-green-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Considérations éthiques</h1>
        </div>

        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Le respect de l'éthique de la recherche au cœur de notre démarche.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {etapes.map((etape, index) => (
            <motion.div
              layoutId={etape.id}
              key={etape.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedId(etape.id)}
              className="p-6 bg-white border-2 border-green-200 rounded-2xl hover:border-green-400 hover:shadow-xl transition-all cursor-pointer flex flex-col items-center text-center"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full mb-4" />
              <motion.h3 className="text-gray-900 mb-2 text-lg font-semibold">{etape.titre}</motion.h3>
              <motion.p className="text-gray-600 leading-relaxed text-sm">{etape.description}</motion.p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center max-w-3xl mx-auto">
          <p className="text-gray-600 text-sm italic">
            Notre engagement éthique garantit la protection des participants et la fiabilité de nos données de recherche.
          </p>
        </div>

        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm" onClick={() => setSelectedId(null)}>
              {etapes.filter(item => item.id === selectedId).map(item => (
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
                      <Shield className="text-green-600" size={32} />
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