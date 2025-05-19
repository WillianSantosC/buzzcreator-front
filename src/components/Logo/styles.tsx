import { styled } from "../../../styled-system/jsx";

export const Logo = styled("h1", {
  base: {
    fontSize: "2xl",
    fontWeight: "bold",
    marginBottom: "6",
    color: "token(colors.yellow)",
    "& span": {
      color: "token(colors.primary)",
    },
  },
});
