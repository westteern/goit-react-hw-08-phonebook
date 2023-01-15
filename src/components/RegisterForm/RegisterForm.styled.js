import styled from 'styled-components';

export const SectionFormInput = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #ebdf02;
  border-radius: 4px;
  font-family: Roboto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LableInput = styled.label`
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
`;
export const LableInputWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const Input = styled.input`
  &:focus {
    outline: none;
    border: 2px solid #53aecf;
    border-radius: 2px;
  }
`;
export const SubmitBtn = styled.button`
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5px;
  padding-bottom: 5px;

  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #53aecf;
  scale: 1;
  transition: background-color 250ms linear;
  transition: scale 250ms linear;

  font-size: 12px;
  &:hover {
    background-color: #42b9d4;
    scale: 1.1;
  }
`;
export const VisibleBtn = styled.button`
  margin-left: 2px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #53aecf;
  scale: 1;
  transition: background-color 250ms linear;
  transition: scale 250ms linear;

  font-size: 12px;
  &:hover {
    background-color: #42b9d4;
    scale: 1.1;
  }
`;
export const Icon = styled.div`
  position: absolute;
  top: 0;
  left: -28px;
  width: 30px;
`;
export const Label = styled.p`
  font-size: 14px;
`;
