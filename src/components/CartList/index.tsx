import BookItem, { BookItemProps } from "../BookItem";

import * as S from "./styles";

export type CartListProps = {
  items?: BookItemProps[];
  total?: string;
  hasButton?: boolean;
};

const CartList = ({ items = [], total, hasButton = false }: CartListProps) => (
  <S.Wrapper isEmpty={!items.length}>
    {items?.map((item) => <BookItem remove key={item.id} {...item} />)}

    <S.Footer>
      {!hasButton && <span>Total:</span>}
      <S.Total>{total}</S.Total>
    </S.Footer>
  </S.Wrapper>
);

export default CartList;
