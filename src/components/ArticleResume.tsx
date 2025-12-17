import { useState } from 'react';
import { FileText, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function ArticleResume() {
  const [isExpanded, setIsExpanded] = useState(false);

  const motsCles = [
    'Télémédecine',
    'E-santé',
    'Controverse',
    'Innovation',
    'Équité',
    'Protection des données'
  ];

  const [activeTab, setActiveTab] = useState<'article' | 'sources'>('article');

  const sources = [
    {
      id: 1,
      text: "Béorchia, Sylvain. 2017. « e-Médecine, e-santé et informatique - entre espoirs technologiques et désillusion humaniste ». Gestion. Hegel 4 (4): 289‑99. https://doi.org/10.4267/2042/63780."
    },
    {
      id: 2,
      text: "Citarda, Salvatore, Anne-Laure Camarroque, Guillaume Seret, e al. 2019. « Pratique de la e-santé en néphrologie en France : Résultats de la première enquête sur la télénéphrologie ». Néphrologie & Thérapeutique 15 (6): 452‑60. https://doi.org/10.1016/j.nephro.2019.06.001."
    },
    {
      id: 3,
      text: "Atmaja, Ferry Tema, Cedric Hsi-Jui Wu, Revanth Kumar Guttena, et Andreawan Honora. 2024. « Intention to Use Telemedicine Services during a Health Crisis: A Motivation-Opportunity-Ability Theory Approach ». International Journal of Consumer Studies 48 (3): e13044. https://doi.org/10.1111/ijcs.13044."
    },
    {
      id: 4,
      text: "GLOANNEC & al. 2017. « LA SANTÉ CONNECTÉE ». Module interprofessionnel de santé publique - MIP. EHESP. https://documentation.ehesp.fr/memoires/2017/mip/groupe%2024.pdf."
    },
    {
      id: 5,
      text: "Lourdais, Chloé. 2022. « Optimisation d’une interface numérique de santé à distance pour une meilleure expérience-patient ». These de doctorat, École centrale de Nantes. https://theses.hal.science/tel-04128753."
    },
    {
      id: 6,
      text: "Cases, Anne-Sophie. 2017. « L’e-santé : l’empowerment du patient connecté ». Santé Publique. Journal de gestion et d’économie médicales 35 (4): 137‑58. https://doi.org/10.3917/jgem.174.0137."
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-y-auto">
      <div className="min-h-full flex flex-col items-center pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl w-full my-auto">
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
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`p-8 bg-white border-2 border-green-300 rounded-2xl hover:border-green-500 hover:shadow-xl transition-all mb-8 cursor-pointer ${isExpanded ? 'ring-2 ring-green-200' : ''}`}
            onClick={() => !isExpanded && setIsExpanded(true)}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-gray-900 text-2xl font-semibold">
                ARTICLE AMUE :CONTROVERSE : e-Santé, la médecine pour tous, mais à quel prix ?
              </h2>
              <div className="flex gap-2">
                <a
                  href="/documents/article-amue.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Accéder au PDF
                </a>
              </div>
            </div>

            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-900 font-semibold mb-2">I. INTRODUCTION</p>
              <p className="text-gray-700 leading-relaxed text-justify">
                L'e-santé désigne l'ensemble des domaines où les Technologies de l'Information et de la Communication (TIC) sont mises au service du bien-être et de la santé. Définie par l'OMS comme « les services du numérique au service du bien-être de la personne », son essor se caractérise par une rapidité de diffusion sans précédent. La télémédecine (téléconsultation, télé-expertise) et les objets connectés ou m-santé (santé mobile) en sont les piliers. L'utilisation du Dossier Médical Partagé (DMP) est un exemple de système d'information clé pour le suivi des patients, et la pratique de la télémédecine dans des spécialités comme la néphrologie est désormais bien engagée. <span className="text-sm text-gray-500 font-style-italic">(Béorchia, 2017 [1], Citarda et al., 2019 [2])</span>.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!isExpanded ? (
                <motion.div
                  key="collapsed"
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-center"
                >
                  <button
                    className="flex items-center text-green-600 hover:text-green-700 font-semibold bg-green-50 px-4 py-2 rounded-full transition-colors"
                  >
                    Lire la suite <ChevronDown className="ml-2" />
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="expanded"
                  layout
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-6 text-gray-700 leading-relaxed text-justify"
                >
                  {/* Tabs Navigation */}
                  <div className="flex border-b border-gray-200 mb-6">
                    <button
                      onClick={(e) => { e.stopPropagation(); setActiveTab('article'); }}
                      className={`pb-2 px-4 font-semibold text-lg transition-colors relative outline-none ${activeTab === 'article' ? 'text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      Article
                      {activeTab === 'article' && <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600" />}
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setActiveTab('sources'); }}
                      className={`pb-2 px-4 font-semibold text-lg transition-colors relative outline-none ${activeTab === 'sources' ? 'text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      Sources
                      {activeTab === 'sources' && <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600" />}
                    </button>
                  </div>

                  {activeTab === 'article' ? (
                    <motion.div
                      key="article-content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">II. Les promesses : l'efficacité au service de l'accès et de la personnalisation</h3>
                        <p className="mb-4">
                          La santé numérique améliore l’accessibilité et la rapidité des soins, contribuant à réduire les inégalités territoriales. Le développement de la télémédecine vers des structures isolées, comme les EHPAD, constitue une réponse concrète à la pénurie de médecins.
                        </p>
                        <p className="mb-4">
                          Au-delà de l’accès, la personnalisation et la prévention sont au cœur de cette transformation : l’analyse génétique et l’IA permettent une médecine plus précise et plus réactive. Les études montrent également l’efficacité de l’e-santé dans le suivi des maladies chroniques et des troubles dépressifs grâce aux applications mobiles. Les montres connectées renforcent cette dynamique en assurant un suivi continu d’indicateurs de santé au quotidien.
                        </p>
                        <p>
                          Ces avancées ouvrent enfin la voie à une réduction significative des coûts pour les systèmes de santé. <span className="text-sm text-gray-500 italic">(Béorchia, 2017 [1] , Atmaja et al., 2024 [3])</span>
                        </p>
                      </div>

                      <div className="mt-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">III. Les risques et dérives : le soin transformé en marché</h3>
                        <p className="mb-4">
                          Le développement de l’e-santé soulève des risques majeurs pour la sécurité et l’équité des soins. La protection des données reste le principal enjeu : au-delà du piratage, l’usage des informations personnelles soulève des questions éthiques, comme le profilage ou la discrimination des patients. Une dérive notable est la marchandisation du secteur, notamment dans le “wellness”, qui transforme la promesse de soins en véritable opportunité commerciale.
                        </p>
                        <p className="mb-4">
                          La crainte d’une médecine déshumanisée, avec la réduction des consultations physiques, fragilise la relation soignant-soigné et pose un défi particulier en santé mentale, où le contact humain reste essentiel pour la qualité du soin. Enfin, la persistance de la fracture numérique creuse de nouvelles inégalités d’accès : comme le montre la figure « La fracture numérique en France », 14 % des Français n’ont pas Internet et restent exclus de cette santé numérique, accentuant le risque de marginalisation des populations les plus vulnérables. <span className="text-sm text-gray-500 italic">(GLOANNEC & al. 2017. [4])</span>
                        </p>

                        <div className="my-6 p-4 bg-gray-50 border-l-4 border-gray-400 rounded-r-lg">
                          <p className="font-semibold text-gray-900">Note sur la fracture numérique</p>
                          <p className="text-sm italic mt-1">
                            Source : Baromètre du numérique. (2015)
                          </p>
                          {/* Placeholder for the image if it were available */}
                          {/* <img src="/path/to/image.jpg" alt="Fracture numérique" className="mt-4 rounded-lg shadow-md max-w-full h-auto" /> */}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">IV. La controverse : un débat contrôlé et une question de pouvoir</h3>
                        <p>
                          Le véritable problème n’est pas technique, mais politique. Le débat est influencé par de nombreux conflits d’intérêts. Les grandes entreprises privées dominent l’innovation et la gestion de nos données, créant un rapport de force déséquilibré : nous sommes totalement transparents, tandis que leurs pratiques restent opaques. Cette logique de profit appliquée à la santé alimente une méfiance publique difficile à lever. Face à la puissance mondiale des GAFAM, tels que Google, Apple… et à des lois qui évoluent trop lentement, la régulation peine à suivre. La question centrale devient alors : la technologie sert-elle réellement le soin, ou la santé est-elle simplement devenue un marché pour l’industrie technologique ? <span className="text-sm text-gray-500 italic">(Lourdais, 2022 [5])</span>
                        </p>
                      </div>

                      <div className="mt-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">V. CONCLUSION</h3>
                        <p className="mb-4">
                          Pour relever la controverse autour de l’e-santé — offrir une médecine accessible à tous tout en garantissant sécurité et éthique — il est essentiel de mettre en place une gouvernance publique de la santé numérique, de développer une éthique des algorithmes et de sécuriser les données grâce à des technologies comme la Blockchain. L’éducation numérique en santé reste également un levier indispensable pour réduire les inégalités et garantir une utilisation responsable des outils numériques.
                        </p>
                        <p>
                          Comme l’a évoqué Anne-Sophie Cases lors de son interview, l’empowerment du patient connecté ouvre une perspective prometteuse : mieux informé et accompagné, le patient peut gagner en autonomie et en pouvoir d’action sur son parcours de soin, même si, selon elle, cette évolution doit rester équilibrée et préserver avant tout le contact humain. <span className="text-sm text-gray-500 italic">(Cases, 2017 [6])</span>
                        </p>
                      </div>

                      <div className="pt-6 border-t border-gray-200 mt-8">
                        <h3 className="text-gray-900 mb-3 font-semibold">Mots-clés</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {motsCles.map((mot, i) => (
                            <span key={i} className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full">
                              {mot}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-gray-500 italic mt-4">
                          L’IA nous a aidé à harmoniser toutes nos idées pour en faire un texte harmonieux et agréable à lire
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sources-content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Bibliographie & Sources</h3>
                      <ul className="space-y-6">
                        {sources.map(source => (
                          <li key={source.id} className="text-gray-600 text-sm pl-4 border-l-4 border-green-300 bg-green-50/50 p-4 rounded-r-lg hover:bg-green-50 transition-colors">
                            <span className="font-bold text-green-700 block mb-1">[{source.id}]</span>
                            <span className="leading-relaxed block">{source.text}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  <div className="flex justify-center pt-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsExpanded(false);
                      }}
                      className="flex items-center text-gray-500 hover:text-gray-700 font-semibold px-4 py-2 rounded-full transition-colors"
                    >
                      Fermer <ChevronUp className="ml-2" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>


        </div>
      </div>
    </div>

  );
}
