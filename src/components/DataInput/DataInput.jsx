import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/apiService';
import {
  SubmitBtn,
  LableInput,
  FormInput,
  SectionFormInput,
  Input,
} from './DataInput.styled';
import { AiOutlineUserAdd } from 'react-icons/ai';

const DataInput = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const repeatCheck = contacts.find(contact => contact.name === name);
    repeatCheck
      ? alert(`${name} is already in contacts!`)
      : dispatch(addContact({ name, number }));
    resetValue();
  };
  const resetValue = () => {
    setName('');
    setNumber('');
  };

  return (
    <SectionFormInput>
      <FormInput onSubmit={handleSubmit}>
        <LableInput>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </LableInput>

        <LableInput>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </LableInput>

        <SubmitBtn type="submit">
          Add contact
          <AiOutlineUserAdd
            style={{
              width: '20',
              height: '20',
              verticalAlign: 'middle',
            }}
          />
        </SubmitBtn>
      </FormInput>
    </SectionFormInput>
  );
};

export default DataInput;
