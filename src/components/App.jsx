import { GlobalStyle } from './GlobalStyle';

import { SectionPhonebook } from './App.styled';

import DataInput from './DataInput';
import DataList from './DataList';
import Filter from './DataFilter';

const App = () => {
  return (
    <SectionPhonebook>
      <h1>Phonebook</h1>
      <DataInput />
      <h2>Contacts</h2>
      <Filter />
      <DataList />
      <GlobalStyle />
    </SectionPhonebook>
  );
};

export default App;
