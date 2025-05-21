"use client";

import { InputHTMLAttributes, forwardRef } from "react";
import * as S from "./styles";

export type TextFieldProps = {
  label?: string;
  icon?: string;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      icon,
      iconPosition = "left",
      label,
      name,
      error,
      disabled = false,
      ...props
    },
    ref,
  ) => {
    return (
      <S.Wrapper
        className="TextFieldWrapper"
        disabled={disabled}
        error={!!error}
      >
        {!!label && (
          <S.Label className="Label" htmlFor={name}>
            {label}
          </S.Label>
        )}
        <S.InputWrapper className="InputWrapper">
          {!!icon && (
            <S.Icon src={icon} className="Icon" iconPosition={iconPosition} />
          )}
          <S.Input
            className="Input"
            type="text"
            iconPosition={iconPosition}
            disabled={disabled}
            name={name}
            id={name}
            ref={ref}
            {...props}
          />
        </S.InputWrapper>
        {!!error && <S.Error>{error}</S.Error>}
      </S.Wrapper>
    );
  },
);

TextField.displayName = "TextField";

export default TextField;
