'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRight, FaFlask, FaDna, FaLeaf, FaBrain, FaBacteria } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

const branches = [
  {
    title: 'Biochemistry & Cell Biology',
    sessions: 70,
    description: 'Biochemistry explores the chemical processes within living organisms, focusing on molecules like proteins, carbohydrates, lipids, and nucleic acids.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69',
    topics: [
      'Molecular Biology',
      'Cell Structure',
      'Metabolism',
      'Enzyme Kinetics',
      'Cell Signaling'
    ],
    icon: <FaFlask className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: 'Genetics & Evolution',
    sessions: 50,
    description: 'Genetics studies heredity and variation in organisms, while evolution explains how species change over time through genetic and environmental factors.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8',
    topics: [
      'DNA Structure',
      'Gene Expression',
      'Natural Selection',
      'Population Genetics',
      'Speciation'
    ],
    icon: <FaDna className="w-6 h-6" />,
    color: "from-purple-500 to-pink-400"
  },
  {
    title: 'Anatomy & Physiology',
    sessions: 60,
    description: 'Anatomy studies the structure of living organisms, while physiology focuses on how these structures function and interact to maintain life.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56',
    topics: [
      'Brain Structure',
      'Neural Circuits',
      'Sensory Systems',
      'Motor Control',
      'Neuroplasticity'
    ],
    icon: <FaBrain className="w-6 h-6" />,
    color: "from-rose-500 to-red-400"
  },
  {
    title: 'Ecology & Ethology',
    sessions: 50,
    description: 'Ecology studies the interactions between organisms and their environment, while ethology focuses on animal behavior and its evolutionary significance within ecosystems.',
    image: 'https://images.unsplash.com/photo-1500829243541-74b677fecc30',
    topics: [
      'Ecosystem Dynamics',
      'Population Biology',
      'Conservation',
      'Biodiversity',
      'Climate Impact'
    ],
    icon: <FaLeaf className="w-6 h-6" />,
    color: "from-green-500 to-emerald-400"
  },
  {
    title: 'Pathology',
    sessions: 70,
    description: 'Pathology examines the causes and effects of diseases, studying abnormal changes in cells, tissues, and organs to understand disease mechanisms.',
    image: 'https://images.unsplash.com/photo-1576086476234-1103be98f096',
    topics: [
      'Bacterial Growth',
      'Viral Infections',
      'Immune Response',
      'Vaccination',
      'Disease Prevention'
    ],
    icon: <FaBacteria className="w-6 h-6" />,
    color: "from-amber-500 to-yellow-400"
  },
];

export default function Branches() {
  const { isDark } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<number | null>(null);

  return (
    <section className={`py-24 transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-b from-gray-900 to-black' 
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-5xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Our <span className="text-teal-400">Branches</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
          There are five branches that we teach in our club.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl transition-all duration-300 group
                         ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}
                         ${hoveredIndex === index ? 'ring-2 ring-teal-400' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedBranch(selectedBranch === index ? null : index)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={branch.image}
                  alt={branch.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
              </div>

              <div className="relative p-6">
                <div className={`absolute top-0 right-0 -mt-12 mr-6 p-3 rounded-xl bg-gradient-to-br ${branch.color} shadow-lg`}>
                  {branch.icon}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{branch.title}</h3>
                </div>
                
                <p className={`mb-4 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>{branch.description}</p>
                
                <div className="flex items-center text-teal-400 mb-4">
                  <span className="text-lg font-semibold">{branch.sessions} Sessions</span>
                </div>

                <AnimatePresence>
                  {selectedBranch === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className={`pt-4 border-t transition-colors duration-300 ${
                        isDark ? 'border-gray-700' : 'border-gray-200'
                      }`}>
                        <h4 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>Key Topics</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {branch.topics.map((topic, topicIndex) => (
                            <li
                              key={topicIndex}
                              className={`flex items-center transition-colors duration-300 ${
                                isDark ? 'text-gray-300' : 'text-gray-600'
                              }`}
                            >
                              <FaArrowRight className="w-4 h-4 text-teal-400 mr-2" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedBranch(selectedBranch === index ? null : index);
                  }}
                  className="mt-4 text-teal-400 hover:text-teal-300 transition-colors duration-300 flex items-center"
                >
                  {selectedBranch === index ? 'Show Less' : 'Show More'}
                  <FaArrowRight className={`ml-2 transform transition-transform duration-300 
                    ${selectedBranch === index ? 'rotate-90' : ''}`} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
