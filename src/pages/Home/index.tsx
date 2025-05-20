"use client";

import BookCard, { BookCardProps } from "@/components/BookCard";
import Container from "@/components/Container";
import { Grid } from "@/components/Grid";
import Menu from "@/components/Menu";

import BookModal from "@/components/BookModal";
import Empty from "@/components/Empty";
import { useMemo, useState } from "react";
import * as S from "./styles";

export type BooksTemplateProps = {
  books?: BookCardProps[];
};

const Home = ({ books = [] }: BooksTemplateProps) => {
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);
  const [isOpen, setIsOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const filteredBooks = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return books;

    return books.filter((book) => {
      return (
        book.titulo.toLowerCase().includes(query) ||
        book.autor?.toLowerCase().includes(query)
      );
    });
  }, [search, books]);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, filteredBooks.length));
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setVisibleCount(4);
  };

  const visibleBooks = filteredBooks.slice(
    0,
    Math.min(visibleCount, filteredBooks.length),
  );

  const showBookPopup = (i: number) => {
    setIdx(i);
    setIsOpen(true);
  };

  return (
    <S.Wrapper>
      <Container>
        <Menu />
      </Container>
      <Container>
        <S.InputWrapper className="InputWrapper">
          <S.InputIcon src={"/img/search.svg"} className="Icon" />
          <S.Input
            className="Input"
            type="text"
            onChange={handleFilter}
            value={search}
            placeholder="Pesquisar por livros"
          />
        </S.InputWrapper>
      </Container>
      <S.Content>
        <S.Main>
          <section>
            <Grid>
              {visibleBooks.map((item, idx) => (
                <BookCard
                  onClick={() => showBookPopup(idx)}
                  key={item.id}
                  {...item}
                />
              ))}
            </Grid>
            {visibleCount < filteredBooks.length && (
              <S.ShowMore role="button" onClick={handleShowMore}>
                <p>Mostrar mais</p>
                <S.Icon src="/img/arrow-down.svg" alt="Arrow Down" />
              </S.ShowMore>
            )}
          </section>
          {!visibleBooks.length && (
            <S.EmptyContainer>
              <Empty
                title="Nenhum livro encontrado"
                description="Não encontramos nenhum livro com esse título ou autor."
              />
            </S.EmptyContainer>
          )}
        </S.Main>
      </S.Content>

      <BookModal
        books={books}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        index={idx}
      />
    </S.Wrapper>
  );
};

export default Home;
