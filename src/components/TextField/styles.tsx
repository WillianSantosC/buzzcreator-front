import { styled } from "../../../styled-system/jsx";

export const Wrapper = styled("div", {
  base: {},
  variants: {
    error: {
      true: {
        "& .InputWrapper": {
          borderColor: "token(colors.red)",
        },

        "& .Icon, .Label": {
          color: "token(colors.red)",
        },
      },
    },
    disabled: {
      true: {
        "& .Label, .Input, .Icon": {
          cursor: "not-allowed",
          color: "token(colors.gray)",

          _placeholder: {
            color: "currentColor",
          },
        },
      },
    },
  },
});

export const Error = styled("p", {
  base: {
    color: "token(colors.red)",
    fontSize: "token(font.sizes.xsmall)",
  },
});

export const Icon = styled("img", {
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

export const Label = styled("label", {
  base: {
    fontSize: "token(font.sizes.small)",
    color: "token(colors.black)",
    cursor: "pointer",
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
