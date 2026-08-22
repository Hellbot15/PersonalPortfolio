"use client";

import React from "react";
import { Container } from "../layout/Container";
import { PORTFOLIO_DATA, Project } from "@/content/portfolio";
import { motion } from "framer-motion";

function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <article className="py-16 md:py-24 hairline-t">
      {/* Top Header Row */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-8">
        <div className="flex items-baseline gap-4">
          <span className="text-3xl md:text-5xl font-mono font-light text-amberAccent">
            {project.number}
          </span>
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ivory uppercase">
              {project.title}
            </h3>
            <p className="text-sm md:text-base font-serif italic text-stone-muted mt-1">
              {project.tagline}
            </p>
          </div>
        </div>

        <div className="font-mono text-xs text-stone-muted space-y-0.5 text-left md:text-right">
          <p className="text-ivory font-medium uppercase">{project.context}</p>
          <p>ROLE: {project.role}</p>
        </div>
      </div>

      {/* Tech Stack Bar */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 py-3 hairline-t hairline-b mb-10 font-mono text-xs text-stone-muted">
        <span className="text-ivory uppercase">STACK:</span>
        {project.stack.map((tech, i) => (
          <span key={tech} className="flex items-center gap-4">
            <span className="text-stone hover:text-ivory transition-colors">
              {tech}
            </span>
            {i < project.stack.length - 1 && (
              <span className="text-stone-dark">·</span>
            )}
          </span>
        ))}
      </div>

      {/* Narrative Grid: Problem vs Solution & Contributions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left: The Problem */}
        <div className="lg:col-span-5 space-y-3">
          <h4 className="font-mono text-xs tracking-[0.2em] text-stone-muted uppercase">
            THE PROBLEM
          </h4>
          <p className="text-sm md:text-base text-stone font-sans leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Right: What Was Built & Contributions */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] text-stone-muted uppercase mb-2">
              THE SYSTEM & CONTRIBUTIONS
            </h4>
            <p className="text-sm md:text-base text-stone font-sans leading-relaxed mb-4">
              {project.solution}
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <span className="font-mono text-[11px] tracking-[0.15em] text-stone-muted uppercase">
              KEY TECHNICAL WORK:
            </span>
            <ul className="space-y-2">
              {project.contributions.map((contribution, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-xs md:text-sm text-stone font-sans"
                >
                  <span className="text-amberAccent mt-1 font-mono text-xs">
                    —
                  </span>
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* GitHub Action */}
          <div className="pt-6">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-ivory hover:text-white group"
            >
              <span className="border-b border-ivory/40 group-hover:border-ivory pb-0.5 transition-colors">
                View Source Repository
              </span>
              <span className="text-amberAccent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="work" className="py-24 md:py-32 hairline-t">
      <Container>
        {/* Section Header */}
        <div className="flex items-center justify-between font-mono text-xs tracking-[0.25em] text-stone-muted uppercase mb-12">
          <span>02 // SELECTED WORK</span>
          <span className="text-stone-dark">CASE STUDIES</span>
        </div>

        {/* Section Intro Statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ivory uppercase leading-[1.05] mb-4">
            PRACTICAL SYSTEMS & REPOSITORIES
          </h2>
          <p className="text-sm md:text-base text-stone font-sans leading-relaxed">
            A selection of verified systems I have engineered across backend microservices,
            cybersecurity interfaces, and full-stack applications.
          </p>
        </motion.div>

        {/* Projects List */}
        <div>
          {projects.map((project) => (
            <ProjectCaseStudy key={project.number} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
