interface IPosition {
  [key: string]: number;
}

export interface ICard {
  [key: string]: string | boolean | number | IPosition;
  picture: IPosition;
}