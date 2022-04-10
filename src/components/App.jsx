import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid/non-secure';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactsList from './ContactsList';

import React from 'react';

const getContacts = () => {
  const contacts = JSON.parse(localStorage.getItem('contacts'));
  return contacts ? contacts : [];
};

export default function App() {
  const [contacts, setContacts] = useState(getContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onCreateContact = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts(state => {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return [...state, newContact];
    });
  };

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <div style={{ maxWidth: '425px', margin: '0 auto' }}>
      <h2>Phonebook</h2>
      <ContactForm onCreateContact={onCreateContact} />

      <h2>Contacts</h2>
      <Filter handleChange={handleChange} filter={filter} />

      <ContactsList
        contacts={contacts}
        filter={filter}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
