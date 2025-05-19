// import { FaOpencart as ShoppingCart } from "react-icons/fa";

import * as S from "./styles";

export type CartIconProps = {
  quantity?: number;
};

const CartIcon = ({ quantity = 0 }: CartIconProps) => (
  <S.Wrapper>
    {quantity > 0 && <S.Badge aria-label="Cart Items">{quantity}</S.Badge>}
    {/* <ShoppingCart size={24} aria-label="Shopping Cart" /> */}
  </S.Wrapper>
);
export default CartIcon;
