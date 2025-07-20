'use client';

import { motion } from 'framer-motion';

export default function CompetitionRegister() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative py-16 sm:py-20"> {/* Reduced padding here */}
        <div 
          className="absolute inset-0 bg-[url('/images/dna-pattern.svg')] opacity-[0.03] dark:opacity-[0.02]"
          style={{ backgroundSize: '100px 100px' }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-4xl font-bold tracking-tight sm:text-6xl">
              Competition Registration
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Fill out the form below to register for the upcoming competition.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Google Form Embed */}
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8 pb-12"> {/* Reduced bottom padding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl dark:shadow-gray-900/50 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 text-center">
            Register Now
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScO9q_rY9iz1M9myy86JNbarsB8TM02W25XwQouIe5m-rq76Q/viewform?embedded=true"
              width="640px"
              height="612px"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full h-[1000px] rounded-lg border-0"
              allowFullScreen
            >
              Loading…
            </iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
