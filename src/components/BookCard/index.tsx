import * as S from "./styles";

export type BookCardProps = {
  id: number;
  titulo: string;
  autor: string;
  imagem: string;
  preco: number;
  descricao: string;
};

const BookCard = ({ titulo, autor, imagem, preco }: BookCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={imagem} alt={titulo} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{titulo}</S.Title>
        <S.Author>{autor}</S.Author>
      </S.Info>
      <S.BuyBox>
        <S.Price>
          {preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </S.Price>
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
);
export default BookCard;
