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

      <main className="min-h-screen py-20 shadow-2xl">
        <ContatSection
          email="hello@yoursite.com"
          phone="+1 (555) 987-6543"
          location="San Francisco, CA"
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
