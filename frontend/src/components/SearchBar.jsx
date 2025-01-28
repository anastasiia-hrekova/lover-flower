import { useState } from 'react';
import styled from 'styled-components';

const Search = styled.div`
  ${({ theme }) => theme.mixins.flex};
  gap: 1rem;
`;

const SearchIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

const SearchInput = styled.input`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  cursor: pointer;
`;

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSumbit = e => {
    e.preventDeafault();

    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form role="search" onSubmit={handleSumbit}>
      <Search>
        <SearchIcon src="images/search.svg" alt="search" />
        <SearchInput
          name="search"
          type="text"
          placeholder="Пошук"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </Search>
    </form>
  );
};

export default SearchBar;
