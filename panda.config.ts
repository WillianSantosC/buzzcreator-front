import { defineConfig } from "@pandacss/dev";
import globalCss from "@/styles/global";
import theme from "@/styles/theme";
import conditions from "@/styles/conditions";

export default defineConfig({
  // CSS conditions presets
  conditions,

  // Global css styles
  globalCss,

  // Useful for theme customization
  theme,

  // Whether to use css reset
  preflight: false,

  // Remove default design tokens
  presets: [],

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: "styled-system",

  // The JSX framework to use
  jsxFramework: "react",
});
