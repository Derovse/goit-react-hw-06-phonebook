import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsSlice } from '../redux/contactsSlice';
import { filterSlice } from '../redux/filterSlice';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const rootReducer = combineReducers({
  contacts: persistReducer(persistConfig, contactsSlice.reducer),
  filters: filterSlice.reducer,
});
