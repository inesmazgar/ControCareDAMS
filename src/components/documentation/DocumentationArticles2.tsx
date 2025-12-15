import { FileText, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

interface DocumentationArticles2Props {
  highlightedSourceId?: string | null;
}

export function DocumentationArticles2({ highlightedSourceId }: DocumentationArticles2Props) {
  const articles = [
    {
      titre: "Investigating the Current State of E-Health Tools Adoption",
      auteur: "Rhodrick, Nyasha Musakuro",
      annee: "2025",
      description: "État actuel de l'adoption des outils de santé numérique pour les services de santé mentale.",
      lien: "https://www.proquest.com/docview/3203475946/abstract/D03A86D5738A49A9PQ/2?sourcetype=Scholarly%20Journals"
    },
    {
      titre: "Innovations in E-Health",
      auteur: "Wicks, Paul, et al.",
      annee: "2014",
      description: "Analyse des innovations fondamentales en e-santé et leur impact sur les soins.",
      lien: "https://www.proquest.com/docview/1491225586/abstract/198273BB6A5F4BE9PQ/1?sourcetype=Scholarly%20Journals"
    },
    {
      titre: "L'e-santé : l'empowerment du patient connecté",
      auteur: "Cases, Anne-Sophie",
      annee: "2017",
      description: "Étude de l'autonomisation des patients par les technologies de santé connectée.",
      lien: "https://shs.cairn.info/revue-journal-de-gestion-et-d-economie-medicales-2017-4-page-137?lang=fr"
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
              animate={{
                opacity: 1,
                y: 0,
                scale: highlightedSourceId && article.auteur.includes(highlightedSourceId) ? 1.05 : 1,
                borderColor: highlightedSourceId && article.auteur.includes(highlightedSourceId) ? "#ef4444" : "#fecaca"
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 bg-white border-2 rounded-2xl transition-all ${highlightedSourceId && article.auteur.includes(highlightedSourceId) ? 'shadow-2xl ring-4 ring-red-100 z-10' : 'hover:border-red-400 hover:shadow-xl'}`}
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
                  <p className="text-sm text-gray-500 mb-2 text-red-600 font-medium">{article.auteur}</p>
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