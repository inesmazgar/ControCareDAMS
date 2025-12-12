import { FileText } from 'lucide-react';
import { motion } from 'motion/react';

export function MethodologieEntretiens() {
  const elements = [
    {
      titre: "Période et format",
      description: "Les entretiens ont été menés entre septembre et novembre 2025, en présentiel ou en visioconférence. Chaque entretien a duré entre 45 et 90 minutes et a été retranscrit intégralement."
    },
    {
      titre: "Sélection des experts",
      description: "Les experts ont été sélectionnés pour représenter la diversité des points de vue et des parties prenantes impliquées dans la controverse de la télémédecine."
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-y-auto flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center mb-12">
          <FileText className="text-gray-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Méthodologie des entretiens</h1>
        </div>
        
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto text-lg">
          Une approche qualitative rigoureuse pour recueillir et analyser les témoignages d'experts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {elements.map((element, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 bg-white border-2 border-gray-300 rounded-2xl hover:border-gray-500 hover:shadow-xl transition-all"
            >
              <h3 className="text-gray-900 mb-4 text-xl font-semibold">{element.titre}</h3>
              <p className="text-gray-600 leading-relaxed">{element.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
