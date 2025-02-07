import styled from 'styled-components';
import { setSearchQuery } from '../redux/slices/cardsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Search = styled.div`
  position: relative;
  ${({ theme }) => theme.mixins.flex};
  gap: 1rem;
`;

const SearchIcon = styled.img`
  position: absolute;
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
`;

const SearchIconClear = styled.img`
  position: absolute;
  width: 1.8rem;
  height: 1.8rem;
  opacity: 0;
  right: 0;
  transition: opacity 0.3s ease;

  input:focus + & {
    opacity: 1;
    cursor: pointer;
  }
`;

const SearchInput = styled.input`
  all: unset;
  background: none;
  width: 36rem;
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

  &:focus,
  :active {
    width: 36rem;
    border-bottom: 1px solid #555555;
  }
`;

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.flowers.searchQuery);
  const navigate = useNavigate();

  const handleChange = e => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  const handleResetFilters = () => {
    dispatch(setSearchQuery(''));
  };

  return (
    <form role="search" onSubmit={handleSubmit}>
      <Search>
        <SearchIcon
          type="submit"
          src="/images/search.svg"
          alt="search"
          onClick={handleSubmit}
        />
        <SearchInput
          onChange={handleChange}
          value={searchQuery}
          name="search"
          type="text"
          placeholder="Пошук"
        />
        {searchQuery && (
          <SearchIconClear
            onClick={handleResetFilters}
            src="/images/clear-search.png"
            alt="clear"
          />
        )}
      </Search>
    </form>
  );
};

export default SearchBar;
