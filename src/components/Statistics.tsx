import { Users, BookOpen, TrendingUp, Stethoscope } from 'lucide-react';
import { motion } from 'motion/react';

interface StatisticsProps {
  setActiveSection: (section: string) => void;
}

export function Statistics({ setActiveSection }: StatisticsProps) {
  return (
    <div className="h-full w-full bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative flex items-center justify-center overflow-y-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-900 mb-12 text-3xl md:text-4xl font-bold"
        >
          L'étude en Chiffres
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="p-8 bg-white/80 backdrop-blur-sm border-2 border-orange-200 rounded-2xl shadow-lg hover:shadow-xl hover:border-orange-400 transition-all cursor-pointer"
            onClick={() => setActiveSection('experts')}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-100 rounded-2xl mb-6">
              <Stethoscope size={40} className="text-orange-600" />
            </div>
            <h3 className="text-gray-900 mb-3 text-2xl font-semibold">3 Experts</h3>
            <p className="text-gray-600">
              Entretiens approfondis avec des professionnels de la santé
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="p-8 bg-white/80 backdrop-blur-sm border-2 border-emerald-200 rounded-2xl shadow-lg hover:shadow-xl hover:border-emerald-400 transition-all cursor-pointer"
            onClick={() => setActiveSection('documentation-articles1')}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-100 rounded-2xl mb-6">
              <BookOpen size={40} className="text-emerald-600" />
            </div>
            <h3 className="text-gray-900 mb-3 text-2xl font-semibold">20 Sources</h3>
            <p className="text-gray-600">
              Bibliographie académique complète et vérifiée
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="p-8 bg-white/80 backdrop-blur-sm border-2 border-red-200 rounded-2xl shadow-lg hover:shadow-xl hover:border-red-400 transition-all cursor-pointer"
            onClick={() => setActiveSection('chronologie-group1')}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-100 to-red-100 rounded-2xl mb-6">
              <TrendingUp size={40} className="text-red-600" />
            </div>
            <h3 className="text-gray-900 mb-3 text-2xl font-semibold">Chronologie</h3>
            <p className="text-gray-600">
              Évolution historique de la télémédecine
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="p-8 bg-white/80 backdrop-blur-sm border-2 border-gray-300 rounded-2xl shadow-lg hover:shadow-xl hover:border-gray-400 transition-all cursor-pointer"
            onClick={() => setActiveSection('team-group1')}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-100 rounded-2xl mb-6">
              <Users size={40} className="text-gray-600" />
            </div>
            <h3 className="text-gray-900 mb-3 text-2xl font-semibold">6 Membres</h3>
            <p className="text-gray-600">
              Une équipe pluridisciplinaire engagée
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}