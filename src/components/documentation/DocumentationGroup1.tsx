import { Mic, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export function DocumentationGroup1() {
  const enregistrements = [
    {
      titre: "Entretien avec Mira Ballout",
      date: "15 octobre 2024",
      duree: "1h15",
      description: "Discussion sur la pratique de la télémédecine et l'accessibilité aux soins"
    },
    {
      titre: "Entretien avec Anne-Sophie Cases",
      date: "8 novembre 2024",
      duree: "1h30",
      description: "Analyse de l'empowerment du patient connecté et enjeux de la e-santé"
    },
    {
      titre: "Entretien avec Dr Gregoire Mercier",
      date: "12 novembre 2024",
      duree: "1h20",
      description: "Perspectives médicales et économiques de la télémédecine"
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-y-auto flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center mb-12">
          <BookOpen className="text-gray-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Documentation</h1>
        </div>
        
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto text-lg">
          L'ensemble des sources, documents et matériaux ayant servi à construire notre analyse de la controverse.
        </p>

        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <Mic className="mr-2 text-green-600" size={28} />
            <h2 className="text-gray-900 text-2xl">Enregistrements vocaux des entretiens</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {enregistrements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-8 bg-white border-2 border-gray-300 rounded-2xl hover:border-gray-500 hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4 mx-auto">
                  <Mic size={28} className="text-white" />
                </div>
                <h3 className="text-gray-900 mb-2 text-center font-semibold">{item.titre}</h3>
                <div className="text-sm text-gray-600 mb-3 text-center space-y-1">
                  <p>Date : {item.date}</p>
                  <p>Durée : {item.duree}</p>
                </div>
                <p className="text-sm text-gray-600 text-center leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
