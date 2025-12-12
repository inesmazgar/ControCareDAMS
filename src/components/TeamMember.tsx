import { motion } from 'motion/react';
import { Mail, User } from 'lucide-react';

interface TeamMemberProps {
  nom: string;
  role: string;
  responsabilites: string[];
  email?: string;
  color?: 'green' | 'blue' | 'purple' | 'orange' | 'teal' | 'indigo';
}

export function TeamMember({ nom, role, responsabilites, email, color = 'green' }: TeamMemberProps) {
  const colorSchemes = {
    green: {
      bg: 'from-green-50 via-white to-emerald-50',
      accent: 'bg-green-600',
      border: 'border-green-200',
      text: 'text-green-700',
      badge: 'bg-green-100 text-green-700'
    },
    blue: {
      bg: 'from-blue-50 via-white to-blue-50',
      accent: 'bg-blue-600',
      border: 'border-blue-200',
      text: 'text-blue-700',
      badge: 'bg-blue-100 text-blue-700'
    },
    purple: {
      bg: 'from-purple-50 via-white to-purple-50',
      accent: 'bg-purple-600',
      border: 'border-purple-200',
      text: 'text-purple-700',
      badge: 'bg-purple-100 text-purple-700'
    },
    orange: {
      bg: 'from-orange-50 via-white to-orange-50',
      accent: 'bg-orange-600',
      border: 'border-orange-200',
      text: 'text-orange-700',
      badge: 'bg-orange-100 text-orange-700'
    },
    teal: {
      bg: 'from-teal-50 via-white to-teal-50',
      accent: 'bg-teal-600',
      border: 'border-teal-200',
      text: 'text-teal-700',
      badge: 'bg-teal-100 text-teal-700'
    },
    indigo: {
      bg: 'from-indigo-50 via-white to-indigo-50',
      accent: 'bg-indigo-600',
      border: 'border-indigo-200',
      text: 'text-indigo-700',
      badge: 'bg-indigo-100 text-indigo-700'
    }
  };

  const scheme = colorSchemes[color];
  const initiales = nom.split(' ').map(n => n[0]).join('');

  return (
    <div className={`h-full w-full bg-gradient-to-br ${scheme.bg} flex items-center justify-center overflow-y-auto`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className={`w-32 h-32 ${scheme.accent} rounded-full flex items-center justify-center shadow-xl`}>
              <span className="text-5xl text-white font-bold">{initiales}</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-900 text-4xl font-bold mb-4"
          >
            {nom}
          </motion.h1>

          {/* Role Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8"
          >
            <span className={`px-6 py-3 ${scheme.badge} rounded-full text-lg font-medium`}>
              {role}
            </span>
          </motion.div>

          {/* Responsabilites */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`p-8 bg-white border-2 ${scheme.border} rounded-2xl shadow-lg mb-6`}
          >
            <h3 className="text-gray-900 font-semibold mb-6 text-xl">Responsabilités</h3>
            <div className="space-y-4">
              {responsabilites.map((resp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="flex items-center justify-center"
                >
                  <div className={`w-2 h-2 ${scheme.accent} rounded-full mr-3`} />
                  <p className="text-gray-700 text-lg">{resp}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Email */}
          {email && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className={`inline-flex items-center px-6 py-3 bg-white border ${scheme.border} rounded-full ${scheme.text}`}
            >
              <Mail size={18} className="mr-2" />
              <span className="text-sm">{email}</span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
