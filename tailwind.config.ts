import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk Variable'", "sans-serif"],
        sans: ["'Inter Variable'", "sans-serif"],
      },
      boxShadow: {
        cyan: "0 0 30px hsl(188 95% 43% / 0.3)",
        "cyan-strong": "0 0 50px hsl(188 95% 43% / 0.4)",
        strong: "0 20px 50px hsl(0 0% 0% / 0.5)",
      },
      keyframes: {
        // Rings are centered with margins, not translate, so scaling here
        // can't clobber their positioning (transform is one property).
        sonar: {
          "0%": { transform: "scale(0.1)", opacity: "0.8" },
          "100%": { transform: "scale(1)", opacity: "0" },
        },
        wave: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        sonar: "sonar 4s ease-out infinite",
        wave: "wave 20s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
