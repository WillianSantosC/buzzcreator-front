"use client";

import BookCard, { BookCardProps } from "@/components/BookCard";
import Container from "@/components/Container";
import { Grid } from "@/components/Grid";
import Menu from "@/components/Menu";

import * as S from "./styles";

export type BooksTemplateProps = {
  books?: BookCardProps[];
};

const Home = ({ books = [] }: BooksTemplateProps) => {
  const handleShowMore = () => {
    return;
  };

  return (
    <S.Wrapper>
      <Container>
        <Menu />
      </Container>
      <S.Content>
        <S.Main>
          <section>
            <Grid>
              {books.map((item) => (
                <BookCard key={item.titulo} {...item} />
              ))}
            </Grid>
            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Mostrar mais</p>
              <S.Icon src="/img/arrow-down.svg" alt="Arrow Down" />
            </S.ShowMore>
          </section>
        </S.Main>
      </S.Content>
    </S.Wrapper>
  );
};
export default Home;
