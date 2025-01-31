import { useState } from 'react';
import styled from 'styled-components';

const Search = styled.div`
  position: relative;
  ${({ theme }) => theme.mixins.flex};
  gap: 1rem;
`;

const SearchIcon = styled.img`
  position: absolute;
  width: 1.8rem;
  height: 1.8rem;
`;

const SearchIconClear = styled.img`
  position: absolute;
  width: 1.8rem;
  height: 1.8rem;
  pointer-events: none;
  opacity: 0;
  right: 0;
  transition: opacity 0.3s ease;

  input:focus + & {
    opacity: 1;
    pointer-events: all;
    cursor: pointer;
  }
`;

const SearchInput = styled.input`
  all: unset;
  background: none;
  width: 10rem;
  border: none;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  padding-left: 2.2rem;
  transition: width 0.3s ease, border-color 0.3s ease;

  &:focus {
    width: 36rem;
    border-bottom: 1px solid #555555;
  }
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
        <SearchIconClear src="images/clear-search.png" alt="clear" />
      </Search>
    </form>
  );
};

export default SearchBar;
