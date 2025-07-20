'use client';

import { motion } from 'framer-motion';

interface PastExam {
  year: number;
  title: string;
  description: string;
  pdfUrl: string;
  solutionsUrl?: string;
}

const pastExams: PastExam[] = [
  {
    year: 2024,
    title: "BioLeague Winter Competition",
    description: "Test your knowledge in genetics, cell biology, and ecology in this comprehensive exam.",
    pdfUrl: "/exams/bioleague-2024-winter.pdf",
    solutionsUrl: "/exams/bioleague-2024-winter-solutions.pdf"
  },
  {
    year: 2023,
    title: "BioLeague Summer Competition",
    description: "Challenge yourself with questions covering molecular biology, evolution, and human anatomy.",
    pdfUrl: "/exams/bioleague-2023-summer.pdf",
    solutionsUrl: "/exams/bioleague-2023-summer-solutions.pdf"
  },
  {
    year: 2023,
    title: "BioLeague Winter Competition",
    description: "Explore topics in biochemistry, plant biology, and animal physiology.",
    pdfUrl: "/exams/bioleague-2023-winter.pdf",
    solutionsUrl: "/exams/bioleague-2023-winter-solutions.pdf"
  }
];

export default function BioLeague() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative py-24 sm:py-32">
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
              BioLeague Competition
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Prepare for our prestigious biology competition with past exams and solutions. Test your knowledge and improve your skills.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Past Exams Section */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {pastExams.map((exam, index) => (
            <motion.div
              key={`${exam.year}-${exam.title}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl dark:shadow-gray-900/50"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {exam.year}
                </span>
                <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                  Past Exam
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {exam.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {exam.description}
              </p>
              <div className="flex flex-col space-y-2">
                <a
                  href={exam.pdfUrl}
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-lg hover:from-primary/90 hover:to-secondary/90 transition-all"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Exam
                </a>
                {exam.solutionsUrl && (
                  <a
                    href={exam.solutionsUrl}
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-lg hover:bg-primary/20 transition-all"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    View Solutions
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
