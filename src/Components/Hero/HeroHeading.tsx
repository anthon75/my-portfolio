'use client';
import React from 'react';


interface HeroHeadingProps {
  greeting?: string;
  name: string;
  description: string;
} 




export default function HeroHeading({ greeting, name, description }: HeroHeadingProps) {
  return (
    <section className="text-center py-16 px-4 bg-gray-200">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
        {greeting} <span className="text-blue-600">{name}</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        {description}
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition">
          View My Work
        </button>
        <button className="bg-gray-100 text-gray-800 font-semibold py-2 px-6 rounded hover:bg-gray-200 transition">
          Download CV
        </button>
      </div>

      <div className="mt-10 flex justify-center gap-6 text-gray-600 text-xl">
        <a href="#" aria-label="GitHub" className="hover:text-gray-900">
          <i className="fab fa-github"></i>
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:text-gray-900">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#" aria-label="Email" className="hover:text-gray-900">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </section>
  );
}


