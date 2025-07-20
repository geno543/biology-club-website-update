'use client';

import { motion } from 'framer-motion';

export default function Donate() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative py-20 sm:py-28">
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
              Support Our Work
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Your donation helps us continue our mission and fund future events, workshops, and educational programs. Every contribution makes a difference.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Donation Section */}
      <div className="relative mx-auto max-w-3xl px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl dark:shadow-gray-900/50 backdrop-blur-sm text-center"
        >
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Make a Donation
          </h2>

          <a
            href="https://hcb.hackclub.com/donations/start/oct-biology-club"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-lg font-semibold text-white rounded-lg shadow-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all"
          >
            Donate Now
          </a>

          <p className="mt-6 text-gray-600 dark:text-gray-300">
            Thank you for supporting our community!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
