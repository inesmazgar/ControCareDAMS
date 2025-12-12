import { Globe, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export function DocumentationSitesWeb() {
  const sites = [
    {
      titre: "Ameli.fr - Espace professionnel",
      url: "https://www.ameli.fr",
      description: "Ressources officielles sur la télémédecine et le remboursement."
    },
    {
      titre: "Haute Autorité de Santé (HAS)",
      url: "https://www.has-sante.fr",
      description: "Recommandations et bonnes pratiques en télémédecine."
    },
    {
      titre: "CNIL - Protection des données",
      url: "https://www.cnil.fr",
      description: "Guides sur la conformité RGPD en e-santé."
    },
    {
      titre: "Organisation Mondiale de la Santé",
      url: "https://www.who.int",
      description: "Guidelines internationales sur la santé numérique."
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-red-50 via-white to-red-50 overflow-y-auto flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <Globe className="text-red-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Sites Web et Ressources en ligne</h1>
        </div>
        
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Sources numériques et plateformes consultées.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {sites.map((site, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white border-2 border-red-200 rounded-2xl hover:border-red-400 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 rounded-lg">
                  <Globe className="text-red-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full font-semibold">
                      Site web
                    </span>
                  </div>
                  <h3 className="text-gray-900 mb-2 font-semibold">{site.titre}</h3>
                  <p className="text-sm text-red-600 mb-2 font-mono">
                    <a href={site.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:underline">
                      {site.url}
                      <ExternalLink className="ml-1" size={16} />
                    </a>
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">{site.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}