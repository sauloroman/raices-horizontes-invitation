---
name: Academic Excellence
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#424841'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#727971'
  outline-variant: '#c2c8bf'
  surface-tint: '#436648'
  primary: '#00200a'
  on-primary: '#ffffff'
  primary-container: '#13361c'
  on-primary-container: '#7aa07e'
  inverse-primary: '#a9d0ab'
  secondary: '#7f5704'
  on-secondary: '#ffffff'
  secondary-container: '#fdc66f'
  on-secondary-container: '#775000'
  tertiary: '#2a1601'
  on-tertiary: '#ffffff'
  tertiary-container: '#422a0f'
  on-tertiary-container: '#b4906d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c4edc6'
  primary-fixed-dim: '#a9d0ab'
  on-primary-fixed: '#00210a'
  on-primary-fixed-variant: '#2b4e32'
  secondary-fixed: '#ffddaf'
  secondary-fixed-dim: '#f4bd67'
  on-secondary-fixed: '#281800'
  on-secondary-fixed-variant: '#614000'
  tertiary-fixed: '#ffdcbc'
  tertiary-fixed-dim: '#e7bf99'
  on-tertiary-fixed: '#2b1701'
  on-tertiary-fixed-variant: '#5c4124'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-md:
    fontFamily: Source Serif 4
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Source Sans 3
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style

This design system is built for institutions of higher learning, research centers, and archival platforms where prestige, heritage, and intellectual rigor are paramount. The brand personality is authoritative yet welcoming, evocative of ivy-league libraries and graduation ceremonies. 

The aesthetic follows a **Modern Classic** style—a blend of high-end editorial layouts and contemporary functionalism. It prioritizes clarity and formal structure, using generous whitespace to allow deep colors and serif typography to signal quality. The emotional response should be one of "earned success," stability, and historical continuity.

## Colors

The palette is rooted in a traditional scholarly aesthetic, modernized through specific hex-code selections.

*   **Primary (Deep Green):** Used for brand identity, primary navigation, and high-level headers. It represents growth and institutional longevity.
*   **Secondary (Ochre/Gold):** Reserved for celebratory moments, call-to-action buttons, and "Honors" status indicators.
*   **Tertiary (Earthy Brown):** Utilized for secondary UI elements, subtle accents, and backgrounds for specialized sections to add warmth and depth.
*   **Neutral (Off-White):** The primary canvas color. It is softer than pure white, reducing eye strain and feeling more like premium archival paper.
*   **Structure (Charcoal):** Used for body text, heavy borders, and formal structural dividers to ensure high legibility and contrast.

## Typography

The typography strategy pairs the elegance of **Playfair Display** for headlines with the exceptional readability of **Source Serif 4** for long-form content. 

To maintain a professional hierarchy, **Source Sans 3** is introduced for functional labels, metadata, and interface controls. This san-serif inclusion ensures that data-heavy sections (like tables or dashboards) remain clean and legible without competing with the editorial feel of the headlines. High-level headings use slightly tighter letter-spacing for a more polished, "published" appearance.

## Layout & Spacing

The design system utilizes a **Fixed Grid** model for desktop to maintain an "encyclopedic" feel, centering the content within a 1280px container. 

*   **Grid:** A 12-column grid system is used for desktop (64px margins), transitioning to a 4-column grid for mobile (16px margins).
*   **Rhythm:** Spacing follows a strict 8px baseline. Use 24px (3x) for standard component gaps and 48px-64px (6x-8x) for section vertical spacing to emphasize hierarchy and provide "breathing room."
*   **Reflow:** On tablet devices, the side margins contract, and tertiary content (sidebars) stacks below the primary body to maintain a single-column reading experience.

## Elevation & Depth

To align with the prestigious theme, this design system avoids heavy drop shadows. Instead, it employs **Tonal Layering** and **Fine Outlines**.

*   **Tonal Layers:** Elevation is signified by shifting background colors. A "raised" card will sit on an Off-White surface but may use a very thin 1px border in Earthy Brown or Charcoal at low opacity (10-15%).
*   **Paper Stacks:** For depth, use subtle 1px offsets of containers to mimic the look of stacked physical documents.
*   **Glassmorphism:** Occasionally used for navigation overlays or modals, using a subtle backdrop blur to keep the background context visible without distracting from the primary task.

## Shapes

The shape language is conservative and disciplined. A **Soft (0.25rem)** corner radius is the standard for most components, providing a modern touch without appearing overly "bubbly" or casual. Large containers and cards may use `rounded-lg` (0.5rem) to soften the layout. Sharp corners (0px) are reserved exclusively for structural separators and table headers to reinforce a sense of grid-based order.

## Components

*   **Buttons:** Primary buttons use the Deep Green background with Off-White text. Secondary buttons use the Ochre color as a border with Deep Green text for a sophisticated "Honorary" feel.
*   **Chips/Tags:** Used for academic disciplines or status tags. These should use light tints of the Primary or Tertiary colors with high-contrast text.
*   **Cards:** Features a thin 1px border in #826343 (at 20% opacity). They should have no shadow unless hovered, where a very soft, diffused ambient shadow may appear.
*   **Input Fields:** Strictly rectangular with a subtle bottom-border focus state in Ochre. Use Source Sans 3 for placeholder and label text for maximum clarity.
*   **Lists:** Editorial style. Use Charcoal for bullet points or numbering to maintain a formal structure.
*   **Dividers:** Use thin, Charcoal or Brown lines (#DFDFDF to #826343 transition) to separate sections without breaking the visual flow.