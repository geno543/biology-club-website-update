'use client';

import CellsScene from "../three/CellsScene";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight, FaMicroscope, FaUsers, FaBook, FaDna, FaTrophy } from "react-icons/fa";
import { useTheme } from '@/context/ThemeContext';
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const { scrollY } = useScroll();
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  
  // Scroll visibility handling
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smoother scroll-based animations
  const backgroundOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const backgroundScale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const contentY = useTransform(scrollY, [0, 300], [0, -50]);
  const contentOpacity = useTransform(scrollY, 
    [0, 100, 200, 300], 
    [1, 1, 0.8, 0.6]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [-5, 5],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background container with fade effect */}
      <motion.div 
        className={`fixed inset-0 transition-colors duration-300 ${
          isDark 
            ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' 
            : 'bg-gradient-to-b from-blue-50 via-white to-gray-50'
        }`}
        style={{ opacity: backgroundOpacity }}
      />

      {/* Animated Background Gradient */}
      <motion.div 
        className={`fixed inset-0 animate-gradient-xy transition-colors duration-300 ${
          isDark 
            ? 'bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10' 
            : 'bg-gradient-to-r from-blue-200/30 via-purple-200/30 to-pink-200/30'
        }`}
        style={{ opacity: backgroundOpacity }}
      />
      
      {/* 3D Cells Background */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{ 
          opacity: backgroundOpacity,
          scale: backgroundScale
        }}
      >
        <CellsScene />
      </motion.div>

      {/* DNA Helix Decorations */}
      <motion.div 
        className={`fixed top-20 left-10 text-6xl animate-spin-slow transition-colors duration-300 ${
          isDark ? 'text-teal-500/20' : 'text-teal-600/30'
        }`}
        style={{ opacity: backgroundOpacity }}
      >
        <FaDna />
      </motion.div>
      <motion.div 
        className={`fixed bottom-20 right-10 text-6xl animate-spin-slow-reverse transition-colors duration-300 ${
          isDark ? 'text-blue-500/20' : 'text-blue-600/30'
        }`}
        style={{ opacity: backgroundOpacity }}
      >
        <FaDna />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 py-24 md:py-32"
        style={{ 
          y: contentY,
          opacity: contentOpacity
        }}
      >
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Title */}
          <motion.div
            variants={itemVariants}
            className="relative inline-block"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 mb-6"
              animate={floatingAnimation}
            >
              STEM October Biology Club
            </motion.h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 rounded-lg opacity-20 blur-xl" />
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className={`text-xl md:text-2xl mb-12 transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            A new generation of biologists
          </motion.p>

          {/* Features Grid */}
          

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            {/* <Link href="/join" className="group">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-teal-500/25 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join the Club
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link> */}
            <Link href="/competition" className="group">
              <motion.button 
               className="px-8 py-4 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-teal-500/25 transition-all flex items-center gap-2"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
                BioLeague Competition
                {/* <FaTrophy className="group-hover:scale-110 transition-transform text-yellow-400" /> */}
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "50+", label: "Active Members", color: "text-teal-400" },
              { value: "6+", label: "Weekly Sessions", color: "text-blue-400" },
              { value: "5+", label: "WorkShops", color: "text-purple-400" },
              { value: "10+", label: "Expert Mentors", color: "text-pink-400" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.h4 
                  className={`text-3xl font-bold ${stat.color} mb-2`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {stat.value}
                </motion.h4>
                <p className={`transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isVisible ? {
              opacity: 0,
              y: [0, 5, 0]
            } : {
              opacity: 0,
              y: 10
            }}
            transition={{ 
              duration: 2,
              repeat: isVisible ? Infinity : 0,
              ease: "easeInOut"
            }}
            className="fixed bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
          >
            {/* Scroll Text - Hidden on Small Screens */}
            <motion.span 
              className="hidden md:block text-sm text-gray-400 mb-2 tracking-wider font-medium text-center"
              animate={isVisible ? { opacity: [0.5, 1, 0.5] } : { opacity: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Scroll to explore
            </motion.span>
            
            {/* Scroll Indicator Container */}
            <div className="relative flex items-center justify-center">
              {/* Mouse Shape */}
              <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-gray-400/80 rounded-full flex justify-center backdrop-blur-sm">
                {/* Scroll Dot */}
                <motion.div 
                  className="w-1 h-2 md:h-3 bg-gradient-to-b from-teal-400 to-blue-400 rounded-full absolute top-2"
                  animate={isVisible ? { 
                    y: [-8, 8, -8],
                    opacity: [1, 0.5, 1]
                  } : {
                    y: 8,
                    opacity: 0
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: isVisible ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                />
              </div>
              
              {/* Glow Effect */}
              <motion.div 
                className="absolute inset-0 bg-blue-500/20 rounded-full filter blur-md"
                animate={isVisible ? {
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.1, 1]
                } : {
                  opacity: 0,
                  scale: 0.9
                }}
                transition={{
                  duration: 2,
                  repeat: isVisible ? Infinity : 0,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
