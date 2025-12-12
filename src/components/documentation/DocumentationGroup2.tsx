import { FileText, ExternalLink } from 'lucide-react';

export function DocumentationGroup2() {
  const bibliographieAnglais = [
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
    }
  ];

  return (
    <div className="h-full w-full bg-white overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center mb-6">
          <FileText className="mr-3 text-green-600" size={32} />
          <h2 className="text-gray-900">Bibliographie Anglophone (1/2)</h2>
        </div>
        
        <div className="space-y-4">
          {bibliographieAnglais.map((item, index) => (
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
