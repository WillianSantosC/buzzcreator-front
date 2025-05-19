import BookItem, { BookItemProps } from "../BookItem";
import Empty from "../Empty";
import LinkButton from "../LinkButton";

import * as S from "./styles";

export type CartListProps = {
  items?: BookItemProps[];
  total?: string;
  hasButton?: boolean;
};

const CartList = ({ items = [], total, hasButton = false }: CartListProps) => (
  <S.Wrapper isEmpty={!items.length}>
    {items.length ? (
      <>
        {items.map((item) => (
          <BookItem key={item.title} {...item} />
        ))}

        <S.Footer>
          {!hasButton && <span>Total:</span>}
          <S.Total>{total}</S.Total>

          {hasButton && <LinkButton href="/cart">Buy it now</LinkButton>}
        </S.Footer>
      </>
    ) : (
      <Empty
        title="Your cart is empty"
        description="Go back to the store and explore great games and offers."
        hasLink
      />
    )}
  </S.Wrapper>
);

export default CartList;
