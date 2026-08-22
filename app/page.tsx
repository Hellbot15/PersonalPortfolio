import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { TechIndex } from "@/components/sections/TechIndex";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-canvas text-ivory flex flex-col selection:bg-amberAccent/25 selection:text-white">
      {/* Editorial Navigation Masthead */}
      <Navbar />

      {/* Main Editorial Canvas */}
      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
        <Projects />
        <TechIndex />
        <Contact />
      </main>

      {/* Editorial Colophon Footer */}
      <Footer />
    </div>
  );
}
