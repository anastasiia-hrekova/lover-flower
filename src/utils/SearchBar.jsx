import { useState } from 'react';

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
      <div className="menu__form">
        <img className="menu__form-icon" src="images/search.svg" alt="search" />
        <input
          className="menu__form-input"
          type="text"
          placeholder="Пошук"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBar;
