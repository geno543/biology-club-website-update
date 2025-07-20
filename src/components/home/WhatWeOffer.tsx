'use client';

import { motion } from 'framer-motion';
import { FaDna, FaFlask, FaBrain, FaCalendarAlt } from 'react-icons/fa';
import { GiMicroscope } from 'react-icons/gi';
import { BiTestTube } from 'react-icons/bi';
import { useTheme } from '@/context/ThemeContext';

interface OfferingCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlights: string[];
  color: string;
  delay: number;
}

const OfferingCard = ({ icon, title, description, highlights, color, delay }: OfferingCardProps) => {
  const { isDark } = useTheme();
  
  return (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.05 }}
    className={`p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-teal-500' 
        : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-teal-400 shadow-lg'
    }`}
  >
    <div className="flex flex-col items-center text-center space-y-4">
      <div className={`p-3 rounded-xl bg-gradient-to-br ${color} shadow-lg`}>
        <div className="text-4xl text-white">
          {icon}
        </div>
      </div>
      <h3 className={`text-xl font-bold transition-colors duration-300 ${
        isDark 
          ? 'text-white group-hover:text-teal-300' 
          : 'text-gray-900 group-hover:text-teal-600'
      }`}>
        {title}
      </h3>
      <p className={`transition-colors duration-300 ${
        isDark 
          ? 'text-gray-300 group-hover:text-gray-200' 
          : 'text-gray-600 group-hover:text-gray-700'
      }`}>
        {description}
      </p>
      <ul className="flex flex-wrap justify-center gap-2 mt-4">
        {highlights.map((highlight, index) => (
          <li
            key={index}
            className={`px-3 py-1 rounded-full text-sm border transition-colors duration-300 ${
              isDark 
                ? 'bg-gray-800 text-teal-400 border-teal-500/30' 
                : 'bg-teal-50 text-teal-700 border-teal-200'
            }`}
          >
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
  );
};

export default function WhatWeOffer() {
  const { isDark } = useTheme();
  
  const offerings = [
    {
      icon: <GiMicroscope />,
      title: "Research Programs",
      description: "Comprehensive program to empower students to craft complete research or systematic review papers from scratch.",
      highlights: ["Experienced Mentors", "Published Papers"],
      color: "from-blue-400 to-cyan-500"
    }, 
    {
      icon: <FaDna />,
      title: "BioLeague Competition",
      description: "A free fun Biology Competition for high schoolers in four braches of Biology.",
      highlights: ["International Recognition", "Valuable Prizes"],
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: <BiTestTube />,
      title: "Practical Workshops",
      description: "Hands-on Biology experience for our sophomore members.",
      highlights: ["Modern Equipment", "Practical Skills"],
      color: "from-purple-400 to-indigo-500"
    },
    {
      icon: <FaFlask />,
      title: "Computational Biology",
      description: "Coming soon....",
      highlights: [],
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: <FaBrain />,
      title: "Magazine",
      description: "Coming soon....",
      highlights: [],
      color: "from-amber-400 to-orange-500"
    }
  ];

  return (
    <section className={`py-20 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            What We <span className="text-teal-400">Offer</span>
          </h2>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <OfferingCard
              key={index}
              icon={offering.icon}
              title={offering.title}
              description={offering.description}
              highlights={offering.highlights}
              color={offering.color}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
