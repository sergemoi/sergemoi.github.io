# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static marketing website for "Bdgt" - a privacy-focused monthly budget tracking iOS app. The website showcases the app's features and provides download links to the App Store.

## Architecture

- **Static HTML/CSS Website**: Simple, lightweight static site with no build process required
- **File Structure**:
  - `index.html` - Main landing page with app showcase
  - `privacy-policy.html` - Privacy policy page (required for App Store)
  - `style.css` - Additional styles (some styles are embedded in HTML)
  - `images/` - App assets including logo, screenshots, and App Store badge
  - `test page/` - Development/testing versions of the pages

## Development

### Local Development
- Open `index.html` directly in a web browser to view the site
- No build process, bundler, or development server required
- For live development, use any simple HTTP server:
  ```bash
  python -m http.server 8000
  # or
  npx serve .
  ```

### Styling Approach
- Most styles are embedded directly in the HTML `<style>` tags
- Additional styles in `style.css` (mainly for screenshot components)
- Uses Apple-inspired design language with system fonts
- Responsive design with mobile-first approach

### Key Components
- **Hero Section**: App name, tagline, and main screenshot
- **Features Grid**: 6-feature grid highlighting app benefits
- **Download Section**: Call-to-action with App Store link
- **Privacy-First Messaging**: Emphasizes local data storage and no cloud sync

## Content Guidelines

### Brand Voice
- Clean, minimal, privacy-focused
- Apple ecosystem aesthetic
- Emphasizes simplicity and local data storage

### Image Requirements
- App screenshots should be iPhone-sized (280x560px desktop, 240x480px mobile)
- Logo should be 1024x1024px with 26% border-radius
- All images optimized for web delivery

### Privacy Policy
- Required for App Store submission
- Emphasizes no data collection, local storage only
- Must be kept up-to-date with app functionality

## Deployment
- Static site - can be deployed to any web server or CDN
- No special server requirements
- Ensure all image paths are relative and working
- Test responsive design across devices before deployment