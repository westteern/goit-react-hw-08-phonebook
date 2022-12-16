import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

import { SectionPhonebook, Notification } from './App.styled';

import DataInput from './DataInput';
import DataList from './DataList';
import Filter from './DataFilter';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const localStorageValue = JSON.parse(
      window.localStorage.getItem('contacts')
    );
    const phoneContacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
    return localStorageValue ?? phoneContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmitForm = data => {
    const repeatCheck = contacts.find(contact => contact.name === data.name);
    const contact = { id: nanoid(), name: data.name, number: data.number };
    repeatCheck
      ? alert(`${data.name} is already in contacts!`)
      : setContacts(prevContacts => [...prevContacts, contact]);
  };

  const changeFilterValue = e => {
    setFilter(e.target.value);
  };

  const getContacts = () => {
    const filterUnifiedValue = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterUnifiedValue)
    );
  };

  const delContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const totalContacts = contacts.length;

  return (
    <SectionPhonebook>
      <h1>Phonebook</h1>
      <DataInput onSubmit={handleSubmitForm} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilterValue} />
      {!totalContacts ? (
        <Notification>Your phonebook is empty. Add a new contact</Notification>
      ) : (
        <DataList contacts={getContacts()} onDelContact={delContact} />
      )}
      <GlobalStyle />
    </SectionPhonebook>
  );
};

export default App;
