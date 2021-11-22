const defaultTheme = require("tailwindcss/defaultTheme");
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
      "./hugo_stats.json",
      "./layouts/**/*.html",
      "./content/**/*.html",
      "./exampleSite/hugo_stats.json",
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
      primary: colors.blue,
      secondary: colors.cyan,
      neutral: colors.gray,
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
              color: theme('colors.neutral.700', defaultTheme.colors.gray[700]),
              '[class~="lead"]': {
                color: theme('colors.neutral.600', defaultTheme.colors.gray[600]),
              },
              a: {
                color: theme("colors.primary.600", defaultTheme.colors.gray[900]),
                textDecoration: "none",
                "&:hover": {
                  color: theme("colors.primary.700"),
                  textDecoration: "underline",
                  textDecorationColor: theme("colors.primary.700"),
                },
              },
              strong: {
                color: theme('colors.neutral.900', defaultTheme.colors.gray[900]),
              },
              "ol > li::before": {
                color: theme('colors.neutral.500', defaultTheme.colors.gray[500]),
              },
              "ul > li::before": {
                backgroundColor: theme('colors.neutral.300', defaultTheme.colors.gray[300]),
              },
              hr: {
                borderColor: theme('colors.neutral.200', defaultTheme.colors.gray[200]),
              },
              blockquote: {
                color: theme('colors.neutral.900', defaultTheme.colors.gray[900]),
                borderLeftColor: theme('colors.neutral.200', defaultTheme.colors.gray[200]),
              },
              h1: {
                color: theme('colors.neutral.900', defaultTheme.colors.gray[900]),
                position: "relative",
              },
              h2: {
                color: theme('colors.neutral.900', defaultTheme.colors.gray[900]),
                position: "relative",
              },
              h3: {
                color: theme('colors.neutral.900', defaultTheme.colors.gray[900]),
                position: "relative",
              },
              h4: {
                color: theme('colors.neutral.900', defaultTheme.colors.gray[900]),
                position: "relative",
              },
              'figure figcaption': {
                color: theme('colors.neutral.500', defaultTheme.colors.gray[500]),
              },
              code: {
                color: theme('colors.neutral.900', defaultTheme.colors.gray[900]),
              },
              "a code": {
                color: theme('colors.primary.600', defaultTheme.colors.gray[900]),
              },
              pre: {
                color: theme('colors.neutral.200', defaultTheme.colors.gray[200]),
                backgroundColor: theme('colors.neutral.800', defaultTheme.colors.gray[800]),
              },
              thead: {
                color: theme('colors.neutral.900', defaultTheme.colors.gray[900]),
                borderBottomColor: theme('colors.neutral.300', defaultTheme.colors.gray[300]),
              },
              "tbody tr": {
                borderBottomColor: theme('colors.neutral.200', defaultTheme.colors.gray[200]),
              },
              kbd: {
                backgroundColor: theme("colors.neutral.200", defaultTheme.colors.gray[200]),
                padding: "0.1rem 0.4rem",
                borderRadius: "0.25rem",
                fontSize: "0.9rem",
                fontWeight: "600",
              },
              mark: {
                backgroundColor: theme("colors.secondary.200", defaultTheme.colors.yellow[200]),
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
              '[class~="lead"]': {
                color: theme('colors.neutral.400', defaultTheme.colors.gray[400]),
              },
              a: {
                color: theme("colors.primary.500"),
                "&:hover": {
                  color: theme("colors.primary.400"),
                  textDecorationColor: theme("colors.primary.400"),
                },
              },
              strong: {
                color: theme("colors.neutral.50"),
              },
              "ol > li::before": {
                color: theme("colors.neutral.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.neutral.600"),
              },
              hr: {
                borderColor: theme("colors.neutral.700"),
              },
              blockquote: {
                color: theme("colors.neutral.100"),
                borderLeftColor: theme("colors.primary.700"),
              },
              h1: {
                color: theme("colors.neutral.50"),
              },
              h2: {
                color: theme("colors.neutral.50"),
              },
              h3: {
                color: theme("colors.neutral.50"),
              },
              h4: {
                color: theme("colors.neutral.50"),
              },
              "figure figcaption": {
                color: theme("colors.neutral.400"),
              },
              code: {
                color: theme("colors.secondary.50"),
              },
              "a code": {
                color: theme("colors.primary.500"),  // links
              },
              pre: {
                color: theme("colors.neutral.300"),
                backgroundColor: 'rgb(0 0 0 / 50%)',
              },
              thead: {
                color: theme("colors.neutral.50"), // headings
                borderBottomColor: theme("colors.neutral.600"),
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
