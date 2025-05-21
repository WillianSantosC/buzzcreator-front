import { useCartStore } from "@/store/cart";
import * as S from "./styles";

export type BookItemProps = {
  id: number;
  imagem: string;
  titulo: string;
  estoque: number;
  preco: number;
  remove?: boolean;
};

const BookItem = ({
  imagem,
  titulo,
  preco,
  id,
  remove = false,
}: BookItemProps) => {
  const quantidade = useCartStore(
    (state) => state.items.find((i) => i.id === id)?.quantidade || 0,
  );
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <S.Wrapper className="BookItemWrapper">
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

            {remove && (
              <S.AlterWrapper>
                <S.Controls>
                  <button onClick={() => updateQuantity(id, quantidade - 1)}>
                    -
                  </button>
                  <span>{quantidade}</span>
                  <button onClick={() => updateQuantity(id, quantidade + 1)}>
                    +
                  </button>
                </S.Controls>
                <S.Icon
                  onClick={() => removeItem(id)}
                  src="/img/trash-bl.svg"
                  alt="Delete"
                />
              </S.AlterWrapper>
            )}
          </S.InfoWrapper>
        </S.Content>
      </S.BookContent>
    </S.Wrapper>
  );
};

export default BookItem;
