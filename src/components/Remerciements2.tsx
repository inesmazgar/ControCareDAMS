import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function Remerciements2() {
  const remerciements = [
    {
      titre: "Notre enseignante",
      description: "Pour son accompagnement méthodologique rigoureux et ses conseils avisés tout au long du projet.",
    },
    {
      titre: "Les documentalistes",
      description: "De la bibliothèque universitaire pour leur expertise dans nos recherches bibliographiques.",
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-y-auto flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center mb-12">
          <Heart className="text-red-600 mr-4" size={48} />
          <h1 className="text-red-600 text-4xl font-bold">Remerciements</h1>
        </div>
        
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto text-lg">
          Ce projet n'aurait pas pu voir le jour sans le soutien de nombreuses personnes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {remerciements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 bg-white border-2 border-red-300 hover:border-red-500 rounded-2xl hover:shadow-xl transition-all"
            >
              <h3 className="mb-4 text-xl font-semibold text-red-600">{item.titre}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}