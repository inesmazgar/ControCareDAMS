import { Link as LinkIcon, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export function DocumentationGroup6() {
  const webographie = [
    {
      titre: "Site officiel de l'Assurance Maladie - Téléconsultation",
      url: "ameli.fr/telemedicine",
      description: "Informations officielles sur la téléconsultation et son remboursement"
    },
    {
      titre: "Ordre National des Médecins - Télémédecine",
      url: "conseil-national.medecin.fr",
      description: "Cadre déontologique et bonnes pratiques"
    },
    {
      titre: "CNIL - Protection des données de santé",
      url: "cnil.fr/sante",
      description: "Recommandations sur la protection des données"
    },
    {
      titre: "Agence du Numérique en Santé (ANS)",
      url: "esante.gouv.fr",
      description: "Stratégie nationale et référentiels techniques"
    },
    {
      titre: "Fédération Hospitalière de France",
      url: "fhf.fr",
      description: "Position des hôpitaux sur la télémédecine"
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-y-auto flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center mb-12">
          <LinkIcon className="text-gray-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Webographie</h1>
        </div>
        
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto text-lg">
          Ressources en ligne et sites officiels de référence.
        </p>

        <div className="space-y-6 max-w-5xl mx-auto">
          {webographie.map((item, index) => (
            <motion.a
              key={index}
              href={item.url.startsWith('http') ? item.url : `https://${item.url}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="block p-8 bg-white border-2 border-gray-300 rounded-2xl hover:border-gray-500 hover:shadow-xl transition-all group"
            >
              <h3 className="text-gray-900 mb-2 text-xl font-semibold group-hover:text-green-600 transition-colors">
                {item.titre}
              </h3>
              <p className="text-sm text-green-600 mb-3 flex items-center">
                <ExternalLink size={14} className="mr-2" />
                {item.url}
              </p>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
