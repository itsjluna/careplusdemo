import React from 'react';
import { motion } from 'framer-motion';

export default function AtmosphericParticles() {
  // Generate sleek, elongated light streaks (Underwater light rays / Aurora beams)
  const streaks = Array.from({ length: 15 });
  // Generate fast, sharp micro-particles (Bioluminescent dust)
  const microParticles = Array.from({ length: 25 });

  const colors = [
    'via-[#0ea5e9]', // Medical Blue
    'via-[#c7d825]', // Healing Green
    'via-[#38bdf8]', // Sky Blue
    'via-white'      // Pure Light
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      
      {/* 1. Sleek Dynamic Light Streaks */}
      {streaks.map((_, i) => {
        const color = colors[i % colors.length];
        const delay = Math.random() * 10;
        const duration = Math.random() * 7 + 8; // 8 to 15 seconds
        
        return (
          <motion.div
            key={`streak-${i}`}
            className={`absolute bg-gradient-to-t from-transparent ${color} to-transparent blur-[2px] opacity-0`}
            style={{
              width: Math.random() * 3 + 1 + 'px', // Very thin
              height: Math.random() * 300 + 150 + 'px', // Very long
              left: Math.random() * 100 + '%',
              bottom: '-30%',
              rotate: 15 + (Math.random() * 15 - 7.5) // Slight diagonal tilt, aquatic feel
            }}
            animate={{
              bottom: '120%', // Travel all the way up
              opacity: [0, 0.4, 0] // Fade in and out smoothly
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
              delay: delay,
            }}
          />
        );
      })}

      {/* 2. Micro "Bioluminescent" Sparks */}
      {microParticles.map((_, i) => {
        const isGreen = i % 2 === 0;
        const delay = Math.random() * 8;
        const duration = Math.random() * 10 + 10; // 10 to 20 seconds
        
        return (
          <motion.div
            key={`spark-${i}`}
            className={`absolute rounded-full opacity-0 ${isGreen ? 'bg-[#c7d825] shadow-[0_0_8px_#c7d825]' : 'bg-[#0ea5e9] shadow-[0_0_8px_#0ea5e9]'}`}
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              bottom: '-10%',
            }}
            animate={{
              bottom: '110%',
              x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50], // Drift left and right like fluid
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay,
            }}
          />
        );
      })}
    </div>
  );
}
