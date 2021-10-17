// const theme = require("tailwindcss/defaultTheme");
const typography = require("@tailwindcss/typography")
const underlineUtils = require("tailwind-underline-utils")
const colors = require("tailwindcss/colors")

//const colorBrand = 'var(--color-pretty)';

// Utils
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "")
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`
const px = (px) => `${px}px`

module.exports = {
  // mode: "production" !== process.env.HUGO_ENVIRONMENT ? "jit" : null,
  important: true, // See https://tailwindcss.com/docs/configuration#important
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: [
      "./layouts/**/*.html",
      "./content/**/*.html",
      "./exampleSite/layouts/**/*.html",
      "./exampleSite/content/**/*.html",
    ],
    extractors: [
      {
        extractor: (content) => {
          let els = JSON.parse(content).htmlElements
          return els.tags.concat(els.classes, els.ids)
        },
        extensions: ["json"],
      },
    ],
    mode: "all",
  },
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      neutral: colors.gray,
      primary: colors.blue,
      secondary: colors.cyan,
    },
    underlineOffset: {
      small: "2px",
    },
    underlineThickness: {
      bold: "2px",
    },
    extend: {
      boxShadow: {
        dark: "0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06)",
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
      },
      zIndex: {
        "-10": "-10",
      },
      maxWidth: {
        xxs: "12rem",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              color: theme("colors.neutral.700"),
              a: {
                color: theme("colors.primary.500"),
                textDecoration: "none",
                fontWeight: "500",
                "&:hover": {
                  borderRadius: "0.09rem",
                  color: theme("colors.primary.600"),
                  textDecoration: "underline",
                  textDecorationColor: theme("colors.primary.600"),
                },
              },
              strong: {
                color: theme("colors.neutral.900"),
              },
              "ol > li::before": {
                color: theme("colors.neutral.800"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.neutral.500"),
              },
              hr: {
                borderColor: theme("colors.neutral.200"),
              },
              blockquote: {
                color: theme("colors.neutral.800"),
                borderLeftColor: theme("colors.primary.200"),
              },
              h1: {
                color: theme("colors.neutral.800"),
                position: "relative",
              },
              h2: {
                color: theme("colors.neutral.800"),
                position: "relative",
              },
              h3: {
                color: theme("colors.neutral.800"),
                position: "relative",
              },
              h4: {
                color: theme("colors.neutral.800"),
                position: "relative",
              },
              code: {
                color: theme("colors.secondary.700"),
              },
              "pre code": {
                color: theme("colors.neutral.700"),
              },
              pre: {
                color: theme("colors.neutral.700"),
                backgroundColor: theme("colors.neutral.50"),
              },
              "pre code": {
                color: theme("colors.neutral.700"),
              },
              thead: {
                color: theme("colors.neutral.800"),
                borderBottomColor: theme("colors.neutral.500"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.neutral.300"),
              },
              kbd: {
                backgroundColor: theme("colors.neutral.200"),
                padding: "0.1rem 0.4rem",
                borderRadius: "0.25rem",
                fontSize: "0.9rem",
                fontWeight: "600",
              },
              mark: {
                backgroundColor: theme("colors.secondary.200"),
                padding: "0.1rem 0.2rem",
                borderRadius: "0.12rem",
              },
            },
          ],
        },
        night: {
          css: [
            {
              color: theme("colors.neutral.300"),
              a: {
                color: theme("colors.primary.300"),
                textDecorationColor: theme("colors.neutral.500"),
                "&:hover": {
                  color: theme("colors.primary.500"),
                  textDecorationColor: theme("colors.primary.500"),
                },
              },
              strong: {
                color: theme("colors.neutral.200"),
              },
              "ol > li::before": {
                color: theme("colors.neutral.300"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.neutral.600"),
              },
              hr: {
                borderColor: theme("colors.neutral.500"),
              },
              blockquote: {
                color: theme("colors.neutral.200"),
                borderLeftColor: theme("colors.primary.900"),
              },
              h1: {
                color: theme("colors.neutral.200"),
              },
              h2: {
                color: theme("colors.neutral.200"),
              },
              h3: {
                color: theme("colors.neutral.200"),
              },
              h4: {
                color: theme("colors.neutral.200"),
              },
              "figure figcaption": {
                color: theme("colors.neutral.400"),
              },
              code: {
                color: theme("colors.secondary.400"),
              },
              "a code": {
                color: theme("colors.neutral.200"),
              },
              pre: {
                color: theme("colors.neutral.200"),
                backgroundColor: theme("colors.neutral.700"),
              },
              "pre code": {
                color: theme("colors.neutral.200"),
              },
              thead: {
                color: theme("colors.neutral.200"),
                borderBottomColor: theme("colors.neutral.500"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.neutral.700"),
              },
              kbd: {
                backgroundColor: theme("colors.neutral.700"),
                color: theme("colors.neutral.300"),
              },
              mark: {
                backgroundColor: theme("colors.secondary.400"),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
      typography: ["responsive", "dark"],
      margin: ["last"],
      borderColor: ["active", "checked"],
    },
  },
  plugins: [typography, underlineUtils],
}
