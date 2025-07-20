'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import ResearchVolumes from '@/components/research/ResearchVolumes';
import { FaArrowRight, FaMicroscope, FaDna, FaFlask, FaAtom, FaBook, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';

const researchAreas = [
  {
    title: 'Molecular Biology',
    description: 'Study of biological molecules and their interactions',
    icon: FaDna,
    topics: ['DNA Replication', 'Gene Expression', 'Protein Synthesis'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Cell Biology',
    description: 'Investigation of cellular structures and functions',
    icon: FaMicroscope,
    topics: ['Cell Division', 'Membrane Transport', 'Cell Signaling'],
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Ecology',
    description: 'Research on organisms and their environment',
    icon: FaFlask,
    topics: ['Ecosystem Dynamics', 'Population Studies', 'Biodiversity'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Biotechnology',
    description: 'Application of biological processes in technology',
    icon: FaAtom,
    topics: ['Genetic Engineering', 'Fermentation', 'Bioinformatics'],
    gradient: 'from-amber-500 to-orange-500'
  }
];

const researchStats = [
  { number: '15+', label: 'Research Papers', icon: FaBook },
  { number: '25+', label: 'Research Fields', icon: FaFlask },
  { number: '30+', label: 'Student Researchers', icon: FaUsers },
  { number: '15+', label: 'Research Mentors', icon: FaChalkboardTeacher }
];

export default function Research() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 via-transparent to-transparent" />
          <svg
            className="absolute inset-0 h-full w-full stroke-emerald-500/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="research-pattern"
                width="50"
                height="50"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#research-pattern)" />
            <svg x="50%" y="-1" className="overflow-visible fill-emerald-500/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth="0"
              />
            </svg>
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 sm:pt-32 lg:px-8 lg:pt-40">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Research Programs
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              The Research Track emerges as a crucial gateway for students to push their creativity and curiosity towards exploring the biological environment around them. Our 8-weeks research program offers comprehensive guidance, empowering students to craft complete research or review papers from scratch.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-teal-500/5" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {researchStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 transition-colors duration-300" />
                  <div className="relative text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 mb-6">
                      <Icon className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      {stat.number}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Volumes Section */}
      <ResearchVolumes />

    </div>
  );
}
