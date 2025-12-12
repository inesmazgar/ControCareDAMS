import { motion } from 'motion/react';
import { Mail, Users } from 'lucide-react';

interface TeamMemberData {
  nom: string;
  role: string;
  responsabilites: string[];
  email?: string;
}

interface TeamGroupProps {
  members: TeamMemberData[];
  title?: string;
}

export function TeamGroup({ members, title = "Notre équipe" }: TeamGroupProps) {
  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-y-auto flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <Users className="text-gray-600 mr-4" size={48} />
          <h1 className="text-gray-900 text-4xl font-bold">{title}</h1>
        </div>
        
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Les membres de notre équipe pluridisciplinaire.
        </p>

        <div className={`grid grid-cols-1 ${members.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-6 max-w-5xl mx-auto`}>
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-gray-400 hover:shadow-xl transition-all"
            >
              <h3 className="text-gray-900 mb-2 text-lg font-semibold">{member.nom}</h3>
              <div className="mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {member.role}
                </span>
              </div>
              <div className="space-y-2 mb-4">
                {member.responsabilites.map((resp, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                    <p className="text-gray-600 text-sm leading-relaxed">{resp}</p>
                  </div>
                ))}
              </div>
              {member.email && (
                <div className="flex items-center text-gray-500 text-xs pt-3 border-t border-gray-100">
                  <Mail size={12} className="mr-1.5 flex-shrink-0" />
                  <span className="break-all">{member.email}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}