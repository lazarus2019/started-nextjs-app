import { TResponseError, TProject } from '../../utils/interface';
export type TProjectRequest = {
  username: string;
};

export type TProjectState = {
  pending: boolean;
  error: TResponseError | null;
  projectList: TProject[];
  totalRows: number;
};
