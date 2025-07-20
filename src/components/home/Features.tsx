'use client';

import { motion } from 'framer-motion';
import { FaDna, FaNewspaper, FaFlask, FaCalendarAlt } from 'react-icons/fa';
import { BiTestTube } from 'react-icons/bi';
import { GiMicroscope } from 'react-icons/gi';

const featuresList = [
  {
    icon: <FaDna className="w-8 h-8" />,
    title: "BioLeague Competition",
    description: "Participate in Egypt's premier biology competition for high school students. Showcase your knowledge and compete with peers nationwide.",
    highlights: ["National Recognition", "Valuable Prizes", "Team Challenges"],
    color: "from-emerald-400 to-teal-500"
  },
  {
    icon: <GiMicroscope className="w-8 h-8" />,
    title: "Research Programs",
    description: "Engage in real scientific research with experienced mentors. Work on cutting-edge projects in modern laboratory facilities.",
    highlights: ["Hands-on Experience", "Expert Guidance", "Published Results"],
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: <FaNewspaper className="w-8 h-8" />,
    title: "Biology Magazine",
    description: "Read and contribute to our student-led biology publication. Share your research, articles, and biological discoveries.",
    highlights: ["Monthly Issues", "Peer Reviews", "Student Publications"],
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: <FaCalendarAlt className="w-8 h-8" />,
    title: "Workshops & Events",
    description: "Join hands-on workshops and exciting biology-related events. Learn practical skills and network with fellow biology enthusiasts.",
    highlights: ["Weekly Sessions", "Guest Speakers", "Interactive Learning"],
    color: "from-orange-400 to-red-500"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-teal-400 tracking-wide uppercase mb-2">FEATURES</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">What We Offer</h3>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join our community and access these amazing opportunities to advance your biology journey
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {featuresList.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                   style={{ background: `linear-gradient(to right, var(--tw-gradient-${feature.color}))` }} />
              
              <div className="relative bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300 border border-gray-700 hover:border-gray-600">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} p-3 flex items-center justify-center mb-6 text-white`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h4 className="text-2xl font-bold text-white mb-4">{feature.title}</h4>
                <p className="text-gray-400 mb-6">{feature.description}</p>

                {/* Highlights */}
                <div className="space-y-3">
                  {feature.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <BiTestTube className="text-teal-400" />
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-b-2xl"
                     style={{ background: `linear-gradient(to right, var(--tw-gradient-${feature.color}))` }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="/join"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
          >
            Join Our Community
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
