import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import { Component } from 'react';

import { SectionPhonebook, Notification } from './App.styled';



import DataInput from './DataInput';
import DataList from './DataList';
import Filter from './DataFilter';



class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmitForm = data => {
    const contact = { id: nanoid(), name: data.name, number: data.number };
    const repeatCheck = this.state.contacts.find(
      contact => contact.name === data.name
    );
    repeatCheck
      ? alert(`${data.name} is already in contacts!`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  getContacts = () => {
    const { filter, contacts } = this.state;
    const filterUnifiedValue = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterUnifiedValue)
    );
  };

  changeFilterValue = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  delContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const totalContacts = this.state.contacts.length;
    const showContacts = this.getContacts();
    const onSubmit = this.handleSubmitForm;
    const onFiltred = this.changeFilterValue;
    const onDelete = this.delContact;
    const { filter } = this.state;
    return (
      <SectionPhonebook>
        <h1>Phonebook</h1>
        <DataInput onSubmit={onSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={onFiltred} />
        {!totalContacts ? (
          <Notification>Your phonebook is empty. Add a new contact</Notification>
        ) : (
          <DataList contacts={showContacts} onDelContact={onDelete} />
        )}
        <GlobalStyle />
      </SectionPhonebook>
    );
  }
}

export default App;
