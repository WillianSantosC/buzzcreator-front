import * as S from "./styles";

export type HeadingProps = {
  children: React.ReactNode;
  color?: "white" | "black";
  size?: "small" | "medium" | "huge";
  lineColor?: "primary" | "secondary";
  lineLeft?: boolean;
  lineBottom?: boolean;
};

const Heading = ({
  children,
  color = "white",
  size = "medium",
  lineColor = "primary",
  lineLeft = false,
  lineBottom = false,
}: HeadingProps) => (
  <S.Wrapper
    className="HeadingWrapper"
    color={color}
    size={size}
    lineColor={lineColor}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
  >
    {children}
  </S.Wrapper>
);

export default Heading;
