import { motion, AnimatePresence } from 'framer-motion';
import { useSearch } from '@/context/SearchContext';
import Link from 'next/link';
import { FaBook, FaCalendar, FaFile } from 'react-icons/fa';

export default function SearchResults() {
  const { searchResults, isSearching, searchQuery } = useSearch();

  const getIcon = (type: string) => {
    switch (type) {
      case 'article':
        return <FaBook className="w-4 h-4" />;
      case 'event':
        return <FaCalendar className="w-4 h-4" />;
      default:
        return <FaFile className="w-4 h-4" />;
    }
  };

  if (!searchQuery) return null;

  return (
    <div className="max-h-[70vh] overflow-y-auto">
      <AnimatePresence>
        {isSearching ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center py-8"
          >
            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {searchResults.length > 0 ? (
              <div className="space-y-2">
                {searchResults.map((result, index) => (
                  <motion.div
                    key={result.url}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={result.url}
                      className="block p-4 hover:bg-gray-50/50 dark:hover:bg-gray-800/30 rounded-lg transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-primary">
                          {getIcon(result.type)}
                        </span>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                            {result.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {result.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : searchQuery ? (
              <div className="text-center py-8 text-gray-600 dark:text-gray-400">
                No results found for "{searchQuery}"
              </div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
