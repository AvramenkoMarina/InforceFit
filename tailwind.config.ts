import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1380px",
        "3xl": "1536px",
      },
    },
  },
} satisfies Config;
