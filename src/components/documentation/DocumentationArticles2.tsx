import { FileText, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export function DocumentationArticles2() {
  const articles = [
    {
      titre: "Investigating the Current State of E-Health Tools Adoption",
      auteur: "Rhodrick, Nyasha Musakuro",
      annee: "2025",
      description: "État actuel de l'adoption des outils de santé numérique pour les services de santé mentale.",
      lien: "https://doi.org/10.1007/s11126-025-10123-4"
    },
    {
      titre: "Innovations in E-Health",
      auteur: "Wicks, Paul, et al.",
      annee: "2014",
      description: "Analyse des innovations fondamentales en e-santé et leur impact sur les soins.",
      lien: "https://doi.org/10.2196/jmir.2952"
    },
    {
      titre: "L'e-santé : l'empowerment du patient connecté",
      auteur: "Cases, Anne-Sophie",
      annee: "2017",
      description: "Étude de l'autonomisation des patients par les technologies de santé connectée.",
      lien: "https://doi.org/10.3917/heg.172.0033"
    },
    {
      titre: "Objets connectés et santé",
      auteur: "Debet, Anne",
      annee: "2017",
      description: "Analyse juridique et éthique des objets connectés dans le domaine de la santé.",
      lien: "https://doi.org/10.3917/legi.602.0264"
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-red-50 via-white to-red-50 overflow-y-auto flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <FileText className="text-red-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Articles Scientifiques</h1>
        </div>
        
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Publications académiques et articles de recherche consultés pour cette étude.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white border-2 border-red-200 rounded-2xl hover:border-red-400 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 rounded-lg">
                  <FileText className="text-red-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full font-semibold">
                      Article
                    </span>
                    <span className="text-xs text-gray-500">{article.annee}</span>
                  </div>
                  <h3 className="text-gray-900 mb-2 font-semibold">{article.titre}</h3>
                  <p className="text-sm text-gray-500 mb-2">{article.auteur}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{article.description}</p>
                  <a href={article.lien} target="_blank" rel="noopener noreferrer" className="text-red-600 text-sm font-semibold mt-2 flex items-center">
                    Lire l'article <ExternalLink className="ml-1" size={16} />
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