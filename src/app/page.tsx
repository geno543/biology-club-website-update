'use client';

import dynamic from 'next/dynamic';
import { useTheme } from '@/context/ThemeContext';
import WhatWeOffer from '@/components/home/WhatWeOffer';
import Branches from '@/components/home/Branches';
import Competitions from '@/components/home/Competitions';

// Dynamically import Hero component
const Hero = dynamic(() => import('@/components/home/Hero'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black dark:from-gray-900 dark:to-black">
      <div className="text-white dark:text-white text-2xl">Loading...</div>
    </div>
  ),
});

export default function Home() {
  const { isDark } = useTheme();
  
  return (
    <main className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-b from-gray-900 to-black text-white' 
        : 'bg-gradient-to-b from-gray-50 to-white text-gray-900'
    }`}>
      <Hero />
      <WhatWeOffer />
      <Competitions />
      <Branches />
    </main>
  );
}
