import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlice';
import { FilterInput, SectionFiltrInput, Input } from './DataFilter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const onFiltre = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <SectionFiltrInput>
      <FilterInput>
        Find contacts by Name
        <Input type="text" onChange={onFiltre} />
      </FilterInput>
    </SectionFiltrInput>
  );
};

export default Filter;
