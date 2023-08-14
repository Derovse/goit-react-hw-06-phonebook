import React from 'react';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const contactsData = useSelector(state => state.contacts.contacts);

  const filterValue = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const filteredContacts = contactsData?.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  const handleDeleteContact = id => dispatch(deleteContact(id));

  return (
    <div>
      <ul>
        {filteredContacts?.map(({ name, number, id }) => (
          <li key={id}>
            <p>Name: {name}</p>
            <p>Number: {number}</p>
            <button type="button" onClick={() => handleDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
