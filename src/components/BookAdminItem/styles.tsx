import { styled } from "../../../styled-system/jsx";

export const Wrapper = styled("div", {
  base: {
    padding: "token(spacings.small)",
    borderBottom: "0.1rem solid token(colors.lightGray)",
    display: { _mdMI: "flex" },
  },
});

export const IconsWrapper = styled("div", {
  base: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: "token(spacings.xsmall)",
  },
});

export const Icon = styled("img", {
  base: {
    width: "2rem",
    height: "2rem",
    cursor: "pointer",
  },
});

export const BookContent = styled("div", {
  base: {
    display: "flex",
  },
});

export const ImageBox = styled("div", {
  base: {
    flexShrink: "0",
    marginRight: { base: "1.2rem", _mdMI: "token(spacings.xsmall)" },
    width: { base: "9rem", _mdMI: "15rem" },
    height: { base: "8.6rem", _mdMI: "15rem" },

    "& img": {
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
    alignItems: "flex-start",
  },
});

export const Title = styled("h3", {
  base: {
    fontSize: { base: "token(font.sizes.small)", _mdMI: "2rem" },
    lineHeight: { base: "token(font.sizes.small)", _mdMI: "2rem" },
    fontWeight: "token(font.bold)",
    color: "token(colors.white)",
    marginBottom: "token(spacings.xxsmall)",
  },
});

export const InfoWrapper = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    flexDirection: { base: "column", _mdMI: "row" },
    gap: { base: "1rem" },
    width: "100%",
    justifyContent: "space-between",
  },
});

export const Price = styled("div", {
  base: {
    color: "token(colors.white)",
    padding: "0.2rem token(spacings.xxsmall)",
    backgroundColor: "token(colors.secondary)",
    borderRadius: "token(border.radius)",
    fontSize: "token(font.sizes.small)",
    fontWeight: "token(font.bold)",
  },
});

export const Stock = styled("div", {
  base: {
    color: "token(colors.white)",
    padding: "0.2rem token(spacings.xxsmall)",
    backgroundColor: "token(colors.secondary)",
    borderRadius: "token(border.radius)",
    fontSize: "token(font.sizes.small)",
    fontWeight: "token(font.bold)",
  },
});

export const CardInfo = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    marginTop: { _mdMI: "token(spacings.xsmall)" },

    "& img": {
      marginLeft: "token(spacings.xxsmall)",
    },
  },
});
