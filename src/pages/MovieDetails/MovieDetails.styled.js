import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Btn = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  font-weight: 500;

  &:hover {
    background-color: lightgray;
  }
`;
export const LinkBtn = styled(Link)`
  display: flex;
  font-size: 14px;
  align-items: center;
  column-gap: 10px;
`;
export const ListH2 = styled.h2`
  margin-bottom: 10px;
`;
export const ListH3 = styled.h3`
  margin-bottom: 10px;
`;
export const ListH4 = styled.h4`
  margin-bottom: 10px;
`;
export const ListP = styled.p`
  margin-bottom: 10px;
`;
export const MovieContainer = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: solid 1px grey;
`;
export const InfoContainer = styled.div`
  padding: 20px 40px;
`;
export const GenresList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  gap: 16px;
`;
export const ListLi = styled.li`
  margin-bottom: 10px;
`;

export const InfoBox = styled.div`
  padding: 20px;
  border-bottom: solid 1px grey;
`;
