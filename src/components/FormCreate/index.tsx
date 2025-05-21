"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";
import Button from "../Button";
import { FormWrapper } from "../Form";
import TextField from "../TextField";

type FormData = {
  titulo: string;
  autor: string;
  descricao: string;
  preco: number;
  imagem: string;
  estoque: number;
};

type FormCreateProps = {
  onSuccess?: () => void;
};

const schema = yup.object().shape({
  titulo: yup.string().required("Título é obrigatório"),
  autor: yup.string().required("Autor é obrigatório"),
  descricao: yup.string().required("Descrição é obrigatória"),
  preco: yup
    .number()
    .typeError("Preço deve ser um número")
    .positive("Preço deve ser positivo")
    .required("Preço é obrigatório"),
  imagem: yup
    .string()
    .url("URL da imagem inválida")
    .required("Imagem é obrigatória"),
  estoque: yup
    .number()
    .typeError("Estoque deve ser um número")
    .positive("Estoque deve ser positivo")
    .integer("Estoque deve ser um número inteiro")
    .required("Estoque é obrigatório"),
});

const FormCreate = ({ onSuccess }: FormCreateProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    const toastId = toast.loading("Enviando...");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        toast.error("Erro ao enviar o formulário", { id: toastId });
        return;
      }

      toast.success("Livro adicionado com sucesso!", { id: toastId });
      onSuccess?.();
      reset();

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Erro ao enviar o formulário", { id: toastId });
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          placeholder="Título do Livro"
          type="text"
          {...register("titulo")}
          error={errors.titulo?.message}
        />

        <TextField
          placeholder="Autor do Livro"
          type="text"
          {...register("autor")}
          error={errors.autor?.message}
        />

        <TextField
          placeholder="Descrição do Livro"
          type="text"
          {...register("descricao")}
          error={errors.descricao?.message}
        />

        <TextField
          placeholder="Preço do Livro"
          type="number"
          min={1}
          {...register("preco")}
          error={errors.preco?.message}
        />

        <TextField
          placeholder="URL da Imagem"
          type="text"
          {...register("imagem")}
          error={errors.imagem?.message}
        />

        <TextField
          placeholder="Estoque do Livro"
          type="number"
          min={1}
          {...register("estoque")}
          error={errors.estoque?.message}
        />

        <Button
          size="large"
          fullWidth
          type="submit"
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? "Adicionando..." : "Adicionar"}
        </Button>
      </form>
    </FormWrapper>
  );
};

export default FormCreate;
