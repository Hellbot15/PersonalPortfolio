"use client";

import React from "react";
import { Container } from "../layout/Container";
import { PORTFOLIO_DATA } from "@/content/portfolio";
import { motion } from "framer-motion";

export function About() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 md:py-32 hairline-t">
      <Container>
        {/* Section Index Header */}
        <div className="flex items-center justify-between font-mono text-xs tracking-[0.25em] text-stone-muted uppercase mb-12">
          <span>01 // ABOUT</span>
          <span className="text-stone-dark">BUILDER PHILOSOPHY</span>
        </div>

        {/* Big Editorial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-16 md:mb-24"
        >
          <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-serif italic text-ivory leading-[1.35] tracking-tight">
            &ldquo;{profile.philosophyQuote}&rdquo;
          </blockquote>
        </motion.div>

        {/* Two-Column Editorial Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 pt-8 hairline-t">
          {/* Left Column: Background */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-mono text-xs tracking-[0.2em] text-stone-muted uppercase">
              BACKGROUND & ACADEMICS
            </h3>
            <p className="text-sm md:text-base text-stone font-sans leading-relaxed">
              {profile.aboutParagraphs[0]}
            </p>
            <div className="pt-2 text-xs font-mono text-stone-muted space-y-1">
              <p>INSTITUTION: {profile.education.institution}</p>
              <p>DEGREE: {profile.education.degree}</p>
              <p>LOCATION: {profile.education.location} ({profile.education.period})</p>
            </div>
          </div>

          {/* Right Column: Engineering Mindset */}
          <div className="md:col-span-7 space-y-6">
            <h3 className="font-mono text-xs tracking-[0.2em] text-stone-muted uppercase">
              HOW I BUILD
            </h3>
            <p className="text-sm md:text-base text-stone font-sans leading-relaxed">
              {profile.aboutParagraphs[1]}
            </p>
            <p className="text-sm md:text-base text-stone font-sans leading-relaxed">
              {profile.aboutParagraphs[2]}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
