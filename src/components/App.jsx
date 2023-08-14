import React from 'react';
import { ContactsForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  return (
    <div>
      <h1>My Phonebook</h1>
      <ContactsForm />
      <h2>Contact List</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
