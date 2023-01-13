import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/apiService';
import { Contact, Btn } from './DataItem.styled';
import { AiOutlineUserDelete } from 'react-icons/ai';

const DataItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const deleteContactById = id => {
    dispatch(deleteContact(id));
  };
  return (
    <Contact>
      <p>{name}:</p>
      <p>{number}</p>
      <Btn onClick={() => deleteContactById(id)}>
        <AiOutlineUserDelete
          style={{
            width: '20',
            height: '20',
            verticalAlign: 'middle',
          }}
        />
      </Btn>
    </Contact>
  );
};

DataItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default DataItem;
