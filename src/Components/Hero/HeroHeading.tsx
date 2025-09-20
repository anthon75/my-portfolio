
'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HeroHeadingProps {
  greeting?: string;
  name: string;
  description: string;
}

export default function HeroHeading({ greeting, name, description }: HeroHeadingProps) {
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateKey((k) => k + 1);
    }, 9000); // Change greeting every second
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-center py-16 px-4 bg-gray-200">
      <motion.h1
        key={animateKey} // This will remount the h1 and re-trigger the animation
        className="text-4xl md:text-6xl font-bold text-gray-900"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {greeting} <span className="text-blue-600">{name}</span>
      </motion.h1>
      <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        {description}
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button
  onClick={() => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }}
  className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition"
>
  View My Work
</button>
        <a href="/Anthony_CV.pdf" 
        target="_blank"
          rel="noopener noreferrer"
        className="bg-gray-100 text-gray-800 font-semibold py-2 px-6 rounded hover:bg-gray-200 transition">
          Download CV
        </a>
      </div>

      <div className="mt-10 flex justify-center gap-6 text-gray-600 text-xl">
        <a href="#" aria-label="GitHub" className="hover:text-gray-900">
          <i className="fab fa-github"></i>
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:text-gray-900">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#" aria-label="Email" className="hover:text-gray-900">
          
        </a>
      </div>
    </section>
  );
}

