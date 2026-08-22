Markdown

# Technical Architecture


This document defines the production architecture for the personal portfolio.


The architecture must remain simple enough to maintain independently while supporting a highly interactive visual experience.


---


# 1. Objective


The architecture should prioritize:


1. Maintainability
2. Performance
3. Accessibility
4. Developer experience
5. SEO
6. Scalability
7. Simplicity


Do not introduce infrastructure that the portfolio does not need.


---


# 2. Proposed Stack


## Framework


Next.js


Use the App Router.


## Language


TypeScript


Strict TypeScript should be enabled.


## UI


React


Prefer React Server Components by default.


Use Client Components only when interactivity requires them.


## Styling


Tailwind CSS


Use centralized design tokens from `DESIGN.md`.


## Animation


Motion for React where justified.


Animation must respect:


`prefers-reduced-motion`


## 3D / WebGL


Three.js / React Three Fiber only where it provides meaningful visual value.


3D must not become a requirement for understanding the website.


## Icons


Lucide React or another lightweight icon system.


## Deployment


Vercel


## Source Control


GitHub


---


# 3. Architecture Principle


Prefer:


```text
Static / Server-rendered content
        ↓
Reusable React components
        ↓
Minimal client-side JavaScript
        ↓
Selective interactive components
        ↓
Optional 3D / animation layers

The default should be server-rendered.

Client-side JavaScript should be introduced only when necessary.

4. High-Level System
                    GitHub Repository
                           |
                           v
                    Next.js Application
                           |
          +----------------+----------------+
          |                |                |
          v                v                v
      App Router       Content Layer    Design System
          |                |                |
          v                v                v
      Page Routes      Portfolio Data     UI Components
          |                |                |
          +----------------+----------------+
                           |
                           v
                 Interactive Experience
                    /            \
                   /              \
             Motion             Three.js
                |                   |
                +---------+---------+
                          |
                          v
                       Vercel
5. No Backend by Default

The portfolio does not require a traditional backend initially.

Do not add:

PostgreSQL
MongoDB
Firebase
Supabase
Redis
Authentication
User accounts
Custom API servers

unless a real product requirement appears.

The initial portfolio should function as a primarily static/content-driven application.

6. Data Architecture
Source of Truth

Personal and project information is maintained in:

CONTENT.md

Design rules are maintained in:

DESIGN.md

Architecture rules are maintained in:

ARCHITECTURE.md

Product requirements are maintained in:

PRD.md

AI-agent rules are maintained in:

AGENTS.md

Claude Code-specific instructions are maintained in:

CLAUDE.md

7. Content Pipeline

The factual content should flow through a controlled content layer.

CONTENT.md
    ↓
Content/Data Layer
    ↓
Typed Portfolio Data
    ↓
React Components
    ↓
Next.js Pages

The implementation may transform the Markdown content into typed application data if necessary.

Do not duplicate personal information across multiple components.

8. Repository Structure
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   │
│   ├── projects/
│   │   ├── page.tsx
│   │   ├── nexora-ai/
│   │   │   └── page.tsx
│   │   ├── vulnerability-detection/
│   │   │   └── page.tsx
│   │   └── campusbarter/
│   │       └── page.tsx
│   │
│   └── not-found.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── TechStack.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   │
│   ├── projects/
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectHero.tsx
│   │   ├── ProjectMeta.tsx
│   │   ├── Architecture.tsx
│   │   └── CaseStudy.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── SectionHeading.tsx
│   │   └── Container.tsx
│   │
│   └── visual/
│       ├── HeroBackground.tsx
│       ├── NetworkBackground.tsx
│       └── SkillGraph.tsx
│
├── content/
│   ├── portfolio.ts
│   └── projects.ts
│
├── lib/
│   ├── content.ts
│   ├── utils.ts
│   └── metadata.ts
│
├── public/
│   ├── images/
│   ├── projects/
│   │   ├── nexora/
│   │   ├── vulnerability-detection/
│   │   └── campusbarter/
│   └── icons/
│
├── types/
│   ├── portfolio.ts
│   └── project.ts
│
├── tests/
│
├── PRD.md
├── DESIGN.md
├── ARCHITECTURE.md
├── CONTENT.md
├── ROADMAP.md
├── AGENTS.md
├── CLAUDE.md
└── README.md

The exact structure may be adjusted during implementation if there is a demonstrable technical reason.

9. App Router

Use the Next.js App Router.

Primary routes:

/
├── /projects
├── /projects/nexora-ai
├── /projects/vulnerability-detection
└── /projects/campusbarter

Optional routes:

/about
/contact

These should only exist as separate routes if they provide a meaningful UX benefit.

The homepage should contain the primary portfolio experience.

10. Homepage Architecture

The homepage should follow:

Navbar
   ↓
Hero
   ↓
About
   ↓
Tech Stack
   ↓
Featured Projects
   ↓
Learning / Current Focus
   ↓
Contact
   ↓
Footer

Sections should be independently reusable.

11. Project Architecture

Each project should have structured data.

Example:

type Project = {
  slug: string
  title: string
  description: string
  type: string
  role: string
  technologies: string[]
  features: string[]
  github?: string
  demo?: string
  images: string[]
}

Project content should not be hard-coded directly into visual components.

Prefer:

Project Data
      ↓
ProjectCard
      ↓
Project Page
      ↓
CaseStudy Components
12. Project Routing

Use stable project slugs:

nexora-ai
vulnerability-detection
campusbarter

Routes should be:

/projects/nexora-ai
/projects/vulnerability-detection
/projects/campusbarter

Do not use arbitrary numeric IDs.

13. Component Architecture

Components should follow three levels.

Level 1 — Primitives

Small reusable components:

Button
Badge
Container
SectionHeading
Icon
Link
Level 2 — Composed Components
ProjectCard
TechGroup
ProjectMeta
SocialLinks
ArchitectureDiagram
Level 3 — Page Sections
Hero
About
TechStack
Projects
Contact
CaseStudy

Avoid putting large amounts of page logic inside primitive components.

14. Server vs Client Components

Default:

Server Component

Use Client Components only for:

interactive animations
scroll interactions
3D
browser APIs
interactive diagrams
client-side state
complex user interactions

Example:

Hero.tsx
    ↓
Server Component


HeroBackground.tsx
    ↓
Client Component

Do not add "use client" to entire pages unnecessarily.

15. Animation Architecture

Animation should be isolated.

Static Content
      |
      v
Server Components
      |
      +---- Motion Components
      |
      +---- Interactive Components

Do not make every component animation-aware.

Animations should primarily use:

transform
opacity
scale
layout transitions

Avoid expensive continuous animations.

16. 3D Architecture

3D should be isolated from the rest of the application.

components/
└── visual/
    ├── HeroBackground.tsx
    ├── NetworkBackground.tsx
    └── SkillGraph.tsx

3D components must:

load only when required
avoid blocking page content
degrade gracefully
support mobile fallback
support reduced motion
avoid excessive GPU usage
17. 3D Fallback

If WebGL is unavailable:

WebGL Available
      ↓
3D Experience


WebGL Unavailable
      ↓
CSS / SVG Background

The portfolio must remain fully functional without WebGL.

18. Accessibility Architecture

Accessibility is a system-level requirement.

Every interactive component must support:

keyboard navigation
focus states
semantic elements
screen-reader labels
sufficient contrast

Interactive visuals must not contain essential information that cannot be accessed through normal text/content.

19. Responsive Architecture

Use mobile-first CSS.

Breakpoints should be centralized through Tailwind configuration/tokens.

Expected layouts:

Mobile
   ↓
Single column


Tablet
   ↓
Flexible 1–2 column layout


Desktop
   ↓
Asymmetric / multi-column layout

Do not simply shrink desktop components.

Recompose them where necessary.

20. Image Architecture

All project screenshots and visual assets should be optimized.

Prefer:

WebP
AVIF where appropriate
responsive image sizing
lazy loading
Next.js Image

Large project images should not be loaded before they are needed.

21. Font Architecture

Fonts should be loaded through the framework where possible.

Avoid unnecessary external font requests.

Use:

one primary font
one optional monospace font

Do not load multiple font families without justification.

22. SEO Architecture

Every important page must have:

title
description
canonical URL
Open Graph metadata
Twitter/X metadata where appropriate

Project pages should have project-specific metadata.

Example:

Nexora AI — Abdul Ghani
AI-powered cybersecurity learning and threat detection platform.
23. Structured Metadata

Where appropriate, add structured metadata for:

Person
WebSite
CreativeWork / SoftwareApplication
Projects

Do not add structured data that does not accurately describe the page.

24. Performance Requirements

Target:

fast first load
minimal JavaScript
optimized images
lazy-loaded visuals
no unnecessary dependencies
minimal blocking resources

Avoid:

autoplay background videos
oversized assets
unnecessary client rendering
unnecessary API calls
excessive WebGL
excessive animation libraries
25. Loading Strategy

The page should render meaningful content before decorative effects.

Priority:

1. HTML / text
2. Navigation
3. Hero content
4. Project content
5. Images
6. Animation
7. 3D / decorative effects

Decorative effects must never block primary content.

26. Error Handling

The application should include:

app/not-found.tsx

and appropriate error boundaries where necessary.

Interactive visual failures should not break the entire page.

If a 3D component fails:

3D failure
    ↓
Fallback visual
    ↓
Content remains usable
27. Security

The portfolio should avoid unnecessary security complexity.

Do not expose:

API keys
private repository tokens
secrets
personal credentials

Use environment variables only when external services actually require them.

Never commit:

.env
.env.local
API keys
private tokens
credentials
28. External Services

External services should be minimized.

Allowed where justified:

Vercel
GitHub
Analytics provider if required
Form/email provider if required

Do not add external APIs simply to make the portfolio appear more advanced.

29. Contact Architecture

Initial contact should prefer direct links:

Email
GitHub
LinkedIn

A contact form should only be added if there is a clear requirement.

If a form is added later, use a lightweight serverless/API solution rather than building a dedicated backend.

30. Analytics

Analytics are optional.

If analytics are introduced:

use a privacy-conscious solution
avoid invasive tracking
avoid unnecessary scripts
document the integration

No analytics should be implemented solely for vanity metrics.

31. Testing Strategy

Testing should cover:

Functional
navigation
project routes
external links
buttons
responsive behavior
Accessibility
keyboard navigation
focus states
contrast
reduced motion
semantic structure
Visual
desktop
tablet
mobile
project pages
3D fallback
Performance

Check:

bundle size
image sizes
unnecessary client components
animation performance
WebGL performance
32. Browser Testing

Test at minimum:

Chrome
Firefox
Safari
Edge

Mobile testing should include:

iOS Safari
Android Chrome

The exact browser matrix may be reduced if testing resources are limited.

33. Git Workflow

Use:

main

for stable code.

Feature development should preferably use branches:

feature/hero
feature/projects
feature/case-study
feature/3d-background

Use meaningful commits:

feat: add hero section
feat: add project case studies
feat: add interactive architecture
fix: improve mobile navigation
perf: optimize hero visual

Avoid meaningless commits such as:

update
changes
final
final-final
test
34. Agent Development Flow

AI agents must follow this sequence:

PRD
 ↓
DESIGN
 ↓
ARCHITECTURE
 ↓
CONTENT
 ↓
ROADMAP
 ↓
Implementation
 ↓
Testing
 ↓
Review

Agents must not skip directly from an idea to implementation when the documentation already defines the requirement.

35. Agent Responsibilities
GPT

Responsible for:

product reasoning
UX decisions
requirements
critique
prioritization
reviewing major decisions
Stitch

Responsible for:

visual exploration
UI concepts
visual hierarchy
interaction exploration
design direction

Stitch must follow:

PRD.md
DESIGN.md
CONTENT.md
Antigravity

Responsible for:

implementation orchestration
browser testing
technical investigation
QA
integration verification
Claude Code

Responsible for:

implementation
refactoring
debugging
testing
technical execution

Claude Code must follow:

PRD.md
DESIGN.md
ARCHITECTURE.md
CONTENT.md
CLAUDE.md
AGENTS.md
36. Agent Handoff

Agents must leave the repository in a state that another agent can understand.

When making significant changes:

Inspect existing code.
Read relevant documentation.
Explain the intended change.
Implement the change.
Test the change.
Verify no unrelated functionality was broken.
Update documentation if architecture changed.
Commit the work.
37. No Architecture Drift

Implementation must not silently introduce:

new frameworks
databases
backend services
authentication
unnecessary libraries
major architectural patterns

If a new technology becomes necessary:

Identify requirement
       ↓
Explain technical reason
       ↓
Evaluate simpler alternatives
       ↓
Update ARCHITECTURE.md
       ↓
Implement
38. Dependency Rules

Before adding a dependency, ask:

Can this be implemented with existing tools?
Does it solve a real requirement?
Is it actively maintained?
Does its bundle size justify its value?
Does it introduce unnecessary complexity?

If the answer is unclear, do not add it.

39. Deployment Architecture

Production:

GitHub
   ↓
Vercel
   ↓
Next.js
   ↓
Static / Server-rendered Portfolio

Preview deployments:

Feature Branch
      ↓
GitHub
      ↓
Vercel Preview

Production deployment should happen from the stable branch.

40. Environment Strategy

Local:

.env.local

Production:

Vercel Environment Variables

No secret should exist in source code.

If no environment variables are required, the portfolio should remain configuration-free.

41. Scalability

The architecture should support future additions such as:

additional projects
blog
project filters
downloadable resources
contact form
analytics
interactive technical visualizations

However, future possibilities must not justify unnecessary infrastructure today.

42. Architecture Decision Rule

When choosing between:

Simple
vs
Complex

choose the simplest architecture that satisfies the actual requirement.

When choosing between:

Static
vs
Dynamic

prefer static unless dynamic behavior provides meaningful value.

When choosing between:

CSS/SVG
vs
JavaScript/WebGL

prefer CSS/SVG unless JavaScript/WebGL provides a meaningful experience.

43. Final Architecture

The intended production architecture is:

                    USER
                      |
                      v
               Next.js App Router
                      |
          +-----------+-----------+
          |                       |
          v                       v
   Server Components       Client Components
          |                       |
          |               +-------+-------+
          |               |               |
          |             Motion        Three.js
          |               |               |
          +---------------+---------------+
                          |
                          v
                   Content Layer
                          |
                          v
                    Typed Data
                          |
                          v
                       Vercel
                          |
                          v
                       GitHub

No database.

No custom backend.

No authentication.

No unnecessary API layer.

The portfolio should remain a fast, content-driven Next.js application with selective interactive experiences.

44. Final Principle

The architecture exists to support the portfolio.

The portfolio does not exist to demonstrate the architecture.

Do not add technology simply because it looks impressive.

Build the simplest system capable of delivering an exceptional experience.
