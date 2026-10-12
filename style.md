# UX/UI Style Guide: Event Registration Platform

## 1. Core Design Principles
* **Clean & Minimalist:** Emphasize whitespace, readability, and content hierarchy. Avoid cluttered layouts.
* **Modern Typography:** Use a clean sans-serif font stack (e.g., Inter, Roboto, or system-ui). 
* **Subtle Elevation:** Use soft drop shadows (`box-shadow: 0 4px 6px rgba(0,0,0,0.05)`) to separate cards from the background rather than harsh borders.
* **Responsive First:** All components must degrade gracefully. Desktop uses horizontal flex layouts; mobile uses vertical stacking.

## 2. Color Palette
* **Background:** Light, off-white/gray `#f8fafc` or `#f3f4f6` for the main body to let cards pop.
* **Card Background:** Pure white `#ffffff`.
* **Primary Text:** Dark slate `#1e293b` for headings and titles.
* **Secondary Text:** Muted gray `#64748b` for dates, times, and descriptions.
* **Accents/Icons:** Soft blue or brand-primary color for icons (like the calendar icon) and primary buttons.
* **Placeholders/Borders:** Light gray `#cbd5e1` for borders and dashed image placeholders.

## 3. Typography Hierarchy
* **H1 (Page Titles):** 2rem (32px), Font-weight: 800, tight line-height.
* **H2 (Card Titles):** 1.5rem (24px), Font-weight: 700.
* **Meta Text (Dates/Times):** 0.875rem (14px), Font-weight: 500, flex alignment with icons.
* **Body Text:** 1rem (16px), Line-height: 1.6, Font-weight: 400.

## 4. Spacing & Containers
* **Padding:** Use generous padding inside cards (e.g., `1.5rem` or `24px`).
* **Gap:** Use `gap: 1.5rem` between flex items.
* **Border Radius:** Use `8px` or `0.5rem` for all cards and image containers.
* **Max Width:** Constrain feed and detail pages to a readable max-width (e.g., `1024px` or `1200px`) centered on the screen.

## 5. CSS Framework Preference
Use **Tailwind CSS** utility classes for all EJS templates to ensure rapid, consistent, and responsive styling without requiring a massive custom CSS file. (If Tailwind is not configured, use vanilla CSS with Flexbox/CSS Grid adhering strictly to these principles).