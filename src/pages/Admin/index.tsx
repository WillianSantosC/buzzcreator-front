"use client";

import BookAdminItem from "@/components/BookAdminItem";
import { CartListProps } from "@/components/CartList";
import Container from "@/components/Container";
import Empty from "@/components/Empty";
import FormCreate from "@/components/FormCreate";
import Heading from "@/components/Heading";
import Menu from "@/components/Menu";

import EditModal from "@/components/EditModal";
import { useState } from "react";
import * as S from "./styles";

const Admin = ({ items }: Pick<CartListProps, "items">) => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0);

  const handleClick = (id: number) => {
    setIsOpen(true);
    setId(id);
  };

  return (
    <S.Wrapper>
      <Container>
        <Menu />
      </Container>
      <S.Content>
        <S.Container>
          <Container>
            <Heading lineLeft lineColor="secondary">
              Adicione um novo livro
            </Heading>
            <FormCreate />
          </Container>
          <Container>
            <Heading lineLeft lineColor="secondary">
              Livros cadastrados
            </Heading>
            {items?.length ? (
              <>
                {items?.map((item) => (
                  <BookAdminItem
                    onclick={() => handleClick(item.id)}
                    key={item.id}
                    {...item}
                  />
                ))}
              </>
            ) : (
              <S.EmptyContainer>
                <Empty
                  title="Nenhum livro cadastrado"
                  description="Adicione um livro para começar a vender."
                />
              </S.EmptyContainer>
            )}
          </Container>
        </S.Container>
      </S.Content>
      <EditModal bookId={id} isOpen={isOpen} setIsOpen={setIsOpen} />
    </S.Wrapper>
  );
};
export default Admin;
