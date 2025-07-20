'use client';

import { motion } from 'framer-motion';
import { GiMicroscope, GiDna1, GiTrophyCup, GiMedal } from 'react-icons/gi';
import { FaFlask } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

function CompetitionCard({ icon, name, achievement, color }: {
  icon: React.ReactNode;
  name: string;
  achievement: string;
  color: string;
}) {
  const { isDark } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      className="relative group"
    >
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300`} />
      <div className={`relative flex flex-col items-center p-8 rounded-2xl border transition-colors duration-300 ${
        isDark 
          ? 'bg-gray-900 border-gray-800' 
          : 'bg-white border-gray-200 shadow-lg'
      }`}>
        <div className={`p-4 rounded-xl bg-gradient-to-br ${color} shadow-lg mb-6 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300`}>
          <div className="text-white transform rotate-6 group-hover:rotate-0 transition-transform duration-300">
            {icon}
          </div>
        </div>
        <h3 className={`text-2xl font-bold mb-4 group-hover:scale-110 transition-all duration-300 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {name}
        </h3>
        <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${color} text-white font-semibold
                        transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300`}>
          {achievement}
        </div>
        <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 h-20 w-20 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-2xl" />
      </div>
    </motion.div>
  );
}

export default function Competitions() {
  const { isDark } = useTheme();
  const competitions = [
    {
      icon: <GiMedal className="w-16 h-16" />,
      name: 'ISEF',
      achievement: '1st place nationally',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: <GiTrophyCup className="w-16 h-16" />,
      name: 'Rise',
      achievement: 'Global Winner',
      color: 'from-amber-500 to-yellow-400'
    },
    {
      icon: <GiMicroscope className="w-16 h-16" />,
      name: 'International Biology Bowl',
      achievement: '2nd place internationally',
      color: 'from-emerald-500 to-teal-400'
    },
    {
      icon: <GiDna1 className="w-16 h-16" />,
      name: 'IBO',
      achievement: '3rd place internationally',
      color: 'from-rose-500 to-red-400'
    },
    {
      icon: <FaFlask className="w-16 h-16" />,
      name: 'IBB Competition',
      achievement: '2nd place nationally',
      color: 'from-purple-500 to-pink-400'
    }
  ];

  return (
    <section className={`py-24 transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-b from-black to-gray-900' 
        : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Our Achievements
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            We help our students qualify for international competitions, achieving remarkable success on both national and international stages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competitions.map((comp) => (
            <CompetitionCard
              key={comp.name}
              icon={comp.icon}
              name={comp.name}
              achievement={comp.achievement}
              color={comp.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
