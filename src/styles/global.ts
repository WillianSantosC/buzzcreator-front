import { defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  "*": {
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",

    "&::before, &::after": {
      boxSizing: "inherit",
    },
  },

  button: {
    cursor: "pointer",
  },

  "html, body, #__next": {
    height: "100%",
  },

  body: {
    fontFamily:
      "dmSans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    backgroundColor: "token(colors.mainBg)",
  },
});

export default globalCss;
