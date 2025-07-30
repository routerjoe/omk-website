# Project Plan: Ohana Mana Koa Nonprofit Website

This document outlines the architecture, components, and implementation strategy for building a responsive and accessible website for Ohana Mana Koa using Next.js and Tailwind CSS.

---

### **1. Guiding Principles & Technology Stack**

*   **Framework**: **Next.js** (with TypeScript) for its robust features like server-side rendering (SSR), static site generation (SSG), and optimized performance.
*   **Styling**: **Tailwind CSS** for a utility-first approach to create a custom, responsive design system efficiently.
*   **Accessibility**: Adherence to WCAG 2.1 guidelines will be a priority, ensuring the site is usable for everyone. This includes semantic HTML, keyboard navigation, and proper ARIA attributes.
*   **Component-Based Architecture**: We will use React's component model to create reusable and maintainable UI elements.

---

### **2. Project Setup & Structure**

**A. Initial Setup Commands:**
1.  Create the Next.js application:
    ```bash
    npx create-next-app@latest omk-website --ts --tailwind --eslint --app-router-false --src-dir --import-alias "@/*"
    ```
2.  Navigate into the project directory:
    ```bash
    cd omk-website
    ```

**B. Folder Structure:**
```
omk-website/
├── src/
│   ├── components/         # Reusable React components
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/             # General UI elements (buttons, cards, etc.)
│   │   │   ├── BoardCard.tsx
│   │   │   ├── ProgramCard.tsx
│   │   │   ├── DocumentCard.tsx
│   │   │   └── Logo.tsx
│   │   └── Layout.tsx      # Main site layout component
│   ├── data/               # Placeholder data files
│   │   ├── board.ts
│   │   ├── programs.ts
│   │   └── documents.ts
│   ├── pages/              # Next.js pages
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx       # Homepage
│   │   ├── about.tsx
│   │   ├── programs.tsx
│   │   ├── donate.tsx
│   │   ├── get-involved.tsx
│   │   └── public-documents.tsx
│   └── styles/
│       └── globals.css     # Global styles
├── public/
│   ├── images/
│   │   ├── Logo.png
│   │   └── OMK-Logo-tagline.png
│   └── favicon.ico         # Generated from the logo
├── tailwind.config.ts      # Tailwind CSS configuration
└── next.config.js          # Next.js configuration
```

**C. Tailwind CSS Configuration:**
The `tailwind.config.ts` file will be extended with the brand's color palette.

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        koaWood: '#5C3A21',
        oceanBlue: '#3B82F6',
        palmGreen: '#65A30D',
      },
    },
  },
  plugins: [],
}
export default config
```

---

### **3. Component Architecture**

The site will be built from a set of reusable components.

*   **`Logo.tsx`**: Displays the organization's logo.
*   **`Header.tsx`**: Contains the main navigation and logo.
*   **`Footer.tsx`**: Includes contact info, links, and copyright.
*   **`BoardCard.tsx`**: Displays board member information.
*   **`ProgramCard.tsx`**: Displays program information.
*   **`DocumentCard.tsx`**: Displays public document links.

---

### **4. Page Implementation Strategy**

*   **Homepage (`index.tsx`)**: Hero section, Mission/Vision/Values, Programs overview, and a CTA.
*   **About Us (`about.tsx`)**: Introduction and a grid of board members.
*   **Programs (`programs.tsx`)**: A grid of all core programs.
*   **Public Documents (`public-documents.tsx`)**: Downloadable documents and official information.
*   **Donate (`donate.tsx`) & Get Involved (`get-involved.tsx`)**: Forms and CTAs for user engagement.

---

### **5. Asset Management**

*   **Logos**: All logo files will be stored in `public/images/`.
*   **Favicon**: A `favicon.ico` will be generated and placed in the `public/` directory.
*   **Imagery**: Placeholder images will be used initially.