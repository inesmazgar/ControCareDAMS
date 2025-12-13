import { Film, Image, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export function IllustrationsVideos() {
  const ressources = [
    {
      type: 'Vidéo',
      titre: 'Téléconsultation : Comment ça marche ?',
      description: 'Démonstration pratique d\'une téléconsultation, La Quotidienne',
      duree: '3:59',
      lien: 'https://youtu.be/wFpaGOBxMjM?si=YH-1Va4VN0ZA3XF-'
    },
    {
      type: 'Vidéo',
      titre: 'Beaugency : la téléconsultation se développe en milieu rural',
      description: 'La téléconsultation continue à se développer dans la région Centre-Val de Loire pour pallier la pénurie de médecins généralistes.',
      duree: '1:43',
      lien: 'https://youtu.be/dYeE7Tw09B4?si=2pVmsJiew-uNYZWb'
    },
    {
      type: 'Vidéo',
      titre: 'E-santé : Enjeux et perspectives',
      description: 'La Chaire Santé Intégrative du Conservatoire national des arts et métiers (CNAM) a organisé le premier colloque Santé Intégrative le 23 septembre 2022 à Paris, évènement qui a mobilisé 500 personnes.',
      duree: '52:52',
      lien: 'https://youtu.be/UDS-j56T9Eg?si=xutAoSW7lV4WvRcy'
    },
    {
      type: 'Infographie',
      titre: 'Les chiffres de la télémédecine en France',
      description: 'Évolution des consultations 2019-2024, CHU Rouen',
      format: 'PNG',
      lien: 'https://www.chu-rouen.fr/wp-content/uploads/sites/66/2024/01/Nombre-de-teleconsultations.png'
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-red-50 via-white to-red-50 overflow-y-auto flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <Film className="text-red-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Illustrations & Vidéos</h1>
        </div>
        
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Ressources visuelles et audiovisuelles pour mieux comprendre la controverse.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {ressources.map((ressource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white border-2 border-red-200 rounded-2xl hover:border-red-400 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 rounded-lg">
                  {ressource.type === 'Vidéo' ? (
                    <Film className="text-red-600" size={24} />
                  ) : (
                    <Image className="text-red-600" size={24} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full font-semibold">
                      {ressource.type}
                    </span>
                    {ressource.duree && (
                      <span className="text-xs text-gray-500">{ressource.duree}</span>
                    )}
                    {ressource.format && (
                      <span className="text-xs text-gray-500">{ressource.format}</span>
                    )}
                  </div>
                  <h3 className="text-gray-900 mb-2 font-semibold">{ressource.titre}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{ressource.description}</p>
                  {ressource.lien && (
                    <a 
                      href={ressource.lien} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-red-600 text-sm font-semibold mt-2 flex items-center hover:underline"
                    >
                      Voir {ressource.type === 'Vidéo' ? 'la vidéo' : 'l\'image'} 
                      <ExternalLink className="ml-1" size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </div>
  );
}