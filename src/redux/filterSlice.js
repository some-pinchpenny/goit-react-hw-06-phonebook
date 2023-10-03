import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    changeValue(state, action) {
      state.value = action.payload;
    },
  },
});

export const { changeValue } = slice.actions;
export const filterReducer = slice.reducer;
export const getFilter = ({ filter: { value } }) => value;
