
interface IBody {
  name: string,
  color: string
}

export interface IRequest {
  options?: string;
  body?: IBody;
  id?: number;
}