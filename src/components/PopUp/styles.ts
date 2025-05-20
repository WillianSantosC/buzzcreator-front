import { styled } from "../../../styled-system/jsx";

export const Wrapper = styled("main", {
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: "token(colors.white)",
    position: "fixed",
    zIndex: "token(layers.menu)",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    height: "100vh",
    overflow: "auto",
    transition: "opacity 0.3s ease-in-out",

    "& > img": {
      cursor: "pointer",
      position: "absolute",
      top: "-0.8rem",
      right: "-0.8rem",
      margin: "token(spacings.xsmall)",
      width: "2.4rem",
      height: "2.4rem",
    },
  },
  variants: {
    isOpen: {
      true: {
        opacity: "1",
        pointerEvents: "all",
      },
      false: {
        opacity: "0",
        pointerEvents: "none",
      },
    },
  },
});

export const Icon = styled("img", {
  base: {
    cursor: "pointer",
  },
});
