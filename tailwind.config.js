// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0156FF',    // Color-3 (Main brand blue)
        'brand-black': '#000000',   // Color-7 (Top bar)
        'brand-gray': '#A2A6B0',    // Color-5/6 (Subtext)
        'brand-white': '#FFFFFF',   // Color-1
        'brand-green': '#78A962',   // Color-9
        'brand-red': '#E3503E',     // Color-8
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Standard high-end e-commerce font
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      }
    },
  },
}