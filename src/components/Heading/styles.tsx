import { styled } from "../../../styled-system/jsx";

export const Wrapper = styled("h2", {
  variants: {
    color: {
      white: {
        color: "token(colors.white)",
      },
      black: {
        color: "token(colors.black)",
      },
    },
    lineLeft: {
      true: {
        paddingLeft: "token(spacings.xxsmall)",
      },
    },
    lineBottom: {
      true: {
        position: "relative",

        _after: {
          content: "''",
          position: "absolute",
          left: "0.1rem",
          bottom: "-0.5rem",
          width: "5rem",
          height: "0.8rem",
        },
      },
    },
    size: {
      small: {
        fontSize: "token(font.sizes.medium)",
        _after: {
          width: "3rem",
          height: "0.5rem",
        },
      },
      medium: {
        fontSize: {
          base: "token(font.sizes.xlarge)",
          _mdMI: "token(font.sizes.xxlarge)",
        },
      },
      huge: {
        fontSize: "token(font.sizes.huge)",
      },
    },
    lineColor: {
      primary: {},
      secondary: {},
    },
  },

  compoundVariants: [
    {
      lineLeft: true,
      lineColor: "primary",
      css: {
        borderLeft: "0.7rem solid token(colors.primary)",
      },
    },
    {
      lineLeft: true,
      lineColor: "secondary",
      css: {
        borderLeft: "0.7rem solid token(colors.secondary)",
      },
    },
    {
      lineBottom: true,
      lineColor: "primary",
      css: {
        _after: {
          background: "token(colors.primary)",
        },
      },
    },
    {
      lineBottom: true,
      lineColor: "secondary",
      css: {
        _after: {
          background: "token(colors.secondary)",
        },
      },
    },
  ],
});
