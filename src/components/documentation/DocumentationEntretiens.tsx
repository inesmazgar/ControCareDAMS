import { Mic, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export function DocumentationEntretiens() {
  const entretiens = [
    {
      titre: "Entretien avec Dr Mira Ballout",
      date: "15 octobre 2024",
      duree: "1h15",
      description: "Discussion sur la pratique de la télémédecine et l'accessibilité aux soins.",
      lien: "#" // Lien vers l'enregistrement
    },
    {
      titre: "Entretien avec Anne-Sophie Cases",
      date: "8 novembre 2024",
      duree: "1h30",
      description: "Analyse de l'empowerment du patient connecté et enjeux de la e-santé.",
      lien: "#"
    },
    {
      titre: "Entretien avec Dr Gregoire Mercier",
      date: "12 novembre 2024",
      duree: "1h20",
      description: "Perspectives médicales et économiques de la télémédecine.",
      lien: "#"
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-red-50 via-white to-red-50 overflow-y-auto flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <Mic className="text-red-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Entretiens d'experts</h1>
        </div>
        
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Enregistrements vocaux de nos entretiens avec les experts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {entretiens.map((entretien, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white border-2 border-red-200 rounded-2xl hover:border-red-400 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 rounded-lg">
                  <Mic className="text-red-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full font-semibold">
                      Entretien
                    </span>
                    <span className="text-xs text-gray-500">{entretien.duree}</span>
                  </div>
                  <h3 className="text-gray-900 mb-2 font-semibold">{entretien.titre}</h3>
                  <p className="text-sm text-gray-500 mb-2">{entretien.date}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{entretien.description}</p>
                  <a href={entretien.lien} className="text-red-600 text-sm font-semibold mt-2 flex items-center">
                    <ExternalLink className="mr-1" size={16} />
                    Écouter l'enregistrement
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}