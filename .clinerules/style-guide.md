# Style Guide

## Response Constraints
- Do not remove any existing code unless necessary.
- Do not remove my comments or commented-out code unless necessary.
- Do not change the formatting of my imports.
- Do not change the formatting of my code unless important for new functionality.

## Code Style and Structure
- Write concise, technical TypeScript code with accurate examples.
- Use functional and declarative programming patterns; avoid classes.
- Use descriptive variable names with auxiliary verbs (e.g., `isLoading`, `hasError`).
- Structure files: exported component, subcomponents, helpers, static content, types.
- For Vue.js components, use Composition API over Options API.
- For Express.js routes, organize handlers in separate files for modularity.
- Use BEM naming convention for CSS classes (e.g., `.block__element--modifier`).

## Naming Conventions
- Use lowercase with dashes for directories (e.g., `components/game-board`).
- Favor named exports for Vue components and helper functions.
- Use camelCase for JavaScript/TypeScript variables and functions.
- Use BEM naming for CSS classes (e.g., `.game-board__cell--active`).

## Syntax and Formatting
- Use the "function" keyword for pure functions.
- Use curly braces for all conditionals. Favor simplicity over cleverness.
- Use declarative Vue templates with proper TypeScript integration.
- Write clean, modular Express.js route handlers with typed middleware.
- Format CSS using BEM conventions with clear, maintainable class names.

## UI and Styling
- Use plain CSS with BEM naming for all styling; avoid CSS frameworks like Tailwind.
- Ensure CSS is scoped to Vue components using `<style scoped>` where applicable.
- Write reusable CSS utility classes following BEM for shared styles (e.g., `.btn__primary--disabled`).
