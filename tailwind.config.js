/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        background: "var(--bg)",
        card: {
          DEFAULT: "var(--card)",
          inset: "var(--card-inset)",
        },
        border: {
          DEFAULT: "var(--border)",
          strong: "var(--border-strong)",
          outline: "var(--border-outline)",
        },
        text: "var(--text)",
        body: "var(--body)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        accent: {
          DEFAULT: "var(--accent)",
          ink: "var(--accent-ink)",
        },
        success: "var(--success)",
        "code-string": "var(--code-string)",
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
