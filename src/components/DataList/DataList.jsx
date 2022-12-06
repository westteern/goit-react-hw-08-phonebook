import PropTypes from 'prop-types';
import DataItem from 'components/DataItem';
import { SectionContacts } from './DataList.styled';

const DataList = ({ contacts, onDelContact }) => (
  <SectionContacts>
    {contacts.map(({ id, name, number }) => (
        <DataItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelContact={()=> onDelContact(id)}
        />
    ))}
  </SectionContacts>
);

DataList.propTypes = {
  onDelContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default DataList;