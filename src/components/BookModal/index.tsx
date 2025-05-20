import { BookCardProps } from "../BookCard";
import BookItem from "../BookItem";
import Button from "../Button";
import PopUp from "../PopUp";
import TextField from "../TextField";
import * as S from "./styles";

export type BookModalProps = {
  books: BookCardProps[];
  isOpen: boolean;
  index: number;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BookModal = ({ books, isOpen, setIsOpen, index }: BookModalProps) => {
  const book = books[index];

  return (
    <PopUp isOpen={isOpen} setIsOpen={setIsOpen}>
      <BookItem {...book} />

      <S.Wrapper>
        <p>{book.descricao}</p>

        <S.AddToCart>
          <TextField
            label="Quantidade"
            name="quantidade"
            type="number"
            min="1"
            placeholder="Quantidade"
          />
          <Button size="small">Adicionar ao Carrinho</Button>
        </S.AddToCart>
      </S.Wrapper>
    </PopUp>
  );
};

export default BookModal;
