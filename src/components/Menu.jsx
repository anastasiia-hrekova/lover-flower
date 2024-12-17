import { NavLink } from 'react-router-dom';
import SearchBar from '../utils/SearchBar';
import { useEffect, useState } from 'react';
import CartLink from '../utils/CartLink';

const Menu = () => {
  const handleSearch = query => {
    console.log('Пошук по запиту:', query);
    //додати логіку пошуку
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 750);
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav className={`menu ${isScrolled ? 'menu-scrolled' : ''}`}>
        <div className="container  menu__block">
          <div className="menu__fixed">
            <NavLink to="/">
              <img className="menu__logo" src="/images/logo.png" alt="logo" />
            </NavLink>
            <NavLink className="menu__link" to="catalog">
              Каталог
            </NavLink>
            <NavLink className="menu__link" to="delivery&pay">
              Доставка та оплата
            </NavLink>
            <NavLink className="menu__link" to="about">
              Про нас
            </NavLink>
            <NavLink className="menu__link" to="contacts">
              Контакти
            </NavLink>
            <NavLink className="menu__link" to="faq">
              FAQ
            </NavLink>
            <SearchBar onSearch={handleSearch} />
          </div>
          <div
            className={`menu__addition ${
              isScrolled ? 'menu__addition-show' : ''
            }`}
          >
            <a className="sidebar__call-number" href="tel:+380971136969">
              <img
                className="sidebar__call-icon"
                src="images/phone.svg"
                alt="call"
              />
              +380 (97) 113-69-69
            </a>
            <CartLink />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
