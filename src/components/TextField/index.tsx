"use client";

import { InputHTMLAttributes, useState } from "react";

import * as S from "./styles";

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  initialValue?: string;
  icon?: string;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  icon,
  iconPosition = "left",
  label,
  name,
  initialValue = "",
  error,
  disabled = false,
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);
    if (onInput) {
      onInput(newValue);
    }
  };

  return (
    <S.Wrapper className="TextFieldWrapper" disabled={disabled} error={!!error}>
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
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

export default TextField;
