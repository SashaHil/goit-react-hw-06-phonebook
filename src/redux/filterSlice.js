import { createSlice } from '@reduxjs/toolkit';

const FiltersSlice = createSlice({
  name: 'filters',
  initialState: e.target.value,
  reducers: {
    setFilter(state, action) {
      state.e.target.value = action.payload;
    },
  },
});

export const { setFilter } = FiltersSlice.actions;
export const filtersReducer = FiltersSlice.reducer;
