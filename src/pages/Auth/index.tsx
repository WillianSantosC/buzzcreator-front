import Heading from "@/components/Heading";
import Logo from "@/components/Logo";

import Link from "next/link";
import * as S from "./styles";

export type AuthProps = {
  title: string;
  children: React.ReactNode;
};

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Link href="/">
          <Logo />
        </Link>
        <div>
          <S.Subtitle>
            <strong>theLibrary</strong> é a melhor e mais completa plataforma de
            livros.
          </S.Subtitle>
        </div>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <Logo />
        </Link>

        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
);

export default Auth;
