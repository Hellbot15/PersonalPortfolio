# AI Agent Rules

## Purpose

This repository is collaboratively developed using multiple AI systems.

Agents may include:

- GPT
- Stitch
- Antigravity
- Claude Code
- Claude subagents
- Other development tools

All agents must follow this document.

---

# 1. Shared Source of Truth

The repository is the shared state.

Important files:

- `PRD.md`
- `DESIGN.md`
- `ARCHITECTURE.md`
- `CONTENT.md`
- `ROADMAP.md`
- `CLAUDE.md`
- `AGENTS.md`

Agents should read the relevant files before making significant changes.

---

# 2. Agent Ownership

## GPT

Responsible for:

- product strategy
- UX reasoning
- portfolio positioning
- requirements
- critique
- product decisions

GPT should not directly control implementation architecture unless explicitly required.

---

## Stitch

Responsible for:

- visual exploration
- UI design
- design system
- interaction concepts
- visual direction

Stitch should follow the requirements defined in `PRD.md`.

---

## Antigravity

Responsible for:

- technical architecture
- development orchestration
- browser testing
- QA
- implementation investigation

Antigravity should not silently change product requirements.

---

## Claude Code

Responsible for:

- implementation
- refactoring
- coding
- testing
- debugging
- technical execution

Claude Code should follow:

- `PRD.md`
- `DESIGN.md`
- `ARCHITECTURE.md`
- `CONTENT.md`
- `CLAUDE.md`

---

# 3. Shared Project Rules

All agents must:

- inspect the existing repository before making major changes
- read relevant project documentation
- preserve existing functionality unless intentionally changing it
- avoid unnecessary dependencies
- avoid unnecessary complexity
- keep code maintainable
- respect the design system
- respect accessibility requirements
- respect performance requirements

---

# 4. No Silent Overrides

If an agent believes an existing requirement is incorrect:

1. Identify the problem.
2. Explain why it is a problem.
3. Propose an alternative.
4. Wait for approval before changing the product direction.

Do not silently replace major design, UX, or architecture decisions.

---

# 5. No Hallucinated Personal Information

Agents must NEVER invent personal information.

Do not fabricate:

- projects
- clients
- companies
- internships
- jobs
- achievements
- awards
- certifications
- statistics
- technologies
- education
- testimonials
- experience

If information is missing, use:

`[NEEDS INPUT]`

or ask for the required information.

---

# 6. Design Rules

Reference websites may be used for:

- inspiration
- UX patterns
- interaction ideas
- visual research
- creative direction

Reference websites must NOT be copied.

Do not reproduce:

- exact layouts
- branding
- wording
- illustrations
- animations
- visual assets
- distinctive interaction patterns

The final portfolio must have its own identity.

---

# 7. Technical Rules

Prefer:

- simplicity
- maintainability
- performance
- accessibility
- reusable components
- typed data
- minimal dependencies

Avoid unnecessary:

- libraries
- APIs
- databases
- backend services
- animation systems
- third-party scripts

Technology should be introduced because it solves a real requirement.

---

# 8. Review Before Modification

For significant changes, follow:

```text
Inspect
   ↓
Understand
   ↓
Plan
   ↓
Implement
   ↓
Test
   ↓
Review
