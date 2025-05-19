import { styled } from "../../../styled-system/jsx";

const Container = styled("div", {
  base: {
    width: "100%",
    maxWidth: "token(grid.container)",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "calc(token(grid.gutter) / 2)",
    paddingRight: "calc(token(grid.gutter) / 2)",
  },
});

export default Container;
