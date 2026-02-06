

# Website Restructure Plan: Differentiating Two Business Lines

## Overview

This plan restructures the website to clearly separate **Oil & Gas Solutions** and **Audiovisual & Networking Services** as two distinct business lines under one unified brand. The goal is to create dedicated user journeys for each service while maintaining a cohesive company identity.

---

## Current Issues Identified

### 1. Broken/Orphaned Pages
The following pages exist but are NOT accessible (not in routing):
- `Services.tsx` - Generic services page
- `Industries.tsx` - Has broken link to `/portfolio`
- `Portfolio.tsx` - Has broken links to `/why-ofatce`
- `WhyOfatce.tsx` - Has broken link to `/portfolio`
- `QualityPolicy.tsx` - Not accessible
- `Certification.tsx` - Has broken link to `/quality-policy`
- `Index.tsx` - Redundant wrapper for Home

### 2. Mixed Service Presentation
- Homepage mixes both services without clear separation
- Projects page uses basic filtering but doesn't create distinct experiences
- Contact page mentions both services but doesn't route inquiries appropriately
- Navigation doesn't clearly guide users to their relevant business line

---

## Proposed Site Architecture

```text
PROPOSED SITE STRUCTURE
========================

Home (Landing Page)
├── Clear hero with "Choose Your Business Line" CTA
├── Two distinct entry points (visual cards)
│   ├── Oil & Gas Solutions →
│   └── Audiovisual & Networking →
└── Unified company credibility section

About Us
├── Company history & evolution
├── Vision, Mission, Values
└── Timeline showing both business line development

Our Businesses (Hub Page)
├── Overview of dual-line structure
├── Oil & Gas Section →
└── Audiovisual & Networking Section →

Oil & Gas Solutions (Dedicated Section)
├── Services specific to O&G
├── O&G Projects portfolio
├── Industry sectors served
└── O&G-specific contact/inquiry

Audiovisual & Networking (Dedicated Section)
├── Services specific to AV/Networking
├── AV Projects portfolio
├── Industry sectors served
└── AV-specific contact/inquiry

Projects (Combined with clear filtering)
├── Filter by business line
├── Visual distinction between O&G and AV projects
└── Category-specific metrics

Contact
├── General inquiry
├── Oil & Gas inquiry section
└── Audiovisual & Networking inquiry section
```

---

## Implementation Steps

### Phase 1: Clean Up Orphaned Files

**Delete unnecessary/orphaned pages:**
- `src/pages/Index.tsx` (redundant wrapper)
- `src/pages/Services.tsx` (content merged into business line pages)
- `src/pages/Industries.tsx` (content merged into business line pages)
- `src/pages/Portfolio.tsx` (replaced by Projects.tsx)
- `src/pages/WhyOfatce.tsx` (content can be merged into About Us)
- `src/pages/QualityPolicy.tsx` (can be merged into About Us or kept if routed)
- `src/pages/Certification.tsx` (can be merged into About Us or kept if routed)

### Phase 2: Enhance Homepage Differentiation

**Update `src/pages/Home.tsx`:**
- Create a prominent "Choose Your Path" section with two large, visually distinct cards
- Use different color schemes for each business line:
  - **Oil & Gas**: Orange/amber tones
  - **Audiovisual & Networking**: Blue tones
- Add clear CTAs that guide users to their relevant business line
- Reorganize the hero section to immediately communicate dual-line structure

**New Homepage Structure:**
```text
1. Hero Section
   - Headline: "Two Specialized Business Lines. One Trusted Partner."
   - Brief intro to dual-line approach

2. Business Line Selection (NEW - prominent section)
   - Oil & Gas Card (orange theme)
     - Icon, brief description, "Explore Oil & Gas" CTA
   - Audiovisual Card (blue theme)
     - Icon, brief description, "Explore AV & Networking" CTA

3. Quick Stats (existing - refined)

4. Why Choose Us (brief)

5. CTA Section
```

### Phase 3: Enhance Business Line Pages

**Update `src/pages/OilGas.tsx`:**
- Add color theming (orange/amber accents)
- Include relevant projects inline (not just link to Projects page)
- Add industry sectors served specific to Oil & Gas
- Add dedicated contact section for O&G inquiries
- Include relevant certifications/compliance

**Update `src/pages/AudiovisualNetworking.tsx`:**
- Add color theming (blue accents)
- Include relevant projects inline
- Add industry sectors served specific to AV/Networking
- Add dedicated contact section for AV inquiries
- Include relevant certifications

### Phase 4: Update Navigation

**Update `src/components/Header.tsx`:**
- Reorganize dropdown to show business lines more prominently
- Consider adding visual indicators (icons/colors) in navigation

**Updated Navigation Structure:**
```text
Home | About Us | Our Businesses ▼ | Projects | Contact
                   ├── Oil & Gas Solutions (with orange indicator)
                   └── Audiovisual & Networking (with blue indicator)
```

### Phase 5: Enhance Projects Page

**Update `src/pages/Projects.tsx` and components:**
- Add visual distinction between O&G and AV projects (color-coded badges/borders)
- Improve filtering UI with tabs instead of buttons
- Show business-line-specific metrics when filtered
- Add project count per category in filter buttons

### Phase 6: Enhance Footer

**Update `src/components/Footer.tsx`:**
- Already updated with dual business line structure (good)
- Consider adding color-coded links for each business line

### Phase 7: Update Contact Page

**Update `src/pages/Contact.tsx`:**
- Create clearly separated inquiry sections for each business line
- Add routing logic to direct inquiries appropriately
- Use color-coded cards for business line selection

---

## Visual Differentiation Strategy

### Color Scheme

| Element | Oil & Gas | Audiovisual & Networking |
|---------|-----------|-------------------------|
| Primary Accent | Orange (#EA580C) | Blue (#2563EB) |
| Background Tint | Orange-50 | Blue-50 |
| Border Color | Orange-200 | Blue-200 |
| Icon Color | Orange-600 | Blue-600 |
| Badge Color | Orange-500 | Blue-500 |

### Visual Cues
- Different hero images for each business line page
- Color-coded project cards in the Projects grid
- Business line icons in navigation and throughout pages
- Distinct CTA button colors per business line

---

## Files to Modify

1. **`src/pages/Home.tsx`** - Major restructure for business line separation
2. **`src/pages/OilGas.tsx`** - Add color theming, inline projects, contact section
3. **`src/pages/AudiovisualNetworking.tsx`** - Add color theming, inline projects, contact section
4. **`src/pages/Projects.tsx`** - Enhanced filtering and visual distinction
5. **`src/components/projects/ProjectCard.tsx`** - Color-coded by business line
6. **`src/components/projects/ProjectsFilter.tsx`** - Tab-based filtering with counts
7. **`src/components/Header.tsx`** - Visual indicators in navigation
8. **`src/pages/Contact.tsx`** - Business line inquiry routing
9. **`src/App.tsx`** - Remove orphaned route imports

## Files to Delete

1. `src/pages/Index.tsx`
2. `src/pages/Services.tsx`
3. `src/pages/Industries.tsx`
4. `src/pages/Portfolio.tsx`
5. `src/pages/WhyOfatce.tsx`
6. `src/pages/QualityPolicy.tsx`
7. `src/pages/Certification.tsx`

---

## Expected Outcome

After implementation:
- Users immediately understand there are two distinct service offerings
- Clear visual and navigational pathways to each business line
- Color-coded experience that reinforces which business line users are viewing
- No broken links or orphaned pages
- Improved user journey with relevant content per business line
- Professional separation while maintaining unified brand identity

---

## Technical Notes

- All changes use existing component library (shadcn/ui)
- Color variables can be added to Tailwind config for consistency
- No new dependencies required
- Responsive design maintained throughout
- Scroll animations preserved

