# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server (Vite with HMR)
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint code quality checks

### Testing
The project includes Vitest and React Testing Library setup but no test scripts are defined in package.json. Tests can be run directly with `npx vitest` if test files are created.

## Architecture Overview

This is a React + TypeScript portfolio/CV website built with Vite. The application uses a page-based router implemented with URL search parameters rather than traditional React Router.

### Key Architectural Patterns

**Page Navigation System**: Uses `useSearchParamsRouter` hook for client-side routing via URL search parameters:
- Portfolio page: `?page=portfolio`
- Curriculum page: `?page=curriculum`
- Projects page: `?page=projects` (renders PortfolioPage)

**Data Architecture**:
- Portfolio projects are defined in `/src/data/portfolioProjects.ts` as structured data
- Individual project details are in `/src/data/projects/` directory (e.g., `quantabrainProject.ts`, `citynewsProject.ts`)
- CV data is in `/src/data/cvData.ts`
- Projects import extended descriptions from individual project files

**Component Structure**:
- Main pages: `CurriculumPage`, `PortfolioPage`
- Shared components for portfolio items, dialogs, navigation
- Image handling with custom `SimpleImage` component and lightbox functionality
- Dialog system for project details with `ProjectDialog`

**State Management**: Uses React hooks for local state, no external state management library.

**Styling**: TailwindCSS with extensive safelist configuration for dynamic grid classes and responsive layouts.

### Project Data Structure

Projects follow the `PortfolioProject` interface defined in `/src/types/portfolio.ts` with fields like:
- Basic info (title, company, year, description)
- Technical details (tech stack, role, metrics)
- Visual assets (cover, gallery, icon, color)
- Extended content (extendedDescription from separate files)

### Performance Considerations

The Vite config includes specific optimizations:
- File watching with polling enabled for better development experience
- Hot module replacement (HMR) configured
- Build optimization with manual chunk control disabled

### Development Notes

- TypeScript is configured with strict mode enabled
- ESLint is set up with React-specific rules
- The project uses modern React patterns (hooks, functional components)
- Images are stored in `/public/images/` with project-specific subdirectories
- Markdown content is rendered with react-markdown and rehype plugins for sanitization