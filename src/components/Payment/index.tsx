"use client";

import { useState } from "react";
import Button from "../Button";
import Heading from "../Heading";
import TextField from "../TextField";
import * as S from "./styles";

import toast from "react-hot-toast";

import { useCartStore } from "@/store/cart";

const Payment = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);

  async function handlePayment() {
    const toastId = toast.loading("Enviando...");
    setLoading(true);

    if (items.length === 0) {
      toast.error("Carrinho vazio", { id: toastId });
      setLoading(false);
      return;
    }

    try {
      // Monta o corpo da requisição
      const orderBody = {
        cliente: name,
        itens: items.map((item) => ({
          bookId: item.id,
          quantidade: item.quantidade,
        })),
      };

      // Cria o pedido
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderBody),
      });

      if (!res.ok) toast.error("Erro ao criar pedido", { id: toastId });

      const order = await res.json();

      // Atualiza o pedido
      const updateRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/order/${order.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "pago" }),
        },
      );

      if (!updateRes.ok) {
        const { error } = await res.json();
        toast.error(error || "Erro ao finalizar a compra", { id: toastId });
        return;
      }

      toast.success("Compra finalizada com sucesso!", { id: toastId });
      clearCart();
      setName("");
    } catch (error) {
      toast.error("Erro ao finalizar a compra", { id: toastId });
      console.error(error);
    } finally {
      setLoading(false);
    }
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
        <Button fullWidth onClick={handlePayment} disabled={!name || loading}>
          {loading ? "Processando..." : "Finalizar compra"}
        </Button>
      </S.Footer>
    </S.Wrapper>
  );
};

export default Payment;
