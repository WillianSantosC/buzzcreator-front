"use client";

import BookAdminItem from "@/components/BookAdminItem";
import { CartListProps } from "@/components/CartList";
import Container from "@/components/Container";
import EditModal from "@/components/EditModal";
import Empty from "@/components/Empty";
import FormCreate from "@/components/FormCreate";
import Heading from "@/components/Heading";
import Menu from "@/components/Menu";
import { useState } from "react";
import toast from "react-hot-toast";
import useSWR from "swr";
import * as S from "./styles";

const fetcher = (url: string) =>
  fetch(url, { cache: "no-store" }).then((res) => {
    if (!res.ok) throw new Error("Erro ao buscar livros");
    return res.json();
  });

type AdminProps = {
  fallbackData: CartListProps["items"];
};

const Admin = ({ fallbackData }: AdminProps) => {
  const {
    data: items = [],
    error,
    mutate,
  } = useSWR<CartListProps["items"]>(
    `${process.env.NEXT_PUBLIC_API_URL}/book`,
    fetcher,
    {
      fallbackData,
      revalidateOnMount: false,
    },
  );

  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0);

  const handleClick = (id: number) => {
    setIsOpen(true);
    setId(id);
  };

  const handleBookAdded = async () => {
    await mutate();
  };

  if (error) {
    toast.error("Erro ao atualizar a lista de livros");
  }

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
            <FormCreate onSuccess={handleBookAdded} />
          </Container>
          <Container>
            <Heading lineLeft lineColor="secondary">
              Livros cadastrados
            </Heading>
            {items?.length ? (
              items.map((item) => (
                <BookAdminItem
                  onclick={() => handleClick(item.id)}
                  key={item.id}
                  {...item}
                />
              ))
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
