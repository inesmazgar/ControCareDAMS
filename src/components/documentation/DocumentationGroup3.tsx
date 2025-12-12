import { FileText, ExternalLink } from 'lucide-react';

export function DocumentationGroup3() {
  const bibliographieAnglais2 = [
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
  ];

  return (
    <div className="h-full w-full bg-white overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center mb-6">
          <FileText className="mr-3 text-green-600" size={32} />
          <h2 className="text-gray-900">Bibliographie Anglophone (2/2)</h2>
        </div>
        
        <div className="space-y-4">
          {bibliographieAnglais2.map((item, index) => (
            <a 
              key={index} 
              href={`https://doi.org/${item.doi}`} 
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
                DOI: {item.doi}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
