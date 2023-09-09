import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  width: 50%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 80px;
  height: 35px;
  border: none;
  background-color: lightgrey;
  margin-left: 5px;
  opacity: 1;
  cursor: pointer;
`;
export const SearchFormInput = styled.input`
  display: inline-block;
  width: 50%;
  font: message-box;
  font-size: 20px;
  padding-left: 4px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
