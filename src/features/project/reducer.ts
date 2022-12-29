import { showNotify } from '../../utils/helper';
import { createReducer } from '@reduxjs/toolkit';

import { getAllProject } from './actions';
const initialState = {
  pending: false,
  error: null,
  projectList: [],
  totalRows: 0,
};

export const projectReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAllProject.pending, (state) => {
      state.pending = true;
    })
    .addCase(getAllProject.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.projectList = payload.results;
      state.totalRows = payload.totalRows;
    })
    .addCase(getAllProject.rejected, (state, { payload }) => {
      state.pending = false;
      showNotify(payload, 'error');
    });
});
