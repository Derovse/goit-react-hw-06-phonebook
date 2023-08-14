import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContacts: {
      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },
      prepare: (name, number) => {
        const id = nanoid();
        return { payload: { name, number, id } };
      },
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContacts, deleteContact } = contactsSlice.actions;
