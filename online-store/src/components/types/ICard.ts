type Position = Record<string, number>;

export type CardValues = string | boolean | number | Position | Array<number>;
export interface ICard {
  [key: string]: CardValues;
  picture: Position;
  date: Array<number>;
}