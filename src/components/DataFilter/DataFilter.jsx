import PropTypes from 'prop-types';
import { FilterInput, SectionFiltrInput, Input } from './DataFilter.styled';

const Filter = ({ value, onChange }) => (
  <SectionFiltrInput>
    <FilterInput>
      Find contacts by Name
      <Input type="text" value={value} onChange={onChange} />
    </FilterInput>
  </SectionFiltrInput>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;
