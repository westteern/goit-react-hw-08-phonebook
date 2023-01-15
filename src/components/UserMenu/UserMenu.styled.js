import styled from 'styled-components';

export const Btn = styled.button`
  width: 80px;
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
