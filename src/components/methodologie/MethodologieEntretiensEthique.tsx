import { Shield } from 'lucide-react';
import { motion } from 'motion/react';

export function MethodologieEntretiensEthique() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-green-50 via-white to-green-50 overflow-y-auto flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <Shield className="text-green-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Considérations éthiques</h1>
        </div>
        
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Le respect de l'éthique de la recherche au cœur de notre démarche.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 bg-white border-2 border-green-200 rounded-2xl hover:border-green-400 hover:shadow-xl transition-all max-w-4xl mx-auto"
        >
          <p className="text-gray-700 leading-relaxed mb-6 text-sm">
            Tous les entretiens ont été menés dans le respect de l'éthique de la recherche :
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
              <p className="text-gray-700 leading-relaxed text-sm">
                <span className="font-semibold text-gray-900">Consentement éclairé</span> des participants avant chaque entretien
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
              <p className="text-gray-700 leading-relaxed text-sm">
                <span className="font-semibold text-gray-900">Anonymisation possible</span> des données si demandée par les experts
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
              <p className="text-gray-700 leading-relaxed text-sm">
                <span className="font-semibold text-gray-900">Utilisation des enregistrements</span> uniquement à des fins pédagogiques et académiques
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-sm italic">
              Notre engagement éthique garantit la protection des participants et la fiabilité de nos données de recherche.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}