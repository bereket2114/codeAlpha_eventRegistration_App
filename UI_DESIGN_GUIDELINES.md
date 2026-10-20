# UI/UX Design Guidelines — Event Discovery & Organizer Platform

## Product goal

Create a distinctive, polished event platform that makes discovering experiences feel exciting and managing events feel clear and professional. This is a visual redesign of an existing Vue application, not a new build. Preserve the product's existing behavior and use its real data and routes.

## Product experiences

### 1. Public event discovery

Visitors discover events that organizers have already published. Preserve the existing journey:

1. Open the public homepage.
2. Browse published events.
3. Select a particular event.
4. Open that event's own detail page.
5. Review its information.
6. Register through the existing registration flow.

The event selected must continue to match the data shown on its detail page. Keep existing route parameters, event identifiers, registration handlers, and backend integrations intact.

### 2. Organizer dashboard

Organizers use the existing dashboard and workflows to create, edit, save, and publish event details. Existing fields may include title, description, cover image, date/time, location, capacity, and other project-specific metadata. Preserve the current fields, validation, submission format, and publishing behavior.

The dashboard should feel like a calm, practical workspace that shares the public website's brand identity.

## Creative direction: a living, editorial event brand

The desired feeling is contemporary culture magazine meets event discovery platform: energetic, welcoming, expressive, human, trustworthy, and clearly centered on events and experiences.

Create an original design suitable for this specific project. Do not copy another website's exact layout, branding, visual identity, or distinctive components. Avoid a generic SaaS template or default component-library appearance.

### Color system

First inspect the current project colors, CSS variables, and brand assets. If a coherent brand system already exists, preserve and refine it. Otherwise, use this suggested palette as a starting point:

- Warm ivory `#F7F3EB`: main public backgrounds.
- Midnight ink `#24233A`: primary text and selected dark surfaces.
- Vibrant coral `#F06449`: primary actions and focused accents.
- Golden sand `#E9C46A`: occasional highlights.
- White and warm gray: content surfaces, forms, borders, and quiet supporting UI.
- Muted lavender or another complementary secondary tone: use sparingly where it helps composition.

Use color consistently, not decoratively on every element. Keep text and interactive elements accessible and sufficiently contrasted. The public site can be more expressive; forms and dashboard surfaces should remain focused and legible.

### Typography

Use expressive editorial headings with highly readable body text. Establish a clear hierarchy for page headings, event titles, dates, locations, descriptions, helper text, form labels, and actions. Prefer existing fonts where appropriate. Avoid tiny text, excessive uppercase labels, and overly dense line lengths.

### Layout and composition

Use generous whitespace, deliberate alignment, well-controlled content widths, expressive image placement, consistent spacing, and restrained corner radii. Use borders and shadows only when they add structure. Not every section should be an identical grid of rounded white cards. Make visual variety purposeful rather than chaotic.

## Public homepage

### Header

Improve the brand, navigation, spacing, and balance while preserving existing destinations, account behavior, permissions, and conditional visibility.

### Hero

Create a compelling, editorial hero with a clear headline, concise supporting copy, and an appropriate call to action already supported by the application. Use suitable real project imagery or existing event data when available. Avoid a generic centered headline over a gradient. Do not fabricate statistics, testimonials, attendee counts, or marketing claims.

### Event listings

Make event cards image-led and easy to scan. Prioritize the existing cover image, title, date, location when present, concise description when available, and the action to open the event. Use consistent image ratios, deliberate cropping, clear typography, and subtle interactive states.

Do not add unnecessary filter sidebars, complex sorting, tag-filter controls, or invented discovery features. Preserve existing search or discovery controls if present, without changing their logic.

Add or refine supporting homepage sections only when they fit the actual product and improve the journey. Do not add filler, fake metrics, or repetitive cards.

## Event detail page

Make the selected event feel important and easy to understand. Present the existing cover image, title, date/time, location when available, description, supported capacity/availability information, and existing registration action with a clear hierarchy.

Registration should be easy to find but should not overwhelm the event content. On mobile, keep the action easy to locate. Preserve the existing event-specific route, data lookup, identifiers, registration behavior, and real success/error/validation states. Never hardcode another event or invent capacity information.

## Organizer dashboard and forms

Create a cohesive organizer workspace with clear page headings, consistent navigation, readable event listings, and obvious primary actions already supported by the application. Do not add meaningless charts, invented performance metrics, or unsupported features.

Improve the visual grouping of existing event form fields where useful—for example, event basics, media, date/time/location, and capacity/publication settings. These are presentation groupings only; do not change the data model or business behavior.

Form principles:

- Keep labels visible, clear, and associated with their inputs.
- Make required fields obvious using the existing validation rules.
- Use comfortable spacing and consistent input styling.
- Preserve all current fields, bindings, validation, and submit handlers.
- Make image upload and preview clear where the current implementation supports them.
- Distinguish primary and secondary actions visually without changing what they do.
- Keep existing save, publish, edit, and unpublish semantics unchanged.
- Do not replace functional controls with decorative mockups.

## Interaction polish

Improve only the presentation of existing interactions: hover, focus, pressed, loading, disabled, validation, success, error, empty, and status states. Keep them connected to real existing state and handlers; do not simulate successful operations or invent behavior. Use restrained transitions and respect reduced-motion preferences. Never make important information available only on hover.

## Responsive design and accessibility

The interface must work on desktop, tablet, and mobile. Reflow layouts intentionally rather than merely shrinking them. Avoid horizontal overflow. Keep text readable and touch targets comfortable. Preserve semantic HTML and keyboard navigation, provide visible focus, maintain sufficient contrast, use appropriate alt text, label form controls correctly, and provide accessible names for icon-only buttons.

## Technical and implementation guardrails

- Inspect existing architecture and style conventions before editing.
- Reuse existing components and design tokens where sensible.
- Prefer markup and styling changes over script or behavior changes.
- Preserve Vue directives, route links, props, emits, handlers, and data bindings.
- Preserve real API-backed data; do not introduce hardcoded event content as a replacement.
- Avoid unnecessary dependencies and new styling frameworks.
- Do not refactor unrelated files for aesthetic consistency.
- If a design detail conflicts with existing behavior, preserve behavior and choose a safer design.

## Definition of done

The result should feel like a coherent, original event brand. Visitors should be able to browse events and continue through the existing event-detail and registration journey. Organizers should continue to use their existing event-management workflow. All visual improvements must respect the project's current architecture and functionality, and verification claims must reflect checks actually performed.
