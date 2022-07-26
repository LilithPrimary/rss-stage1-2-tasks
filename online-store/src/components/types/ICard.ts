type Position = Record<string, number>;
export interface ICard {
  name: string;
  nameEn: string;
  vegan: boolean;
  exotic: boolean;
  picture: Position;
  price: number;
  color: string;
  kcal: number;
  id: number;
  date: number[];
  produced: string;
  quantity: number;
  type: string;
  isInCart?: boolean;
  isLike?: boolean;
}