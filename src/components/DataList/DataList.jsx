import { useSelector } from 'react-redux';
import { getContacts, getFilterResults } from 'redux/selectors';
import { SectionContacts, Notification } from './DataList.styled';
import DataItem from 'components/DataItem';

const DataList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterResults).toLowerCase();
  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  const totalContacts = contacts.length;

  return (
    <>
      {!totalContacts ? (
        <Notification>Your phonebook is empty. Add a new contact</Notification>
      ) : (
        <SectionContacts>
          {filtredContacts.map(({ id, name, number }) => (
            <DataItem key={id} id={id} name={name} number={number} />
          ))}
        </SectionContacts>
      )}
    </>
  );
};

export default DataList;
