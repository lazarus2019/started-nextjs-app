export type ErrorStatusCode = 400 | 401 | 402 | 403 | 500;

export type TResponseError = {
  message: string;
  status: ErrorStatusCode;
};

export type TResponse<T> = {
  data: T;
  isSuccess: boolean;
  message: string;
};

export type TProject = {
  id: string;
  starCount: number;
  title: string;
  thumbnail: string;
  shortDescription: string;
  createdAt: string;
  slug: string;
};
