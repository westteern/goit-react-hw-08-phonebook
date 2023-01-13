import { SectionPhonebook } from './App.styled';
import { useSelector } from 'react-redux';
import DataInput from 'components/DataInput';
import DataList from 'components/DataList';
import { getError } from 'redux/contacts/selectors';
import 'react-toastify/dist/ReactToastify.css';

export default function Phonebook() {
  const error = useSelector(getError);
  return (
    <>
      {error && <p>Something went wrong, please restart the app</p>}
      {!error && (
        <SectionPhonebook>
          <h2>Your phonebook</h2>
          <DataInput />
          <h2>Contacts</h2>
          <DataList />
        </SectionPhonebook>
      )}
    </>
  );
}
