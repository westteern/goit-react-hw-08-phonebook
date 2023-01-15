import { Section } from './pages.styled';
import { useSelector } from 'react-redux';
import DataInput from 'components/DataInput';
import DataList from 'components/DataList';
import { getError } from 'redux/contacts/selectors';
import 'react-toastify/dist/ReactToastify.css';

export default function Contacts() {
  const error = useSelector(getError);
  return (
    <>
      {error && <p>Something went wrong, please restart the app</p>}
      {!error && (
        <Section>
          <h3>Your phonebook</h3>
          <DataInput />
          <h3>Contacts</h3>
          <DataList />
        </Section>
      )}
    </>
  );
}
