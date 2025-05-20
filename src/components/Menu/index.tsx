"use client";

import Link from "next/link";
import { useState } from "react";

import Logo from "../Logo";
import MediaMatch from "../MediaMatch";

import * as S from "./styles";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <S.Icon src="/img/menu.svg" aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          <Logo />
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav className="MenuNav">
          <S.MenuLink className="MenuLink" href="/admin">
            Admin
          </S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <S.Icon src="/img/shopping-bag.svg" aria-label="Shopping Bag" />
        </S.IconWrapper>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <S.Icon
          src="/img/x.svg"
          aria-label="Close Menu"
          onClick={() => setIsOpen(false)}
        />
        <S.MenuNav className="MenuNav">
          <S.MenuLink className="MenuLink" href="/admin">
            Admin
          </S.MenuLink>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  );
};

export default Menu;
