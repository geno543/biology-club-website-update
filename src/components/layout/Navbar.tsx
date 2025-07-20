'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { FaFlask, FaDna, FaBook, FaUsers, FaEnvelope, FaSearch, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useSearch } from '@/context/SearchContext';
import { useTheme } from '@/context/ThemeContext';
import { searchContent } from '@/services/searchService';
import SearchResults from '@/components/search/SearchResults';
import debounce from 'lodash/debounce';

const MotionLink = motion(Link);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const { isDark, toggleTheme } = useTheme();
  const { setSearchQuery, setSearchResults, setIsSearching } = useSearch();

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce(async (query: string) => {
      if (query.trim()) {
        setIsSearching(true);
        const results = await searchContent(query);
        setSearchResults(results);
        setIsSearching(false);
      } else {
        setSearchResults([]);
      }
    }, 300),
    []
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsSearchOpen(false);
  }, [pathname]);

  const menuItems = [
    { href: '/', label: 'Home', icon: <FaFlask className="w-4 h-4" /> },
    { href: '/competition', label: 'BioLeague', icon: <FaDna className="w-4 h-4" /> },
    { href: '/research', label: 'Research', icon: <FaFlask className="w-4 h-4" /> },
    { href: '/magazines', label: 'Magazines', icon: <FaBook className="w-4 h-4" /> },
    { href: '/board', label: 'Board', icon: <FaUsers className="w-4 h-4" /> },
    { href: '/contact', label: 'Contact', icon: <FaEnvelope className="w-4 h-4" /> },
  ];

  // Theme toggle is now handled by the ThemeContext

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex flex-col group">
              <motion.span 
                className="text-2xl font-bold bg-gradient-to-r from-primary via-teal-400 to-primary bg-clip-text text-transparent bg-size-200 group-hover:bg-pos-100 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                Biology Club
              </motion.span>
              <motion.span 
                className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                STEM October
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="flex items-center space-x-1">
              {menuItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <MotionLink
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 overflow-hidden ${
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50/50 dark:text-gray-300 dark:hover:text-primary dark:hover:bg-gray-800/30'
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-primary via-teal-400 to-primary"
                        layoutId="navbar-underline"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </MotionLink>
                );
              })}
            </div>

            {/* Desktop Actions */}
            <div className="flex items-center space-x-2 ml-4">
              <motion.button
                className="p-2 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-50/50 dark:text-gray-300 dark:hover:text-primary dark:hover:bg-gray-800/30 transition-all duration-200"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaSearch className="w-5 h-5" />
              </motion.button>

              <motion.button
                className="p-2 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-50/50 dark:text-gray-300 dark:hover:text-primary dark:hover:bg-gray-800/30 transition-all duration-200"
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
              </motion.button>

              <Link
                href="/donate"
                className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-primary via-teal-400 to-primary bg-size-200 hover:bg-pos-100 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Donate
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-100/50 dark:text-gray-300 dark:hover:text-primary dark:hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="max-w-3xl mx-auto px-4 py-4">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                  onChange={handleSearch}
                  autoFocus
                />
              </div>
              <SearchResults />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-lg border-t dark:border-gray-800/50">
              {menuItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <MotionLink
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-2 px-3 py-2.5 rounded-lg text-base font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50/50 dark:text-gray-300 dark:hover:text-primary dark:hover:bg-gray-800/30'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </MotionLink>
                );
              })}

              <div className="flex items-center justify-between px-3 py-2.5">
                <motion.button
                  className="p-2 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-50/50 dark:text-gray-300 dark:hover:text-primary dark:hover:bg-gray-800/30 transition-all duration-200"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaSearch className="w-5 h-5" />
                </motion.button>

                <motion.button
                  className="p-2 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-50/50 dark:text-gray-300 dark:hover:text-primary dark:hover:bg-gray-800/30 transition-all duration-200"
                  onClick={toggleTheme}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isDark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
                </motion.button>
              </div>

              <Link
                href="/donate"
                className="block w-full text-center mt-4 px-3 py-2.5 rounded-lg text-base font-medium text-white bg-gradient-to-r from-primary via-teal-400 to-primary bg-size-200 hover:bg-pos-100 transition-all duration-500 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
              >
                Donate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
