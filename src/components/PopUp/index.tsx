import * as S from "./styles";

export type PopUpProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

const PopUp = ({ children, isOpen, setIsOpen }: PopUpProps) => {
  return (
    <S.Wrapper aria-hidden={!isOpen} isOpen={isOpen}>
      <S.Icon
        src="/img/x.svg"
        aria-label="Close Menu"
        onClick={() => setIsOpen(false)}
      />
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </S.Wrapper>
  );
};

export default PopUp;
