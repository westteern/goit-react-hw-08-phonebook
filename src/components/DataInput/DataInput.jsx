import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  SubmitBtn,
  LableInput,
  FormInput,
  SectionFormInput,
  Input,
} from './DataInput.styled';

class DataInput extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = e => {
      const { name, value } = e.currentTarget;
      this.setState({
          [name]: value,
      });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' })
  };

  render() {
    return (
      <SectionFormInput>
        <FormInput onSubmit={this.handleSubmit}>
          <LableInput>
            Name
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInput}
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
              value={this.state.number}
              onChange={this.handleInput}
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
};

DataInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default DataInput;
