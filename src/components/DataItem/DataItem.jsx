import PropTypes from 'prop-types';
import { Contact, Btn } from './DataItem.styled';

const DataItem = ({id, name, number, onDelContact }) => {
  return (
    <Contact>
      <p>{name}:</p>
      <p>{number}</p>
      <Btn onClick={() => onDelContact(id)}>Delete</Btn>
    </Contact>
  );
};

DataItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelContact: PropTypes.func.isRequired,
};

export default DataItem;
