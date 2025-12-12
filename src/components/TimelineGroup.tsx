import { motion } from 'motion/react';
import { Lightbulb, Scale, AlertCircle, HelpCircle } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  category: 'innovation' | 'legislation' | 'crise' | 'controverse';
}

interface TimelineGroupProps {
  events: TimelineItem[];
}

export function TimelineGroup({ events }: TimelineGroupProps) {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'innovation':
        return {
          border: 'border-blue-300',
          accent: 'bg-blue-600',
          text: 'text-blue-700',
          bgLight: 'bg-blue-50',
        };
      case 'legislation':
        return {
          border: 'border-emerald-300',
          accent: 'bg-emerald-600',
          text: 'text-emerald-700',
          bgLight: 'bg-emerald-50',
        };
      case 'crise':
        return {
          border: 'border-red-300',
          accent: 'bg-red-600',
          text: 'text-red-700',
          bgLight: 'bg-red-50',
        };
      case 'controverse':
        return {
          border: 'border-gray-300',
          accent: 'bg-gray-600',
          text: 'text-gray-700',
          bgLight: 'bg-gray-50',
        };
      default:
        return {
          border: 'border-gray-300',
          accent: 'bg-gray-600',
          text: 'text-gray-700',
          bgLight: 'bg-gray-50',
        };
    }
  };

  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Titre de section */}
          <div className="text-center mb-8">
            <h2 className="text-gray-900 text-3xl mb-6">Chronologie de la télémédecine</h2>
            
            {/* Légende */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Lightbulb size={20} className="text-blue-600" />
                <span className="text-sm text-blue-700">Innovation technologique</span>
              </div>
              <div className="flex items-center gap-2">
                <Scale size={20} className="text-emerald-600" />
                <span className="text-sm text-emerald-700">Évolution législative</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle size={20} className="text-red-600" />
                <span className="text-sm text-red-700">Événement majeur</span>
              </div>
              <div className="flex items-center gap-2">
                <HelpCircle size={20} className="text-gray-600" />
                <span className="text-sm text-gray-700">Controverse</span>
              </div>
            </div>
          </div>

          {/* Événements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, index) => {
              const colors = getCategoryColor(event.category);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className={`bg-white border-2 ${colors.border} rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow`}
                >
                  {/* Année */}
                  <div className="flex justify-center mb-4">
                    <span className={`inline-block px-6 py-2 ${colors.accent} text-white rounded-full`}>
                      {event.year}
                    </span>
                  </div>

                  {/* Titre */}
                  <h3 className={`${colors.text} text-center mb-4`}>
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {event.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}