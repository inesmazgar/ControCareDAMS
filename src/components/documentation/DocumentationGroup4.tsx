import { FileText, ExternalLink } from 'lucide-react';

export function DocumentationGroup4() {
  const bibliographieFrancais = [
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
    }
  ];

  return (
    <div className="h-full w-full bg-white overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center mb-6">
          <FileText className="mr-3 text-green-600" size={32} />
          <h2 className="text-gray-900">Bibliographie Francophone (1/2)</h2>
        </div>
        
        <div className="space-y-4">
          {bibliographieFrancais.map((item, index) => {
            const link = item.doi ? `https://doi.org/${item.doi}` : item.url;
            return (
              <a 
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-sm transition-all"
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
                <div className="inline-flex items-center text-xs text-green-600 hover:text-green-700 hover:underline">
                  <ExternalLink size={12} className="mr-1" />
                  {item.doi ? `DOI: ${item.doi}` : 'Lien vers le document'}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
