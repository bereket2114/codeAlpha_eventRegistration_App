# Project Instructions for Codex

## Primary objective

Improve the visual design and usability of this existing event organization and registration application. Treat this as a **presentation-only UI/UX redesign**, not a rebuild.

**Priority order:**
1. Preserve existing functionality, data flow, and integrations.
2. Make focused, safe UI improvements.
3. Verify the changes and report any limitations honestly.

## Non-negotiable: preserve the existing application

Before editing, inspect the repository, current Git status, and existing diff. Identify the Vue version, UI components, styles, routes, API/service layer, state management, and event creation/publishing/registration flows.

Do not overwrite or discard existing uncommitted work. Never use destructive Git commands to reset, clean, or revert the project.

Unless I explicitly authorize functional changes, do not modify or rewrite:

- Backend/server code, controllers, services, middleware, or backend routes.
- Database schemas, migrations, models, queries, or persistence logic.
- API endpoints, HTTP methods, request payloads, response mapping, or integrations.
- Vue Router configuration, route paths/names, navigation guards, route parameters, or event identifiers.
- Authentication, authorization, sessions, permissions, or user identity behavior.
- Business logic for event creation, editing, publishing, unpublishing, deletion, or registration.
- Existing API calls, data-fetching functions, stores, composables, reactive state, computed properties, watchers, methods, or submission handlers.
- Existing props, emits, field names, validation rules, event handlers, data models, and database relationships.

Do not replace real data or working functions with mock data, hardcoded demonstrations, placeholder handlers, or invented features. Do not remove existing fields, controls, or functionality merely because they do not fit a proposed layout.

## Safe UI implementation rules

Prefer focused changes to Vue templates, CSS, scoped styles, shared visual tokens, and presentation components. Reuse the project's current framework, styling approach, dependencies, component patterns, and conventions.

When changing a `.vue` component, preserve its existing script logic and all bindings unless I explicitly approve otherwise. Keep `v-model`, `v-if`, `v-for`, `@click`, `@submit`, route links, props, emits, and existing state/data bindings connected and working. Markup may be rearranged for presentation only when the existing behavior remains intact.

Do not replace entire components solely to restyle them. Do not introduce another styling framework or unnecessary dependencies. Do not perform unrelated refactors, rename functional symbols, or change data contracts for convenience.

If a visual improvement seems to require a change to backend code, routing, API behavior, or business logic, choose a safer visual alternative. If none exists, leave that part as-is and explain the limitation.

## Visual-design guidance

Read `UI_DESIGN_GUIDELINES.md` before beginning UI changes. Treat it as the design brief for this repository, while these instructions define the safety and preservation rules.

## Verification requirements

After editing:

1. Inspect the complete diff.
2. Confirm that changes are limited to necessary presentation-related files, unless an explicitly approved exception applies.
3. Verify that backend code, route definitions, API contracts, data models, and business logic were not unintentionally changed.
4. Run relevant existing build, lint, type-check, and test commands when available and appropriate.
5. Do not claim a check passed unless it was actually run and passed.
6. If runtime services, credentials, APIs, or a browser are unavailable, state what could not be tested.

## Final report

Summarize the UI files changed, the design improvements made, and the checks actually performed. Explicitly report whether backend, routing, API, or business-logic files changed. The expected answer for a UI-only redesign is **no**. If an exception was necessary, explain it clearly.

**Final rule: Preserve my code, functionality, routes, backend integrations, and data flow. Redesign the presentation only. Do not sacrifice working behavior for a visual effect.**
