"use client";

import React from "react";
import { Container } from "../layout/Container";
import { PORTFOLIO_DATA } from "@/content/portfolio";
import { motion } from "framer-motion";

export function Contact() {
  const { profile, links } = PORTFOLIO_DATA;

  return (
    <section id="contact" className="py-24 md:py-32 hairline-t">
      <Container>
        {/* Section Header */}
        <div className="flex items-center justify-between font-mono text-xs tracking-[0.25em] text-stone-muted uppercase mb-12">
          <span>04 // CONTACT</span>
          <span className="text-stone-dark">COMMUNICATION</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Headline & Invitation */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-4"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ivory uppercase leading-[0.95]">
              LET&apos;S CONNECT
            </h2>
            <p className="text-base text-stone font-sans leading-relaxed max-w-md">
              Interested in collaborating, discussing AI/ML projects, or reviewing
              my work? Feel free to reach out directly through any of the channels.
            </p>
          </motion.div>

          {/* Right: Direct Contact Directory */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-surface-border hairline-t hairline-b">
            {/* Email */}
            <a
              href={links.email}
              className="py-6 flex items-center justify-between group hover:bg-surface/30 px-2 md:px-4 transition-colors"
            >
              <div className="space-y-1">
                <span className="font-mono text-xs text-stone-muted uppercase tracking-[0.2em]">
                  DIRECT INBOX
                </span>
                <p className="text-base sm:text-lg font-mono text-ivory group-hover:text-white transition-colors">
                  abdulghani.dev@gmail.com
                </p>
              </div>
              <span className="text-stone-muted group-hover:text-amberAccent font-mono text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

            {/* GitHub */}
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="py-6 flex items-center justify-between group hover:bg-surface/30 px-2 md:px-4 transition-colors"
            >
              <div className="space-y-1">
                <span className="font-mono text-xs text-stone-muted uppercase tracking-[0.2em]">
                  CODE REPOSITORIES
                </span>
                <p className="text-base sm:text-lg font-mono text-ivory group-hover:text-white transition-colors">
                  github.com/Hellbot15
                </p>
              </div>
              <span className="text-stone-muted group-hover:text-amberAccent font-mono text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="py-6 flex items-center justify-between group hover:bg-surface/30 px-2 md:px-4 transition-colors"
            >
              <div className="space-y-1">
                <span className="font-mono text-xs text-stone-muted uppercase tracking-[0.2em]">
                  PROFESSIONAL NETWORK
                </span>
                <p className="text-base sm:text-lg font-mono text-ivory group-hover:text-white transition-colors">
                  LinkedIn Profile
                </p>
              </div>
              <span className="text-stone-muted group-hover:text-amberAccent font-mono text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
