import { items as booksMock } from "@/components/BookCard/mock";
import { item as itemsMock } from "@/components/CartList/mock";
import { item as cardsMock } from "@/components/Payment/mock";

export const cartPageMock = {
  items: itemsMock,
  total: "$ 430,00",
  cards: cardsMock,
  recommendedGames: booksMock,
};
