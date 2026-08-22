# Portfolio Content

This file contains the factual personal content used by the portfolio.

AI agents MUST NOT invent information in this file.

If information is missing, use:

`[NEEDS INPUT]`

Do not fabricate it.

---

# 1. Personal Identity

## Name

Abdul Ghani

## Professional Title

AI & Data Science Student

## Location

Mumbai, India

## Short Introduction

AI & Data Science Student building software across AI/ML and full-stack development.

I learn by building practical systems—from AI-powered cybersecurity platforms to web applications—while developing deeper skills in machine learning and software engineering.

## Long Biography

I am a B.Tech Artificial Intelligence & Data Science student at Rizvi College of Engineering, currently focused on building practical software while strengthening my foundations in AI and machine learning.

I learn primarily through hands-on development. My projects span AI-powered cybersecurity, backend systems, full-stack applications, security tooling, and modern web interfaces.

Through these projects, I have explored technologies ranging from Python and FastAPI to React, Spring Boot, databases, APIs, AI services, browser extensions, and mobile development.

Currently, I am developing deeper skills in AI/ML while continuing to strengthen my software engineering, backend development, and system design foundations.

My approach is simple: learn something, build with it, understand what breaks, and improve.

---

# 2. Hero

## Primary Statement

Building software across AI/ML and full-stack development.

## Supporting Statement

AI & Data Science student learning by building practical systems across AI-powered applications, cybersecurity, backend engineering, and modern web development.

## Primary CTA

Explore Projects

## Secondary CTA

View GitHub

## Availability

[NEEDS INPUT]

---

# 3. About

I am an AI & Data Science student who prefers learning through building rather than only studying theory.

My work currently sits across three areas:

- Artificial Intelligence & Machine Learning
- Software & Full-Stack Development
- Cybersecurity & Security Applications

I have worked on projects ranging from multi-platform AI cybersecurity systems to vulnerability-management interfaces and campus-focused applications.

I am currently deepening my understanding of AI/ML while improving my ability to design, build, integrate, and debug complete software systems.

I am particularly interested in:

- AI/ML applications
- AI-powered software
- Backend engineering
- Cybersecurity
- Full-stack development
- APIs and system integration
- AI agents
- Practical problem solving

---

# 4. Skills

## 01 — Programming & Core Development

- Python
- Java
- JavaScript
- HTML
- CSS

## 02 — Frontend & UI

- React
- Vite
- React Native
- Expo
- Responsive Web Development
- Three.js
- Cytoscape.js

## 03 — Backend & APIs

- FastAPI
- Spring Boot
- REST APIs
- Spring Data JPA
- Maven

## 04 — AI / ML

- AI/ML Fundamentals
- LLM Applications
- AI API Integration
- Google Gemini
- Groq
- AI-assisted development
- AI Agents
- Machine Learning — Currently Learning

## 05 — Databases & Storage

- PostgreSQL
- Supabase
- Redis
- H2 Database

## 06 — Security & Intelligence

- Cybersecurity Applications
- Vulnerability Management
- Threat Intelligence
- Phishing Detection Concepts
- VirusTotal Integration
- Google Safe Browsing
- Have I Been Pwned

## 07 — Platforms & Development Tools

- Git
- GitHub
- Docker
- Vercel
- Chrome Extensions
- Browser APIs
- Expo / EAS

## 08 — Currently Learning

- Machine Learning
- AI/ML fundamentals
- Data Science
- Backend engineering
- System design
- Advanced AI applications
- Agentic development

---

# 5. Projects

# Project 1 — Nexora AI

## Name

Nexora AI

## Project Type

Team Project · NeoFuture 2026 · S.E. Mini Project

## Description

Nexora AI is an AI-powered cybersecurity learning and threat-detection platform combining security education, threat analysis, and gamified learning across web, mobile, and browser environments.

The system brings together multiple client applications, backend microservices, AI processing, threat-intelligence sources, and data services into a unified cybersecurity platform.

## Problem

Cybersecurity education and threat detection are often separated across different tools.

Users may need one platform to learn security concepts, another to analyze suspicious content, and another to monitor threats.

Nexora explores a unified approach where security learning, threat analysis, and defensive guidance can exist within the same ecosystem.

## Solution

Nexora combines:

- Cybersecurity education
- Scenario-based phishing training
- Gamified learning
- Threat analysis
- AI-generated security content
- Threat-intelligence integrations
- Browser-based security workflows
- Mobile security analysis
- Security dashboards

## My Role

Developed the FastAPI backend microservices and API layer for the platform.

Worked across the web, mobile, and Chrome extension components alongside the backend.

Integrated external threat-intelligence feeds and AI/TTS services.

## Contributions

- FastAPI backend development
- Backend API design
- Microservice development
- API integration
- Threat-intelligence integration
- AI service integration
- TTS integration
- Cross-platform system integration
- Backend/frontend communication
- System architecture work

## Technologies

- Python
- FastAPI
- React
- Vite
- React Native
- Expo
- Chrome Extensions
- JavaScript
- Supabase
- PostgreSQL
- Redis
- Google Gemini
- Groq
- ElevenLabs
- VirusTotal
- Google Safe Browsing
- Have I Been Pwned

## Client Applications

### Web Dashboard

- Security learning dashboard
- XP and progression
- Streak tracking
- Badges
- Lessons
- Scenario training
- Leaderboards
- Security profile

### Mobile Application

- Secure analysis reports
- Suspicious-message analysis
- Threat classification
- Security recommendations
- Defensive guidance

### Browser Extension

- Browser-level security workflows
- Threat analysis
- Security interaction layer

## Core Features

### Scenario Training

Users classify messages as phishing or legitimate and receive:

- Correct/incorrect feedback
- XP
- Explanations
- Red flags
- Scenario progression
- AI-generated scenarios

### Gamified Learning

- XP
- Levels
- Streaks
- Badges
- Lessons
- Leaderboards
- Learning progression

### Security Analysis

- Threat classification
- Integrity/match scoring
- Message analysis
- Defensive recommendations
- Suspicious-link analysis

### Threat Detection

The system combines multiple detection and intelligence approaches including:

- Phish-IQ
- Rule-based heuristics
- VirusTotal
- Google Safe Browsing

## Architecture

```text
                    NEXORA AI
                        |
        +---------------+---------------+
        |               |               |
        v               v               v
   Web Dashboard    Mobile App     Browser Extension
        |               |               |
        +---------------+---------------+
                        |
                        v
                Backend / Microservices
                 +-------------+
                 |             |
                 v             v
            Edu Service    Scanner Service
                 |             |
                 +------+------+
                        |
                        v
                Processing / AI
          +-------------+-------------+
          |             |             |
       Groq LLM     Phish-IQ     Detection Engine
                                      |
                              +-------+-------+
                              |               |
                         VirusTotal     Safe Browsing

                        |
                        v
                  Data / Storage
                  +------------+
                  |            |
                Redis       Supabase
                              |
                         PostgreSQL
