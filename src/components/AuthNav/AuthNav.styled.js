import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  text-transform: uppercase;
  margin: 5px;
  &.active {
    color: #42b9d4;
  }
`;
