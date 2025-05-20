import * as S from "./styles";

export type BookAdminItemProps = {
  id: number;
  imagem: string;
  titulo: string;
  preco: number;
  estoque: number;
  onclick?: () => void;
};

const BookAdminItem = ({
  imagem,
  titulo,
  preco,
  estoque,
  onclick,
}: BookAdminItemProps) => (
  <S.Wrapper className="BookAdminItemWrapper">
    <S.BookContent>
      <S.ImageBox>
        <img src={imagem} alt={titulo} width={100} height={100} />
      </S.ImageBox>

      <S.Content>
        <S.Title>{titulo}</S.Title>
        <S.InfoWrapper>
          <S.Price>
            {preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </S.Price>
          <S.Stock>Estoque: {estoque}</S.Stock>
        </S.InfoWrapper>

        <S.IconsWrapper>
          <S.Icon onClick={onclick} src="/img/edit.svg" alt="Edit" />
          <S.Icon src="/img/trash.svg" alt="Delete" />
        </S.IconsWrapper>
      </S.Content>
    </S.BookContent>
  </S.Wrapper>
);

export default BookAdminItem;
