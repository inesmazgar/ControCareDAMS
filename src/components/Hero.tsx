import { ArrowRight, Activity, Heart, Users, BookOpen, TrendingUp, Shield, Stethoscope, Sparkles, Brain, Network } from 'lucide-react';
import { motion } from 'motion/react';
import { Logo } from './Logo';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export function Hero({ setActiveSection }: HeroProps) {
  return (
    <div className="min-h-full w-full bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative flex items-center justify-center py-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-40"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-300 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-teal-200 rounded-full blur-2xl opacity-50"
        />

        {/* Floating icons */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 right-1/4"
        >
          <Heart size={40} className="text-green-300 opacity-20" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-1/4"
        >
          <Network size={50} className="text-emerald-300 opacity-20" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -10, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-16"
        >
          <Brain size={35} className="text-teal-300 opacity-20" />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <svg width="120" height="120" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background circle */}
            <circle cx="20" cy="20" r="18" fill="#10B981" opacity="0.1" />

            {/* Heart with pulse */}
            <path
              d="M20 28C20 28 10 22 10 15C10 12 12 10 14.5 10C16.5 10 18 11 20 13C22 11 23.5 10 25.5 10C28 10 30 12 30 15C30 22 20 28 20 28Z"
              fill="#10B981"
              opacity="0.8"
            />

            {/* Animated pulse line */}
            <path
              d="M8 20 L12 20 L14 16 L16 24 L18 20 L20 20 L22 20 L24 16 L26 24 L28 20 L32 20"
              stroke="#059669"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            >
              <animate
                attributeName="d"
                dur="2s"
                repeatCount="indefinite"
                values="M8 20 L12 20 L14 16 L16 24 L18 20 L20 20 L22 20 L24 16 L26 24 L28 20 L32 20;
                        M8 20 L12 20 L14 20 L16 20 L18 20 L20 16 L22 24 L24 20 L26 20 L28 20 L32 20;
                        M8 20 L12 20 L14 20 L16 20 L18 20 L20 20 L22 20 L24 20 L26 20 L28 16 L30 24 L32 20;
                        M8 20 L12 20 L14 16 L16 24 L18 20 L20 20 L22 20 L24 16 L26 24 L28 20 L32 20"
              />
            </path>

            {/* Plus symbol (medical) */}
            <circle cx="30" cy="12" r="6" fill="white" />
            <path d="M30 9 L30 15 M27 12 L33 12" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <h1 className="text-gray-900 mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
            La Controverse de la<br />
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Télémédecine & E-Santé
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-600 text-lg max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Une exploration approfondie des enjeux, débats et perspectives entourant
          la transformation numérique du système de santé. Découvrez le résultat
          de nos recherches académiques et entretiens avec des experts du domaine
          de la santé connectée et de la télémédecine.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => setActiveSection('arguments-favorables')}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Explorer l'argumentation
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => setActiveSection('experts')}
            className="inline-flex items-center px-8 py-4 bg-green-700 text-white rounded-full hover:bg-green-800 hover:shadow-lg transition-all duration-300"
          >
            Rencontrer les experts
          </button>
        </motion.div>

      </div>
    </div>
  );
}