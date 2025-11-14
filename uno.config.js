import { defineConfig, presetUno, presetIcons } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons()
  ],
  theme: {
    colors: {
      primary: "#2563eb",
      primarySoft: "#dbeafe",
      accent: "#22c55e",
      muted: "#6b7280",
      bg: "#020617",
      surface: "#020617",
      surfaceAlt: "#0b1120"
    },
    borderRadius: {
      xl: "0.75rem",
      "2xl": "1rem"
    }
  }
});
