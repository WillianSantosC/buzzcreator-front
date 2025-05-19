import { styled } from "../../../styled-system/jsx";

export const Wrapper = styled("div", {
  base: {
    color: "token(colors.white)",
    width: "2.4rem",
    height: "2.4rem",
    position: "relative",
  },
});

export const Badge = styled("span", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "token(colors.secondary)",
    color: "token(colors.white)",
    fontSize: "1rem",
    borderRadius: "50%",
    width: "1.6rem",
    height: "1.6rem",
    position: "absolute",
    top: "-0.7rem",
    right: "-0.9rem",
  },
});
