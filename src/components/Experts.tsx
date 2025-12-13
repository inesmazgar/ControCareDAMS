import { User, Mail, Building2, Phone, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export function Experts() {
  const experts = [
    {
      nom: "Dr Mira Ballout",
      role: "Médecin généraliste",
      institution: "Spécialiste des usages numériques",
      email: null,
      phone: "0751534190",
      themes: ["Médecine générale", "Usages numériques", "Pratique quotidienne"],
      citation: "Ça ne peut pas tout gérer, la téléconsultation, effectivement, [...], parce qu’il y a une partie d’examen clinique à faire qu’on ne peut pas faire à distance.",
      audio: "/audio/mira-ballout.mp3"
    },
    {
      nom: "Anne-Sophie Cases",
      role: "Professeure des universités en sciences de gestion",
      institution: "Université de Montpellier",
      email: "anne-sophie.cases@umontpellier.fr",
      phone: null,
      themes: ["Sciences de gestion", "E-santé", "Recherche"],
      citation: "Un des risques, c’est de considérer qu’en fait, le premier niveau de soin ne nécessite plus d’humain.",
      audio: "/audio/anne-sophie-cases.mp3"
    },
    {
      nom: "Dr Grégoire Mercier",
      role: "Sciences des données de santé",
      institution: "Unité d'évaluation économique - CHU Montpellier",
      email: "g-mercier@chu-montpellier.fr",
      phone: null,
      themes: ["Recherche & Données de Santé", "Évaluation économique", "Sciences de la santé"],
      citation: "Il faut réussir à ce que les patients soient de plus en plus pris en charge en dehors des hôpitaux.",
      audio: "/audio/gregoire-mercier.mp3"
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-y-auto flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center mb-12">
          <User className="text-gray-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Les Experts</h1>
        </div>

        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto text-lg">
          Trois experts représentant différentes perspectives sur la controverse.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {experts.map((expert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 bg-white border-2 border-gray-300 rounded-2xl hover:border-gray-500 hover:shadow-xl transition-all h-full flex flex-col"
            >
              <h3 className="text-gray-900 mb-2 text-xl font-semibold text-center">{expert.nom}</h3>
              <p className="text-gray-600 mb-1 text-center text-sm">{expert.role}</p>
              <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                <Building2 size={14} className="mr-1" />
                <span className="text-xs text-center">{expert.institution}</span>
              </div>

              {/* Contact info */}
              <div className="space-y-1 mb-4 text-center">
                {expert.email && (
                  <div className="flex items-center justify-center text-xs text-green-600">
                    <Mail size={12} className="mr-1" />
                    <a href={`mailto:${expert.email}`} className="hover:underline">
                      {expert.email}
                    </a>
                  </div>
                )}
                {expert.phone && (
                  <div className="flex items-center justify-center text-xs text-green-600">
                    <Phone size={12} className="mr-1" />
                    {expert.phone}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {expert.themes.map((theme, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                    {theme}
                  </span>
                ))}
              </div>

              {/* Citation */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-start gap-2">
                  <Quote size={16} className="text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-600 text-sm italic leading-relaxed">
                    "{expert.citation}"
                  </p>
                </div>
              </div>

              {/* Audio Player */}
              <div className="mt-auto pt-6">
                <audio controls className="w-full h-8">
                  <source src={expert.audio} type="audio/mpeg" />
                  Votre navigateur ne supporte pas l'élément audio.
                </audio>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}