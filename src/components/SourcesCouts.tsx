import { FileText, TrendingDown } from 'lucide-react';
import { motion } from 'motion/react';

export function SourcesCouts() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-green-50 via-white to-green-50 overflow-y-auto flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <FileText className="text-green-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Documentation - Arguments favorables</h1>
        </div>

        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Sources académiques et officielles validant les bénéfices de la télémédecine.
        </p>

        <div className="pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-white border-2 border-green-200 rounded-2xl hover:border-green-400 hover:shadow-xl transition-all cursor-pointer"
            onClick={() => window.open('https://www.irdes.fr/recherche/rapports.html', '_blank')}
          >
            <div className="flex items-start gap-4 flex-col">
              <div className="flex items-start gap-4 w-full">
                <div className="p-3 bg-green-100 rounded-lg">
                  <TrendingDown className="text-green-600" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-gray-900 text-xl font-semibold">Analyse économique IRDES</h3>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                      Étude économique
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    IRDES - Étude comparative des coûts.
                  </p>
                </div>
              </div>
              <div className="space-y-2 w-full">
                <p className="text-sm text-gray-500">Points clés :</p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Réduction des frais de transport</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Diminution des hospitalisations évitables</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Optimisation des ressources médicales</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl"
        >
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-semibold">Note :</span> Les économies réalisées varient selon
            les pathologies et les contextes d'utilisation. L'étude IRDES souligne l'importance
            d'un cadre adapté pour maximiser les bénéfices économiques tout en maintenant la
            qualité des soins.
          </p>
        </motion.div>
      </div>
    </div>
  );
}