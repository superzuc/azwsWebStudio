import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        control: "var(--control)",
        variant: "var(--variant)",
        win: "var(--win)",
        panel: "var(--panel)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: { page: "72rem" },
    },
  },
  plugins: [],
};
export default config;
