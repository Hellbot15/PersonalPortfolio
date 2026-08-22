"use client";

import React from "react";
import { Container } from "../layout/Container";
import { PORTFOLIO_DATA } from "@/content/portfolio";
import { motion } from "framer-motion";

export function TechIndex() {
  const { technicalIndex, currentFocus } = PORTFOLIO_DATA;

  return (
    <section id="index" className="py-24 md:py-32 hairline-t">
      <Container>
        {/* Section Header */}
        <div className="flex items-center justify-between font-mono text-xs tracking-[0.25em] text-stone-muted uppercase mb-12">
          <span>03 // TECHNICAL INDEX</span>
          <span className="text-stone-dark">SKILLS & ARCHITECTURE</span>
        </div>

        {/* Section Title */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ivory uppercase leading-tight mb-3">
            TECHNICAL CAPABILITIES
          </h2>
          <p className="text-sm text-stone font-sans">
            Categorized index of languages, frameworks, AI tools, and infrastructure
            utilized across my engineering projects.
          </p>
        </div>

        {/* Typographic Technical Index Rows */}
        <div className="divide-y divide-surface-border hairline-t hairline-b mb-24">
          {technicalIndex.map((cat) => (
            <motion.div
              key={cat.index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="group py-6 md:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline hover:bg-surface/30 px-2 md:px-4 transition-colors"
            >
              {/* Index Number & Category */}
              <div className="md:col-span-4 flex items-baseline gap-3">
                <span className="font-mono text-xs text-amberAccent group-hover:translate-x-0.5 transition-transform">
                  {cat.index}
                </span>
                <h3 className="font-mono text-xs md:text-sm tracking-[0.15em] text-ivory uppercase">
                  {cat.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="md:col-span-8 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-sans text-sm md:text-base text-stone">
                {cat.skills.map((skill, i) => (
                  <span key={skill} className="flex items-center gap-3">
                    <span className="group-hover:text-ivory transition-colors">
                      {skill}
                    </span>
                    {i < cat.skills.length - 1 && (
                      <span className="text-stone-dark select-none">·</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Current Focus / Active Exploration */}
        <div className="pt-8">
          <div className="flex items-center justify-between font-mono text-xs tracking-[0.25em] text-stone-muted uppercase mb-8">
            <span>CURRENT FOCUS</span>
            <span className="text-stone-dark">ONGOING LEARNING</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentFocus.map((item, idx) => (
              <div
                key={idx}
                className="p-6 hairline-t hairline-b bg-surface/20 space-y-2"
              >
                <span className="font-mono text-xs text-amberAccent">
                  FOCUS 0{idx + 1}
                </span>
                <p className="text-sm md:text-base text-stone font-sans leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
