import { styled } from "../../../styled-system/jsx";

export const Wrapper = styled("article", {
  base: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    backgroundColor: "token(colors.white)",
  },
});

export const ImageBox = styled("div", {
  base: {
    height: "20rem",
    width: "100%",
    background: "#f6f7f8",
    backgroundImage:
      "linear-gradient( to right,#f6f7f8 0%,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%)",
    backgroundSize: "80rem 14rem",
    animation: "placeholderShimmer 1s linear infinite forwards",

    "& > img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
});

export const Content = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    height: "100%",
    margin: "token(spacings.xsmall)",
  },
});

export const Info = styled("div", {
  base: {
    maxWidth: "calc(100% - 2.5rem)",
  },
});

export const Title = styled("h3", {
  base: {
    fontSize: "token(font.sizes.medium)",
    lineHeight: "token(font.sizes.medium)",
    fontWeight: "token(font.bold)",
    color: "token(colors.black)",
  },
});

export const Author = styled("h4", {
  base: {
    fontSize: "token(font.sizes.small)",
    fontWeight: "token(font.bold)",
    color: "token(colors.gray)",
  },
});

export const BuyBox = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: "token(spacings.xxsmall)",
  },
});

export const Price = styled("div", {
  base: {
    display: "inline-flex",
    fontWeight: "token(font.bold)",
    height: "3rem",
    alignItems: "center",
    color: "token(colors.white)",
    padding: "0 token(spacings.xxsmall)",
    backgroundColor: "token(colors.secondary)",
    borderRadius: "token(border.radius)",
    marginRight: "calc(token(spacings.xxsmall) / 2)",
  },
});
