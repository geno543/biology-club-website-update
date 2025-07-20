'use client';

import dynamic from 'next/dynamic';
import { useTheme } from '@/context/ThemeContext';

const CompetitionContent = dynamic(
  () => import('@/components/competition/CompetitionContent'),
  {
    loading: () => {
      const LoadingComponent = () => {
        const { isDark } = useTheme();
        return (
          <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
            isDark 
              ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white' 
              : 'bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900'
          }`}>
            <div className="text-2xl">Loading Competition Page...</div>
          </div>
        );
      };
      return <LoadingComponent />;
    },
    ssr: false
  }
)

export default function CompetitionPage() {
  return <CompetitionContent />
}
