import { styled } from "../../../styled-system/jsx";

export const Wrapper = styled("main", {
  base: {
    display: "grid",
    gridTemplateColumns: { base: "1fr", _mdMI: "2fr 1fr" },
    padding: "token(spacings.large)",
  },
});

export const AddToCart = styled("div", {
  base: {
    width: "100%",
    maxWidth: "token(grid.container)",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: { _mdMI: "calc(token(grid.gutter) / 2)" },
    paddingRight: { _mdMI: "calc(token(grid.gutter) / 2)" },
    display: "grid",
    gridGap: "token(spacings.medium)",
    margin: { base: "token(spacings.xxsmall) 0" },

    "& .ButtonWrapper": {
      padding: { base: "0", _mdMI: "token(spacings.xxsmall)" },
    },
  },
});
