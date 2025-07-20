'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { FaDownload, FaBook, FaCalendar, FaUsers, FaNewspaper } from 'react-icons/fa';

const magazineStats = [
  { number: '1', label: 'Volume Available', icon: FaBook },
  { number: '2025', label: 'Publication Year', icon: FaCalendar },
  { number: '5+', label: 'Contributors', icon: FaUsers },
  { number: '20+', label: 'Pages of Content', icon: FaNewspaper }
];

export default function Magazines() {
  const { isDark } = useTheme();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/magazines/OBC magazine[1].pdf';
    link.download = 'OBC_Magazine_Volume_1_2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-white to-emerald-50'
    }`}>
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className={`absolute inset-0 ${
            isDark 
              ? 'bg-gradient-to-b from-emerald-500/20 via-transparent to-transparent'
              : 'bg-gradient-to-b from-emerald-400/30 via-blue-400/20 to-transparent'
          }`} />
          <svg
            className={`absolute inset-0 h-full w-full ${
              isDark 
                ? 'stroke-emerald-500/10'
                : 'stroke-emerald-400/20'
            } [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]`}
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="magazine-pattern"
                width="50"
                height="50"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#magazine-pattern)" />
            <svg x="50%" y="-1" className={`overflow-visible ${
              isDark ? 'fill-emerald-500/20' : 'fill-emerald-400/30'
            }`}>
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
              className={`text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r ${
                isDark 
                  ? 'from-emerald-400 to-teal-400 text-transparent'
                  : 'from-emerald-600 to-teal-600 text-transparent'
              } bg-clip-text`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Biology STEM October
            </motion.h1>
            <motion.h2 
              className={`mt-4 text-2xl font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Magazine Collection
            </motion.h2>
            <motion.p 
              className={`mt-6 text-lg leading-8 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Explore our comprehensive biology magazine featuring cutting-edge research, 
              student contributions, and insights from the world of biological sciences.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 overflow-hidden">
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-b from-emerald-500/5 to-teal-500/5'
            : 'bg-gradient-to-b from-emerald-400/10 to-teal-400/10'
        }`} />
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px] ${
            isDark ? 'opacity-100' : 'opacity-30'
          }`} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {magazineStats.map((stat, index) => {
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
                  <div className={`absolute -inset-4 rounded-xl transition-colors duration-300 ${
                    isDark 
                      ? 'bg-gradient-to-r from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5'
                      : 'bg-gradient-to-r from-emerald-400/0 to-teal-400/0 group-hover:from-emerald-400/10 group-hover:to-teal-400/10'
                  }`} />
                  <div className="relative text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                      isDark 
                        ? 'bg-gradient-to-br from-emerald-500/10 to-teal-500/10'
                        : 'bg-gradient-to-br from-emerald-400/20 to-teal-400/20'
                    }`}>
                      <Icon className={`w-8 h-8 ${
                        isDark ? 'text-emerald-400' : 'text-emerald-600'
                      }`} />
                    </div>
                    <h3 className={`text-4xl font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {stat.number}
                    </h3>
                    <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Magazine Volume Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Available Volumes
            </h2>
            <p className={`text-lg ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Download and explore our latest magazine publications
            </p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group max-w-md w-full"
            >
              {/* Magazine Card */}
              <div className={`relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105 ${
                isDark 
                  ? 'bg-gray-800 border border-gray-700'
                  : 'bg-white border border-gray-200 shadow-xl'
              }`}>
                {/* Magazine Cover as Background */}
                <div 
                  className="relative h-96 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('/images/magazinevolume1.png')`
                  }}
                >
                </div>

                {/* Card Content */}
                <div className={`p-6 ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}>
                  <div className="mb-6">
                    <h4 className={`text-xl font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      Volume 1, 2025
                    </h4>
                    <p className={`text-sm mb-4 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Our inaugural magazine featuring comprehensive biology content, 
                      research insights, and educational resources for students and enthusiasts.
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      <div className={`flex items-center text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          isDark ? 'bg-emerald-400' : 'bg-emerald-500'
                        }`} />
                        20+ pages of quality content
                      </div>
                      <div className={`flex items-center text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          isDark ? 'bg-emerald-400' : 'bg-emerald-500'
                        }`} />
                        Research articles and reviews
                      </div>
                      <div className={`flex items-center text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          isDark ? 'bg-emerald-400' : 'bg-emerald-500'
                        }`} />
                        Student contributions
                      </div>
                    </div>
                  </div>

                  {/* Download Button */}
                  <motion.button
                    onClick={handleDownload}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      isDark 
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white shadow-lg hover:shadow-emerald-500/25'
                        : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg hover:shadow-emerald-600/25'
                    }`}
                  >
                    <FaDownload className="w-5 h-5" />
                    Download Magazine
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}