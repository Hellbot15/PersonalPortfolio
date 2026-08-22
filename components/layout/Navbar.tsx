"use client";

import React, { useEffect, useState } from "react";
import { Container } from "./Container";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-canvas/90 backdrop-blur-md hairline-b py-4"
          : "bg-transparent py-6"
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Left: Identity */}
        <Link
          href="#top"
          className="group flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-ivory hover:text-white transition-colors uppercase"
        >
          <span className="font-semibold">ABDUL GHANI</span>
          <span className="text-stone-muted">/</span>
          <span className="text-stone font-normal hidden sm:inline">STUDIO ARCHIVE</span>
        </Link>

        {/* Center: Degree & Period */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-stone-muted uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-amberAccent/80" />
          <span>AI & DATA SCIENCE (2024–2028)</span>
        </div>

        {/* Right: Section Navigation */}
        <nav className="flex items-center gap-6 sm:gap-8 font-mono text-[11px] sm:text-xs tracking-[0.2em] text-stone uppercase">
          <Link
            href="#about"
            className="hover:text-ivory transition-colors duration-200"
          >
            01 About
          </Link>
          <Link
            href="#work"
            className="hover:text-ivory transition-colors duration-200"
          >
            02 Work
          </Link>
          <Link
            href="#index"
            className="hover:text-ivory transition-colors duration-200"
          >
            03 Index
          </Link>
          <Link
            href="#contact"
            className="hover:text-ivory transition-colors duration-200"
          >
            04 Contact
          </Link>
        </nav>
      </Container>
    </header>
  );
}
