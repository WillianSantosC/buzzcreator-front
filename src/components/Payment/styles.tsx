import { styled } from "../../../styled-system/jsx";

export const Wrapper = styled("main", {
  base: {
    background: "token(colors.white)",
    height: "20rem",
  },
});

export const Body = styled("div", {
  base: {
    padding: "token(spacings.small)",
  },
});

export const Footer = styled("div", {
  base: {
    background: "token(colors.lightGray)",
    color: "token(colors.black)",
    fontWeight: "token(font.bold)",
    padding: "token(spacings.small)",
    display: "flex",
    alignItems: "center",

    "& ButtonWrapper": {
      paddingLeft: "token(spacings.xxsmall)",
      paddingRight: "token(spacings.xxsmall)",
      outline: "0",
    },
  },
});

export const CardsList = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    marginTop: "3rem",
  },
});

export const CardInfo = styled("span", {
  base: {
    display: "flex",
    alignItems: "center",

    "& img": {
      marginRight: "token(spacings.xxsmall)",
    },
  },
});

export const CardItem = styled("label", {
  base: {
    background: "token(colors.lightGray)",
    borderRadius: "0.2rem",
    color: "token(colors.black)",
    padding: "0 token(spacings.xxsmall)",
    height: "5rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",

    justifyContent: " space-between",

    "&:not(:last-child)": {
      marginBottom: "token(spacings.xxsmall)",
    },
  },
});

export const AddCard = styled("div", {
  base: {
    background: "token(colors.lightGray)",
    borderRadius: "0.2rem",
    color: "token(colors.black)",
    padding: "0 token(spacings.xxsmall)",
    height: "5rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",

    "& svg": {
      marginLeft: "token(spacings.xxsmall)",
      marginRight: "token(spacings.xsmall)",
      width: "2.4rem",
    },
  },
});
