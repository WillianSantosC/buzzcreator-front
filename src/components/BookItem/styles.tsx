import { styled } from "../../../styled-system/jsx";

export const Wrapper = styled("div", {
  base: {
    padding: "token(spacings.small)",
    borderBottom: "0.1rem solid token(colors.lightGray)",
    display: { _mdMI: "flex" },
  },
});

export const AlterWrapper = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: { base: "1rem" },
  },
});

export const Controls = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: { base: "1rem" },
    border: "solid 0.1rem token(colors.darkGray)",
    borderRadius: "token(border.radius)",
    padding: "0.3rem",

    "& button": {
      border: "none",
      outline: "none",
      padding: "0.3rem 0.8rem",
      margin: "0",
      font: "bold",
      fontSize: "token(font.sizes.xsmall)",
      background: "token(colors.lightGray)",
      borderRadius: "token(border.radius)",
    },
  },
});

export const InfoWrapper = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: { base: "1rem" },
    width: "20%",
    justifyContent: "space-between",
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
    width: { base: "9.6rem", _mdMI: "15rem" },
    height: { base: "5.6rem", _mdMI: "7rem" },

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
    color: "token(colors.black)",
    marginBottom: "token(spacings.xxsmall)",
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

export const DownloadLink = styled("a", {
  base: {
    color: "token(colors.primary)",
    marginLeft: "token(spacings.xxsmall)",
  },
});

export const PaymentContent = styled("div", {
  base: {
    color: "token(colors.gray)",
    fontSize: "token(font.sizes.small)",
    display: "flex",
    minWidth: "28rem",
    flexDirection: { base: "column", _mdMI: "column-reverse" },
    marginTop: { base: "token(spacings.xsmall)", _mdMI: "0" },
    flex: { _mdMI: "1" },
    justifyContent: { _mdMI: "space-between" },
    alignItems: { _mdMI: "flex-end" },
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
