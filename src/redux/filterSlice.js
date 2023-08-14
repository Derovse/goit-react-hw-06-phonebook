import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    filterContacts: (state, action) => {
      return action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
