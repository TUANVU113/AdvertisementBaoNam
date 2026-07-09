---
name: Industrial Integrity
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#434652'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#747783'
  outline-variant: '#c3c6d4'
  surface-tint: '#305bb0'
  primary: '#003580'
  on-primary: '#ffffff'
  primary-container: '#1d4ca1'
  on-primary-container: '#aac2ff'
  inverse-primary: '#b0c6ff'
  secondary: '#785a00'
  on-secondary: '#ffffff'
  secondary-container: '#fdc009'
  on-secondary-container: '#6c5000'
  tertiary: '#21395f'
  on-tertiary: '#ffffff'
  tertiary-container: '#395077'
  on-tertiary-container: '#acc3f0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#b0c6ff'
  on-primary-fixed: '#001945'
  on-primary-fixed-variant: '#0c4297'
  secondary-fixed: '#ffdf9d'
  secondary-fixed-dim: '#f9bd02'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#5b4300'
  tertiary-fixed: '#d6e3ff'
  tertiary-fixed-dim: '#b0c7f5'
  on-tertiary-fixed: '#001b3e'
  on-tertiary-fixed-variant: '#30476e'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  h1:
    fontFamily: Work Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Work Sans
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Work Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-caps:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
  button:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
  max-width: 1280px
---

## Brand & Style

The design system is built on a foundation of "Industrial Integrity." It balances the high-visibility energy of the signage industry with the rock-solid reliability of the construction sector. The brand personality is authoritative yet accessible, utilizing a "Corporate Modern" aesthetic that favors structural clarity over decorative flourishes.

The visual language draws inspiration from architectural blueprints and safety wayfinding. It employs a grid-heavy layout, high-contrast color blocking, and a focus on legibility to evoke a sense of precision, safety, and professional excellence. The target audience—ranging from corporate developers to city planners—should feel they are in the hands of a disciplined, capable partner.

## Colors

The color palette is rooted in functional industrialism. 

- **Primary Blue (#1D4CA1):** Represents the "trust" factor. It is used for primary navigation, headers, and key branding moments.
- **Vibrant Yellow (#FFC20F):** Inspired by construction equipment and signage visibility. This is used sparingly as an accent color for call-to-action buttons, status indicators, and critical highlights.
- **Deep Navy (#0B264B):** Used for footer backgrounds, high-level headings, and deep textural elements to provide a sense of grounded permanence.
- **Neutral Grays & White:** Used to maintain a "Clean" and "Crisp" environment, ensuring the interface remains professional and modern rather than cluttered.

## Typography

This design system utilizes a dual-font strategy to balance character with utility. 

**Work Sans** is the structural backbone, used for headlines. Its slightly wider apertures and grounded weight evoke the stability of construction. For headlines, tight tracking and heavy weights are preferred to create a "bold" and "authoritative" feel.

**Inter** is used for all body copy and functional UI labels. It provides maximum legibility across all screen sizes and maintains a neutral, utilitarian tone that doesn't distract from the primary content or imagery. Use `label-caps` for sub-headings or category tags to reinforce the industrial "labeling" aesthetic.

## Layout & Spacing

The system employs a **Fixed Grid** model for desktop to ensure content remains structured and aligned with architectural precision. 

- **The Grid:** A 12-column grid with a 1280px max-width. 
- **Rhythm:** An 8px base unit drives all spacing. For vertical section separation, use `xl` (80px) to give the industrial photography room to breathe.
- **Sectioning:** Content should be divided into clear, full-width bands. Alternating background colors between White and Light Gray (#F2F2F2) is encouraged to define distinct services or project phases.

## Elevation & Depth

To maintain the "Clean & Industrial" feel, this design system avoids heavy shadows or complex gradients. 

- **Low-Contrast Outlines:** Surfaces are primarily defined by subtle 1px borders in Light Gray or by distinct color-blocked backgrounds.
- **Tonal Layering:** Depth is communicated through stacking colors (e.g., a white card on a Light Gray background) rather than physical shadows.
- **Functional Shadows:** A single, highly diffused "Ambient Shadow" (0px 4px 20px, 5% opacity) may be used exclusively for hover states on cards to indicate interactivity without breaking the flat, professional aesthetic.

## Shapes

The shape language is "Soft-Industrial." While sharp corners are common in construction, the UI uses a subtle 0.25rem (4px) corner radius to ensure the digital experience feels modern and premium. 

- **Standard Elements:** Buttons, input fields, and cards use the `Soft` (4px) radius.
- **Feature Elements:** Images and large container sections remain sharp (0px) to emphasize the raw, architectural nature of the brand's work.

## Components

### Buttons
- **Primary:** Background in Primary Blue (#1D4CA1) with White text. Bold, uppercase, with a 4px corner radius.
- **Accent/CTA:** Background in Vibrant Yellow (#FFC20F) with Dark Navy (#0B264B) text. Used exclusively for "Get a Quote" or "Contact Us."
- **Ghost:** Transparent background with a 2px Primary Blue border. Used for secondary actions like "View Gallery."

### Input Fields
- Fields use a white background with a 1px border in #D1D1D1. On focus, the border thickens to 2px in Primary Blue. Labels are always positioned above the field in `label-caps` style.

### Cards
- Service and Project cards use a "Flat-Containment" style. They feature a full-bleed image at the top, followed by a padded section with a white background. No shadow is applied until the user hovers, at which point a subtle ambient shadow appears.

### Chips & Tags
- Used for project categories (e.g., "Steel Works," "LED Signage"). These use the Light Gray background with Dark Navy text and a `Soft` radius.

### Additional Components
- **Project Progress Bar:** A custom component using the Vibrant Yellow to show the status of ongoing construction projects.
- **Spec Sheet List:** A high-contrast list style with icons for technical specifications, using the Deep Navy for icons to ensure high visibility.