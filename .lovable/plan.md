
# Website Comprehensive Refactor Plan

## Executive Summary
This plan addresses UI/UX issues, color consistency with the OFATCE brand, project filtering bugs, and establishes a proper structure for managing project images without a database.

---

## Issues Identified

### 1. Brand Color Mismatch
- **Current**: Uses generic blue (#2563EB) for AV/Networking
- **Logo Colors**: Deep Navy (#01233D), Orange (#FF7300/#EA580C)
- **Impact**: The blue color for AV/Networking doesn't match the company's brand identity

### 2. Projects Filtering Bug
- Filter uses `category` field but data also has `businessLine` field
- Values are inconsistent: `businessLine: "AV/Networking"` vs `category: "Audiovisual & Networking"`
- This causes the filtering to sometimes fail

### 3. Missing Custom Project Images Support
- All projects use placeholder Unsplash stock images
- No clear structure for adding real project images

### 4. UI/UX Issues
- Some text has poor contrast (gray on light backgrounds)
- Inconsistent button styling across pages
- Leadership section defined but not rendered in AboutUs page
- Contact page uses `<a href>` instead of `<Link>` for internal navigation

### 5. Unused Code
- `leadership` array in AboutUs.tsx is defined but never displayed

---

## Implementation Plan

### Phase 1: Brand Color Alignment

**Files to modify:** `tailwind.config.ts`, multiple page/component files

**Changes:**
- Update the color scheme to match the logo:
  - Primary (Deep Navy): `#01233D` (already correct)
  - Accent (Orange): `#FF7300` (already correct)
- Replace the blue AV/Networking theme with a secondary accent color that complements the brand (teal/cyan `#0891B2` works well with the navy and orange)
- Alternatively, use the navy primary for AV/Networking with blue accents for differentiation

**Color Strategy:**
```text
Oil & Gas:           Orange theme (#EA580C / #FF7300)
AV/Networking:       Teal/Cyan theme (#0891B2 / #06B6D4)
                     OR Navy with subtle blue (#1E40AF / #3B82F6)
```

### Phase 2: Fix Projects Data & Filtering

**Files to modify:** `src/data/projectsData.ts`, `src/pages/Projects.tsx`, `src/components/projects/ProjectsFilter.tsx`

**Changes:**
1. Consolidate `category` and `businessLine` into a single consistent field
2. Use exact matching values throughout:
   - `"Oil & Gas"` for Oil & Gas projects
   - `"Audiovisual & Networking"` for AV projects
3. Add an `images` array field to each project for multiple images support

**Updated Data Structure:**
```typescript
interface Project {
  id: number;
  title: string;
  businessLine: "Oil & Gas" | "Audiovisual & Networking";
  tags: string[];
  images: string[];  // Array for multiple images
  problem: string;
  solution: string;
  result: string;
  client: string;
  duration: string;
  location: string;
}
```

### Phase 3: Project Images Management

**Files to modify/create:** `src/data/projectsData.ts`, documentation

**Approach for static image management:**
1. Create a folder structure: `public/projects/[project-id]/`
2. Update `projectsData.ts` to reference local images
3. Add clear instructions for adding new project images

**Image Path Convention:**
```text
public/
└── projects/
    ├── project-1/
    │   ├── main.jpg
    │   ├── detail-1.jpg
    │   └── detail-2.jpg
    ├── project-2/
    │   └── main.jpg
    └── ...
```

**To add a new project image:**
1. Upload image to the chat
2. Update the project's `images` array in `projectsData.ts`

### Phase 4: UI/UX Improvements

#### 4.1 Text Contrast & Legibility
- Replace `text-gray-600` with `text-gray-700` or `text-gray-800` for body text
- Ensure all text meets WCAG AA contrast ratio (4.5:1)

#### 4.2 Button Consistency
- Create consistent button patterns:
  - Primary CTA: Orange background, white text
  - Secondary CTA: Navy/Primary background, white text
  - Outline: Navy border, navy text, white/transparent background

#### 4.3 Fix AboutUs Leadership Section
- Either display the leadership team properly or remove the unused code

#### 4.4 Navigation Improvements
- Ensure consistent internal link usage (`<Link>` vs `<a href>`)
- Improve mobile dropdown for business lines with color indicators

### Phase 5: Component Refinements

#### Header Improvements
- Add color indicators to dropdown items (orange dot for O&G, teal for AV)
- Improve mobile navigation layout for sub-items

#### Footer Refinements
- Ensure color consistency with new theme
- Fix any broken links

#### ProjectCard Updates
- Support multiple images (carousel or primary + thumbnails)
- Improve visual hierarchy
- Update color theme to match brand

---

## Detailed File Changes

### 1. `tailwind.config.ts`
- Add new color variables:
  ```typescript
  'oil-gas': {
    DEFAULT: '#EA580C',
    light: '#FFEDD5',
    dark: '#9A3412'
  },
  'av-tech': {
    DEFAULT: '#0891B2',
    light: '#CFFAFE',
    dark: '#0E7490'
  }
  ```

### 2. `src/data/projectsData.ts`
- Remove redundant `category` field
- Rename `businessLine` values to match filter values exactly
- Add `images` array to each project
- Add commented documentation for adding new projects

### 3. `src/pages/Projects.tsx`
- Update filter logic to use `businessLine` field
- Ensure project counts calculate correctly

### 4. `src/components/projects/ProjectsFilter.tsx`
- Update colors to match new theme (orange for O&G, teal for AV)
- Ensure filter values match data exactly

### 5. `src/components/projects/ProjectCard.tsx`
- Update color scheme
- Add support for displaying uploaded project images
- Improve card layout and visual hierarchy

### 6. `src/pages/Home.tsx`
- Update AV/Networking card colors to new theme
- Improve text contrast

### 7. `src/pages/OilGas.tsx`
- Ensure consistent orange theme usage
- Improve text contrast

### 8. `src/pages/AudiovisualNetworking.tsx`
- Change from blue to teal/cyan theme
- Improve text contrast

### 9. `src/pages/AboutUs.tsx`
- Fix or remove the unused leadership section
- Improve text contrast

### 10. `src/pages/Contact.tsx`
- Replace `<a href>` with `<Link>` for internal routes
- Update business line card colors

### 11. `src/components/Header.tsx`
- Update dropdown color indicators to match new theme
- Improve mobile navigation

### 12. `src/components/Footer.tsx`
- Update business line colors to match new theme

---

## How to Add Project Images

After implementation, adding new project images will follow this simple process:

1. **Upload the image** through the Lovable chat interface
2. **Note the path** (e.g., `/lovable-uploads/abc123.png`)
3. **Update** `src/data/projectsData.ts`:
   ```typescript
   {
     id: 7,
     title: "New Project Name",
     businessLine: "Oil & Gas",
     images: ["/lovable-uploads/abc123.png"],
     // ... other fields
   }
   ```

---

## Expected Outcomes

After implementation:
- Brand-consistent color scheme matching the OFATCE logo
- Working project filtering for both business lines
- Easy process for adding real project images
- Improved text legibility and contrast throughout
- Consistent button styling across all pages
- Cleaner, more maintainable codebase

---

## Technical Notes

- All changes use existing Tailwind CSS and shadcn/ui components
- No new dependencies required
- Maintains static website architecture (no database)
- Mobile-responsive design preserved
- Scroll animations retained
