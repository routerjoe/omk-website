import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Hawaiian-inspired colors from the palette
        koaWood: '#8B4513',
        deepKoa: '#5C3A21',
        oceanBlue: '#1E40AF',
        lightOcean: '#3B82F6',
        palmGreen: '#16A34A',
        lightPalm: '#65A30D',
        sunsetOrange: '#EA580C',
        coralPink: '#F97316',
        sandBeige: '#FEF3C7',
        lightSand: '#FFFBEB',
        tropicalTeal: '#0D9488',
        skyBlue: '#0EA5E9',
        hibiscusRed: '#DC2626',
        plumeriaWhite: '#FEFEFE',
        lavaBlack: '#1F2937',
      },
    },
  },
  plugins: [],
}
export default config