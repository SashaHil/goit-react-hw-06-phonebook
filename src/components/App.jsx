import React, { useState, useEffect } from 'react';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import initialContacts from './contacts.json';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');

  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  } else {
    return initialContacts;
  }
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = newContact => {
    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() === newContact.name.toLowerCase() ||
          contact.number === newContact.number
      )
    ) {
      return alert(
        `${newContact.name} or ${newContact.number} is already in contacts.`
      );
    }

    setContacts(prevState => [...prevState, newContact]);
  };

  const onGetContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const onFindContact = e => {
    setFilter(e.target.value);
  };

  const onDelteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Layout>
      <Section title="Phonebook"></Section>
      <ContactForm onAddContact={onAddContact} />

      <Section title="Contacts"></Section>
      <Filter value={filter} onChange={onFindContact} />
      <ContactList contacts={onGetContacts()} onDelteContact={onDelteContact} />
    </Layout>
  );
};
