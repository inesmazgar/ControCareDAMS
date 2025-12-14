import { useState, useEffect } from 'react';
import { Calendar, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useModalContext } from "../context/ModalContext";

export function Timeline() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { setModalOpen } = useModalContext();

  useEffect(() => {
    setModalOpen(!!selectedId);
  }, [selectedId, setModalOpen]);

  const events = [
    {
      id: "1",
      year: "1950-1960",
      title: "Prémices de la télémédecine",
      description: "Premières expérimentations de transmission d'images médicales par téléphone.",
      details: "Les années 50 et 60 marquent la préhistoire de la télémédecine. Des expérimentations pionnières ont lieu, notamment aux États-Unis (Nebraska Psychiatric Institute) avec les premières transmissions de consultations psychiatriques par télévision en circuit fermé. En parallèle, des essais de teleradiologie permettent l'envoi d'images rayons X par téléphone, posant les bases technologiques de la transmission de données cliniques à distance.",
      category: "innovation"
    },
    {
      id: "2",
      year: "1970",
      title: "NASA et télémédecine spatiale",
      description: "Développement de systèmes de surveillance médicale à distance pour les astronautes.",
      details: "La conquête spatiale a été un catalyseur majeur. Pour suivre la santé des astronautes en temps réel à des milliers de kilomètres, la NASA développe des systèmes sophistiqués de télémétrie biomédicale. Ces technologies, capables de surveiller les signes vitaux (ECG, respiration) à distance, seront ensuite transférées vers le secteur civil, notamment pour la surveillance des patients en zones isolées (programme STARPAHC en Arizona).",
      category: "innovation"
    },
    {
      id: "3",
      year: "1990-2000",
      title: "Démocratisation d'Internet",
      description: "Émergence des premières plateformes de consultation en ligne et des dossiers médicaux électroniques.",
      details: "L'arrivée d'Internet dans les foyers et les hôpitaux révolutionne l'échange d'informations. La numérisation des dossiers patients (DMP) commence à se structurer. C'est aussi l'époque des premiers sites d'information santé grand public (WebMD) et des premières expériences de télé-expertise entre hôpitaux universitaires et centres périphériques, facilitées par l'augmentation des débits de connexion.",
      category: "innovation"
    },
    {
      id: "4",
      year: "2009",
      title: "Légalisation en France",
      description: "La loi HPST reconnaît officiellement la télémédecine et en définit le cadre juridique.",
      details: "La loi « Hôpital, Patients, Santé et Territoires » (HPST) du 21 juillet 2009 est un texte fondateur en France. Elle définit pour la première fois légalement la télémédecine (article L. 6316-1 du Code de la santé publique) et ses cinq actes : téléconsultation, télé-expertise, télésurveillance médicale, téléassistance médicale et régulation médicale. Elle sort la pratique de l'expérimentation pour l'inscrire dans le droit commun.",
      category: "legislation"
    },
    {
      id: "5",
      year: "2018",
      title: "Remboursement par l'Assurance Maladie",
      description: "La téléconsultation devient remboursable en France, marquant un tournant majeur.",
      details: "Le 15 septembre 2018 marque la fin d'une exception française : la téléconsultation entre dans le droit commun du remboursement par l'Assurance Maladie. Désormais, tout médecin peut proposer une téléconsultation à ses patients, et ces actes sont remboursés aux mêmes tarifs que les consultations physiques, sous certaines conditions (parcours de soins, connaissance préalable du patient).",
      category: "legislation"
    },
    {
      id: "6",
      year: "2020",
      title: "Pandémie COVID-19",
      description: "Explosion de l'usage de la télémédecine : +1000% de téléconsultations. Assouplissement des règles.",
      details: "La crise sanitaire agit comme un accélérateur sans précédent. Pour assurer la continuité des soins tout en limitant les contaminations, les verrous réglementaires sautent (remboursement à 100%, levée de l'obligation de connaissance préalable). Le nombre de téléconsultations explose, passant de quelques milliers à plus d'un million par semaine au pic du premier confinement, ancrant durablement l'usage dans les habitudes des Français.",
      category: "crise"
    },
    {
      id: "7",
      year: "2021",
      title: "Débats sur la pérennisation",
      description: "Questionnements sur le maintien des mesures dérogatoires et les risques de surutilisation.",
      details: "Une fois l'urgence passée, la question de la « nouvelle normalité » se pose. Faut-il maintenir les assouplissements ? Des voix s'élèvent pour alerter sur les risques d'une « ubérisation » de la médecine, avec l'émergence de plateformes commerciales agressives et le risque de consommation médicale déconnectée du parcours de soins coordonné par le médecin traitant.",
      category: "controverse"
    },
    {
      id: "8",
      year: "2022",
      title: "Encadrement renforcé",
      description: "Nouvelles régulations pour prévenir les abus et garantir la qualité des soins.",
      details: "Face aux dérives constatées (arrêts de travail de complaisance, fraude), les autorités resserrent la vis. La loi de financement de la sécurité sociale pour 2022 et les avenants conventionnels réintroduisent des garde-fous : limitation de la téléconsultation à 20% de l'activité du médecin, encadrement strict des prescriptions d'arrêts maladie en ligne, et régulation des sociétés de téléconsultation.",
      category: "legislation"
    },
    {
      id: "9",
      year: "2023-2024",
      title: "Intégration de l'IA",
      description: "Émergence de l'intelligence artificielle dans le diagnostic et le suivi des patients. Nouveaux débats éthiques.",
      details: "L'IA générative et les algorithmes prédictifs s'invitent dans la e-santé. Des outils d'aide au diagnostic, de tri des urgences ou de suivi automatique des patients chroniques se développent. Cela soulève de nouvelles interrogations éthiques majeures : responsabilité médicale en cas d'erreur de l'IA, biais algorithmiques, déshumanisation de la relation et protection des données de santé face aux géants technologiques.",
      category: "innovation"
    },
    {
      id: "10",
      year: "2025",
      title: "État des lieux actuel",
      description: "Stabilisation de l'usage, mais persistance des controverses sur l'équité d'accès et la qualité des soins.",
      details: "En 2025, la télémédecine a trouvé sa place comme outil complémentaire, mais n'a pas résolu la crise des déserts médicaux. La fracture numérique persiste, excluant une partie de la population âgée ou précaire. Le débat se concentre désormais sur l'hybridation des soins (phygital) et la nécessité de maintenir un contact humain irremplaçable au cœur du dispositif de soin.",
      category: "controverse"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'innovation':
        return 'bg-orange-100 text-orange-700 border-orange-300';
      case 'legislation':
        return 'bg-emerald-100 text-emerald-700 border-emerald-300';
      case 'crise':
        return 'bg-red-100 text-red-700 border-red-300';
      case 'controverse':
        return 'bg-gray-100 text-gray-700 border-gray-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'innovation':
        return 'Innovation technologique';
      case 'legislation':
        return 'Évolution législative';
      case 'crise':
        return 'Événement majeur';
      case 'controverse':
        return 'Controverse';
      default:
        return '';
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center mb-6">
          <Calendar className="mr-3" size={32} />
          <h1 className="text-gray-900">Chronologie</h1>
        </div>

        <p className="text-gray-600 mb-16 max-w-3xl">
          L'évolution de la télémédecine et de l'e-santé : des premières expérimentations
          aux défis contemporains.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-200" />

          {/* Events */}
          <div className="space-y-12">
            {events.map((event) => (
              <div key={event.id} className="relative pl-20">
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-5 h-5 bg-green-600 rounded-full border-4 border-white" />

                <motion.div
                  layoutId={event.id}
                  onClick={() => setSelectedId(event.id)}
                  className="bg-white border-2 border-transparent hover:border-green-200 shadow-sm hover:shadow-md rounded-lg p-6 transition-all cursor-pointer"
                  style={{ border: '1px solid #e5e7eb' }} // Default border, overridden by hover above
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-3 py-1 bg-green-600 text-white text-xs rounded-full">
                      {event.year}
                    </span>
                    <span className={`px-3 py-1 text-xs rounded-full border ${getCategoryColor(event.category)}`}>
                      {getCategoryLabel(event.category)}
                    </span>
                  </div>

                  <motion.h3 className="text-gray-900 mb-2 font-semibold text-lg">{event.title}</motion.h3>
                  <motion.p className="text-sm text-gray-600">{event.description}</motion.p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <div className="w-4 h-4 bg-orange-600 rounded-full mb-2" />
            <p className="text-xs text-gray-700">Innovation technologique</p>
          </div>
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
            <div className="w-4 h-4 bg-emerald-600 rounded-full mb-2" />
            <p className="text-xs text-gray-700">Évolution législative</p>
          </div>
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="w-4 h-4 bg-red-600 rounded-full mb-2" />
            <p className="text-xs text-gray-700">Événement majeur</p>
          </div>
          <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg">
            <div className="w-4 h-4 bg-gray-600 rounded-full mb-2" />
            <p className="text-xs text-gray-700">Controverse</p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm" onClick={() => setSelectedId(null)}>
            {events.filter(item => item.id === selectedId).map(item => (
              <motion.div
                layoutId={item.id}
                key={item.id}
                className="bg-white p-6 rounded-2xl w-full max-w-lg shadow-2xl relative border-2 border-green-200"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <X size={20} className="text-gray-600" />
                </button>

                <div className="flex flex-col gap-4 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-green-600 text-white text-xs rounded-full inline-block">
                      {item.year}
                    </span>
                    <span className={`px-3 py-1 text-xs rounded-full border ${getCategoryColor(item.category)}`}>
                      {getCategoryLabel(item.category)}
                    </span>
                  </div>
                  <motion.h3 className="text-xl font-bold text-gray-900">{item.title}</motion.h3>
                </div>

                <motion.div className="space-y-4">
                  <p className="text-gray-700 font-medium text-sm">{item.description}</p>
                  <div className="h-px bg-gray-200 w-full" />
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.details}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
