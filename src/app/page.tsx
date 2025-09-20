import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import { About } from "../Components/About/About";
import ProjectFeatured from "../Components/ProjectFeatured/ProjectFeatured";
import ContatSection from "../Components/Contact/ContatSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ProjectFeatured />

      <main className="min-h-screen py-20 relative rounded-xl p-[1px] bg-gradient-to-r from-gray-300/0 via-gray-400/40 to-gray-300/0 shadow-lg shadow-gray-400/20">
        <ContatSection
          email="Anthonygodswill75@gmail.com"
          phone="+234 7041488229"
          location=" Woji Townhall, Rivers State, Nigeria"
        />
      </main>

      <footer className="py-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Teez Company. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
