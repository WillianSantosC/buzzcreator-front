import { styled } from "../../../styled-system/jsx";

export const FormWrapper = styled("div", {
  base: {
    "& .TextFieldWrapper": {
      margin: "token(spacings.xxsmall) 0",
    },

    "& .ButtonWrapper": {
      margin: "token(spacings.medium) auto token(spacings.xsmall)",
    },
  },
});

export const FormLink = styled("div", {
  base: {
    fontSize: "token(font.sizes.small)",
    color: "token(colors.black)",
    textAlign: "center",

    "& a": {
      color: "token(colors.secondary)",
      textDecoration: "none",
      borderBottom: "0.1rem solid token(colors.secondary)",
      transition: "color, border, token(transition.fast)",

      _hover: {
        color: "#28b1a1",
        borderBottom: "0.1rem solid #28b1a1",
      },
    },
  },
});
