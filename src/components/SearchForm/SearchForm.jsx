import { useState } from 'react';

import { GoSearch } from 'react-icons/go';

import {
  SearchForm,
  SearchFormButton,
  // SearchFormBtnLabel,
  SearchFormInput,
} from './SearchForm.styled';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const inputChange = event => {
    setQuery(event.target.value);
  };

  const handleSearch = event => {
    event.preventDefault();
    if (!query.trim()) {
      return;
    }
    onSubmit(query);
  };

  return (
    <SearchForm onSubmit={handleSearch}>
      <SearchFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder=""
        value={query}
        onChange={inputChange}
      />
      <SearchFormButton type="submit">
        <GoSearch size="20" />
      </SearchFormButton>
    </SearchForm>
  );
};

export default SearchBar;
