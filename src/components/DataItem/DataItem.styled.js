import styled from 'styled-components';

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

export const Btn = styled.button`
  width: 70px;  
  padding-top: 5px;
  padding-bottom: 5px;

  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #53aecf;

  font-size: 12px;
  &:hover {
    background-color: #42b9d4;
    scale: 1.1;
  }
`;