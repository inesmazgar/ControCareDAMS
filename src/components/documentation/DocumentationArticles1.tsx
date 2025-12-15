import { FileText, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

interface DocumentationArticles1Props {
  highlightedSourceId?: string | null;
}

export function DocumentationArticles1({ highlightedSourceId }: DocumentationArticles1Props) {
  const articles = [
    {
      titre: "Impact of E-Health Literacy on Diabetes Self-Care Activities",
      auteur: "AlShehri, Waleed S., et Yasser Y. Khojah",
      annee: "2025",
      description: "Étude de l'impact de la littératie en e-santé sur l'autogestion du diabète de type 2 en Arabie Saoudite.",
      lien: "https://www.cureus.com/articles/381385-impact-of-e-health-literacy-on-diabetes-self-care-activities-among-people-with-type-2-diabetes-attending-primary-healthcare-centers-in-makkah-city-saudi-arabia-a-cross-sectional-study-2025#!/"
    },
    {
      titre: "Digital health technologies in swallowing care",
      auteur: "Alter, Isaac L., Carla Dias, et al.",
      annee: "2025",
      description: "Revue narrative sur les technologies de santé numérique pour les soins de déglutition.",
      lien: "https://www.sciencedirect.com/science/article/abs/pii/S038581462500080X"
    },
    {
      titre: "Intention to Use Telemedicine Services during a Health Crisis",
      auteur: "Atmaja, Ferry Tema, et al.",
      annee: "2024",
      description: "Approche basée sur la théorie Motivation-Opportunité-Capacité pour analyser l'intention d'utilisation.",
      lien: "https://onlinelibrary.wiley.com/doi/abs/10.1111/ijcs.13044"
    },
    {
      titre: "Navigating the future of health care with AI-driven digital therapeutics",
      auteur: "Vasdev, Nupur, et al.",
      annee: "2024",
      description: "Exploration du futur des soins de santé avec les thérapeutiques numériques basées sur l'IA.",
      lien: "https://www.sciencedirect.com/science/article/abs/pii/S1359644624002356"
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