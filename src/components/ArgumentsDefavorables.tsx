import { useState, useEffect } from 'react';
import { XCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useModalContext } from "../context/ModalContext";

export function ArgumentsDefavorables() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { setModalOpen } = useModalContext();

  useEffect(() => {
    setModalOpen(!!selectedId);
  }, [selectedId, setModalOpen]);

  const argumentsList = [
    {
      id: "1",
      titre: "Fracture numérique",
      description: "Exclusion des personnes âgées, précaires ou non équipées.",
      details: "L'illectronisme touche près de 17% de la population française. Les personnes âgées, précaires ou vivant dans les zones blanches risquent d'être exclues de ce nouveau parcours de soins, renforçant ainsi les inégalités sociales de santé déjà existantes."
    },
    {
      id: "2",
      titre: "Qualité du diagnostic",
      description: "Impossibilité d'examen clinique complet et risque d'erreurs.",
      details: "L'absence d'examen clinique physique (palpation, auscultation directe) peut limiter la précision du diagnostic. Certains signes cliniques subtils peuvent échapper à la caméra, augmentant le risque d'erreur diagnostique ou de retard de prise en charge."
    },
    {
      id: "3",
      titre: "Protection des données",
      description: "Risques de piratage et de violation de la confidentialité.",
      details: "La multiplication des plateformes et des objets connectés augmente la surface d'attaque pour les cybercriminels. Les données de santé, hautement sensibles, sont des cibles privilégiées. Le risque de fuite ou de vol de données médicales est une préoccupation majeure."
    },
    {
      id: "4",
      titre: "Déshumanisation",
      description: "Perte du contact humain et de la relation de confiance.",
      details: "La relation médecin-patient repose sur la confiance et l'empathie, qui passent aussi par le contact non-verbal et la présence physique. L'écran peut créer une distance émotionnelle, rendant l'annonce de diagnostics graves ou l'accompagnement psychologique plus difficile."
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-red-50 via-white to-red-50 overflow-y-auto flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <XCircle className="text-red-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Arguments Défavorables</h1>
        </div>

        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Les limites et risques de la télémédecine.
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
              className="p-6 bg-white border-2 border-red-200 rounded-2xl hover:border-red-400 hover:shadow-xl transition-all cursor-pointer"
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
                      <XCircle className="text-red-600" size={32} />
                    </div>
                    <motion.h3 className="text-2xl font-bold text-gray-900">{item.titre}</motion.h3>
                  </div>

                  <motion.div className="space-y-4">
                    <p className="text-lg text-gray-700 font-medium">{item.description}</p>
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