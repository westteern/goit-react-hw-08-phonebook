import { SectionPhonebook } from './App.styled';
import { GlobalStyle } from './GlobalStyle';
import { useSelector } from 'react-redux';
import DataInput from './DataInput';
import DataList from './DataList';
import { getError } from 'redux/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const error = useSelector(getError);
  return (
    <>
      {error && <p>Something went wrong, please restart the app</p>}
      {!error && (
        <SectionPhonebook>
          <h1>Phonebook</h1>
          <DataInput />
          <h2>Contacts</h2>
          <DataList />
          <GlobalStyle />
          <ToastContainer position="top-left" autoClose={2000} />
        </SectionPhonebook>
      )}
    </>
  );
};

export default App;
