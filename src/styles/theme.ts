import keyframes from "./keyframes";

const theme = {
  extend: {
    keyframes,
    tokens: {
      grid: {
        container: { value: "130rem" },
        gutter: { value: "3.2rem" },
      },
      transition: {
        default: { value: "0.3s ease-in-out" },
        fast: { value: "0.1s ease-in-out" },
      },
      border: {
        radius: { value: "0.4rem" },
      },
      colors: {
        primary: { value: "#067C7A" },
        secondary: { value: "#0B9D9A" },
        yellow: { value: "#EA7C2D" },
        mainBg: { value: "#F6F7F9" },
        black: { value: "#000000" },
        lightGray: { value: "#F7F7F7" },
        gray: { value: "#F0F1F5" },
        darkGray: { value: "#B3B3C1" },
      },
      font: {
        family: {
          value:
            "dmSans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        },
        light: { value: "300" },
        normal: { value: "400" },
        bold: { value: "600" },
        sizes: {
          xsmall: { value: "1.2rem" },
          small: { value: "1.4rem" },
          medium: { value: "1.6rem" },
          large: { value: "1.8rem" },
          xlarge: { value: "2.0rem" },
          xxlarge: { value: "2.8rem" },
          huge: { value: "5.2rem" },
        },
      },
      spacings: {
        xxsmall: { value: "0.8rem" },
        xsmall: { value: "1.6rem" },
        small: { value: "2.4rem" },
        medium: { value: "3.2rem" },
        large: { value: "4.0rem" },
        xlarge: { value: "4.8rem" },
        xxlarge: { value: "5.6rem" },
      },
      layers: {
        base: { value: "10" },
        menu: { value: "20" },
        overlay: { value: "30" },
        modal: { value: "40" },
        alwaysOnTop: { value: "50" },
      },
      breakpoint: {
        sm: { value: "450px" },
        md: { value: "768px" },
        lg: { value: "1170px" },
        xl: { value: "1440px" },
      },
    },
  },
};

export default theme;
