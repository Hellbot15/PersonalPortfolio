"use client";

import React from "react";
import { Container } from "../layout/Container";
import { StudioObject } from "../visual/StudioObject";
import { PORTFOLIO_DATA } from "@/content/portfolio";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  const { profile, links } = PORTFOLIO_DATA;

  return (
    <section
      id="top"
      className="relative min-h-[92vh] pt-32 pb-16 flex flex-col justify-between overflow-hidden"
    >
      <Container className="flex-1 flex flex-col justify-center">
        {/* Top Metadata Line */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between font-mono text-[11px] tracking-[0.22em] text-stone-muted uppercase mb-8 md:mb-12"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amberAccent" />
            <span>{profile.education.location}</span>
          </div>
          <span>B.TECH AI & DS · 2024–2028</span>
        </motion.div>

        {/* Asymmetrical Grid: Typography (Left) + Studio Object (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Primary Identity */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.2rem] font-bold tracking-[-0.035em] text-ivory leading-[0.92] uppercase mb-6">
                ABDUL
                <br />
                GHANI
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="space-y-4 max-w-xl"
            >
              <p className="text-sm md:text-base font-mono tracking-[0.08em] text-stone-muted uppercase">
                {profile.role} · {profile.education.institution}
              </p>

              <p className="text-base sm:text-lg text-stone font-sans leading-relaxed">
                {profile.subStatement}
              </p>

              {/* Action Links */}
              <div className="pt-4 flex items-center gap-8 font-mono text-xs tracking-[0.2em] uppercase">
                <Link
                  href="#work"
                  className="group flex items-center gap-2 text-ivory hover:text-white transition-colors"
                >
                  <span className="border-b border-ivory/40 group-hover:border-ivory pb-0.5 transition-colors">
                    Explore Work
                  </span>
                  <span className="text-amberAccent transition-transform group-hover:translate-y-0.5">
                    ↓
                  </span>
                </Link>

                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-stone hover:text-ivory transition-colors"
                >
                  <span className="border-b border-stone/30 group-hover:border-ivory pb-0.5 transition-colors">
                    GitHub
                  </span>
                  <span className="text-stone group-hover:text-amberAccent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Physical 3D Studio Object Anchor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            <StudioObject />
          </motion.div>
        </div>
      </Container>

      {/* Bottom Grounding Hairline */}
      <Container className="pt-12">
        <div className="hairline-t pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[10px] font-mono tracking-[0.2em] text-stone-muted uppercase gap-2">
          <span>SELECTED FOCUS: FASTAPI · REACT · CYBERSECURITY SYSTEMS · ML FOUNDATIONS</span>
          <span className="text-stone-dark hidden md:inline">INDEX NO. 01 / 06</span>
        </div>
      </Container>
    </section>
  );
}
