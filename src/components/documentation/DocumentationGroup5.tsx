import { FileText, ExternalLink } from 'lucide-react';

export function DocumentationGroup5() {
  const bibliographieFrancais2 = [
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
  ];

  return (
    <div className="h-full w-full bg-white overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center mb-6">
          <FileText className="mr-3 text-green-600" size={32} />
          <h2 className="text-gray-900">Bibliographie Francophone (2/2)</h2>
        </div>
        
        <div className="space-y-4">
          {bibliographieFrancais2.map((item, index) => {
            const link = item.doi ? `https://doi.org/${item.doi}` : '#';
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
                {item.doi ? (
                  <div className="inline-flex items-center text-xs text-green-600 hover:text-green-700 hover:underline">
                    <ExternalLink size={12} className="mr-1" />
                    DOI: {item.doi}
                  </div>
                ) : item.pages && (
                  <p className="text-xs text-gray-500">Pages: {item.pages}</p>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
