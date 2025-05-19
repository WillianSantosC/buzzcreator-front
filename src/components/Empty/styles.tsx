import { styled } from "../../../styled-system/jsx";

export const Wrapper = styled("main", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
});

export const Image = styled("img", {
  base: {
    maxWidth: "100%",
  },
});

export const Title = styled("h2", {
  base: {
    color: "token(colors.primary)",
    fontSize: "token(font.sizes.xxlarge)",
  },
});

export const Description = styled("p", {
  base: {
    color: "token(colors.white)",
    fontSize: "token(font.sizes.large)",
    fontWeight: "token(font.light)",
    marginBottom: "token(spacings.medium)",
  },
});
