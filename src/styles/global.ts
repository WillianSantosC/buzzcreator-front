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
    // "&:active": {
    //   transform: "translateY(1px)",
    //   textShadow: "-1px -1px 0px #777, -1px -1px 0px #777",
    //   boxShadow: "inset 1px 1px 4px #222",
    // },
  },

  "html, body, #__next": {
    height: "100%",
  },

  body: {
    fontFamily:
      "dmSans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },
});

export default globalCss;
