import { TProjectRequest } from './type';
import { URL_API_GET_ALL_PROJECT } from '../../config';
import { axiosInstance } from '../../utils/axiosInterceptor';
import { TProject, TResponseError } from '../../utils/interface';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

export const getAllProject = createAsyncThunk(
  'project/getAll',
  async (dataUsername: TProjectRequest, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `${URL_API_GET_ALL_PROJECT}/${dataUsername}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(
        (error as AxiosError<TResponseError>).response?.data
      );
    }
  }
);
