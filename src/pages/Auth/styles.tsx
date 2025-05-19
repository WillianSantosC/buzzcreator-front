import { styled } from "../../../styled-system/jsx";

export const Wrapper = styled("main", {
  base: {
    display: "grid",
    gridTemplateColumns: { base: "1fr", _mdMI: "1fr 1fr" },
    height: "100vh",
  },
});

export const BannerBlock = styled("div", {
  base: {
    position: "relative",
    backgroundImage: "url(/img/books.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    padding:
      "token(spacings.xxlarge) token(spacings.xxlarge) token(spacings.large)",
    display: { _mdMX: "none" },

    _after: {
      content: "''",
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      background: "token(colors.black)",
      opacity: "0.85",
    },
  },
});

export const BannerContent = styled("div", {
  base: {
    color: "token(colors.white)",
    display: "grid",
    gridTemplateColumns: "1fr",
    justifyContent: "space-between",
    height: "100%",
    position: "relative",
    zIndex: "token(layers.base)",
  },
});

export const Subtitle = styled("h3", {
  base: {
    fontSize: "token(font.sizes.xxlarge)",
    fontWeight: "token(font.light)",
    marginTop: "token(spacings.xxsmall)",

    "& strong": {
      color: "token(colors.primary)",
    },
  },
});

export const Footer = styled("p", {
  base: {
    fontSize: "token(font.sizes.xsmall)",
    textAlign: "center",
    alignSelf: "end",
  },
});

export const Content = styled("div", {
  base: {
    background: "token(colors.white)",
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const ContentWrapper = styled("div", {
  base: {
    width: { base: "30rem", _mdMI: "36rem" },

    "& .HeadingWrapper": {
      marginBottom: "token(spacings.medium)",
    },

    "& .LogoWrapper": {
      margin: "0 auto token(spacings.xxlarge})",
    },
  },
});
