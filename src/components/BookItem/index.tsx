import * as S from "./styles";

export type BookItemProps = {
  id: number;
  imagem: string;
  titulo: string;
  preco: number;
};

const BookItem = ({ imagem, titulo, preco }: BookItemProps) => (
  <S.Wrapper className="BookItemWrapper">
    <S.GameContent>
      <S.ImageBox>
        <img src={imagem} alt={titulo} width={100} height={100} />
      </S.ImageBox>

      <S.Content>
        <S.Title>{titulo}</S.Title>
        <S.Price>
          {preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </S.Price>
      </S.Content>
    </S.GameContent>
  </S.Wrapper>
);

export default BookItem;
