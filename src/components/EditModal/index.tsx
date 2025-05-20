import Button from "../Button";
import { FormWrapper } from "../Form";
import Heading from "../Heading";
import PopUp from "../PopUp";
import TextField from "../TextField";

import * as S from "./styles";

export type EditModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  bookId: number;
};

const EditModal = ({ isOpen, setIsOpen }: EditModalProps) => {
  return (
    <PopUp isOpen={isOpen} setIsOpen={setIsOpen}>
      <S.Wrapper>
        <Heading color="black" lineLeft lineColor="secondary">
          Editar Livro
        </Heading>
        <FormWrapper>
          <form>
            <TextField
              name="Titulo"
              placeholder="Titulo do Livro"
              type="text"
            />

            <TextField name="Autor" placeholder="Autor do livro" type="text" />

            <TextField
              name="Descrição"
              placeholder="Descrição do Livro"
              type="text"
            />

            <TextField
              name="Preço"
              placeholder="Preço do Livro"
              type="number"
              min={1}
            />

            <TextField name="Imagem" placeholder="Url da Imagem" type="text" />

            <TextField
              name="Estoque"
              placeholder="Estoque do Livro"
              type="number"
              min={1}
            />

            <Button size="large" fullWidth>
              Editar
            </Button>
          </form>
        </FormWrapper>
      </S.Wrapper>
    </PopUp>
  );
};

export default EditModal;
