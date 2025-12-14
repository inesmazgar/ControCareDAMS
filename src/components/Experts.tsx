import { useState } from 'react';
import { User, Mail, Building2, Phone, Quote, ExternalLink, Linkedin, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Experts() {
  const [selectedExpert, setSelectedExpert] = useState<number | null>(null);

  const experts = [
    {
      nom: "Dr Mira Ballout",
      role: "Médecin généraliste",
      institution: "Spécialiste des usages numériques",
      email: null,
      phone: "0751534190",
      themes: ["Médecine générale", "Usages numériques", "Pratique quotidienne"],
      citation: "Ça ne peut pas tout gérer, la téléconsultation, effectivement, [...], parce qu’il y a une partie d’examen clinique à faire qu’on ne peut pas faire à distance.",
      audio: "/audio/mira-ballout.mp3",
      linkedin: null
    },
    {
      nom: "Anne-Sophie Cases",
      role: "Professeure des universités en sciences de gestion",
      institution: "Université de Montpellier",
      email: "anne-sophie.cases@umontpellier.fr",
      phone: null,
      themes: ["Sciences de gestion", "E-santé", "Recherche"],
      citation: "Un des risques, c’est de considérer qu’en fait, le premier niveau de soin ne nécessite plus d’humain.",
      audio: "/audio/anne-sophie-cases.mp3",
      linkedin: "https://www.linkedin.com/in/anne-sophie-cases-6a31961b/"
    },
    {
      nom: "Dr Grégoire Mercier",
      role: "Sciences des données de santé",
      institution: "Unité d'évaluation économique - CHU Montpellier",
      email: "g-mercier@chu-montpellier.fr",
      phone: null,
      themes: ["Recherche & Données de Santé", "Évaluation économique", "Sciences de la santé"],
      citation: "Il faut réussir à ce que les patients soient de plus en plus pris en charge en dehors des hôpitaux.",
      audio: "/audio/gregoire-mercier.mp3",
      linkedin: "https://www.linkedin.com/in/gregoire-mercier-6579bb6/"
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-y-auto flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center mb-12">
          <User className="text-gray-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Les Experts</h1>
        </div>

        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto text-lg">
          Trois experts représentant différentes perspectives sur la controverse.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto h-[60vh] items-center">
          {experts.map((expert, index) => (
            <motion.div
              layoutId={`expert - ${index} `}
              key={index}
              onClick={() => setSelectedExpert(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5, cursor: 'pointer' }}
              className="p-6 bg-white border-2 border-gray-300 rounded-2xl hover:border-blue-500 hover:shadow-2xl transition-all flex flex-col relative group h-auto"
            >
              <div className="flex flex-col items-center mb-2">
                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-3 text-gray-500 overflow-hidden border-2 border-white shadow-md">
                  <User size={40} />
                </div>

                <h3 className="text-gray-900 text-lg font-bold text-center mb-1">{expert.nom}</h3>
                <p className="text-blue-600 font-medium text-center text-xs mb-2 line-clamp-1">{expert.role}</p>

                <div className="flex items-center justify-center text-xs text-gray-500">
                  <Building2 size={12} className="mr-1" />
                  <span className="text-center line-clamp-1">{expert.institution}</span>
                </div>
              </div>

              {/* Click Hint */}
              <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                <span className="text-xs text-blue-500 font-semibold uppercase tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
                  Voir le profil complet
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedExpert !== null && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
              onClick={() => setSelectedExpert(null)}
            >
              <motion.div
                layoutId={`expert - ${selectedExpert} `}
                className="bg-white p-8 rounded-3xl w-full max-w-2xl shadow-2xl relative border border-gray-200 overflow-y-auto max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedExpert(null)}
                  className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
                >
                  <X size={24} className="text-gray-600" />
                </button>

                <div className="flex flex-col items-center mb-8">
                  <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-6 text-gray-500 overflow-hidden border-4 border-white shadow-lg">
                    <User size={64} />
                  </div>

                  <h3 className="text-gray-900 text-3xl font-bold text-center mb-2">{experts[selectedExpert].nom}</h3>
                  <p className="text-blue-600 font-semibold text-center text-lg mb-4">{experts[selectedExpert].role}</p>

                  <div className="flex items-center justify-center text-gray-500 mb-4 bg-gray-50 px-4 py-2 rounded-lg">
                    <Building2 size={18} className="mr-2" />
                    <span className="text-base text-center">{experts[selectedExpert].institution}</span>
                  </div>

                  {experts[selectedExpert].linkedin && (
                    <a
                      href={experts[selectedExpert].linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white bg-[#0A66C2] hover:bg-[#004182] px-4 py-2 rounded-full transition-colors font-medium shadow-sm"
                    >
                      <Linkedin size={20} />
                      Voir sur LinkedIn
                    </a>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 justify-center mb-8">
                  {experts[selectedExpert].themes.map((theme, i) => (
                    <span key={i} className="text-sm px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full font-medium">
                      {theme}
                    </span>
                  ))}
                </div>

                {/* Citation */}
                <div className="mb-8 relative bg-gray-50 p-6 rounded-2xl mx-auto max-w-lg">
                  <Quote size={32} className="text-blue-200 absolute -top-4 -left-4 bg-white rounded-full p-1" />
                  <p className="text-gray-700 text-lg italic leading-relaxed text-center font-medium">
                    "{experts[selectedExpert].citation}"
                  </p>
                </div>

                {/* Audio Player and Contact */}
                <div className="space-y-6 max-w-lg mx-auto">
                  <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                    <div className="flex items-center justify-center mb-3">
                      <p className="text-sm text-blue-800 font-bold uppercase tracking-wide">Interview Audio - Extrait</p>
                    </div>
                    <audio controls className="w-full h-10 accent-blue-600 block rounded-lg shadow-sm">
                      <source src={experts[selectedExpert].audio} type="audio/mpeg" />
                      Votre navigateur ne supporte pas l'élément audio.
                    </audio>
                  </div>

                  <div className="space-y-2 text-center pt-2">
                    {experts[selectedExpert].email && (
                      <div className="flex items-center justify-center text-sm text-gray-600 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <Mail size={16} className="mr-2 text-gray-400" />
                        <a href={`mailto:${experts[selectedExpert].email}`} className="hover:text-blue-600 transition-colors font-medium">
                          {experts[selectedExpert].email}
                        </a>
                      </div>
                    )}
                    {experts[selectedExpert].phone && (
                      <div className="flex items-center justify-center text-sm text-gray-600 p-2">
                        <Phone size={16} className="mr-2 text-gray-400" />
                        <span className="font-medium">{experts[selectedExpert].phone}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}