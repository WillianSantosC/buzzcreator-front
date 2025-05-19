import { styled } from "../../../styled-system/jsx";

const MediaMatch = styled("div", {
  variants: {
    lessThan: {
      small: {
        display: { base: "none", _smMX: "block" },
      },
      medium: {
        display: { base: "none", _mdMX: "block" },
      },
      large: {
        display: { base: "none", _lgMX: "block" },
      },
      huge: {
        display: { base: "none", _xlMX: "block" },
      },
    },
    greaterThan: {
      small: {
        display: { base: "none", _smMI: "block" },
      },
      medium: {
        display: { base: "none", _mdMI: "block" },
      },
      large: {
        display: { base: "none", _lgMI: "block" },
      },
      huge: {
        display: { base: "none", _xlMI: "block" },
      },
    },
  },
});

export default MediaMatch;
