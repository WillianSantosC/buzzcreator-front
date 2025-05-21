import toast from "react-hot-toast";
import * as S from "./styles";

export type BookAdminItemProps = {
  id: number;
  imagem: string;
  titulo: string;
  preco: number;
  estoque: number;
  onclick?: () => void;
  onSuccess?: () => void;
};

const BookAdminItem = ({
  imagem,
  titulo,
  preco,
  estoque,
  onclick,
  id,
  onSuccess,
}: BookAdminItemProps) => {
  const handleDelete = async (id: number) => {
    const toastId = toast.loading("Removendo livro...");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!res.ok) {
        toast.error("Erro ao remover livro", { id: toastId });
        return;
      }

      toast.success("Livro removido com sucesso", { id: toastId });
      onSuccess?.();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Erro ao remover livro", { id: toastId });
    }
  };

  return (
    <S.Wrapper className="BookAdminItemWrapper">
      <S.BookContent>
        <S.ImageBox>
          <img src={imagem} alt={titulo} width={100} height={100} />
        </S.ImageBox>

        <S.Content>
          <S.Title>{titulo}</S.Title>
          <S.InfoWrapper>
            <S.Price>
              {preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </S.Price>
            <S.Stock>Estoque: {estoque}</S.Stock>
          </S.InfoWrapper>

          <S.IconsWrapper>
            <S.Icon onClick={onclick} src="/img/edit.svg" alt="Edit" />
            <S.Icon
              onClick={() => handleDelete(id)}
              src="/img/trash.svg"
              alt="Delete"
            />
          </S.IconsWrapper>
        </S.Content>
      </S.BookContent>
    </S.Wrapper>
  );
};

export default BookAdminItem;
