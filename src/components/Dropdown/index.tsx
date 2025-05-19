"use client";

import { useState } from "react";

import * as S from "./styles";

export type DropdownProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title className="DropdownTitle" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </S.Title>
      <S.Content className="Content" aria-hidden={!isOpen}>
        {children}
      </S.Content>
    </S.Wrapper>
  );
};
export default Dropdown;
