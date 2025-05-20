import LinkButton from "../LinkButton";
import * as S from "./styles";

export type EmptyProps = {
  title: string;
  description: string;
  hasLink?: boolean;
};

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper className="EmptyWrapper">
    <S.Image
      className="EmptyImage"
      src="/img/livro.png"
      alt="Um livro"
      role="image"
    />
    <S.Title className="EmptyTitle">{title}</S.Title>
    <S.Description className="EmptyDescription">{description}</S.Description>
    {hasLink && <LinkButton href="/">Volte para a loja</LinkButton>}
  </S.Wrapper>
);
export default Empty;
