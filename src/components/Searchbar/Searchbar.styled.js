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
  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-size: 40%;
  background-color: lightgrey;
  margin-left: 5px;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
`;
export const SearchFormBtnLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;
export const SearchFormInput = styled.input`
  display: inline-block;
  width: 50%;
  font: inherit;
  font-size: 20px;
  padding-left: 4px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
