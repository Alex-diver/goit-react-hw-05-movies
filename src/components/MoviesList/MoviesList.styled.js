import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  padding-left: 30px;
  margin-top: 20px;
`;
