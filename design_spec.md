# Design Spec — Win Air Cleaning

## Creative Direction

This site evokes the feeling of opening every window in a California home and letting the Pacific breeze rush through — bright, clean, immediately refreshing. The visual metaphor is a premium wellness clinic crossed with a California surf brand: spacious, sun-lit, health-focused, with enough personality to feel human and genuinely caring. Inspired by VoltAgent's warm containment border system, cards and sections feel structured yet light — defined by warm borders rather than heavy shadows, a technique that keeps every container visible without adding visual weight. The ideal customer lands on the page and in three seconds feels: "These people care about air quality the way I care about my family's health." Every design choice prioritizes airiness and gentle organic motion — circular motifs echo the swirling leaf logo, flowing wave paths replace hard grid lines, and wind particles drift upward like clean air rising. The red-blue duality from the logo becomes a visual coding system: warm red tones signal energy and heating, cool blue and teal tones signal freshness and cooling. This is not an industrial HVAC contractor's brochure; it is a clean-air wellness brand for health-conscious California homeowners.

## DO NOT Repeat (from history)

**Colors**: #e87f24 orange, #66b0d2 pool-blue, #6d386d purple — ClingPool; #0c0e13 near-black — ClingPool v2; #c011d2 magenta, #b84032 rust, #c18c5b bronze, #f5f0ff lavender — Unique Air Duct; #d6b328 gold, #217443 forest-green, #62c794 mint — Locksmith Luz; #341724 maroon, #223443 navy, #d04e14 ember, #f5f0e8 parchment — Soot & Spark; #C0392B red, #F7F4EF cream, #1f0d15 — Soot & Spark v2

**Fonts**: Space Grotesk, DM Sans — ClingPool; Barlow Condensed, Outfit — ClingPool v2; Syne, Plus Jakarta Sans — Unique Air Duct; Bebas Neue, Inter — Locksmith Luz; Oswald, Nunito Sans — Locksmith Luz v3; Teko, Jost — Soot & Spark; Fjalla One, Literata — Soot & Spark v2

**Typography style**: condensed all-caps heavy headlines (multiple builds); all-caps tracking-wider/wide (Locksmith, Soot & Spark); highlighted word badge (Soot & Spark); offset multi-line stagger (ClingPool); bronze hairline + uppercase label system (Unique Air Duct); section counter labels (Soot & Spark); section pre-label hairline rule system (Locksmith Luz v3)

**Hero**: Editorial Triptych — ClingPool; Night Dive split-panel — ClingPool v2; Thermal Scan radial halo — Unique Air Duct; Sunburst Fortress conic burst — Locksmith Luz; 4-Column Grid — Locksmith Luz v2; Fortress Command full-photo Ken Burns centered — Locksmith Luz v3; Triptych Command three panels — Soot & Spark; Masthead Forge editorial left+clipped right — Soot & Spark v2

**Nav**: transparent-sticky — ClingPool, Locksmith v3; dark-edge-bar — ClingPool v2; top-bar-split — Unique Air Duct; semi-transparent anchor bar — Locksmith; solid-dark-bar — Locksmith v2; solid-bar always navy — Soot & Spark; Red-Ledger always solid — Soot & Spark v2

**Color mood**: light — ClingPool, Unique Air Duct; dark — ClingPool v2, Locksmith Luz (multiple), Soot & Spark (both); vibrant — Locksmith Luz v3

**Tone**: warm-editorial, bold-dark, clinical-vibrant, civic-authority, bold-authority, fortress-authority, hearthstone-americana, civic-editorial

**Section patterns used**:
- Services: uniform-card-grid, alternating-rows, hover-reveal-grid, bento-grid, split-editorial-rows, accordion-spotlight, broken-register-grid
- Testimonials: carousel, masonry-wall, drag-carousel, review-card-grid, stacked-quotes-alternating-indent, stacked-quotes-swiper-fade
- FAQ: split-panel, expand-accordion, tab-categories, qa-alternating
- ProcessSteps: diagonal-steps, tab-switcher, pinned-scroll-reveal, icon-station-grid, vertical-timeline
- WhyUs: comparison-columns, horizontal-icon-strip, icon-feature-grid, stat-callout-columns, alternating-feature-rows
- BeforeAfter: drag-slider, hover-toggle
- About: image-text-split
- Areas: hover-fill-grid, card-grid-hover, badge-chip-grid, image-card-strip, map-inspired-layout
- CTA: centered-minimal, full-bleed-image-overlay, floating-card, split-panel, split-authority-panel, diagonal-cut

**Detail page patterns used**:
- Service page hero: glass-card-over-image, split-color-image
- Service content layout: tabbed-sections, editorial-columns
- Service features: horizontal-feature-strip, checklist-columns
- Service FAQ: large-initial-qa, accordion-sharp
- Service related areas: area-card-mini-grid, horizontal-scroll-strip
- Area page hero: area-image-strip, city-name-bold

**Signature elements**: 3-line staggered headline, image triptych, top info bar, ember strike bar above h2, sine-wave divider, radial pulse button, duct ring marks, bronze hairline + label, clip-path wipe reveal, ray burst badge, shield pulse CTA, gold strike divider, green-gold gradient left bar, gold shimmer button, section pre-label system, highlighted word badge, triptych panel rules, tab-identity icons, section counter labels, linen-weave texture, red ember divider, chimney stack watermark, star field texture, scroll progress filament

**Effects**: stagger-fade-up, ken-burns-zoom, hasSplitText, marquee-strip, scale-from-small, gradient-text, shimmer-sweep, hasMagneticButtons, hasFloatingBlobs, hasPinnedSteps, hasTiltCards, hasCursorFollower, hasScrollProgress, hasParallax, hasLenisScroll, hasSwiperCarousel, hasVanillaTilt, hasGsapTextReveal, hasScrollScrub, hasRippleClick, hasBeforeAfter, hasCursorSpotlight, clip-path wipe, noise-grain, text-blur-to-sharp, liquid-fill, border-draw, diagonal-stripe-bg, star-field-scatter, linen-weave, animated-SVG-wave, photo-bg-faded, photo-bg-dark-overlay, outlined-stroked-text

**Background treatments**: tripartite-panel, stripe-diagonal, linen-weave, noise-grain, diagonal-stripe-bg, star-field-scatter, photo-bg-faded

**Image-backed sections**: CTA-right-panel (Soot & Spark v1), photo-bg-faded Areas (Soot & Spark v2) — 2 of last 5 used photo-bg

**Brand inspirations used**: None recorded in previous builds.

---

## Brand Inspirations

### The Verge (design-references/theverge.md)
- Steal 1: Thin-weight whisper pre-labels → implemented in: every section heading system. Urbanist 300, 13px, uppercase, tracking-widest (2px letter-spacing) in secondary blue above every h2. Creates a "fashion-whisper vs. bold-shout" contrast with the 36–40px Urbanist 800 heading below — adapted from The Verge's 300-weight PolySans capitalized eyebrows.
- Steal 2: Color-as-elevation border hover → implemented in: Services cards and WhyUs cards. Instead of deepening box-shadows on hover, cards gain a colored 2px border (from neutral #D8DEE6 to primary #D93B4D or secondary #3578CC). No shadow change. Adapted from The Verge's 1px hazard-color borders as the sole depth signal.

### VoltAgent (design-references/voltagent.md)
- Steal 3: Warm containment border system → implemented in: every card and container site-wide. All cards use a 1px warm-toned border (#D8DEE6, a warm blue-gray) for definition. The border IS the containment, not a shadow. Adapted from VoltAgent's #3d3a39 charcoal border philosophy.
- Steal 4: Cinematic section spacing → implemented in: global section padding of 80px (py-20) between sections. Each section feels like a distinct chapter. Adapted from VoltAgent's "scroll-through-chapters" breathing room.

### Lamborghini (design-references/lamborghini.md)
- Steal 5: Surface color layering for depth → implemented in: alternating section backgrounds. Depth is communicated via background tone shifts (#FAFBFD → #F0F4F7 → #1A2538) rather than shadow stacking. Cards on surface read as elevated because they are literally a different shade. Adapted from Lamborghini's darkness-gradient layering, inverted for a light palette.
- Steal 6: One bold statement per section → implemented in: every section has exactly one dominant visual focus (one heading, one primary action, one visual center). Nothing competes. Adapted from Lamborghini's singular-statement philosophy.

**Cross-pollination:** The Verge's thin-weight whisper labels create hierarchy without weight, VoltAgent's warm containment borders provide structure without shadows, and Lamborghini's surface layering creates depth without effects — all combined on a bright California palette with flowing organic animations. The result is a site that feels clean, structured, and alive without relying on any heavy visual tricks.

---

## Color Palette — California Breeze
Logo-anchored: yes

- **Primary**: `#D93B4D` — Bright warm red from logo hue 353°. Clean, vibrant, clearly visible as a button on white. Carries the "warmth/energy" half of the red-blue brand duality.
- **Primary Light**: `#FDE8EB` — Very soft blush tint for hover states, light badges, and hero gradient anchor.
- **Primary Dark**: `#8C1F2E` — Deep wine red for CTA gradient backgrounds and dark accents.
- **Secondary**: `#3578CC` — Clean trustworthy blue from logo hue 216°. Carries the "freshness/cooling" half of the duality. Used for pre-labels, secondary CTAs, and blue-coded elements.
- **Accent**: `#2CBAB5` — Fresh teal-cyan evoking clean air. Not in any previous build. Used for interactive highlights, FAQ active states, and gradient-text in the hero.
- **Background**: `#FAFBFD` — Cool off-white. Saturation ~3%, nearly neutral. Main page canvas.
- **Surface**: `#F0F4F7` — Light cool gray for alternating section backgrounds. Visually distinct from background but still restful.
- **Surface Dark**: `#1A2538` — Deep navy-slate for dark sections. Muted (not pure black), faint blue hue for warmth.
- **Text Primary**: `#1A2538` — Matches surfaceDark. Maximum contrast on light backgrounds.
- **Text Secondary**: `#5A6B7D` — Cool slate gray for body text and descriptions.
- **Text Light**: `#FFFFFF` — White text on dark surfaces.
- **Border**: `#D8DEE6` — Warm blue-gray border. The VoltAgent-inspired "warm containment" color.

### Palette Visual Comfort Check
- Background (#FAFBFD): Near-white, saturation ~3% ✓
- Surface (#F0F4F7): Near-white, saturation ~12% ✓
- SurfaceDark (#1A2538): Deep navy, saturation muted, no vivid hue ✓
- Primary (#D93B4D) on white background: bright, legible, not muddy ✓
- No extreme brightness jumps between adjacent sections ✓

---

## Typography
- **Display**: Urbanist — weights 300, 400, 600, 800
- **Body**: Source Sans 3 — weights 400, 500, 600
- **Google Fonts URL**: `https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;600;800&family=Source+Sans+3:wght@400;500;600&display=swap`
- **Headings**: Urbanist 800 (font-extrabold), tracking-tight (-0.025em), leading-tight (1.1)
- **Section labels (small text above h2)**: Urbanist 300, 13px, uppercase, tracking-widest (2px letter-spacing), secondary blue (#3578CC). This is the "whisper" label — adapted from The Verge's thin-weight capitalized eyebrows. Creates a dramatic contrast with the bold h2 below.
- **Labels/buttons**: uppercase, Urbanist 600, tracking-wide (0.05em)

---

## Hero — Atmosphere Hero

A full-viewport bright hero built on a gradient-mesh background: three overlapping radial gradients — a very soft blush (#FDE8EB) at 50% size anchored at top-left 25%, a very soft sky-blue (#E4ECF7) at 40% size anchored at bottom-right 80%, and the base canvas (#FAFBFD) filling the center. Wind particles (floating-dust type: 80 particles, 1–2px diameter, speed 0.4, upward drift, no connecting lines, accent teal color at 30% opacity) drift slowly across the background, evoking rising clean air.

The headline is centered horizontally and vertically offset (top 40% of viewport). Urbanist 800, 68px on desktop / 40px on mobile, #1A2538 dark text. The words "Clean Air" are rendered in gradient-text (background: linear-gradient(135deg, #3578CC, #2CBAB5); -webkit-background-clip: text; color: transparent). Below the headline: one line of body text in Source Sans 3 400, 18px, #5A6B7D, max-width 520px, centered.

Below the body text: a large pill CTA button — rounded-full, #D93B4D fill, white text, Urbanist 600 uppercase, 56px tall, 200px wide, magnetic hover (60px radius, 8px max attraction). A secondary outlined pill sits to its right — transparent bg, 1px #3578CC border, #3578CC text, same height.

At the bottom of the hero viewport (bottom 15%): a horizontal row of 4 circular stat badges spaced evenly. Each badge is an 80px-diameter circle with a 2px SVG ring border (alternating primary red and secondary blue). Inside: a large stat number in Urbanist 800, 28px, textPrimary color. Below each circle: a small label in Urbanist 300, 11px, uppercase, textSecondary. Example stats: "2000+" / "Jobs Done", "15" / "Years Exp", "4.9★" / "Google Rating", "24/7" / "Emergency".

Decorative: two sets of concentric decorative rings (3 thin SVG circles, primary red at 8% opacity) positioned at top-right and bottom-left of the hero, 300px diameter, purely atmospheric.

- **Background**: gradient-mesh on #FAFBFD with wind particles
- **Headline**: Urbanist 800, 68px/40px, centered, #1A2538, gradient-text on "Clean Air"
- **CTA**: rounded-full pill, #D93B4D fill, 56px tall, magnetic hover + outlined secondary blue pill
- **Extras**: 4 circular stat badges with animated ring draw, decorative concentric rings
- **Mobile**: Stacked vertically. Headline 40px. Stat badges in 2×2 grid. CTAs stack. Particles fewer (40 count).

---

## Navigation — Breeze Glass Nav

A floating glassmorphism navigation bar positioned 16px below the top of the viewport, centered horizontally, with rounded-2xl corners (16px radius). Width: max-w-6xl (72rem), with 16px horizontal margin on each side. Background: rgba(255, 255, 255, 0.80) with backdrop-filter: blur(16px), creating a frosted glass effect. A subtle 1px border in rgba(216, 222, 230, 0.4).

- **Desktop**: Logo left (company name in Urbanist 600, 20px, #1A2538). Center: navigation links in Urbanist 500, 15px, #5A6B7D, with an animated underline sweep in primary red on hover (scaleX 0→1, transform-origin left, 200ms ease-out). Right: a rounded-full red pill CTA ("Get a Quote") — #D93B4D bg, white text, Urbanist 600, 14px uppercase.
- **Scroll behavior**: At 80px scroll, nav translates to top: 0 (flush with viewport top), corners remain 16px radius, background opacity increases to 0.92, and a 1px bottom border in primaryLight (#FDE8EB) appears. Smooth 300ms transition.
- **Mobile**: Hamburger icon (3 horizontal lines, #1A2538) replaces links. Tap opens a full-screen white overlay sliding down from top. Links stack centered: Urbanist 600, 24px, #1A2538, with small circular accent dots (8px, alternating red/blue) to the left of each link. Close button: a 48px circular X in the top-right. CTA at bottom of overlay: full-width red pill.

---

## Accent / Signature Elements

1. **Circular Ring Motif**: Decorative concentric circles (2–3 thin SVG rings, stroke-only, primary red #D93B4D and secondary blue #3578CC at 8–12% opacity) appear in the corners of Hero (300px top-right), Services (180px bottom-left), and CTA (200px top-left). Each set is a different size. The rings are static — they add depth and echo the logo's circular leaf composition without competing with content.

2. **Thin-Weight Whisper Pre-Labels**: Above every section h2, a small label in Urbanist 300, 13px, uppercase, letter-spacing 2px, in secondary blue (#3578CC). Content examples: "OUR SERVICES", "WHY CHOOSE US", "CLIENT STORIES". This label is the quietest element in the section — the dramatic weight contrast with the bold h2 below is the visual fingerprint of this site. Adapted from The Verge's fashion-whisper 300-weight capitalized eyebrows.

3. **Flowing Wave Dividers**: Instead of flat horizontal rules, SVG wave paths (a single sine-wave curve, stroke 1.5px, primary red or secondary blue at 15% opacity) create organic transitions between select sections (between Services and WhyUs, between ProcessSteps and BeforeAfter). The wave gently oscillates via CSS keyframe animation (translateY ±2px, 6s ease-in-out infinite). On mobile, the amplitude reduces to ±1px.

4. **Pill CTA Liquid Fill Hover**: Primary CTA buttons use a radial liquid-fill hover effect — a ::before pseudo-element with the primaryDark (#8C1F2E) color expands radially from the cursor's entry point, filling the button via a scale transform from 0 to 1.5 over 280ms ease-out. The text color stays white throughout. This creates an organic, flowing hover that matches the brand's "flowing interaction style."

5. **Animated Stat Ring Borders**: In the StatsBar, each stat's circular SVG ring border animates on viewport entry — the stroke draws itself clockwise from 12 o'clock using GSAP stroke-dashoffset (full dashoffset → 0, 800ms ease-out, staggered 120ms per stat). Creates a sense of completion and progress.

---

## Section Specifications

### 1. Hero — Atmosphere Hero
[Described in full above]

### 2. StatsBar — Circular Badge Bar
- **Component pattern**: circular-badge-bar — 4 stat items displayed as circular badges echoing the logo's circular composition. Each badge is a self-contained circle with an animated ring border, a large number, and a micro-label. No cards, no rows — just floating circles on a dark strip. Fits this business because circular stat badges reinforce the "air flow / duct ring" visual language.
- **Background**: solid-color #1A2538 (surfaceDark navy)
- **Layout**: horizontal row, gap-12, justify-center, max-w-5xl centered. Each circle: 96px diameter on desktop, 72px on mobile (2×2 grid on mobile). py-16 section padding (tighter than other sections — StatsBar is a visual bridge, not a content section).
- **Typography**: Number: Urbanist 800, 28px, #2CBAB5 accent teal. Label: Urbanist 300, 11px, uppercase, tracking-widest, #93A3B8 muted.
- **One item anatomy**: 96px circle with 2px SVG ring border (alternating primary red and secondary blue per item). Inside: number centered vertically. Label 8px below circle, centered. No fill background on the circle — it's ring-only against the dark bg.
- **Interaction model**: Hover on a stat circle: ring glows (box-shadow 0 0 12px rgba(44, 186, 181, 0.3) in accent teal), number brightens to #FFFFFF, 200ms ease-out.
- **Animation model**: On viewport entry — each circle's SVG ring draws clockwise (GSAP stroke-dashoffset full→0, 800ms ease-out, staggered 120ms per circle starting left). Numbers count up from 0 to final value (GSAP tween, ease-out, 1400ms, triggers 200ms after ring starts drawing).
- **Unique element**: Animated ring-draw entrance. No other section in any previous build has circular SVG ring animations on stat items.

### 3. Services — Breeze Showcase Carousel
- **Component pattern**: breeze-showcase-carousel — A Swiper.js carousel of portrait-oriented service cards. Desktop shows 2.3 cards (implying more to scroll). Touch momentum physics, custom pill-shaped pagination dots in primary red. requiresClientComponent: true. Fits this business because HVAC services are best browsed visually — the carousel invites exploration.
- **Background**: #F0F4F7 (surface) + dot-grid pattern (repeating radial-gradient 2px dots at 24px intervals, #1A2538 at 3% opacity). The dot-grid adds a subtle technical texture that suggests ductwork grids.
- **Layout**: Swiper container max-w-7xl centered. Each card: 340px wide × 480px tall (portrait). Card gap: 24px. Swiper FreeMode enabled for drag momentum. Pagination dots below: pill-shaped (#D93B4D fill, 8px × 24px active, 8px circle inactive). py-20 section padding.
- **Typography**: Section pre-label: "OUR SERVICES" Urbanist 300 13px uppercase tracking-widest #3578CC. Section h2: "Breathe Easier Today" Urbanist 800 40px #1A2538 text-center.
- **One card anatomy**: 16px border-radius (rounded-2xl). 1px #D8DEE6 containment border (VoltAgent warm border). Top 60%: service image, object-cover, overflow hidden with rounded-t-2xl. Bottom 40%: 24px padding. Service icon badge: 44px circle, white bg, 2px #D93B4D border, positioned absolute bottom-left of image area overlapping the text area by 22px. Service name: Urbanist 600, 20px, #1A2538. Description: Source Sans 3 400, 15px, #5A6B7D, 2 lines max. "Learn More →" link: Urbanist 500, 14px, #D93B4D, underline-sweep hover.
- **Interaction model**: Card hover: translateY(-4px) 300ms ease-out + border transitions from 1px #D8DEE6 to 2px #D93B4D 250ms + image scales to 1.05 over 400ms ease-out + icon badge scales to 1.1 over 200ms. This is color-as-elevation (The Verge steal) — no shadow change, border color IS the elevation signal.
- **Animation model**: Section heading: GSAP text split by word, each word enters translateY(40px)→0 + opacity 0→1, staggered 60ms, ease-out 600ms, triggered on scroll entry. Cards: GSAP stagger — each card enters opacity 0→1 + translateX(30px)→0, staggered 100ms apart, ease-out 500ms.
- **Unique element**: Portrait-oriented Swiper carousel with momentum physics and dot-grid background texture. No previous build used portrait service cards or a Swiper carousel for services.

### 4. WhyUs — Breathing Icon Cards
- **Component pattern**: breathing-icon-cards — A 2×2 grid of large cards, each featuring a circular icon at top-center, a bold title, and a brief description. Cards "breathe" on hover with icon scaling and border color transitions. Fits this business because the 4 key differentiators (certified, eco-friendly, fast response, guaranteed) are best communicated as distinct, equal-weight cards with clear icons.
- **Background**: solid-color #FAFBFD (background white)
- **Layout**: 2×2 grid, gap-8, max-w-4xl centered. Each card: equal size, min-height 240px. On mobile: single column stack. py-20 section padding.
- **Typography**: Section pre-label: "WHY WIN AIR" Urbanist 300 13px uppercase tracking-widest #3578CC. Section h2: "The Clean Air Difference" Urbanist 800 36px #1A2538 text-center. Card title: Urbanist 600, 20px, #1A2538. Card description: Source Sans 3 400, 15px, #5A6B7D, 2 lines.
- **One card anatomy**: 16px border-radius. 1px #D8DEE6 containment border. 32px padding. Top: circular icon container (56px diameter, #F0F4F7 bg fill, 2px #D8DEE6 border) centered. Icon inside: 28px, #3578CC (secondary blue). Below: 16px gap → title → 8px gap → description. All text center-aligned.
- **Interaction model**: Card hover: icon circle scales 1.15 over 250ms ease-out + icon circle border transitions from #D8DEE6 to #3578CC + card border transitions from 1px #D8DEE6 to 2px #3578CC + card background shifts to #F0F4F7 over 250ms. Color-as-elevation, no shadow change.
- **Animation model**: Cards enter via scale-from-small — scale(0.9)→1.0 with spring easing (cubic-bezier(0.34, 1.56, 0.64, 1)), staggered 100ms per card, triggered by GSAP ScrollTrigger on viewport entry. Section heading: word split stagger 60ms.
- **Unique element**: Circular icon containers that scale and recolor on hover — the icon "breathes" bigger. No previous build used this specific interaction pattern.

### 5. Testimonials — Ticker Marquee
- **Component pattern**: ticker-marquee — Two horizontal rows of testimonial chips scrolling in opposite directions at constant speed, infinite loop, pause on hover. Each chip is a pill-shaped card. Fits this business because it conveys volume of satisfied customers — many voices scrolling past creates social proof through abundance.
- **Background**: solid-color #1A2538 (surfaceDark navy)
- **Layout**: Full-width, overflow hidden. Two rows with 16px vertical gap. Each row: infinite horizontal strip of pill-cards. Top row scrolls right at 40s duration. Bottom row scrolls left at 45s duration (slight speed difference prevents mechanical feel). py-20 section padding.
- **Typography**: Section pre-label: "CLIENT STORIES" Urbanist 300 13px uppercase tracking-widest #2CBAB5 (accent teal on dark bg). Section h2: "Trusted by California Homeowners" Urbanist 800 36px #FFFFFF text-center mb-12. Chip: 5-star rating in Urbanist 600 14px #2CBAB5. Quote excerpt: Source Sans 3 400 15px #FFFFFF, 2 lines max-width 280px. Client name: Urbanist 500 13px #93A3B8.
- **One chip anatomy**: Pill-shaped (rounded-full, approx 320px × 100px). Background: rgba(255, 255, 255, 0.06) (barely visible frosted panel on dark). 1px border rgba(255, 255, 255, 0.08). 20px padding. Left: 5 small star icons in accent teal. Center: quote excerpt. Right: client name. Internally laid out as a horizontal strip.
- **Interaction model**: Entire marquee pauses on hover (CSS animation-play-state: paused). Individual chip hover: background brightens to rgba(255, 255, 255, 0.12), border brightens to rgba(255, 255, 255, 0.15), 200ms ease-out.
- **Animation model**: CSS @keyframes marquee: translateX(0) → translateX(-50%) infinite linear. Doubled content for seamless loop. On mobile: single row only, scrolling right, 30s.
- **Unique element**: Two-row opposite-direction testimonial ticker. No previous build used this pattern.

### 6. ProcessSteps — Flowing Step Wave
- **Component pattern**: flowing-step-wave — 4 process steps arranged along a flowing sine-wave SVG path. Each step is a circle with a large step number, connected by the wave path. Step details sit below each circle. The wave path draws itself on scroll. Fits this business because the HVAC cleaning process is sequential and the flowing wave echoes the "air flow" metaphor.
- **Background**: solid-color #F0F4F7 (surface)
- **Layout**: Horizontal on desktop: 4 circles (72px diameter) spaced evenly across max-w-5xl, connected by an SVG sine-wave path (stroke 2px, #3578CC at 25% opacity) that weaves above and below the circles' center line. Below each circle: step title + description in a 160px-wide column. On mobile: vertical stack with a vertical straight line (2px, #3578CC at 20%) connecting circles top-to-bottom. py-20 section padding.
- **Typography**: Section pre-label: "OUR PROCESS" Urbanist 300 13px uppercase tracking-widest #3578CC. Section h2: "Four Simple Steps" Urbanist 800 36px #1A2538 text-center. Step number inside circle: Urbanist 800 28px #FFFFFF. Step title below: Urbanist 600 18px #1A2538. Step description: Source Sans 3 400 14px #5A6B7D.
- **One step anatomy**: 72px circle with #3578CC fill (secondary blue). Step number centered in white. 12px gap below circle. Title: single line. Description: 2 lines max. All text center-aligned below circle.
- **Interaction model**: Step circle hover: scale 1.08, fill transitions to #D93B4D (primary red — warm!), number stays white, 200ms ease-out. Step title underlines in #D93B4D 200ms.
- **Animation model**: SVG wave path draws itself using GSAP ScrollTrigger scrub — stroke-dashoffset goes from full path length to 0 as user scrolls through 80% of the section height. Step circles enter staggered 120ms with translateY(20px)→0 + opacity 0→1, 500ms ease-out, triggered after path drawing begins. On mobile: vertical line draws top-to-bottom.
- **Unique element**: Sine-wave SVG connector that draws on scroll. No previous build used a wave-shaped process connector.

### 7. BeforeAfter — Side-by-Side Labeled
- **Component pattern**: side-by-side-labeled — Both "before" and "after" images shown side by side at equal width, with large overlaid labels. Clean, confident, and lets the transformation speak for itself. Fits air duct cleaning perfectly — the contrast between dusty clogged ducts and clean bright ducts is dramatic and visual.
- **Background**: solid-color #FAFBFD (background white)
- **Layout**: Two images side by side, each 50% width, gap-4, max-w-4xl centered. Each image: 16px border-radius, overflow hidden, aspect-ratio 4:3. On mobile: stacked vertically, full width each. py-20 section padding.
- **Typography**: Section pre-label: "SEE THE DIFFERENCE" Urbanist 300 13px uppercase tracking-widest #3578CC. Section h2: "Before & After" Urbanist 800 36px #1A2538 text-center. Labels: Urbanist 300 18px uppercase tracking-widest, inside pill-chips (rounded-full, 8px 20px padding).
- **One image anatomy**: 16px rounded image container. "BEFORE" label: pill-chip, #1A2538 bg at 80% opacity, white text, positioned absolute top-left 16px inset. "AFTER" label: pill-chip, #2CBAB5 bg, white text, positioned absolute top-left 16px inset.
- **Interaction model**: Image hover: scale 1.03 over 300ms ease-out. Label hover: label bg opacity increases to 100% over 200ms.
- **Animation model**: Section heading: word split stagger 60ms. Images enter from sides — left image translateX(-30px)→0 + opacity 0→1, right image translateX(30px)→0 + opacity 0→1, both 600ms ease-out, triggered on scroll entry.
- **Unique element**: Pill-chip labels in Urbanist 300 whisper weight (the thin-weight typography steal applied to labels). No previous build used this specific BeforeAfter pattern.

### 8. FAQ — Numbered Reveal
- **Component pattern**: numbered-reveal — Questions shown as a numbered list with large faded ghost numbers. Clicking a question reveals the answer below with a slide-down animation. Only one answer open at a time. Fits this business because HVAC customers have specific technical questions and a clean numbered list feels authoritative.
- **Background**: solid-color #1A2538 (surfaceDark navy) — FAQ on dark creates a focused reading environment and provides the necessary dark break in the section sequence.
- **Layout**: Single column, max-w-3xl centered. Questions stacked with 1px rgba(255, 255, 255, 0.06) separators. py-20 section padding.
- **Typography**: Section pre-label: "COMMON QUESTIONS" Urbanist 300 13px uppercase tracking-widest #2CBAB5. Section h2: "Frequently Asked Questions" Urbanist 800 36px #FFFFFF text-center mb-12. Ghost number: Urbanist 300 48px, rgba(255, 255, 255, 0.06). Question: Urbanist 600 18px #FFFFFF. Answer: Source Sans 3 400 16px #93A3B8 (muted text on dark).
- **One question anatomy**: Horizontal row: ghost number left (48px wide), question text right. Ghost number is vertically centered. Clicking the row → answer slides down below (max-height 0→auto, 400ms ease-out). Active question: ghost number brightens to rgba(255, 255, 255, 0.25), a 2px left border in accent teal (#2CBAB5) appears on the question row, question text color stays white.
- **Interaction model**: Click: answer slides down 400ms cubic-bezier(0.25, 0, 0.25, 1). Previously open answer slides up simultaneously. Ghost number opacity 6%→25% on active. Teal left-border fades in 200ms.
- **Animation model**: Questions stagger in on scroll entry: translateY(20px)→0 + opacity 0→1, staggered 60ms per row, 500ms ease-out.
- **Unique element**: Ghost numbers + dark background FAQ. No previous build used numbered-reveal for FAQ.

### 9. Areas — Arrow Link List
- **Component pattern**: arrow-link-list — Clean vertical list of service areas with animated arrow indicators on hover. Minimal, fast, scannable. Fits this business because the California service area list is long and a compact list lets visitors quickly find their location.
- **Background**: solid-color #F0F4F7 (surface)
- **Layout**: Single column, max-w-3xl centered. List items stacked with 1px #D8DEE6 bottom borders. py-20 section padding. On desktop: items can be displayed in 2 columns for longer lists.
- **Typography**: Section pre-label: "SERVICE AREAS" Urbanist 300 13px uppercase tracking-widest #3578CC. Section h2: "Serving All of California" Urbanist 800 36px #1A2538 text-center mb-12. Area name: Urbanist 500 17px #1A2538. One-liner: Source Sans 3 400 14px #5A6B7D. Arrow link: "→ View Services" Urbanist 500 14px #D93B4D.
- **One list item anatomy**: Horizontal row: area name left, one-liner center (hidden on mobile), arrow link right. 16px vertical padding. 1px #D8DEE6 bottom border. No background fill.
- **Interaction model**: Hover: 3px left border extends from 0 to full row height in secondary blue (#3578CC), 250ms ease-out. Area name text shifts right 8px via translateX. Arrow "→" animates translateX(0→4px) 200ms. Background shifts to rgba(53, 120, 204, 0.03) (barely-there blue tint).
- **Animation model**: List items stagger in on scroll entry: translateX(-20px)→0 + opacity 0→1, staggered 40ms per item, 400ms ease-out.
- **Unique element**: Extending left-border on hover (3px, full height, 250ms). No previous build used this specific list pattern for Areas.

### 10. CTA — Gradient Wave CTA
- **Component pattern**: gradient-wave-cta — A full-width dark section with a warm-to-cool gradient background and an SVG wave shape at the top edge. Centered headline, magnetic CTA pill, phone number below. Fits this business because the gradient transition from warm red (representing current air problems) to cool navy (representing the clean air solution) tells the brand story visually.
- **Background**: gradient-linear — linear-gradient(135deg, #8C1F2E 0%, #1A2538 100%). SVG wave divider at top edge: a single wave path in #FAFBFD (matching the previous section's bg color) fills the top 40px of the section, creating a smooth organic transition from the Areas section above. No photo.
- **Layout**: Content centered, max-w-2xl. py-24 section padding (extra generous for the final section).
- **Typography**: Section pre-label: "GET STARTED" Urbanist 300 13px uppercase tracking-widest #2CBAB5. Headline: "Breathe Cleaner Air Today" Urbanist 800 44px #FFFFFF text-center. One word ("Cleaner") in gradient-text: linear-gradient(135deg, #2CBAB5, #3578CC). Subtext: Source Sans 3 400 17px rgba(255, 255, 255, 0.7) text-center. Phone: Urbanist 300 20px #FFFFFF tracking-wide, below CTA.
- **Button**: Rounded-full pill, #D93B4D fill, white text, Urbanist 600 16px uppercase, 56px tall, 220px wide. Magnetic hover (60px radius, 8px max attraction). Liquid-fill radial ::before pseudo-element on hover (primaryLight fills from cursor entry point, 280ms).
- **Interaction model**: CTA button: magnetic pull toward cursor 8px max + liquid-fill radial expansion on hover. Phone number: underline-sweep from left on hover 200ms.
- **Animation model**: Headline: GSAP word cascade (same technique as hero) triggered on scroll entry, 60ms stagger per word. Button enters scale(0.9)→1.0 spring 400ms after headline completes. Phone fades up opacity 0→1 + translateY(10px)→0 400ms after button.
- **Unique element**: Gradient warm→cool background telling the brand story. SVG wave top divider for organic section transition. No previous build used this specific CTA pattern.

---

## Service Icon Treatment — badge-on-photo

Every service card with a photo gets a small circular icon badge (44px diameter) overlaid on the image area. The badge acts as a quick visual identifier for each service type. Cards without a photo show a gradient fallback (linear-gradient(135deg, #D93B4D, #3578CC)) filling the image area, with no icon shown — the gradient itself becomes the visual.

- **Pages**: Service listing cards on homepage Swiper carousel and /services page grid. NOT shown on service detail pages (detail pages use the icon in the features strip instead).
- **Size**: 44px diameter circle
- **Container**: Circle with #FFFFFF background, 2px #D93B4D border, box-shadow: 0 2px 8px rgba(26, 37, 56, 0.1). The white circle ensures the icon is legible regardless of the photo behind it.
- **Position**: Absolute positioned, bottom-left of the image area, 12px from left edge, overlapping the image-text boundary by 22px (half the badge sits over the image, half over the text area below).
- **Hover behavior**: Badge scales to 1.1 and border transitions to accent teal (#2CBAB5) over 200ms ease-out, synchronized with the card's overall hover state.
- **When no icon exists for a service**: The image area fills with a linear-gradient(135deg, #D93B4D, #3578CC) representing the brand duality. No icon badge is shown — the gradient is the fallback visual. A faint circular ring (120px, stroke-only, rgba(255,255,255,0.15)) centers in the gradient area for depth.

---

## Footer
- **Background**: #1A2538 (surfaceDark navy), matching dark sections
- **Layout**: 4 columns on desktop (logo/tagline | services | areas | contact), stacked on mobile. max-w-7xl centered. py-16 padding.
- **Logo treatment**: Company name in Urbanist 600, 20px, #FFFFFF. If using image logo: filter: brightness(0) invert(1) to make it white on dark bg. Below logo: tagline in Source Sans 3 400, 14px, #93A3B8.
- **Link style**: Urbanist 400, 14px, #93A3B8 color. Hover: color transitions to #FFFFFF + underline-sweep from left in accent teal 200ms.
- **Bottom bar**: Full-width 1px top border rgba(255, 255, 255, 0.06). Copyright: Source Sans 3 400, 13px, #5A6B7D, centered. py-6.

---

## Global Rules
- **Section padding**: py-20 (80px) on desktop, py-12 (48px) on mobile. StatsBar uses py-16 (64px). CTA uses py-24 (96px).
- **Max content width**: max-w-7xl (1280px) for full sections, max-w-5xl for centered content blocks, max-w-3xl for text-heavy sections (FAQ, Areas).
- **Border radius default**: 16px (rounded-2xl) for all cards, containers, and images site-wide. Buttons use rounded-full (pill shape). This echoes the logo's zero sharp edges. No square corners anywhere on the site.
- **Image treatment**: All images receive rounded-2xl (16px) corners. No additional filters or overlays — images should look bright and natural. On dark sections, images get a subtle 1px rgba(255, 255, 255, 0.06) border for containment.
- **Animation philosophy**: Flowing and organic. All animations use 600–800ms durations with ease-out or gentle spring easing. The motion language is: soft wave reveals, expanding circles, upward-drifting particles, smooth Swiper momentum. Nothing snaps, nothing bounces hard. Every animation should feel like air moving — continuous, gentle, purposeful.
- **Text density**: Standard — each section has a heading, a 1–2 sentence description, and the content. Cards have titles and 2-line descriptions. No walls of text, but enough to inform.

---

## Selected Effects

1. `floating-dust particles` — Hero — 80 tiny dots (1–2px), speed 0.4, upward drift, accent teal at 30% opacity, no connecting lines. Evokes clean air rising.
2. `GSAP timeline section reveal` — Services, WhyUs, ProcessSteps, FAQ — heading splits by word and enters staggered 60ms; content elements stagger in 80–100ms apart.
3. `gradient-text` — Hero headline "Clean Air" span + CTA "Cleaner" word — blue-to-teal gradient via background-clip: text. Structurally different from prior builds (light bg, cool-tone gradient, multi-word span).
4. `magnetic pull` — All primary pill CTAs — button center pulls toward cursor up to 8px within 60px radius, spring 400ms.
5. `inertia scroll (Lenis)` — Global — 1.0s smooth momentum on all scrolling. Pairs with GSAP ScrollTrigger.
6. `Swiper touch carousel` — Services — FreeMode with momentum physics, custom pill pagination in #D93B4D, 2.3 cards visible on desktop.
7. `GSAP word cascade (SplitText)` — Hero headline + CTA headline — words enter from bottom (translateY 40px→0) staggered 60ms with spring easing on page load / scroll trigger.
8. `GSAP SVG wave draw (ScrollScrub)` — ProcessSteps wave connector — stroke-dashoffset scrubbed from full to 0 as user scrolls through section.
9. `circular-ring-draw` — StatsBar stat badge borders — SVG ring stroke-dashoffset draws clockwise (full→0, 800ms ease-out, staggered 120ms per stat).
10. `dot-grid pattern` — Services section bg — repeating radial-gradient 2px dots, 24px grid, #1A2538 at 3% opacity.
11. `ticker-marquee` — Testimonials — two rows opposite-direction 40s/45s infinite CSS animation, pause-on-hover.
12. `scale-from-small` — WhyUs cards — scale(0.9)→1.0 spring easing stagger 100ms on scroll entry.

---

## Detail Pages

### Service Detail Page (`/services/[slug]`)

**Hero — bold-type-hero**
No image in the hero. Background: very subtle gradient-mesh (fainter version of homepage hero — blush at 50% opacity and sky-blue at 30% opacity on #FAFBFD). Height: 360px on desktop, 280px on mobile. Small breadcrumb above h1: Urbanist 300, 13px, uppercase, #5A6B7D, with "→" separators. h1: Urbanist 800, 64px desktop / 36px mobile, #1A2538. Below h1: one-line service description in Source Sans 3 400, 18px, #5A6B7D, max-w-lg. Two pill CTAs: "Get a Free Quote" (primary red, rounded-full) + "Call Now" (outlined blue, rounded-full). CTAs sit 24px below description.

**Content Layout — immersive-sections**
Content split into 4 full-width themed sections, each with its own background variation. No sidebar. Sections flow vertically:
1. "About This Service" — #FAFBFD bg, text column max-w-3xl centered, Urbanist 800 28px h3, Source Sans 3 400 17px body, service image floats inline at 50% width with 16px radius.
2. "What's Included" — #F0F4F7 bg, features displayed as icon-number-grid.
3. "Our Process" — #FAFBFD bg, 3–4 horizontal steps with circular numbered icons.
4. "Frequently Asked" — #F0F4F7 bg, inline-reveal FAQ.

Each section is separated by a flowing wave divider (matching homepage signature element).

**Features / Benefits — icon-number-grid**
2-column grid, max-w-4xl centered. Each cell: large faded number (Urbanist 300, 56px, #1A2538 at 8% opacity) positioned top-left. Circular icon container (36px, #F0F4F7 bg, 2px #D8DEE6 border) positioned top-right of cell. Bold title: Urbanist 600, 17px, #1A2538. Description: Source Sans 3 400, 15px, #5A6B7D, 1 line. On mobile: single column.

**FAQ — inline-reveal**
All questions listed in a vertical stack, max-w-3xl centered. Questions: Urbanist 600, 17px, #1A2538. Click to reveal answer: slide-down 300ms ease-out. Active question: 2px left border in accent teal (#2CBAB5), question text stays #1A2538 (no color change — just the border signals active state). Answer: Source Sans 3 400, 16px, #5A6B7D, 16px left padding (indented past the border). All other answers close when one opens.

**Related Areas — list-with-arrow-links**
Clean vertical list, max-w-3xl centered. Background: #F0F4F7. Each item: "→ [Service] in [Area]" — area name in Urbanist 500 16px #1A2538, arrow in #D93B4D. Hover: animated underline sweep from left in #D93B4D 200ms, arrow translateX(0→4px). Items separated by 1px #D8DEE6 borders.

**Signature detail for this page:** A thin horizontal "feature strip" sits between the hero and the first content section — a full-width bar on #1A2538 (dark) with 4 key service highlights displayed inline: small circular icons (28px) + short labels in Urbanist 500 14px #FFFFFF, spaced evenly. This strip acts as a visual summary and a clear break between the hero and content.

---

### Area Page (`/areas/[area]`)

**Hero — map-texture-hero**
Light map-inspired background: #F0F4F7 base with a subtle dot-grid topology pattern (1.5px dots at 32px intervals, #1A2538 at 4% opacity) suggesting geographic precision. Height: 320px. Area name: Urbanist 800, 52px, #1A2538, left-aligned within max-w-7xl. Subtitle: "Professional Air Duct & HVAC Cleaning in [Area]" in Source Sans 3 400, 18px, #5A6B7D. CTA: "View All Services" rounded-full pill in primary red. A small decorative circular ring motif (120px, 2 rings, #3578CC at 10%) sits at the right edge of the hero.

**Services List Style**
3-column card grid (2-column on tablet, 1-column mobile) below the hero. Each card matches the homepage service card style: 16px radius, containment border, image top, icon badge, service name, brief description, "Learn More →" link. Gap-6. Background: #FAFBFD.

**Visual distinction from service page:** The area page feels geographic and structured (dot-grid texture, grid layout, map reference) while the service detail page feels editorial and immersive (flowing sections, no grid). Same brand palette, different visual register.

---

### Area+Service Page (`/areas/[area]/[service]`)

**H1 Treatment**
Two-line headline, left-aligned within max-w-3xl. Line 1: Service name in Urbanist 800, 48px, #D93B4D (primary red). Line 2: "in [Area]" in Urbanist 400, 32px, #3578CC (secondary blue). The dual-color treatment reinforces the red-blue brand duality. A small circular service icon (36px, #F0F4F7 bg, 2px #D8DEE6 border) sits to the left of line 1, vertically centered between both lines. Below: subtle 2px underline in accent teal, 80px wide, scaleX 0→1 on page load 400ms.

**Local Content Block**
A pull-quote card with a light blue-tinted background (#EEF3F8), 16px rounded corners, 2px left border in secondary blue (#3578CC). Contains either a local testimonial ("What [Area] residents say about our service") or a "Why [Area] trusts Win Air Cleaning" statement. Urbanist 600 italic (if available) or Source Sans 3 500 italic for the quote text, 17px, #1A2538. Attribution below in Source Sans 3 400, 14px, #5A6B7D.

**Schema Visibility**
Business address and "Serving [Area] and surrounding communities" are displayed in a compact card at the bottom of the main content area (before CTA). Card: 16px radius, #F0F4F7 bg, 1px #D8DEE6 border. Left: a location pin icon (24px, #D93B4D). Right: address text in Source Sans 3 400, 15px, #5A6B7D + area name in Urbanist 500, 15px, #1A2538. This ensures local context is visible to both users and search engines.

---

## DETAIL PAGES SUMMARY:
- Service page hero: bold-type-hero
- Service content layout: immersive-sections
- Service features: icon-number-grid
- Service FAQ: inline-reveal
- Service related areas: list-with-arrow-links
- Area page hero: map-texture-hero
- Area page services display: 3-column card grid matching homepage style
- Area+Service page H1 style: dual-tone split (red service name + blue area name)
- Area+Service local content: blue-tinted pull-quote card with left border
