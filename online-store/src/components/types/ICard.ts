type Position = Record<string, number>;

type DateTuple = [number, number, number];
export interface ICard {
  name: string;
  nameEn: string;
  vegan: boolean;
  exotic: boolean;
  spritePosition: Position;
  price: number;
  color: string;
  kcal: number;
  id: number;
  date: DateTuple;
  produced: string;
  quantity: number;
  type: string;
  isInCart?: boolean;
  isLike?: boolean;
}