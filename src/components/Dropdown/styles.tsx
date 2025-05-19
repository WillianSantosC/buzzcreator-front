import { styled } from "../../../styled-system/jsx";

export const Title = styled("div", {
  base: {
    cursor: "pointer",
    color: "token(colors.white)",
    position: "relative",
    display: "flex",
    alignItems: "center",
    paddingRight: "2.4rem",
  },
});

export const Content = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    background: "token(colors.white)",
    color: "token(colors.black)",
    marginTop: "token(spacings.small)",
    position: "absolute",
    right: "0",

    _before: {
      content: "''",
      position: "absolute",
      borderRight: "1.2rem solid transparent",
      borderLeft: "1.2rem solid transparent",
      borderBottom: "1.2rem solid token(colors.white)",
      top: "-1.2rem",
      right: "0.8rem",
    },
  },
});

export const Wrapper = styled("div", {
  base: {
    position: "relative",
    width: "max-content",
  },
  variants: {
    isOpen: {
      true: {
        "& .Content": {
          transition:
            "transform 0.2s ease-in, opacity token(transition.default)",
          opacity: "1",
          pointerEvents: "auto",
          transform: "translateY(0)",
        },
      },
      false: {
        "& .Content": {
          transition:
            "transform 0.2s ease-in, opacity token(transition.default)",
          opacity: "0",
          pointerEvents: "none",
          transform: "translateY(-2rem)",
        },
      },
    },
  },
});
