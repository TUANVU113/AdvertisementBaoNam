---
name: Industrial Excellence System
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#4d4732'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#7e775f'
  outline-variant: '#d0c6ab'
  surface-tint: '#705d00'
  primary: '#705d00'
  on-primary: '#ffffff'
  primary-container: '#ffd700'
  on-primary-container: '#705e00'
  inverse-primary: '#e9c400'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#5d5f5f'
  on-tertiary: '#ffffff'
  tertiary-container: '#dadada'
  on-tertiary-container: '#5e5f5f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe16d'
  primary-fixed-dim: '#e9c400'
  on-primary-fixed: '#221b00'
  on-primary-fixed-variant: '#544600'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Be Vietnam Pro
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  title-md:
    fontFamily: Be Vietnam Pro
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-margin: 16px
  gutter: 12px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-padding: 48px
---

## Brand & Style

The design system is engineered for the intersection of advertising and construction—two industries that value precision, visibility, and structural integrity. The brand personality is authoritative and reliable, utilizing a high-contrast palette to signify safety and professional service.

The visual style is **Corporate / Modern** with a focus on **High-Contrast** elements. It prioritizes clarity and rapid information retrieval. The aesthetic avoids unnecessary ornamentation in favor of bold typography and a structured grid, evoking the feeling of a well-organized construction site or a high-impact billboard. The UI should feel substantial, dependable, and efficient.

## Colors

This design system uses a high-visibility primary yellow paired with deep blacks and cool grays to create a professional "work-site" aesthetic.

- **Primary (#FFD700):** A vibrant "Caution Yellow." Used for calls to action, active navigation states, and highlighting critical services. 
- **Secondary (#1A1A1A):** A near-black for headings and primary backgrounds to ensure maximum contrast and legibility.
- **Tertiary (#F5F5F5):** A soft off-white/gray used for section backgrounds and surface containers to provide breathing room without the starkness of pure white.
- **Neutral (#666666):** Used for body copy and auxiliary information to maintain a clear hierarchy.

## Typography

The typography utilizes **Be Vietnam Pro** to provide a contemporary, approachable yet professional feel that excels in both large-scale "billboard" headings and dense technical specifications.

Headlines are bold and tight, designed to mimic the impact of signage. Body text is prioritized for readability with generous line heights. Labels utilize uppercase styling for a more technical, industrial appearance when identifying categories or status indicators.

## Layout & Spacing

The layout follows a **Fluid Grid** model with strict adherence to an 8px base unit. 

- **Mobile:** A 4-column grid with 16px side margins and 12px gutters. Content should vertically stack to ensure readability of product details.
- **Desktop:** A 12-column grid with a max-width of 1280px. 
- **Spacing Philosophy:** Use "stack" spacing for vertical rhythm within components. Large "section-padding" (48px+) is used to clearly separate different services or product categories, preventing the UI from feeling cluttered despite the bold colors and fonts.

## Elevation & Depth

The design system employs **Tonal Layers** and **Low-Contrast Outlines** to define hierarchy, avoiding heavy shadows to keep the interface looking "flat" and modern, similar to technical drawings.

- **Level 0:** Background surfaces in Tertiary Gray.
- **Level 1:** Cards and input fields in White, with a 1px border (#E0E0E0).
- **Level 2:** Modals and floating action buttons (FABs) use a subtle, highly diffused shadow (0px 4px 20px rgba(0,0,0,0.08)) to indicate interactivity without breaking the clean aesthetic.
- **Interaction:** Hover states on interactive elements should shift the background color slightly or increase border weight rather than adding depth.

## Shapes

The shape language is **Rounded**, striking a balance between the hard angles of construction and the user-friendly nature of modern service platforms. 

- **Standard Elements:** 0.5rem (8px) corner radius for cards, buttons, and inputs.
- **Soft Elements (rounded-lg):** 1rem (16px) for larger containers and featured image blocks.
- **Circular Elements:** Pill-shaped rounding is reserved exclusively for tags/chips and specific floating navigation items (e.g., the Hotline button).

## Components

- **Buttons:** Primary buttons use the Primary Yellow background with Black text. Secondary buttons use a white background with a 2px black border. Both use a "Pill" or "Rounded" shape to stand out against the rectangular grid.
- **Chips/Filters:** Used for category navigation. Active states are Primary Yellow; inactive states are light gray with thin borders.
- **Cards:** Product cards feature a full-bleed image at the top, followed by bold titles and a "details" button. The card itself should have a subtle 1px border.
- **Input Fields:** Minimalist design with a 1px bottom border that thickens and turns Primary Yellow on focus.
- **Bottom Navigation:** A dedicated area for mobile, featuring high-contrast icons and labels. The central action (e.g., "Request Quote") is often emphasized with a circular background or a unique color treatment.
- **Call-to-Action (Hotline):** Always visible, utilizing the Primary Yellow to ensure users can immediately find the contact point.