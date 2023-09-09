import { useState } from 'react';

import { GoSearch } from 'react-icons/go';

import { SearchMyForm, SearchButton, SearchInput } from './SearchForm.styled';

const SearchBar = ({ onChange }) => {
  const [query, setQuery] = useState('');

  const inputChange = event => {
    setQuery(event.target.value);
  };

  const handleSearch = event => {
    event.preventDefault();
    if (!query.trim()) {
      return;
    }
    onChange(query);
    setQuery('');
  };

  return (
    <main>
      <SearchMyForm onSubmit={handleSearch}>
        <SearchInput
          type="text"
          name="movie_name"
          title="Please enter movie name."
          required
          placeholder="Search movies"
          value={query}
          onChange={inputChange}
        />
        <SearchButton type="submit">
          <GoSearch size="20" />
        </SearchButton>
      </SearchMyForm>
    </main>
  );
};

export default SearchBar;
