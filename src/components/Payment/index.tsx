"use client";

import { useState } from "react";
import TextField from "../TextField";

import Button from "../Button";
import Heading from "../Heading";

import * as S from "./styles";

const Payment = () => {
  const [name, setName] = useState("");

  function handlePayment() {
    return;
  }

  function handleCancelPayment() {
    return;
  }

  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" size="small" lineBottom>
          Pagamento
        </Heading>

        <S.CardsList>
          <TextField
            name="Nome"
            placeholder="Digite seu nome"
            type="text"
            icon={"/img/mail.svg"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </S.CardsList>
      </S.Body>
      <S.Footer>
        <Button minimal onClick={() => handleCancelPayment}>
          Cancelar compra
        </Button>
        <Button fullWidth onClick={() => handlePayment} disabled={!name}>
          Finalizar compra
        </Button>
      </S.Footer>
    </S.Wrapper>
  );
};

export default Payment;
