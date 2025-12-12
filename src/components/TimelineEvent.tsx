import { motion } from 'motion/react';
import { Calendar, Lightbulb, Scale, AlertCircle, HelpCircle } from 'lucide-react';

interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  category: 'innovation' | 'legislation' | 'crise' | 'controverse';
}

export function TimelineEvent({ year, title, description, category }: TimelineEventProps) {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'innovation':
        return {
          bg: 'bg-gradient-to-br from-orange-50 via-white to-orange-50',
          border: 'border-orange-300',
          accent: 'bg-orange-600',
          text: 'text-orange-700',
          badge: 'bg-orange-100 text-orange-700',
          icon: Lightbulb
        };
      case 'legislation':
        return {
          bg: 'bg-gradient-to-br from-emerald-50 via-white to-emerald-50',
          border: 'border-emerald-300',
          accent: 'bg-emerald-600',
          text: 'text-emerald-700',
          badge: 'bg-emerald-100 text-emerald-700',
          icon: Scale
        };
      case 'crise':
        return {
          bg: 'bg-gradient-to-br from-red-50 via-white to-red-50',
          border: 'border-red-300',
          accent: 'bg-red-600',
          text: 'text-red-700',
          badge: 'bg-red-100 text-red-700',
          icon: AlertCircle
        };
      case 'controverse':
        return {
          bg: 'bg-gradient-to-br from-gray-50 via-white to-gray-50',
          border: 'border-gray-300',
          accent: 'bg-gray-600',
          text: 'text-gray-700',
          badge: 'bg-gray-100 text-gray-700',
          icon: HelpCircle
        };
      default:
        return {
          bg: 'bg-white',
          border: 'border-gray-300',
          accent: 'bg-gray-600',
          text: 'text-gray-700',
          badge: 'bg-gray-100 text-gray-700',
          icon: Calendar
        };
    }
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
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

  const colors = getCategoryColor(category);
  const Icon = colors.icon;

  return (
    <div className={`h-full w-full ${colors.bg} flex items-center justify-center overflow-hidden`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className={`p-6 ${colors.accent} rounded-full`}>
              <Icon size={64} className="text-white" />
            </div>
          </motion.div>

          {/* Year Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6"
          >
            <span className={`inline-block px-8 py-3 ${colors.accent} text-white text-2xl rounded-full font-semibold`}>
              {year}
            </span>
          </motion.div>

          {/* Category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-6"
          >
            <span className={`px-6 py-2 ${colors.badge} text-sm rounded-full font-medium`}>
              {getCategoryLabel(category)}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-900 text-4xl md:text-5xl font-bold mb-8"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`max-w-3xl mx-auto p-8 bg-white border-2 ${colors.border} rounded-2xl shadow-lg`}
          >
            <p className="text-gray-700 text-xl leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Navigation hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-gray-500 text-sm mt-12"
          >
            Utilisez les flèches pour naviguer dans la chronologie
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
