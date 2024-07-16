export interface IResponse<T> {
  data: {
    code: number;
    data: T;
    message: string;
  };
}
