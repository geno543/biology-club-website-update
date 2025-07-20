'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaBook, FaChevronRight, FaDownload, FaFlask, FaMicroscope, FaSearch, FaSpinner, FaUser, FaChalkboardTeacher, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface Paper {
  title: string;
  authors: string[];
  field: string;
  mentor: string;
  abstract: string;
  pdfUrl: string;
}

interface Issue {
  volumeNumber: number;
  issueNumber: number;
  publicationDate: string;
  title: string;
  description: string;
  papers: Paper[];
}

interface ExpandedAbstracts {
  [key: string]: boolean;
}

export default function ResearchVolumes() {
  const [selectedVolume, setSelectedVolume] = useState<number>(1);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedAbstracts, setExpandedAbstracts] = useState<ExpandedAbstracts>({});
  const volumes = [1, 2];

  useEffect(() => {
    const fetchIssues = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/research/volumes/volume${selectedVolume}/issue1/metadata.json`);
        if (!response.ok) {
          throw new Error('Failed to fetch issues');
        }
        const data = await response.json();
        setIssues([data]);
      } catch (error) {
        console.error('Error fetching issues:', error);
        setIssues([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchIssues();
  }, [selectedVolume]);

  // Filter papers based on search query
  const filteredPapers = useMemo(() => {
    if (!searchQuery.trim()) {
      return issues.flatMap(issue => issue.papers || []);
    }

    const query = searchQuery.toLowerCase().trim();
    return issues.flatMap(issue => 
      (issue.papers || []).filter(paper => {
        const searchableFields = {
          title: paper.title || '',
          authors: paper.authors ? paper.authors.join(' ') : '',
          field: paper.field || '',
          mentor: paper.mentor || '',
          abstract: paper.abstract || ''
        };

        return Object.values(searchableFields).some(value => 
          value.toLowerCase().includes(query)
        );
      })
    );
  }, [issues, searchQuery]);

  // Get unique research fields for filtering
  const researchFields = useMemo(() => {
    const fields = new Set<string>();
    issues.forEach(issue => {
      issue.papers?.forEach(paper => {
        if (paper.field) {
          fields.add(paper.field);
        }
      });
    });
    return Array.from(fields).sort();
  }, [issues]);

  const handleDownload = async (pdfUrl: string, title: string) => {
    try {
      // Convert relative URL to absolute URL
      const absoluteUrl = window.location.origin + pdfUrl;
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = absoluteUrl;
      link.target = '_blank';
      
      // Trigger the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Error downloading PDF. Please try again.');
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const toggleAbstract = (paperId: string) => {
    setExpandedAbstracts(prev => ({
      ...prev,
      [paperId]: !prev[paperId]
    }));
  };

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute left-0 right-0 top-0 h-96 bg-gradient-to-b from-emerald-50 dark:from-emerald-950/30" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Research Publications
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Explore groundbreaking research papers from our talented students across various fields of biology
          </motion.p>
        </div>

        {/* Volume Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {volumes.map((volume, index) => (
            <motion.button
              key={volume}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedVolume(volume)}
              className={`relative group p-6 rounded-2xl border-2 transition-all duration-300 ${
                selectedVolume === volume
                ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
                : 'border-gray-200 dark:border-gray-700 hover:border-emerald-500/50 dark:hover:border-emerald-500/50'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 rounded-2xl transition-colors duration-300" />
              <div className="relative">
                <FaBook className={`w-8 h-8 mb-4 ${
                  selectedVolume === volume
                  ? 'text-emerald-500'
                  : 'text-gray-400 group-hover:text-emerald-500'
                } transition-colors`} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Volume {volume}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {volume === 1 ? 'Latest research papers from our students' : `Research collection volume ${volume}`}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Research Fields Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {researchFields.map((field, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(field)}
                className={`
                  px-4 py-2 
                  rounded-full 
                  text-sm 
                  font-medium 
                  border-2
                  ${searchQuery === field 
                    ? 'bg-emerald-600 text-white border-emerald-600' 
                    : 'bg-white text-emerald-800 border-emerald-500 hover:bg-emerald-50'
                  }
                  transition-all duration-200
                `}
              >
                {field}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-xl blur-xl" />
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search papers by title, author, field, mentor, or content..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-6 py-4 bg-black dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:focus:ring-emerald-500/20 outline-none transition-all"
            />
            <div className="absolute right-6 flex items-center gap-2">
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              )}
              <FaSearch className="text-gray-400" />
            </div>
          </div>
          {searchQuery && (
            <div className="absolute left-6 right-6 -bottom-8 text-sm text-gray-500 dark:text-gray-400">
              Found {filteredPapers.length} {filteredPapers.length === 1 ? 'paper' : 'papers'}
            </div>
          )}
        </div>

        {/* Papers Grid */}
        <div className="relative">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <FaSpinner className="w-8 h-8 text-emerald-500" />
              </motion.div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredPapers.map((paper, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 rounded-2xl transition-colors duration-300" />
                  <div className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 group-hover:border-emerald-500/50 dark:group-hover:border-emerald-500/50 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                          {paper.title}
                        </h4>
                        <div className="space-y-2 mb-4">
                          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-500">
                              <FaUser className="w-3 h-3" />
                            </span>
                            {paper.authors.join(', ')}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-500">
                              <FaFlask className="w-3 h-3" />
                            </span>
                            {paper.field}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-500">
                              <FaChalkboardTeacher className="w-3 h-3" />
                            </span>
                            {paper.mentor}
                          </p>
                        </div>
                        <motion.div
                          initial={false}
                          animate={{ height: expandedAbstracts[paper.title] ? 'auto' : '3em' }}
                          className="overflow-hidden"
                        >
                          <p className={`text-sm text-gray-600 dark:text-gray-300 mb-4 ${!expandedAbstracts[paper.title] && 'line-clamp-2'}`}>
                            {paper.abstract}
                          </p>
                        </motion.div>
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => toggleAbstract(paper.title)}
                            className="inline-flex items-center gap-1 text-sm text-emerald-500 hover:text-emerald-600 transition-colors"
                          >
                            {expandedAbstracts[paper.title] ? (
                              <>
                                <FaChevronUp className="w-3 h-3" />
                                Show Less
                              </>
                            ) : (
                              <>
                                <FaChevronDown className="w-3 h-3" />
                                Read More
                              </>
                            )}
                          </button>
                          <button 
                            onClick={() => handleDownload(paper.pdfUrl, paper.title)}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition-colors text-sm font-medium"
                          >
                            <FaDownload className="w-4 h-4" />
                            Download PDF
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {!isLoading && filteredPapers.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <FaSearch className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No papers found
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try adjusting your search terms or check for typos
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
