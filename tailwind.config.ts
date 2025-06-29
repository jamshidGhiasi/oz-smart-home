import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }: { theme: any }) => ({
        invert: {
          css: {
            a: {
              color: theme("colors.yellow.400"),
              fontWeight: "600",
              textDecoration: "underline",
              "&:hover": {
                color: theme("colors.yellow.300"),
              },
            },
            "ul > li::marker": {
              color: theme("colors.gray.400"),
            },
            "ol > li::marker": {
              color: theme("colors.gray.400"),
            },
            ul: {
              paddingLeft: theme("spacing.6"),
              marginBottom: theme("spacing.4"),
              listStyleType: "disc",
            },
            ol: {
              paddingLeft: theme("spacing.6"),
              marginBottom: theme("spacing.4"),
              listStyleType: "decimal",
            },
            li: {
              marginBottom: theme("spacing.2"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};

export default config;
