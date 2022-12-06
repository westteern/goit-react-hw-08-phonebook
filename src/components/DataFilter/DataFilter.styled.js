import styled from 'styled-components';

export const SectionFiltrInput = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #ebdf02;
  border-radius: 4px;
  font-family: Roboto;
`;

export const FilterInput = styled.label`
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  &:focus {
    outline: none;
    border: 2px solid #53aecf;
    border-radius: 2px;
  }
`;