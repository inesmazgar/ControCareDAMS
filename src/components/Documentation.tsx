import { BookOpen, FileText, Video, Link as LinkIcon, Image as ImageIcon, Mic, ExternalLink } from 'lucide-react';

export function Documentation() {
  const documentation = {
    enregistrements: [
      {
        titre: "Entretien avec Dr Mira Ballout",
        date: "15 octobre 2024",
        duree: "1h15",
        description: "Discussion sur la pratique de la télémédecine et l'accessibilité aux soins"
      },
      {
        titre: "Entretien avec Anne-Sophie Cases",
        date: "8 novembre 2024",
        duree: "1h30",
        description: "Analyse de l'empowerment du patient connecté et enjeux de la e-santé"
      },
      {
        titre: "Entretien avec Dr Gregoire Mercier",
        date: "12 novembre 2024",
        duree: "1h20",
        description: "Perspectives médicales et économiques de la télémédecine"
      }
    ],
    bibliographieAnglais: [
      {
        titre: "Impact of E-Health Literacy on Diabetes Self-Care Activities Among People With Type 2 Diabetes Attending Primary Healthcare Centers in Makkah City, Saudi Arabia: A Cross-Sectional Study, 2025",
        auteur: "AlShehri, Waleed S., et Yasser Y. Khojah",
        annee: "2025",
        type: "Article",
        doi: "10.7759/cureus.87968"
      },
      {
        titre: "Digital health technologies in swallowing care from screening to rehabilitation: A narrative review",
        auteur: "Alter, Isaac L., Carla Dias, Jack Briano, et Anaïs Rameau",
        annee: "2025",
        type: "Article",
        doi: "10.1016/j.anl.2025.05.002"
      },
      {
        titre: "Intention to Use Telemedicine Services during a Health Crisis: A Motivation-Opportunity-Ability Theory Approach",
        auteur: "Atmaja, Ferry Tema, Cedric Hsi-Jui Wu, Revanth Kumar Guttena, et Andreawan Honora",
        annee: "2024",
        type: "Article",
        doi: "10.1111/ijcs.13044"
      },
      {
        titre: "Navigating the future of health care with AI-driven digital therapeutics",
        auteur: "Vasdev, Nupur, Tanisha Gupta, Bhakti Pawar, Anoothi Bain, et Rakesh Kumar Tekade",
        annee: "2024",
        type: "Article",
        doi: "10.1016/j.drudis.2024.104110"
      },
      {
        titre: "Investigating the Current State of the Adoption of E-Health Tools for Digital Mental Health Services in a Selected South African Higher Education Institution",
        auteur: "Rhodrick, Nyasha Musakuro",
        annee: "2025",
        type: "Article",
        doi: "10.36096/ijbes.v7i2.698"
      },
      {
        titre: "Innovations in E-Health",
        auteur: "Wicks, Paul, Jon Stamford, Martha A. Grootenhuis, Lotte Haverman, et Sara Ahmed",
        annee: "2014",
        type: "Article",
        doi: "10.1007/s11136-013-0458-x"
      },
      {
        titre: "Strategies for sustainable adoption of e-health tools for digital mental health services",
        auteur: "Musakuro, Rhodrick N., et Liiza Gie",
        annee: "2025",
        type: "Article",
        doi: "10.4102/sajhrm.v23i0.3053"
      },
      {
        titre: "The Increasing Value of eHealth in the Delivery of Patient-Centred Cancer Care",
        auteur: "Penedo, Frank J, Laura B Oswald, Joshua P Kronenfeld, Sofia F Garcia, David Cella, et Betina Yanez",
        annee: "2020",
        type: "Article",
        doi: "10.1016/S1470-2045(20)30021-8"
      },
      {
        titre: "Electronic health records and e-prescribing in Australia: An exploration of technological utilisation in Australian community pharmacies",
        auteur: "Hareem, Amina, Ieva Stupans, Joon Soo Park, Julie E. Stevens, et Kate Wang",
        annee: "2024",
        type: "Article",
        doi: "10.1016/j.ijmedinf.2024.105472"
      }
    ],
    bibliographieFrancais: [
      {
        titre: "LA SANTÉ CONNECTÉE",
        auteur: "GLOANNEC & al.",
        annee: "2017",
        type: "Module MIP - EHESP",
        url: "https://documentation.ehesp.fr/memoires/2017/mip/groupe%2024.pdf"
      },
      {
        titre: "Optimisation d'une interface numérique de santé à distance pour une meilleure expérience-patient",
        auteur: "Lourdais, Chloé",
        annee: "2022",
        type: "Thèse de doctorat",
        url: "https://theses.hal.science/tel-04128753"
      },
      {
        titre: "E-santé et milieu carcéral",
        auteur: "Py, Ulysse",
        annee: "2024",
        type: "Thèse de doctorat",
        url: "https://theses.fr/2024LORR0275"
      },
      {
        titre: "La e-santé : de nouveaux usages pour les technologies individuelles en santé publique",
        auteur: "Salmon, Fréderic Durand, et Loïc Le Tallec",
        annee: "2014",
        type: "Article",
        doi: "10.3917/rindu.144.0070"
      },
      {
        titre: "Appropriation de la plateforme de télépathologie I-PATH-INCTR dans la prise en charge des cancers pédiatriques au Mali et en RDC",
        auteur: "Sossou, Komlanvi Etienne",
        annee: "2023",
        type: "Thèse de doctorat",
        url: "https://theses.hal.science/tel-04876097"
      },
      {
        titre: "La médecine sans médecin ? Le numérique au service du malade",
        auteur: "Vallancien, Guy",
        annee: "2015",
        type: "Ouvrage",
        doi: "10.3917/gall.valla.2015.01"
      },
      {
        titre: "e-Médecine, e-santé et informatique - entre espoirs technologiques et désillusion humaniste",
        auteur: "Béorchia, Sylvain",
        annee: "2017",
        type: "Article",
        doi: "10.4267/2042/63780"
      },
      {
        titre: "L'e-santé : l'empowerment du patient connecté",
        auteur: "Cases, Anne-Sophie",
        annee: "2017",
        type: "Article",
        doi: "10.3917/jgem.174.0137"
      },
      {
        titre: "Les nouvelles technologies : l'avenir de notre santé ?",
        auteur: "Chambaud, Laurent",
        annee: "2023",
        type: "Chapitre d'ouvrage",
        pages: "77-89"
      },
      {
        titre: "Pratique de la e-santé en néphrologie en France : Résultats de la première enquête sur la télénéphrologie",
        auteur: "Citarda, Salvatore, Anne-Laure Camarroque, Guillaume Seret, et al.",
        annee: "2019",
        type: "Article",
        doi: "10.1016/j.nephro.2019.06.001"
      },
      {
        titre: "Objets connectés et santé",
        auteur: "Debet, Anne",
        annee: "2017",
        type: "Article",
        doi: "10.3917/jdsam.hs2.0034"
      }
    ],
    webographie: [
      {
        titre: "Site officiel de l'Assurance Maladie - Téléconsultation",
        url: "ameli.fr/telemedicine",
        description: "Informations officielles sur la téléconsultation et son remboursement"
      },
      {
        titre: "Ordre National des Médecins - Télémédecine",
        url: "conseil-national.medecin.fr",
        description: "Cadre déontologique et bonnes pratiques"
      },
      {
        titre: "CNIL - Protection des données de santé",
        url: "cnil.fr/sante",
        description: "Recommandations sur la protection des données"
      },
      {
        titre: "Agence du Numérique en Santé (ANS)",
        url: "esante.gouv.fr",
        description: "Stratégie nationale et référentiels techniques"
      },
      {
        titre: "Fédération Hospitalière de France",
        url: "fhf.fr",
        description: "Position des hôpitaux sur la télémédecine"
      }
    ],
    entretiens: [
      {
        titre: "Entretien avec Dr Mira Ballout",
        date: "15 octobre 2024",
        duree: "1h15",
        lieu: "Visioconférence",
        themes: ["Pratique de la télémédecine", "Accessibilité", "Défis techniques"]
      },
      {
        titre: "Entretien avec Anne-Sophie Cases",
        date: "8 novembre 2024",
        duree: "1h30",
        lieu: "Visioconférence",
        themes: ["E-santé", "Empowerment patient", "Innovation numérique"]
      },
      {
        titre: "Entretien avec Dr Gregoire Mercier",
        date: "12 novembre 2024",
        duree: "1h20",
        lieu: "CHU Montpellier",
        themes: ["Économie de la santé", "Télémédecine", "Modèles de financement"]
      }
    ],
    videos: [
      {
        titre: "La télémédecine en pratique - Reportage France 3",
        duree: "12:30",
        description: "Reportage dans une maison de santé utilisant la télémédecine"
      },
      {
        titre: "Débat : Télémédecine, progrès ou régression ?",
        duree: "45:00",
        description: "Table ronde avec différents acteurs du système de santé"
      },
      {
        titre: "Conférence HAS - État des lieux 2023",
        duree: "1:20:00",
        description: "Présentation des données et recommandations officielles"
      }
    ],
    illustrations: [
      {
        titre: "Infographie : Évolution du nombre de téléconsultations",
        description: "Graphique montrant l'explosion des consultations pendant la COVID-19"
      },
      {
        titre: "Carte des déserts médicaux en France",
        description: "Visualisation des zones sous-dotées en médecins"
      },
      {
        titre: "Schéma : Parcours type d'une téléconsultation",
        description: "Diagramme explicatif du processus technique et médical"
      }
    ]
  };

  return (
    <div className="pt-32 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center mb-6">
          <BookOpen className="mr-3" size={32} />
          <h1 className="text-gray-900">Documentation</h1>
        </div>
        
        <p className="text-gray-600 mb-16 max-w-3xl">
          L'ensemble des sources, documents et matériaux ayant servi à construire notre analyse 
          de la controverse. Cette documentation complète garantit la rigueur et la traçabilité 
          de notre travail.
        </p>

        {/* Enregistrements vocaux */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Mic className="mr-2 text-green-600" size={24} />
            <h2 className="text-gray-900">Enregistrements vocaux des entretiens</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {documentation.enregistrements.map((item, index) => (
              <div key={index} className="p-5 border border-green-200 bg-green-50 rounded-lg hover:border-green-300 transition-colors">
                <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-full mb-4">
                  <Mic size={24} className="text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">{item.titre}</h3>
                <div className="text-sm text-gray-600 mb-3 space-y-1">
                  <p>Date : {item.date}</p>
                  <p>Durée : {item.duree}</p>
                </div>
                <p className="text-xs text-gray-600 mb-4">{item.description}</p>
                <button className="w-full px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors">
                  Écouter l'enregistrement
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Bibliographie */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <FileText className="mr-2 text-green-600" size={24} />
            <h2 className="text-gray-900">Bibliographie</h2>
          </div>
          
          <div className="space-y-4">
            {documentation.bibliographieAnglais.map((item, index) => (
              <a 
                key={index} 
                href={`https://doi.org/${item.doi}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-5 border border-gray-200 rounded-lg hover:border-green-200 hover:shadow-sm transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="text-gray-900 mb-1 text-sm">{item.titre}</h4>
                    <p className="text-sm text-gray-600">
                      {item.auteur} ({item.annee})
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full whitespace-nowrap ml-3">
                    {item.type}
                  </span>
                </div>
                {item.doi && (
                  <div className="inline-flex items-center text-xs text-green-600 hover:text-green-700 hover:underline">
                    <ExternalLink size={12} className="mr-1" />
                    DOI: {item.doi}
                  </div>
                )}
              </a>
            ))}
            {documentation.bibliographieFrancais.map((item, index) => {
              const link = item.doi ? `https://doi.org/${item.doi}` : (item.url?.startsWith('http') ? item.url : `https://${item.url}`);
              return (
                <a 
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 border border-gray-200 rounded-lg hover:border-green-200 hover:shadow-sm transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="text-gray-900 mb-1 text-sm">{item.titre}</h4>
                      <p className="text-sm text-gray-600">
                        {item.auteur} ({item.annee})
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full whitespace-nowrap ml-3">
                      {item.type}
                    </span>
                  </div>
                  <div className="space-y-1">
                    {item.doi && (
                      <div className="inline-flex items-center text-xs text-green-600 hover:text-green-700 hover:underline">
                        <ExternalLink size={12} className="mr-1" />
                        DOI: {item.doi}
                      </div>
                    )}
                    {item.url && !item.doi && (
                      <div className="flex items-center text-xs text-green-600 hover:text-green-700 hover:underline">
                        <ExternalLink size={12} className="mr-1" />
                        <span className="truncate">URL: {item.url}</span>
                      </div>
                    )}
                    {item.pages && (
                      <p className="text-xs text-gray-500">Pages: {item.pages}</p>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Webographie */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <LinkIcon className="mr-2 text-green-600" size={24} />
            <h2 className="text-gray-900">Webographie</h2>
          </div>
          <div className="space-y-4">
            {documentation.webographie.map((item, index) => (
              <a 
                href={item.url.startsWith('http') ? item.url : `https://${item.url}`} 
                target="_blank" 
                rel="noopener noreferrer"
                key={index} 
                className="block p-5 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-sm transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1 group-hover:text-green-600 transition-colors">{item.titre}</h3>
                    <p className="text-sm text-green-600 mb-2 flex items-center">
                      <ExternalLink size={12} className="mr-1" />
                      {item.url}
                    </p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Comptes rendus d'entretiens */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <FileText className="mr-2 text-green-600" size={24} />
            <h2 className="text-gray-900">Comptes rendus d'entretiens</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {documentation.entretiens.map((item, index) => (
              <div key={index} className="p-5 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                <h3 className="text-gray-900 mb-2">{item.titre}</h3>
                <div className="text-sm text-gray-600 mb-3 space-y-1">
                  <p>Date : {item.date}</p>
                  <p>Durée : {item.duree}</p>
                  <p>Lieu : {item.lieu}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.themes.map((theme, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded">
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vidéos */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Video className="mr-2 text-green-600" size={24} />
            <h2 className="text-gray-900">Ressources vidéo</h2>
          </div>
          <div className="space-y-4">
            {documentation.videos.map((item, index) => (
              <div key={index} className="p-5 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1">{item.titre}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <span className="px-3 py-1 bg-red-50 text-red-700 text-xs rounded-full whitespace-nowrap ml-4">
                    {item.duree}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Illustrations */}
        <section>
          <div className="flex items-center mb-6">
            <ImageIcon className="mr-2 text-green-600" size={24} />
            <h2 className="text-gray-900">Illustrations et données</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {documentation.illustrations.map((item, index) => (
              <div key={index} className="p-5 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                <div className="w-full h-32 bg-gray-100 rounded mb-3 flex items-center justify-center">
                  <ImageIcon className="text-gray-400" size={32} />
                </div>
                <h3 className="text-gray-900 mb-1 text-sm">{item.titre}</h3>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}