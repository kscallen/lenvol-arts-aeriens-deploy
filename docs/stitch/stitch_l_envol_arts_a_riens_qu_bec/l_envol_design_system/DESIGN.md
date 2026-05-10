---
name: L'Envol Design System
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#d0cecd'
  on-tertiary: '#313030'
  tertiary-container: '#b5b2b2'
  on-tertiary-container: '#454545'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 84px
    fontWeight: '700'
    lineHeight: 92px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Sora
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.1em
  button-text:
    fontFamily: Sora
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  section-gap: 120px
  container-max: 1440px
---

## Brand & Style

This design system is built to capture the intersection of athletic discipline and theatrical grace. The brand personality is **Elite, Ethereal, and Empowering**. It speaks to the thrill of defying gravity while maintaining the professional rigor expected of a premier circus institution in Quebec City.

The visual direction follows a **High-Contrast Cinematic** style with **Glassmorphism** accents. By utilizing a deep, obsidian base paired with metallic gold, the UI mimics the atmosphere of a darkened theater where the spotlight is solely on the performer. Motion is central to the identity; layouts should feel fluid, like silk ribbons, using translucent layers to suggest the "airy" nature of the craft. The emotional response is one of aspiration—inviting students to "take flight" (L'Envol) within a safe, sophisticated environment.

## Colors

The palette is rooted in the "Stage & Spotlight" concept. 

- **Primary (Or Prestige):** #D4AF37. Used for calls to action, highlights, and indicating excellence. It should be treated as a luminous element against dark backgrounds.
- **Secondary (Pureté):** #FFFFFF. Used for high-readability body text and "airy" borders.
- **Tertiary (Obsidienne):** #121212. The primary surface color for containers and sections, providing a softer dark mode than pure black.
- **Neutral (Nuit):** #000000. Reserved for deep backgrounds and high-contrast immersive sections.

The color mode is strictly **Dark** to maintain the "Envol" (Flight) atmosphere, allowing gold accents to "glow" via subtle box-shadows and gradients.

## Typography

This design system employs a sophisticated typographic hierarchy that balances classical art with modern athleticism.

- **Playfair Display** is used for primary headlines and hero statements. Its high-contrast serifs evoke the elegance of circus tradition and French-Canadian cultural refinement.
- **Sora** serves as the "athletic" voice. Its geometric, technical feel is perfect for subheaders, navigation, and labels, grounding the elegance with professional precision.
- **Plus Jakarta Sans** provides a warm, highly legible base for body copy, ensuring that class descriptions and safety information are easily digestible.

All French text should respect traditional typesetting rules, specifically using non-breaking spaces before colons and exclamation marks.

## Layout & Spacing

The layout philosophy is **Fluid & Expansive**. Content must never feel cramped, reflecting the vast vertical space of an aerial arts studio.

- **Grid:** Use a 12-column fluid grid on desktop with generous 24px gutters. Elements should frequently span the full width of the viewport to create an immersive, cinematic experience.
- **Breathing Room:** Vertical rhythm is driven by large `section-gap` units (120px+). This "white space" (rendered in dark tones) is essential to convey the feeling of height and air.
- **Mobile Reflow:** On mobile devices, margins shrink to 20px, and complex grids collapse into a single-column stack. Hero imagery should maintain a 3:4 aspect ratio to emphasize verticality.

## Elevation & Depth

Hierarchy is achieved through **Luminous Layering** rather than traditional shadows.

1.  **Floor (Z-0):** The deep #000000 background, acting as the "void" or stage floor.
2.  **Surface (Z-1):** #121212 containers with subtle 1px borders in low-opacity gold (#D4AF37 at 20%).
3.  **Aerial (Z-2):** Glassmorphic cards using `backdrop-filter: blur(12px)` and a semi-transparent #FFFFFF at 5% opacity. This creates the illusion of floating elements.
4.  **Highlight (Z-3):** Active elements (buttons/chips) use an "Aura" effect—a soft outer glow in gold (#D4AF37) with a 20px spread and 30% opacity to simulate light hitting the apparatus.

## Shapes

The shape language combines the circular nature of aerial hoops and the fluid lines of silks. 

- **Primary Radius:** A default of 0.5rem (8px) is used for standard buttons and inputs to maintain a modern, professional look.
- **Large Radius:** Cards and hero containers use 1.5rem (24px) to soften the layout and make it feel more approachable and artistic.
- **Circular Elements:** Interactive icons and avatars should be fully rounded (pill/circle) to echo the geometry of circus apparatus.

## Components

### Buttons (Boutons)
- **Primary:** Solid #D4AF37 with dark #000000 text. Use `Sora` bold for the label. On hover, apply a 4px upward translation and an external gold glow.
- **Ghost:** Transparent background with a #FFFFFF border (1px). Softens the UI for secondary actions like "En savoir plus."

### Cards (Fiches de cours)
- Use the **Aerial** elevation tier. Backgrounds should be translucent with a subtle gradient from top-left (transparent) to bottom-right (#D4AF37 at 10%). 
- Typography inside cards uses `Sora` for titles and `Plus Jakarta Sans` for descriptions.

### Hero Section (Scène principale)
- Must feature a full-screen background video or high-fidelity image with a radial overlay (darkening the edges).
- Headline should be centered, utilizing **Playfair Display** in #FFFFFF with the primary CTA positioned 40px below the subtext.

### Inputs (Champs de saisie)
- Dark backgrounds (#000000) with a 1px border that transitions from #FFFFFF to #D4AF37 on focus.
- Labels are always `label-caps` for a structured, institutional feel.

### Interactive "Ribbon" Divider
- A custom component: a thin, 2px gold line that uses CSS animation to mimic a subtle "wave" motion, separating major content sections.