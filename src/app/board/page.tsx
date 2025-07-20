'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const boardMembers = [
  {
    name: 'Hazem Taha',
    role: 'President',
    image: '/images/team/Hazem.jpg',
    socials: {
      linkedin: '#',
      facebook: 'https://www.facebook.com/profile.php?id=100086944343111',
      email: 'mohamed@biologyclub.org'
    }
  },
  {
    name: 'Omar Sherif',
    role: 'Vice President',
    image: '/images/team/Omar Sherif.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/omar-emam-b71421306/',
      facebook: 'https://www.facebook.com/profile.php?id=100018438851698',
      email: 'omarsherifnaguib@gmail.com'
    }
  },
  {
    name: 'Karim Tarek',
    role: 'Director of Research and Media',
    image: '/images/team/Karim.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/karim-tarek-91a2762b4/',
      facebook: 'https://www.facebook.com/karim.tarek.16906715',
      email: 'youssef@biologyclub.org'
    }
  },
  {
    name: 'marwan Abdeltawab',
    role: 'Publication & Communication Manager',
    image: '/images/team/Marwan.jpg',
    socials: {
      linkedin: '#',
      facebook: 'https://www.facebook.com/profile.php?id=100061708683642',
      email: 'marwan@biologyclub.org'
    }
  },
  {
    name: 'Mazen Mahdy',
    role: 'Advisory Team',
    image: '/images/team/Mahdy.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/mazen-abdelsttar-124a8428a/',
      facebook: 'https://www.facebook.com/profile.php?id=100075129071556',
      email: 'mazenelmahdy11@gmail.com'
    }
  },  {
    name: 'Youssef Samy',
    role: 'Advisory Team',
    image: '/images/team/Youssef.jpg',
    socials: {
      linkedin: '#',
      facebook: 'https://www.facebook.com/profile.php?id=100071909186681',
      email: 'ziad@biologyclub.org'
    }
  },{
    name: 'Omar Ammar',
    role: 'Advisory Team',
    image: '/images/team/Omar Amr.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/omar-ammar-a12809239/',
      facebook: 'https://www.facebook.com/omar.amro.391',
      email: 'ziad@biologyclub.org'
    }
  },{
    name: 'Youssef Moftah',
    role: 'Advisory Team',
    image: '/images/team/Youssef Alumni.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/youssef-moftah-452a35327/',
      facebook: 'https://www.facebook.com/youssef.tamer.7568',
      email: 'ziad@biologyclub.org'
    }
  },
  {
    name: 'Mohamed Ramadan',
    role: 'Web Developer',
    image: '/images/team/Geno.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/mohamed-ramadan-551a17272/',
      facebook: 'https://www.facebook.com/mohmed.ramadan.587',
      email: 'mohamedr7825@gmail.com'
    }
  },
  {
    name: 'Mohab Abdelrahman',
    role: 'Graphic Designer',
    image: '/images/team/Mohab Abdelrahman.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/youssef-moftah-452a35327/',
      facebook: 'https://www.facebook.com/profile.php?id=61551991015814',
      email: 'gomohab08@gmail.com'
    }
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const DNAStrand = () => (
  <div className="absolute left-0 right-0 h-40 overflow-hidden opacity-10 dark:opacity-20">
    <div className="animate-slide-infinite flex">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="flex-none w-20 h-40 relative">
          <div className="absolute w-1 h-40 bg-primary/30 left-4 transform -skew-x-12"></div>
          <div className="absolute w-1 h-40 bg-secondary/30 right-4 transform skew-x-12"></div>
          {[...Array(8)].map((_, j) => (
            <div key={j} className="absolute w-12 h-0.5 bg-primary/30 left-0" style={{ top: j * 5 + 'rem' }}></div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default function Board() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated DNA Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-full">
          <DNAStrand />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="text-center relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <span className="h-0.5 w-8 bg-primary"></span>
              <span className="px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                Leadership Team
              </span>
              <span className="h-0.5 w-8 bg-primary"></span>
            </div>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Meet Our Board
            </h1>
            <div className="mt-6 flex flex-col items-center">
              <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl">
                Get to know the dedicated team leading STEM October Biology Club towards excellence in biological sciences.
              </p>
              <div className="mt-8 flex justify-center gap-8">
                <div className="inline-flex h-12 animate-float text-primary">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                    <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="inline-flex h-12 animate-float-delayed text-primary">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                    <path d="M4 7h16M4 11h16M4 15h16" strokeLinecap="round"/>
                    <path d="M9 7v8M15 7v8" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="inline-flex h-12 animate-float text-primary">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="8"/>
                    <path d="M12 8v8M8 12h8" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

   
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-7xl px-6 lg:px-8 pb-24"
      >
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {boardMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={item}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-none overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                <div className="w-full h-full shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-[300px] object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex justify-center space-x-6">
                      <a 
                        href={member.socials.linkedin} 
                        className="text-white/90 hover:text-primary transform hover:scale-110 transition-all duration-300 bg-black/20 hover:bg-black/40 rounded-full p-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a 
                        href={member.socials.facebook} 
                        className="text-white/90 hover:text-primary transform hover:scale-110 transition-all duration-300 bg-black/20 hover:bg-black/40 rounded-full p-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook Profile"
                      >
                        <span className="sr-only">Facebook</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a 
                        href={`mailto:${member.socials.email}`} 
                        className="text-white/90 hover:text-primary transform hover:scale-110 transition-all duration-300 bg-black/20 hover:bg-black/40 rounded-full p-2"
                        aria-label="Send Email"
                      >
                        <span className="sr-only">Email</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                </div>
                <p className="text-sm text-primary font-semibold mb-3 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1.323l-3.954 1.582A1 1 0 004 6.82v4.36a1 1 0 00.673.946l4 1.6a1 1 0 00.654 0l4-1.6a1 1 0 00.673-.946V6.82a1 1 0 00-.673-.946L9 4.323V3a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join the Board CTA */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-24 relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10"></div>
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="10" cy="10" r="2"/>
                <circle cx="30" cy="10" r="2"/>
                <circle cx="50" cy="10" r="2"/>
                <circle cx="70" cy="10" r="2"/>
                <circle cx="90" cy="10" r="2"/>
                <circle cx="20" cy="30" r="2"/>
                <circle cx="40" cy="30" r="2"/>
                <circle cx="60" cy="30" r="2"/>
                <circle cx="80" cy="30" r="2"/>
                <circle cx="10" cy="50" r="2"/>
                <circle cx="30" cy="50" r="2"/>
                <circle cx="50" cy="50" r="2"/>
                <circle cx="70" cy="50" r="2"/>
                <circle cx="90" cy="50" r="2"/>
              </svg>
            </div>
          </div>
          <div className="relative rounded-3xl p-8 sm:p-12">
            <div className="relative">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
                Interested in Joining the Board?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                We're always looking for passionate students to join our leadership team. Applications for board positions open at the beginning of each academic year.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 text-base font-medium rounded-full text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/35 group"
              >
                <span className="mr-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </span>
                Learn About Applications
                <span className="ml-2 transform transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </motion.div> */}
      </motion.div>

      {/* Add custom styles for animations */}
      <style jsx global>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide-infinite {
          animation: slide 20s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
