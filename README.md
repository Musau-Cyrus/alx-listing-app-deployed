# ALX Listing App

### Project Overview

The _ALX Listing App_ is a simplified property listing platform inspired by Airbnb. It showcases properties available for rent, allowing users to view key details, interact with call-to-action buttons, and explore listings in a visually appealing way. This project focuses on reusability, TypeScript best practices, and a component-driven approach using Next.js and TailwindCSS.

## Project Structure

The project includes:

- `pages/`: Contains the Next.js pages for the application. This is where the main views and routes of the application are defined.
- `components/`: Contains reusable UI components that are used across different pages.
  - `components/common/`: Contains general-purpose components like buttons, cards, etc.
- `interfaces/`: Defines TypeScript interfaces and types used throughout the project to ensure type safety and consistency.
- `constants/`: Stores constant values that are used in multiple places within the application, such as API endpoints, configuration settings, or static data.
- `styles/`: Contains global styles and Tailwind CSS configuration.
- `public/`: Contains static assets that are served directly by the web server.
  - `public/assets/`: Specifically used for storing static assets like images, fonts, or other media files.

## Getting Started

```bash
npm install
npm run dev
```
