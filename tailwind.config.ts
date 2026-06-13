import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#4A235A",
          50: "#F5EDF8",
          100: "#E8D5F0",
          200: "#D1AADE",
          300: "#B87FC9",
          400: "#9B55B3",
          500: "#7D2D9E",
          600: "#4A235A",
          700: "#3A1B47",
          800: "#2A1333",
          900: "#1A0B20",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F0D060",
          champagne: "#F7E7CE",
          dark: "#A88920",
        },
        cream: "#FBF8F3",
        offwhite: "#F5F0EB",
        charcoal: "#1C1C1E",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
        accent: ["var(--font-cinzel)", "serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #F0D060 50%, #A88920 100%)",
        "purple-gradient": "linear-gradient(135deg, #4A235A 0%, #7D2D9E 100%)",
        "hero-overlay": "linear-gradient(to bottom, rgba(26,11,32,0.7) 0%, rgba(74,35,90,0.4) 60%, rgba(26,11,32,0.8) 100%)",
        "card-shine": "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, transparent 50%, rgba(212,175,55,0.05) 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "scale-in": "scaleIn 0.5s ease forwards",
        "slide-left": "slideLeft 0.7s ease forwards",
        "slide-right": "slideRight 0.7s ease forwards",
        "gold-pulse": "goldPulse 3s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        goldPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212,175,55,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(212,175,55,0.6)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        "luxury": "0 20px 60px rgba(74,35,90,0.15), 0 4px 20px rgba(0,0,0,0.08)",
        "gold": "0 8px 32px rgba(212,175,55,0.35)",
        "card": "0 2px 20px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.04)",
        "hover": "0 30px 80px rgba(74,35,90,0.2), 0 8px 30px rgba(0,0,0,0.1)",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "112": "28rem",
        "128": "32rem",
      },
    },
  },
  plugins: [],
};

export default config;
