# Overview

This is a personal portfolio website for Scott Kirker, showcasing his professional roles as Founder, Developer, Coach, and AI Education Specialist. The site is a static, client-side web application built with vanilla HTML, CSS, and JavaScript, designed for deployment to GitHub Pages. It features a responsive design, theme switching (dark/light mode), interactive role sections, and portfolio showcases for projects like Grativerse and Ultimately apps.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Static Site Structure**: The application is a single-page static website with no backend dependencies. All functionality is client-side using vanilla JavaScript.

- **Rationale**: Simplicity, fast loading, easy deployment to GitHub Pages, no server costs
- **Alternatives**: Could use a static site generator (Gatsby, Next.js) but vanilla approach keeps dependencies minimal
- **Pros**: Zero build step required, direct file editing, CDN-friendly
- **Cons**: Limited to client-side functionality, manual updates needed

## Theme Management

**Client-Side Theme System**: Uses CSS custom properties with localStorage persistence and system preference detection.

- **Implementation**: JavaScript detects `prefers-color-scheme` media query and stores user preference in localStorage
- **Rationale**: Provides seamless dark/light mode without server dependency
- **Pros**: Instant theme switching, persists across sessions, respects system preferences
- **Cons**: Brief flash on page load if user preference differs from default

## Styling Architecture

**CSS Custom Properties Pattern**: Extensive use of CSS variables for theming and maintainability.

- **Implementation**: Root-level variables define colors, typography, gradients for each role/section
- **Rationale**: Easy theme switching, consistent design system, maintainable color schemes
- **Alternatives**: CSS-in-JS, Sass/SCSS
- **Pros**: Native browser support, no compilation needed, dynamic theming support
- **Cons**: Limited to modern browsers (not an issue for target audience)

## Component Organization

**Section-Based Layout**: Content organized into semantic sections (hero, roles, projects, skills, contact).

- **Rationale**: Clear information hierarchy, easy navigation, SEO-friendly structure
- **Implementation**: Each section uses semantic HTML5 elements with BEM-style class naming

## Asset Generation

**Build-Time Favicon Generation**: Node.js script using Sharp library to generate multiple favicon sizes from SVG.

- **Rationale**: Supports various devices/browsers from single SVG source
- **Implementation**: `generate-favicon.js` creates PNG versions at different sizes
- **Pros**: Single source of truth, automated consistency
- **Cons**: Requires Node.js environment for initial setup

## Development Server

**Simple HTTP Server**: Basic Node.js HTTP server for local development.

- **Implementation**: `serve.js` provides static file serving with MIME type handling
- **Rationale**: Lightweight development environment without framework overhead
- **Alternatives**: Python SimpleHTTPServer, live-server npm package
- **Pros**: No dependencies beyond Node.js, fast startup
- **Cons**: No hot reload, basic error handling

## Responsive Design

**Mobile-First Approach**: Uses CSS Grid and Flexbox with media queries.

- **Rationale**: Optimal experience across all device sizes
- **Implementation**: Breakpoints defined in CSS for tablet/desktop layouts
- **Pros**: Progressive enhancement, accessibility
- **Cons**: Requires testing across multiple viewports

# External Dependencies

## Fonts

- **Google Fonts (Inter)**: Hosted typography via CDN
  - Used for consistent, modern typography across the site
  - Preconnect hints for performance optimization

## Image Processing

- **Sharp**: Node.js image processing library
  - Purpose: Generate favicon assets in multiple sizes from SVG
  - Used only in development/build process, not runtime dependency

## Runtime Environment

- **Node.js**: Required for development server and favicon generation
  - Version: Compatible with Node.js 18+ (as per Sharp requirements)
  - Not required for production deployment (static files only)

## Deployment Platform

- **GitHub Pages**: Target hosting platform
  - Static file hosting from repository
  - No server-side processing capabilities
  - Automatic SSL/HTTPS support

## Browser APIs

- **localStorage**: Persisting theme preferences
- **matchMedia**: Detecting system color scheme preferences
- **CSS Custom Properties**: Dynamic theming