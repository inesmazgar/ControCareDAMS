import { Shield } from 'lucide-react';
import { motion } from 'motion/react';

export function Disclaimer() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-y-auto flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center mb-12">
          <Shield className="text-gray-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Clause de non-responsabilité</h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 bg-white border-2 border-gray-300 rounded-2xl mb-8"
        >
          <p className="text-gray-700 leading-relaxed">
            Le site web suivant est un exercice réalisé par des élèves de 3ème année de l'école <strong>Polytech Montpellier</strong> dans le cadre du cours d'introduction au système d'information du département DAMS. Ces sites sont le résultat de travail d'étudiants et sont mis en ligne pour des raisons pédagogiques et didactiques; une fois en ligne, ils ne sont plus mis à jour. Vos réactions et commentaires sont très bienvenus. Pour signaler une erreur, réagir à un contenu ou demander une modification, merci d'écrire aux élèves et à la responsable de l'enseignement (<a href="mailto:isabelle.bourdon@umontpellier.fr" className="text-green-600 hover:underline">isabelle.bourdon@umontpellier.fr</a>). Polytech Montpellier décline toute responsabilité pour les erreurs et les imprécisions que peuvent contenir ces sites.
          </p>
        </motion.div>
      </div>
    </div>
  );
}