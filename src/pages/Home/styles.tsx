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
