import { useState } from 'react';

import { GoSearch } from 'react-icons/go';

import { SearchMyForm, SearchButton, SearchInput } from './SearchBar.styled';

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
    <SearchMyForm onSubmit={handleSearch}>
      <SearchInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder=""
        value={query}
        onChange={inputChange}
      />
      <SearchButton type="submit">
        <GoSearch size="20" />
      </SearchButton>
    </SearchMyForm>
  );
};

export default SearchBar;
