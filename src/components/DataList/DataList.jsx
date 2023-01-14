import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllContacts } from 'redux/contacts/apiService';
import {
  getContacts,
  getFilterResults,
  getIsLoading,
} from 'redux/contacts/selectors';
import { SectionContacts, Notification } from './DataList.styled';
import DataItem from 'components/DataItem';
import Filter from 'components/DataFilter';

const DataList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const filter = useSelector(getFilterResults).toLowerCase();
  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  const totalContacts = contacts.length;
  const totalFiltredContacts = filtredContacts.length;

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <>
      {!totalContacts ? (
        <Notification>Your phonebook is empty. Add a new contact</Notification>
      ) : (
        <>
          <Filter />
          {isLoading && <p>Loading....</p>}
          <SectionContacts>
            {!totalFiltredContacts && (
              <Notification>
                No contacts were found for your request
              </Notification>
            )}
            {filtredContacts.map(({ id, name, number }) => (
              <DataItem key={id} id={id} name={name} number={number} />
            ))}
          </SectionContacts>
        </>
      )}
    </>
  );
};

export default DataList;
