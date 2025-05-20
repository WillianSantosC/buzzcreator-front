import { styled } from "../../../styled-system/jsx";

export const Container = styled("div", {
  base: {
    display: "grid",
    gridTemplateColumns: { base: "1fr", _mdMI: "2fr 1fr" },
    gridGap: "token(spacings.large)",
    margin: "token(spacings.large) 0",
  },
});

export const Wrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "space-between",
  },
});

export const Content = styled("div", {
  base: {
    flex: "1 0 auto",
  },
});

export const EmptyContainer = styled("div", {
  base: {
    marginTop: "token(spacings.xxsmall)",
    "& .EmptyWrapper": {
      "& > img": {
        height: { base: "10rem", _mdMI: "15rem" },
      },
    },
  },
});
