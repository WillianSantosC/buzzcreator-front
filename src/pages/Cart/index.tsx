import CartList, { CartListProps } from "@/components/CartList";
import Container from "@/components/Container";
import Empty from "@/components/Empty";
import Heading from "@/components/Heading";
import Menu from "@/components/Menu";

import Payment from "@/components/Payment";
import * as S from "./styles";

export type CartProps = {} & CartListProps;

const Cart = ({ items, total }: CartListProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Menu />
      </Container>
      <S.Content>
        <Container>
          <Heading lineLeft lineColor="secondary">
            Meu carrinho
          </Heading>
          {items?.length ? (
            <S.Container>
              <CartList items={items} total={total} />
              <Payment />
            </S.Container>
          ) : (
            <S.EmptyContainer>
              <Empty
                title="Seu carrinho está vazio"
                description="Volte para a loja e adicione alguns produtos."
                hasLink
              />
            </S.EmptyContainer>
          )}
        </Container>
      </S.Content>
    </S.Wrapper>
  );
};
export default Cart;
