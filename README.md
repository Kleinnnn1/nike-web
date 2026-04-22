# Shoe Web Application

A modern shoe showcase web application featuring an interactive hero slider for displaying premium Nike shoes with smooth animations and intuitive navigation controls.

## Project Overview

Nike Shoe App is a responsive web application built with React and TypeScript that showcases a curated collection of Nike shoes. The application features an animated carousel slider that allows users to browse through different shoe products with detailed information including title, price, and descriptions.

## Tech Stack

- React 19.2.5 - UI library
- TypeScript 6.0 - Type-safe JavaScript
- Vite 8.0 - Fast build tool and development server
- Tailwind CSS 4.2 - Utility-first CSS framework
- ESLint - Code quality and style checking

## Project Structure

```
shoe-web/
├── src/
│   ├── components/
│   │   ├── HeroSlide.tsx - Individual slide component for displaying shoe details
│   │   ├── Navbar.tsx - Navigation bar component
│   │   └── SlideControls.tsx - Navigation controls (previous/next buttons)
│   ├── data/
│   │   └── slides.ts - Shoe data and slide configurations
│   ├── assets/
│   │   └── images/ - Image assets for shoes and backgrounds
│   ├── App.tsx - Main application component with slider logic
│   ├── main.tsx - Entry point
│   └── index.css - Global styles
├── public/ - Static public assets
├── package.json - Project dependencies and scripts
├── vite.config.ts - Vite configuration
├── tsconfig.json - TypeScript configuration
├── eslint.config.js - ESLint rules
└── README.md - This file
```

## Features

- Animated hero slider with smooth transitions
- Multiple shoe products with detailed information
- Previous and next navigation controls
- Responsive design using Tailwind CSS
- Type-safe code with TypeScript
- Fast development experience with Vite HMR

## Current Products

The application showcases three premium Nike shoe models:

1. NIKE Adapt BB 2.0 - Advanced basketball shoe with improved FitAdapt lacing
2. NIKE ADAPT BB - Self-lacing basketball shoe with app-controlled adjustments
3. NIKE EQT SUPPORT - Retro-inspired sneaker with modern comfort

## Installation

1. Clone the repository
2. Install dependencies: npm install
3. Start the development server: npm run dev
4. Build for production: npm run build
5. Preview production build: npm run preview
6. Lint code: npm run lint

## Development

The development server runs with Hot Module Replacement (HMR) for instant code updates during development. TypeScript provides type safety throughout the application, and ESLint ensures consistent code quality.

## Build

To create an optimized production build, run npm run build. The build output will be in the dist directory.
