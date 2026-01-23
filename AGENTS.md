# 🤖 AGENTS.md - Context & Intelligence

**Purpose:** This document provides context for AI Agents, Developers, and Stakeholders to understand "what we are talking about" regarding **Platanito Solutions**.

## 🏢 Who is Platanito Solutions?

Platanito Solutions is a technology agency that bridges the gap between complex technical challenges and elegant user experiences. We don't just write code; we build **solutions**.

### Core Pillars:
1.  **Software Development:** Custom CRMs, scalable platforms, and robust backend systems.
2.  **Mobile & Web Apps:** Cross-platform experiences (React Native, Modern Web) that feel native and fluid.
3.  **AI Integration:** Leveraging LLMs and Machine Learning to make businesses smarter.
4.  **UI/UX Design:** Aesthetic-first approach using premium color palettes (Pastels, Glassmorphism) and micro-interactions.

## 🧠 For AI Agents (Context Injection)

If you are an AI assistant working on this codebase, here is your "System Prompt" context:

- **Design Philosophy:** "Premium, Pastel, Dynamic." Avoid generic Bootstrap-like styles. Use the defined `tailwind.config.js` colors (pastel-cream, pastel-peach, etc.).
- **Code Style:** Functional React components. Clean architecture. Separation of concerns (Animations separate from Logic).
- **Animation Standard:** Use GSAP for complex scroll-based animations (like the "Apple Zoom" effect). Use CSS transitions for simple hover states.
- **Key Files:**
    - `src/App.jsx`: Main entry, orchestrates sections.
    - `src/animations/gsapConfig.js`: Central GSAP setup.
    - `src/components/sections/Services.jsx`: Key service showcase (recently fixed).

## 🎯 Current Objectives

The goal of this repository is to convert visitors into leads by demonstrating technical competence through the landing page itself. The code *is* the portfolio.
