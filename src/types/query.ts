import type { AxiosRequestConfig } from "axios";
import type { IResponse } from "./response";

export interface IGetProps<IParams, IResData> {
  link: string;
  params?: IParams;
  onSuccess?: (data: IResponse<IResData>) => void;
  onError?: () => void;
  enabled?: boolean;
  responseType?: AxiosRequestConfig["responseType"];
}

export interface IMutateProps<IParams> {
  link: string;
  body: any;
  params?: IParams;
  onError?: () => void;
  method?: "post" | "delete" | "put" | "patch";
  responseType?: AxiosRequestConfig["responseType"];
}

export interface IMutateDefaultProps<IResData> {
  onSuccess?: (data: IResponse<IResData>) => void;
  onError?: (error: any) => void;
}
