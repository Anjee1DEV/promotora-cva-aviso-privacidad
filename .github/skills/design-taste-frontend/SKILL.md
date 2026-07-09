---
name: design-taste-frontend
description: Anti-slop frontend skill for landing pages, portfolios, and redesigns. The agent reads the brief, infers the right design direction, and ships interfaces that do not look templated. Real design systems when applicable, audit-first on redesigns, strict pre-flight check.
---

# tasteskill: Anti-Slop Frontend Skill

> Landing pages, portfolios, and redesigns. Not dashboards, not data tables, not multi-step product UI.
> Every rule below is contextual. None of it fires automatically. First read the brief, then pull only what fits.

Key rules applied in this workspace:
- Read the brief, state a one-line "Design Read" before generating.
- Set 3 dials: DESIGN_VARIANCE, MOTION_INTENSITY, VISUAL_DENSITY.
- No AI-purple gradients, no centered-hero-over-dark-mesh default, no three-equal-cards default, no Inter-by-default, no generic glassmorphism, no infinite micro-animations everywhere.
- One accent color, locked across the whole page. One corner-radius scale.
- No em-dash (—) anywhere in copy. Use periods, commas, or regular hyphens.
- Real images only (no div-based fake screenshots). If none available, use clearly labeled placeholders.
- Buttons: WCAG AA contrast, no wrapped CTA labels, no duplicate CTA intent.
- Hero fits initial viewport: headline max 2 lines, subtext max 20 words.
- Respect prefers-reduced-motion for anything above MOTION_INTENSITY 3.
- Dark mode considered by default for consumer-facing pages (unless brief says otherwise).
- Avoid generic AI copy tells: "Acme", "John Doe", "Elevate/Seamless/Unleash", fake precise stats, decorative status dots, scroll cues, version-footer stamps.

Full reference (condensed for this repo): apply Sections 0-9 (brief inference, dials,
default architecture, typography/color/layout engineering directives, AI-tell bans,
em-dash ban) from the upstream Leonxlnx/taste-skill "design-taste-frontend" skill
(https://github.com/Leonxlnx/taste-skill) whenever building or redesigning pages
in this workspace.
