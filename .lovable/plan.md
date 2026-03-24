

# Improving Section Transitions

## The Problem
The sections have slightly different teal shades (background, card, teal-gradient-bg) creating visible hard edges between them -- the circled areas in your screenshots.

## The Solution
Create a reusable `SectionDivider` component and add it between sections. Two elegant styles:

### Style 1: Decorative Gold Ornament Divider
A thin horizontal gold line with a small diamond shape in the center, animated on scroll. Fits the luxury aesthetic of the site.

### Style 2: Subtle Gradient Fade
A thin band (40-60px) with a gradient that smoothly blends the two adjacent section colors, creating an invisible seam.

## Technical Plan

### 1. Create `SectionDivider.tsx`
- Two variants: `ornament` (gold line + diamond) and `fade` (gradient blend)
- Uses framer-motion for scroll-triggered animation (line draws from center outward)
- The ornament variant: centered `<hr>` with a small rotated square (diamond) in the middle, gold colored
- The fade variant: a div with a vertical gradient from transparent to the subtle teal midpoint and back

### 2. Update `Index.tsx`
Insert dividers between all major sections:
- Hero → Stats: fade
- Stats → About: ornament  
- About → Values: fade
- Values → Quote: ornament
- Quote → Library: fade
- Library → Video: ornament
- Video → Blog: fade
- Blog → Gallery: ornament
- Gallery → Contact: fade
- Contact → Footer: ornament

### 3. Update `index.css`
Add a `.section-divider` utility class for consistent spacing (negative margins to overlap section edges).

This creates smooth, elegant transitions that eliminate the hard color boundaries between sections.

