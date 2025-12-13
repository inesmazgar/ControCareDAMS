import { BookOpen, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export function DocumentationOuvrages() {
  const ouvrages = [
    {
      titre: "La médecine sans médecin ? Le numérique au service du malade",
      auteur: "Vallancien, Guy",
      editeur: "Gallimard",
      annee: "2015",
      description: "Réflexion sur la transformation de la médecine par le numérique et son impact sur la relation médecin-patient.",
      lien: "https://www.gallimard.fr/Catalogue/GALLIMARD/Le-Debat/La-medecine-sans-medecin"
    },
    {
      titre: "LA SANTÉ CONNECTÉE",
      auteur: "GLOANNEC & al.",
      editeur: "Presses de l'EHESP",
      annee: "2017",
      description: "Analyse des enjeux et perspectives de la santé connectée en France.",
      lien: "https://documentation.ehesp.fr/memoires/2017/mip/groupe%2024.pdf"
    },
    {
      titre: "E-santé et intelligence artificielle",
      auteur: "Collectif",
      editeur: "Dalloz",
      annee: "2020",
      description: "Ouvrage sur les aspects juridiques et éthiques de l'IA dans la santé numérique.",
      lien: "https://www.tandemhealth.ai/fr?utm_term=IA%20en%20m%C3%A9decine&utm_campaign=fr_ms_gs_gen_exact-phrase_20250704_x&utm_source=ms&utm_medium=cpc&hsa_acc=3580844898&hsa_cam=22751474573&hsa_grp=1187474467962254&hsa_ad=&hsa_src=o&hsa_tgt=kwd-74217579299911:loc-66&hsa_kw=IA%20en%20m%C3%A9decine&hsa_mt=p&hsa_net=adwords&hsa_ver=3&msclkid=59adaaf6cd6910bfd278c3cb953acb88"
    },
    {
      titre: "Médecine 4.0 : Le numérique au service de la santé",
      auteur: "Collectif",
      editeur: "Les Échos",
      annee: "2021",
      description: "Vue d'ensemble des transformations numériques du système de santé.",
      lien: "https://www.lesechos.fr/medecine-numerique"
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-red-50 via-white to-red-50 overflow-y-auto flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <BookOpen className="text-red-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Ouvrages</h1>
        </div>
        
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Livres et ouvrages de référence qui ont nourri notre réflexion.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {ouvrages.map((ouvrage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white border-2 border-red-200 rounded-2xl hover:border-red-400 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 rounded-lg">
                  <BookOpen className="text-red-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full font-semibold">
                      Ouvrage
                    </span>
                    <span className="text-xs text-gray-500">{ouvrage.annee}</span>
                  </div>
                  <h3 className="text-gray-900 mb-2 font-semibold">{ouvrage.titre}</h3>
                  <p className="text-sm text-gray-500 mb-2">{ouvrage.auteur}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{ouvrage.description}</p>
                  <a href={ouvrage.lien} target="_blank" rel="noopener noreferrer" className="text-red-600 text-sm font-semibold mt-2 flex items-center">
                    <ExternalLink className="mr-1" size={16} />
                    Lire plus
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