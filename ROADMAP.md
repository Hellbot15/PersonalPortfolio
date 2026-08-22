# Development Roadmap

This roadmap defines the order in which the portfolio should be designed,
implemented, tested, and launched.

Agents must follow the roadmap unless a documented technical reason requires
a change.

---

# Phase 0 — Product Definition

Owner:

**GPT**

Tasks:

- [ ] Define personal positioning
- [ ] Complete PRD.md
- [ ] Define target audience
- [ ] Define recruiter / visitor user journey
- [ ] Define portfolio sections
- [ ] Define primary portfolio goal
- [ ] Define content requirements
- [ ] Review CONTENT.md for factual accuracy
- [ ] Remove or resolve unnecessary `[NEEDS INPUT]` items
- [ ] Define project priorities

Completion Criteria:

- [ ] PRD.md is complete
- [ ] Portfolio positioning is clear
- [ ] Target audience is defined
- [ ] Core user journey is defined
- [ ] Content requirements are understood

---

# Phase 1 — Design Exploration

Owner:

**Stitch**

Tasks:

- [ ] Create design direction A
- [ ] Create design direction B
- [ ] Create design direction C
- [ ] Explore hero concepts
- [ ] Explore project presentation concepts
- [ ] Explore navigation concepts
- [ ] Explore interactive visual concepts
- [ ] Compare design directions
- [ ] Select strongest direction
- [ ] Define visual hierarchy
- [ ] Define typography
- [ ] Define color system
- [ ] Define spacing system
- [ ] Define component visual language
- [ ] Define responsive behavior
- [ ] Define interaction system
- [ ] Define animation direction
- [ ] Update DESIGN.md

Completion Criteria:

- [ ] One primary design direction selected
- [ ] Visual system documented
- [ ] Responsive behavior defined
- [ ] Major interactions defined
- [ ] DESIGN.md reflects the selected direction

---

# Phase 2 — Technical Validation

Owner:

**Antigravity**

Tasks:

- [ ] Review PRD.md
- [ ] Review DESIGN.md
- [ ] Review ARCHITECTURE.md
- [ ] Validate Next.js architecture
- [ ] Validate component architecture
- [ ] Validate content/data architecture
- [ ] Validate animation architecture
- [ ] Validate 3D architecture
- [ ] Validate SEO strategy
- [ ] Validate accessibility strategy
- [ ] Validate performance strategy
- [ ] Identify technical risks
- [ ] Identify unnecessary dependencies
- [ ] Identify implementation constraints
- [ ] Update ARCHITECTURE.md only if required

Completion Criteria:

- [ ] Architecture is technically feasible
- [ ] Major technical risks are identified
- [ ] No unnecessary infrastructure is planned
- [ ] Architecture documentation matches implementation strategy

---

# Phase 3 — Project Setup

Owner:

**Claude Code**

Tasks:

- [ ] Initialize Next.js
- [ ] Configure TypeScript
- [ ] Configure Tailwind CSS
- [ ] Configure linting
- [ ] Configure formatting
- [ ] Create directory structure
- [ ] Create design tokens
- [ ] Create base layout
- [ ] Create base components
- [ ] Configure fonts
- [ ] Configure metadata foundation
- [ ] Configure image handling
- [ ] Configure error handling
- [ ] Verify production build

Completion Criteria:

- [ ] Application runs locally
- [ ] TypeScript passes
- [ ] Linting passes
- [ ] Production build succeeds
- [ ] Base architecture matches ARCHITECTURE.md

---

# Phase 4 — Content & Project Preparation

Owners:

**GPT + Claude Code**

Tasks:

- [ ] Finalize personal identity content
- [ ] Finalize hero content
- [ ] Finalize about content
- [ ] Finalize skills
- [ ] Finalize education
- [ ] Finalize hackathons
- [ ] Finalize achievements
- [ ] Finalize current learning
- [ ] Finalize current building
- [ ] Verify GitHub links
- [ ] Verify LinkedIn
- [ ] Verify email
- [ ] Prepare Nexora AI project content
- [ ] Prepare Vulnerability Detection project content
- [ ] Prepare CampusBarter project content
- [ ] Collect project screenshots
- [ ] Collect project architecture information
- [ ] Verify project technologies
- [ ] Verify project roles
- [ ] Verify project results
- [ ] Verify live demos
- [ ] Verify GitHub repositories

Completion Criteria:

- [ ] No fabricated personal information
- [ ] No important `[NEEDS INPUT]` fields remain without a reason
- [ ] All featured projects have verified information
- [ ] Project assets are ready

---

# Phase 5 — Core Portfolio Experience

Owner:

**Claude Code**

Build:

- [ ] Global layout
- [ ] Navigation
- [ ] Hero
- [ ] About
- [ ] Skills / Tech Stack
- [ ] Featured Projects
- [ ] Education
- [ ] Hackathons / Achievements
- [ ] Current Focus
- [ ] Contact
- [ ] Footer

Do not add sections that do not have meaningful content.

Completion Criteria:

- [ ] Homepage is fully navigable
- [ ] Content is connected to the content/data layer
- [ ] Layout works without JavaScript-dependent decoration

---

# Phase 6 — Project Experience

Owner:

**Claude Code**

Projects:

1. Nexora AI
2. Vulnerability Detection
3. CampusBarter

Tasks:

- [ ] Project cards
- [ ] Project detail pages
- [ ] Project hero sections
- [ ] Project metadata
- [ ] Problem sections
- [ ] Solution sections
- [ ] Architecture sections
- [ ] Technology sections
- [ ] Key features
- [ ] Challenges
- [ ] Results / status
- [ ] Screenshots
- [ ] GitHub links
- [ ] Live demo links where available
- [ ] Project navigation
- [ ] Project page metadata

Completion Criteria:

- [ ] Each project has a complete case study
- [ ] Information is factually verified
- [ ] Screenshots are optimized
- [ ] External links work

---

# Phase 7 — Motion & Interaction

Owner:

**Claude Code**

Tasks:

- [ ] Page entrance animations
- [ ] Scroll interactions
- [ ] Hover interactions
- [ ] Navigation transitions
- [ ] Project transitions
- [ ] Micro-interactions
- [ ] Interactive visual elements
- [ ] Reduced motion support

Rules:

- [ ] Animation must support the content
- [ ] Animation must not block usability
- [ ] Avoid excessive continuous animation
- [ ] Respect `prefers-reduced-motion`

Completion Criteria:

- [ ] Animations feel intentional
- [ ] No major performance regressions
- [ ] Reduced-motion mode works

---

# Phase 8 — 3D / Experimental Visual Layer

Owners:

**Stitch + Antigravity + Claude Code**

Tasks:

- [ ] Finalize 3D concept
- [ ] Implement hero visual if justified
- [ ] Implement interactive visual elements if justified
- [ ] Optimize WebGL performance
- [ ] Add mobile fallback
- [ ] Add WebGL fallback
- [ ] Test reduced motion
- [ ] Verify 3D does not block content

Important:

3D is optional.

If the 3D experience makes the portfolio slower, harder to understand,
or less usable, reduce or remove it.

Completion Criteria:

- [ ] 3D enhances the experience
- [ ] Portfolio remains usable without 3D
- [ ] Mobile performance remains acceptable

---

# Phase 9 — Responsive Experience

Owner:

**Antigravity + Claude Code**

Test:

- [ ] Mobile
- [ ] Tablet
- [ ] Laptop
- [ ] Desktop
- [ ] Large desktop

Verify:

- [ ] Navigation
- [ ] Typography
- [ ] Hero
- [ ] Project cards
- [ ] Project pages
- [ ] Images
- [ ] Animations
- [ ] 3D
- [ ] Contact
- [ ] Footer

Completion Criteria:

- [ ] No horizontal overflow
- [ ] No broken layouts
- [ ] Touch interactions work
- [ ] Content remains readable at every breakpoint

---

# Phase 10 — Quality Assurance

Owner:

**Antigravity**

## Functional

- [ ] Navigation test
- [ ] Project route test
- [ ] External link test
- [ ] Button test
- [ ] Image test
- [ ] Error page test

## Accessibility

- [ ] Keyboard navigation
- [ ] Focus states
- [ ] Semantic HTML
- [ ] Screen-reader labels
- [ ] Color contrast
- [ ] Reduced motion

## Performance

- [ ] Bundle analysis
- [ ] Image optimization
- [ ] JavaScript audit
- [ ] Animation performance
- [ ] WebGL performance
- [ ] Loading performance

## SEO

- [ ] Page titles
- [ ] Meta descriptions
- [ ] Open Graph
- [ ] Canonical URLs
- [ ] Structured metadata
- [ ] Sitemap
- [ ] Robots configuration

## Browser Testing

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Android Chrome
- [ ] iOS Safari

## Final Checks

- [ ] No console errors
- [ ] No broken links
- [ ] No missing images
- [ ] No placeholder content
- [ ] No accidental debug UI
- [ ] No exposed secrets

---

# Phase 11 — Final Review

Owner:

**GPT**

Review:

- [ ] Brand identity
- [ ] Positioning
- [ ] UX
- [ ] Visual quality
- [ ] Content quality
- [ ] Technical credibility
- [ ] Project storytelling
- [ ] Recruiter experience
- [ ] Mobile experience
- [ ] Performance
- [ ] Overall memorability

Questions:

- [ ] Does the portfolio communicate who Abdul Ghani is within seconds?
- [ ] Is it obvious that he is an AI & Data Science student?
- [ ] Are AI/ML and software development clearly positioned?
- [ ] Do the projects demonstrate actual building ability?
- [ ] Does the portfolio feel personal rather than template-based?
- [ ] Is every visual element serving a purpose?
- [ ] Would a recruiter understand the strongest projects quickly?
- [ ] Is there anything impressive-looking but strategically useless?

---

# Phase 12 — Content Freeze

Before deployment:

- [ ] Freeze personal information
- [ ] Freeze project information
- [ ] Verify all links
- [ ] Verify GitHub repositories
- [ ] Verify social links
- [ ] Verify project screenshots
- [ ] Remove remaining placeholders
- [ ] Remove unnecessary sections
- [ ] Confirm final design
- [ ] Confirm final project order

After this phase, changes should be limited to bugs, accuracy issues,
accessibility issues, and necessary technical fixes.

---

# Phase 13 — Deployment

Owner:

**Antigravity + Claude Code**

Tasks:

- [ ] Verify GitHub production branch
- [ ] Configure Vercel
- [ ] Configure environment variables if required
- [ ] Configure domain
- [ ] Run production build
- [ ] Deploy preview
- [ ] Run production QA
- [ ] Deploy production
- [ ] Verify HTTPS
- [ ] Verify metadata
- [ ] Verify social previews
- [ ] Verify all routes
- [ ] Verify mobile production experience
- [ ] Verify analytics if implemented

Completion Criteria:

- [ ] Production build succeeds
- [ ] Production site is accessible
- [ ] All important routes work
- [ ] No critical console errors
- [ ] No broken links
- [ ] No placeholder content

---

# Phase 14 — Post-Launch

Tasks:

- [ ] Monitor production errors
- [ ] Review performance
- [ ] Review recruiter/user feedback
- [ ] Identify UX problems
- [ ] Fix critical issues
- [ ] Improve project storytelling
- [ ] Add new projects only when they strengthen the portfolio
- [ ] Update learning/current focus periodically

Do not continuously redesign the portfolio without evidence that the change
improves the experience.

---

# Final Principle

The roadmap is a guide, not an excuse to build unnecessary features.

The goal is not to complete every possible technology or visual effect.

The goal is to launch a portfolio that clearly communicates:

```text
Who Abdul Ghani is
        ↓
What he can build
        ↓
How he thinks
        ↓
What he is learning
        ↓
Why his projects matter
