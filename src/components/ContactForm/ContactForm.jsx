import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/contactsSlice';
import { toast } from 'react-toastify';

export const ContactsForm = () => {
  const contactsData = useSelector(state => state.contacts.contacts);

  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isNameAlreadyInContacts = contactsData.some(
      contact => contact.name === name
    );
    if (isNameAlreadyInContacts) {
      return toast.error(`${name} is already in contacts.`);
    }
    dispatch(addContacts(name, number));

    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          <input
            type="text"
            name="name"
            pattern="[A-Za-zА-Яа-я]+"
            title="Name may contain only letters"
            required
          />
        </label>
        <label>
          <input
            type="tel"
            name="number"
            pattern="[0-9]+"
            title="Phone number must be digits"
            required
          />
        </label>
        <button>Add contact</button>
      </form>
    </div>
  );
};
