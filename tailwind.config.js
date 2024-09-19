const defaultTheme = require("tailwindcss/defaultTheme");
const typography = require("@tailwindcss/typography");
const colors = require("tailwindcss/colors");

//const colorBrand = 'var(--color-pretty)';

// Utils
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

module.exports = {
  // important: true, // See https://tailwindcss.com/docs/configuration#important
  content: ["./**/hugo_stats.json"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: colors.transparent,
      current: colors.current,
      primary: colors.blue,
      secondary: colors.cyan,
      neutral: colors.zinc,
      yellow: colors.yellow,
      gray: colors.gray,
      pink: colors.pink,
      red: colors.red,
    },
    extend: {
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Segoe UI"',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Source Han Sans CN"',
          '"Microsoft YaHei"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        serif: [
          "ui-serif",
          "Lora",
          '"Source Han Serif CN"',
          "NSimSun",
          "Georgia",
          '"Times New Roman"',
          "Times",
          '"Songti SC"',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          "serif",
        ],
        mono: ["ui-monospace", "SFMono-Regular", "Consolas", "Liberation Mono", "Menlo", "Courier", "monospace"],
      },
      // boxShadow: {
      //   dark: "0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06)",
      // },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
      },
      maxWidth: {
        xxs: "12rem",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.primary.600"),
              "&:hover": {
                color: theme("colors.primary.500"),
              },
            },
            "figure > *": {
              marginLeft: "auto",
              marginRight: "auto",
            },
            figcaption: {
              textAlign: "center",
            },
            mark: {
              color: "var(--tw-prose-body)",
              backgroundColor: theme("colors.yellow.200"),
            },
            "li > input:first-child": {
              marginTop: "auto",
              marginBottom: "auto",
              marginRight: rem(4),
            },
            "li:has(input:first-child)": {
              paddingLeft: "0",
            },
            "li:has(input:first-child)::marker": {
              color: theme("colors.transparent"),
            },
          },
        },
        invert: {
          css: {
            mark: {
              color: "var(--tw-prose-body)",
              backgroundColor: theme("colors.yellow.800"),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
