"use client";

import Button from "../Button";
import { FormWrapper } from "../Form";
import Heading from "../Heading";
import PopUp from "../PopUp";
import TextField from "../TextField";
import * as S from "./styles";

import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";

export type EditModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  bookId: number;
  onSuccess?: () => void;
};

const schema = yup.object().shape({
  titulo: yup.string().notRequired(),
  autor: yup.string().notRequired(),
  descricao: yup.string().notRequired(),
  preco: yup
    .number()
    .transform((value, originalValue) =>
      String(originalValue).trim() === "" ? undefined : value,
    )
    .typeError("Preço deve ser um número")
    .positive("Preço deve ser positivo")
    .notRequired(),
  imagem: yup.string().url("URL da imagem inválida").notRequired(),
  estoque: yup
    .number()
    .transform((value, originalValue) =>
      String(originalValue).trim() === "" ? undefined : value,
    )
    .typeError("Estoque deve ser um número")
    .positive("Estoque deve ser positivo")
    .integer("Estoque deve ser um número inteiro")
    .notRequired(),
});

type EditFormData = yup.InferType<typeof schema>;

const EditModal = ({
  isOpen,
  setIsOpen,
  bookId,
  onSuccess,
}: EditModalProps) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EditFormData>({
    resolver: yupResolver(schema) as Resolver<EditFormData>,
  });

  const values = watch();
  const isAnyFieldFilled = Object.values(values).some(
    (value) => value !== undefined && value !== "",
  );

  const onSubmit = async (data: EditFormData) => {
    const toastId = toast.loading("Atualizando livro...");

    const filteredData = Object.fromEntries(
      Object.entries(data).filter(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, value]) =>
          value !== undefined &&
          value !== "" &&
          !(typeof value === "number" && isNaN(value)),
      ),
    );

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/book/${bookId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(filteredData),
        },
      );

      if (!res.ok) {
        toast.error("Erro ao atualizar o livro", { id: toastId });
        return;
      }

      toast.success("Livro atualizado com sucesso!", { id: toastId });
      onSuccess?.();
      reset();
      setIsOpen(false);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error("Erro ao atualizar o livro", { id: toastId });
    }
  };

  return (
    <PopUp isOpen={isOpen} setIsOpen={setIsOpen}>
      <S.Wrapper>
        <Heading color="black" lineLeft lineColor="secondary">
          Editar Livro
        </Heading>
        <FormWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              placeholder="Título do Livro"
              type="text"
              {...register("titulo")}
              error={errors.titulo?.message}
            />

            <TextField
              placeholder="Autor do livro"
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
              disabled={!isAnyFieldFilled || isSubmitting}
            >
              {isSubmitting ? "Editando..." : "Editar"}
            </Button>
          </form>
        </FormWrapper>
      </S.Wrapper>
    </PopUp>
  );
};

export default EditModal;
