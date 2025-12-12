import { TimelineHorizontal } from './TimelineHorizontal';
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export function TimelineGroup3() {
  const events = [
    {
      year: '2018',
      title: 'Remboursement téléconsultation',
      description: 'L\'Assurance Maladie commence à rembourser les téléconsultations.',
      category: 'legislation',
      color: 'emerald',
    },
    {
      year: '2020',
      title: 'COVID-19',
      description: 'Explosion du nombre de téléconsultations pendant la pandémie. Assouplissement des règles.',
      category: 'major',
      color: 'red',
    },
    {
      year: '2020-2021',
      title: 'Débats sur la pérennisation',
      description: 'Controverses sur le maintien des facilités post-COVID et les risques de dérives.',
      category: 'controversy',
      color: 'gray',
    },
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-y-auto flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <Calendar className="text-gray-700 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">Chronologie 2018-2021</h1>
        </div>
        
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          L'impact de la COVID-19 sur la télémédecine et les débats qui en découlent.
        </p>

        <div className="space-y-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`p-6 bg-white border-l-4 ${
                event.color === 'green' ? 'border-green-500' : 
                event.color === 'red' ? 'border-red-500' : 
                event.color === 'blue' ? 'border-blue-500' :
                event.color === 'emerald' ? 'border-emerald-500' :
                'border-gray-500'
              } rounded-lg shadow-md hover:shadow-xl transition-all`}
            >
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className={`px-4 py-2 ${
                    event.color === 'green' ? 'bg-green-100 text-green-700' : 
                    event.color === 'red' ? 'bg-red-100 text-red-700' : 
                    event.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                    event.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                    'bg-gray-100 text-gray-700'
                  } rounded-lg font-semibold whitespace-nowrap text-center`}>
                    {event.year}
                  </div>
                  <div className="mt-2 text-xs text-gray-500 text-center">
                    {event.color === 'blue' && 'Innovation'}
                    {event.color === 'emerald' && 'Législation'}
                    {event.color === 'red' && 'Événement majeur'}
                    {event.color === 'gray' && 'Controverse'}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}