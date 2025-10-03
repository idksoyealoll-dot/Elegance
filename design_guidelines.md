# Design Guidelines: Minimal Clothing Brand Website

## Design Approach
**Reference-Based Approach** drawing inspiration from minimal fashion e-commerce leaders like Everlane, COS, and & Other Stories. Focus on sophisticated simplicity, editorial photography quality, and understated elegance that lets the products shine.

## Core Design Principles
- **Radical Simplicity**: Remove everything except what's essential
- **Editorial Quality**: Treat product presentation like a fashion magazine
- **Breathing Room**: Generous white space creates luxury perception
- **Subtle Motion**: Animations enhance, never distract

## Color Palette

**Light Mode (Primary)**
- Background: 0 0% 98% (off-white, warmer than pure white)
- Surface: 0 0% 100% (pure white for cards)
- Text Primary: 0 0% 10% (near-black for headings)
- Text Secondary: 0 0% 40% (muted gray for descriptions)
- Border: 0 0% 90% (subtle dividers)
- Accent: 0 0% 20% (for CTAs and hover states - minimal black)

**Dark Mode** (Optional toggle)
- Background: 0 0% 8%
- Surface: 0 0% 12%
- Text Primary: 0 0% 95%
- Text Secondary: 0 0% 60%
- Border: 0 0% 20%

## Typography

**Font Family**: Use Google Fonts via CDN
- Primary: 'Inter' for UI elements, navigation, and body text
- Display: 'Playfair Display' for large headlines and brand moments (use sparingly for elegance)

**Scale & Hierarchy**:
- Hero Headlines: text-6xl md:text-7xl lg:text-8xl, font-light (Playfair)
- Section Titles: text-3xl md:text-4xl, font-light
- Product Names: text-lg, font-normal, tracking-wide uppercase
- Body Text: text-base, leading-relaxed
- Captions/Prices: text-sm, text-muted
- Navigation: text-sm, tracking-wider uppercase

## Layout System

**Spacing Units**: Consistent use of Tailwind units: 4, 6, 8, 12, 16, 20, 24, 32
- Section Padding: py-20 md:py-32 
- Card Spacing: gap-6 md:gap-8
- Container Max-Width: max-w-7xl for content sections
- Grid Gutters: gap-4 md:gap-6 for product grids

**Grid System**:
- Product Grid: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Mobile: Single column for forms, 2-column for products
- Tablet: 2-3 columns
- Desktop: 3-4 columns

## Component Library

**Navigation Bar**
- Sticky, minimal design with backdrop blur
- Logo: Left aligned, simple wordmark
- Links: Centered navigation (Home, Shop, About, Contact)
- Right side: Search icon, Account icon, Cart icon
- Height: h-16 md:h-20
- Background: bg-white/80 backdrop-blur-md with subtle border-b

**Loading/Landing Animation Page**
- Full viewport black or dark gray background (0 0% 5%)
- Clothing rack visualization: horizontal line at top third
- Clothes (5-7 items): SVG or div-based hangers with simple rectangular dress shapes
- Animation sequence: Items swing in from left/right alternately over 3-4 seconds
- Use framer-motion stagger with spring physics
- After completion: 0.5s pause, then smooth fade transition to main page
- Minimal brand wordmark centered below animation

**Product Cards**
- Aspect ratio: 3:4 for product images
- Clean white background
- Image: Full-width, object-cover
- Hover: Subtle scale (1.02) and shadow elevation
- Product name: Below image, uppercase, tracking-wide
- Price: Below name, smaller, muted color
- No borders on cards, rely on white space separation
- Quick view overlay on hover (optional): "View Details" button fades in

**Forms (Sign In/Sign Up/Contact)**
- Centered, max-w-md container
- Large, comfortable input fields (h-12)
- Subtle borders that darken on focus
- Labels: Small, uppercase, tracking-wide, above inputs
- Primary button: Full width, h-12, black background, white text
- Link actions: Underlined, muted text for "Forgot password?" etc.
- Error states: Thin red border-l-4 with light red background

**About Us Page**
- Hero text section: Large Playfair headline with mission statement
- 2-column layout alternating text and images (desktop)
- Images: Full-bleed on one side, text block on other with generous padding
- Single column stack on mobile
- Founder/team section: Circular profile images in grid

**Contact Page**
- Split layout (desktop): Contact form on left (60%), contact info on right (40%)
- Stack on mobile
- Form fields: Name, Email, Subject, Message (textarea)
- Contact info card: Address, Email, Phone with subtle icons
- Background: Very light gray section (0 0% 97%)

## Images

**Hero Section (Main Page)**
- Large hero image: Full-width, h-screen or min-h-[600px]
- Image style: Minimal fashion editorial - model in neutral setting, lots of negative space
- Overlay: Centered text with brand name and seasonal tagline
- CTA: Single "Shop Collection" button with blurred background (bg-white/20 backdrop-blur-md)

**Product Images**
- Clean, studio-quality shots with consistent lighting
- Neutral backgrounds (white or very light gray)
- Models in natural poses, showing garment fit
- Lifestyle secondary images on product detail views

**About Page Images**
- 2-3 lifestyle/brand story images
- Behind-the-scenes workshop/studio shots
- Team photos in natural lighting
- Images alternate sides in text-image grid layout

**Placement**:
- Landing page: No images, animation only
- Main page hero: 1 large hero image
- Product grid: 8-12 product images
- About page: 3-4 supporting images
- Contact: Optional small brand/location image

## Animations & Interactions

**Landing Page Animation**
- Clothing items: Swing in with staggered timing (0.15s delay between items)
- Spring animation: {type: "spring", stiffness: 100, damping: 12}
- Rotation: -15deg to 0deg swing effect
- Exit transition: Fade out (opacity 0) + scale (0.95)

**Product Cards**
- Hover: scale-105 transition-transform duration-300
- Image: Subtle brightness increase on hover
- Quick view button: Fade in from bottom (translateY)

**Page Transitions**
- Minimal fade transitions between pages
- Navigation links: Underline slide-in effect on hover

**Micro-interactions**
- Button hover: Slight scale (0.98) on active press
- Form inputs: Border color transition on focus
- Add to cart: Brief scale pulse confirmation

## Accessibility & Responsive Behavior

**Mobile Optimizations**
- Navigation: Hamburger menu below md breakpoint
- Product grid: 2 columns on mobile, 4 on desktop
- Hero text: Reduce font sizes significantly (text-4xl on mobile vs text-8xl desktop)
- Padding: Reduce from py-32 to py-12 on mobile

**Touch Targets**
- Minimum 44x44px for all interactive elements
- Increased spacing between form fields on mobile

**Performance**
- Lazy load product images below fold
- Optimize hero image for fast LCP
- Preload critical fonts

## Key Visual Distinctions

This design stands apart through:
- **Extreme minimalism**: No gradients, no decorative elements, pure focus on content and white space
- **Editorial approach**: Product photography treated as art direction, not catalog
- **Restrained animation**: Loading animation is the star moment; everything else is whisper-quiet
- **Monochromatic confidence**: Near-complete absence of color except product imagery
- **Typography contrast**: Pairing modern sans (Inter) with elegant serif (Playfair) only for major headlines creates sophisticated tension