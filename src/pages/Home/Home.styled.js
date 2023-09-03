import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(Link)`
  text-decoration: none;

  &:hover {
    color: red;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;
