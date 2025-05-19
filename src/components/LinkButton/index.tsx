import { AnchorHTMLAttributes } from "react";

import * as S from "./styles";

type ButtonTypes = AnchorHTMLAttributes<HTMLAnchorElement>;

type LinkButtonProps = {
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: JSX.Element;
} & ButtonTypes;

const LinkButton = ({
  children,
  icon,
  size = "medium",
  fullWidth = false,
  minimal = false,
  href,
  ...props
}: LinkButtonProps) => (
  <S.Wrapper
    href={href}
    size={size}
    fullWidth={fullWidth}
    minimal={minimal}
    hasIcon={!!icon}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default LinkButton;
