import Container from "@/components/Container";
import { styled } from "../../../styled-system/jsx";

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

export const Main = styled(Container, {
  base: {
    width: "100%",
  },
});

export const Icon = styled("img", {
  base: {},
});

export const EmptyContainer = styled("div", {
  base: {
    "& .EmptyWrapper": {
      "& > img": {
        height: { base: "10rem", _mdMI: "15rem" },
      },
    },
  },
});

export const ShowMore = styled("div", {
  base: {
    color: "token(colors.white)",
    textAlign: "center",
    padding: "token(spacings.medium)",
    textTransform: "uppercase",
    fontWeight: "bold",
    cursor: "pointer",

    "& > svg": {
      color: "token(colors.primary)",
    },
  },
});

export const Input = styled("input", {
  base: {
    color: "token(colors.black)",
    fontFamily: "token(font.family)",
    fontSize: "token(font.sizes.medium)",
    padding: "token(spacings.xxsmall)",
    background: "transparent",
    border: "0",
    outline: "none",
    width: "100%",
  },
  variants: {
    iconPosition: {
      left: {
        paddingLeft: "token(spacings.xsmall)",
      },
      right: {
        paddingRight: "token(spacings.xsmall)",
      },
    },
  },
});

export const InputWrapper = styled("div", {
  base: {
    display: "flex",
    background: "token(colors.lightGray)",
    borderRadius: "0.2rem",
    padding: "0 token(spacings.xsmall)",
    border: "0.2rem solid",
    borderColor: "token(colors.lightGray)",

    "&:focus-within": {
      boxShadow: "0 0 0.5rem token(colors.primary)",
    },
  },
});

export const InputIcon = styled("img", {
  base: {
    display: "flex",
    width: "2.2rem",
    color: "token(colors.gray)",

    "& > svg": {
      width: "100%",
      height: "100%",
    },
  },
  variants: {
    iconPosition: {
      left: {
        order: "0",
      },
      right: {
        order: "1",
      },
    },
  },
});
