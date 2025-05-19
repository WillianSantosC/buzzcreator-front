import { styled } from "../../../styled-system/jsx";

export const Wrapper = styled("main", {
  base: {
    background: "token(colors.white)",
    display: "flex",
    flexDirection: "column",
    alignSelf: "start",
  },
  variants: {
    isEmpty: {
      true: {
        "& .EmptyWrapper": {
          paddingBottom: "token(spacings.medium)",
        },
        "& .EmptyImage": {
          maxWidth: "20rem",
        },
        "& .EmptyTitle": {
          fontSize: "token(font.sizes.large)",
        },
        "& .EmptyDescription": {
          color: "token(colors.black)",
          fontSize: "token(font.sizes.medium)",
        },
      },
    },
  },
});

export const Footer = styled("div", {
  base: {
    background: "token(colors.lightGray)",
    color: "token(colors.black)",
    fontWeight: "token(font.bold)",
    fontSize: {
      base: "token(font.sizes.small)",
      _mdMI: "token(font.sizes.medium)",
    },
    padding: { base: "2rem", _mdMI: "token(spacings.small)" },
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export const Total = styled("span", {
  base: {
    color: "token(colors.primary)",
  },
});
