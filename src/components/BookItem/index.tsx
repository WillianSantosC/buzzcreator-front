import * as S from "./styles";

export type PaymentInfoProps = {
  number: string;
  flag: string;
  img: string;
  purchaseDate: string;
};

export type BookItemProps = {
  img: string;
  title: string;
  price: string;
  downloadLink?: string;
  paymentInfo?: PaymentInfoProps;
};

const BookItem = ({
  img,
  title,
  price,
  downloadLink,
  paymentInfo,
}: BookItemProps) => (
  <S.Wrapper className="BookItemWrapper">
    <S.GameContent>
      <S.ImageBox>
        <img src={img} alt={title} width={100} height={100} />
      </S.ImageBox>

      <S.Content>
        <S.Title>
          {title}
          {!!downloadLink && (
            <S.DownloadLink
              href={downloadLink}
              target="_blank"
              aria-label={`Get ${title} here`}
            >
              {/* <MdDownload size={22} /> */}
            </S.DownloadLink>
          )}
        </S.Title>
        <S.Price>{price}</S.Price>
      </S.Content>
    </S.GameContent>

    {!!paymentInfo && (
      <S.PaymentContent>
        <p>{paymentInfo.purchaseDate}</p>
        <S.CardInfo>
          <span>{paymentInfo.number}</span>
          <img
            src={paymentInfo.img}
            alt={paymentInfo.flag}
            width={60}
            height={40}
          />
        </S.CardInfo>
      </S.PaymentContent>
    )}
  </S.Wrapper>
);

export default BookItem;
