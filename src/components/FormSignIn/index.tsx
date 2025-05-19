import Button from "../Button";
import { FormWrapper } from "../Form";
import TextField from "../TextField";

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={"/img/mail.svg"}
      />
      <TextField
        name="password"
        placeholder="Senha"
        type="password"
        icon={"/img/lock.svg"}
      />

      <Button size="large" fullWidth>
        Entrar
      </Button>
    </form>
  </FormWrapper>
);

export default FormSignIn;
