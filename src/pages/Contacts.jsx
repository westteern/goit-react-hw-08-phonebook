import { Section } from './pages.styled';
import { useSelector } from 'react-redux';
import DataInput from 'components/DataInput';
import DataList from 'components/DataList';
import { getError } from 'redux/contacts/selectors';
import { selectUser } from 'redux/auth/selectors';
import 'react-toastify/dist/ReactToastify.css';

export default function Contacts() {
  const error = useSelector(getError);
  const user = useSelector(selectUser);
  return (
    <>
      {error && <p>Something went wrong, please restart the app</p>}
      {!error && (
        <Section>
          <h3>{user.name}'s phonebook</h3>
          <DataInput />
          <h3>Contacts</h3>
          <DataList />
        </Section>
      )}
    </>
  );
}
