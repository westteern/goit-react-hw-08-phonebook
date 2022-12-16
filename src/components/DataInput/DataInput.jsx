import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  SubmitBtn,
  LableInput,
  FormInput,
  SectionFormInput,
  Input,
} from './DataInput.styled';

const DataInput = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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
    onSubmit({ name, number });
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

        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </FormInput>
    </SectionFormInput>
  );
};

DataInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default DataInput;
