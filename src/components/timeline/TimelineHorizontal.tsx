import { Calendar, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category: 'innovation' | 'legislation' | 'major' | 'controversy';
}

interface TimelineHorizontalProps {
  events: TimelineEvent[];
  title?: string;
}

export function TimelineHorizontal({ events, title = "Frise chronologique" }: TimelineHorizontalProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'innovation':
        return { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-200', glow: 'shadow-blue-400' };
      case 'legislation':
        return { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-200', glow: 'shadow-emerald-400' };
      case 'major':
        return { bg: 'bg-red-600', text: 'text-red-600', border: 'border-red-200', glow: 'shadow-red-400' };
      case 'controversy':
        return { bg: 'bg-gray-600', text: 'text-gray-600', border: 'border-gray-300', glow: 'shadow-gray-400' };
      default:
        return { bg: 'bg-gray-600', text: 'text-gray-600', border: 'border-gray-300', glow: 'shadow-gray-400' };
    }
  };

  return (
    <div className="h-full w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        {/* Header avec animation */}
        <motion.div 
          className="flex items-center justify-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Calendar className="text-indigo-600 mr-4" size={48} />
          </motion.div>
          <h1 className="text-gray-900 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">{title}</h1>
          <Sparkles className="text-purple-500 ml-4" size={32} />
        </motion.div>

        <div className="relative">
          {/* Ligne horizontale animée avec gradient */}
          <motion.div 
            className="absolute top-1/2 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform -translate-y-1/2 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />

          {/* Points décoratifs animés le long de la ligne */}
          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4">
            {events.map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-white shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              />
            ))}
          </div>

          {/* Événements */}
          <div className="grid grid-cols-3 gap-8 relative z-10">
            {events.map((event, index) => {
              const colors = getCategoryColor(event.category);
              const isHovered = hoveredIndex === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Ligne verticale connectant au timeline */}
                  <motion.div 
                    className={`absolute left-1/2 ${index % 2 === 0 ? 'top-full' : 'bottom-full'} transform -translate-x-1/2 w-0.5 ${colors.bg}`}
                    initial={{ height: 0 }}
                    animate={{ height: index % 2 === 0 ? '8rem' : '8rem' }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  />

                  {/* Point sur la ligne principale */}
                  <motion.div 
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                    animate={isHovered ? { scale: [1, 1.5, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div 
                      className={`w-5 h-5 rounded-full ${colors.bg} border-4 border-white shadow-lg`}
                      animate={isHovered ? { 
                        boxShadow: ["0 0 0 0px rgba(99, 102, 241, 0.4)", "0 0 0 15px rgba(99, 102, 241, 0)"]
                      } : {}}
                      transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
                    />
                  </motion.div>

                  {/* Contenu de l'événement */}
                  <motion.div 
                    className={`p-6 bg-white/90 backdrop-blur-sm border-2 ${colors.border} rounded-2xl transition-all cursor-pointer ${index % 2 === 0 ? 'mb-32' : 'mt-32'}`}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: `0 20px 40px -15px ${colors.glow}`,
                      y: index % 2 === 0 ? -10 : 10
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-3 ${colors.bg} text-white shadow-md`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.span
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ●
                      </motion.span>
                      {event.year}
                    </motion.div>
                    <h3 className={`${colors.text} mb-2 font-bold text-lg`}>{event.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Légende avec animations */}
        <motion.div 
          className="mt-20 flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {[
            { color: 'bg-blue-600', label: 'Innovation' },
            { color: 'bg-emerald-600', label: 'Législation' },
            { color: 'bg-red-600', label: 'Événements majeurs' },
            { color: 'bg-gray-600', label: 'Controverses' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="flex items-center gap-3 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.9)" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div 
                className={`w-4 h-4 rounded-full ${item.color} shadow-md`}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
              />
              <span className="text-sm text-gray-700 font-medium">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
