import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = '';
const filterSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    setContactsFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setContactsFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
