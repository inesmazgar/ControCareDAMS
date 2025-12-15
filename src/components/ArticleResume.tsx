import { FileText, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export function ArticleResume() {
  const motsCles = [
    'Télémédecine',
    'E-santé',
    'Controverse',
    'Innovation',
    'Équité',
    'Protection des données'
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-y-auto flex items-end justify-center pb-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-16">
          <FileText className="text-green-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">
            Article pour l'
            <a 
              href="https://www.amue.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 hover:underline transition-colors"
            >
              AMUE
            </a>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 bg-white border-2 border-green-300 rounded-2xl hover:border-green-500 hover:shadow-xl transition-all mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-gray-900 text-2xl font-semibold">Document de synthèse</h2>
            <a
              href="/documents/article-amue.pdf"
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              <ExternalLink size={16} className="mr-2" />
              Accéder au document
            </a>
          </div>

          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-900">
              Article de synthèse destiné à l'Association des Managers des Universités et Établissements (AMUE)
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-gray-900 mb-3 font-semibold">Résumé</h3>
            <p className="text-gray-700 leading-relaxed">
              L’e‑santé, portée par la télémédecine, les objets connectés et les dossiers médicaux numériques, promet une meilleure accessibilité aux soins, une personnalisation accrue et une réduction des coûts. Toutefois, son essor soulève des risques majeurs : protection des données, marchandisation du soin, fracture numérique et crainte d’une médecine déshumanisée. La controverse dépasse la technique pour devenir politique, dominée par les intérêts des grandes entreprises technologiques. La conclusion appelle à une gouvernance publique, une éthique des algorithmes, une sécurisation des données et une éducation numérique afin de garantir une santé numérique équitable et humaine.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-gray-900 mb-3 font-semibold">Mots-clés</h3>
            <div className="flex flex-wrap gap-2">
              {motsCles.map((mot, i) => (
                <span key={i} className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full">
                  {mot}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Date de publication : <span className="font-semibold">Novembre 2025</span> | 
              Nombre de mots : <span className="font-semibold">870</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}