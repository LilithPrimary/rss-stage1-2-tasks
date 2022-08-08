interface IBody {
  name: string,
  color: string
}

export interface IGarageRequestOptions {
  options?: string;
  body?: IBody;
  id?: number;
}