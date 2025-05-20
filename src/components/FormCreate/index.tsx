import Button from "../Button";
import { FormWrapper } from "../Form";
import TextField from "../TextField";

const FormCreate = () => (
  <FormWrapper>
    <form>
      <TextField name="Titulo" placeholder="Titulo do Livro" type="text" />

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
        Adicionar
      </Button>
    </form>
  </FormWrapper>
);

export default FormCreate;
