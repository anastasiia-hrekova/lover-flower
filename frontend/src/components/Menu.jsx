import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import ButtonToCart from '../features/ButtonToCart';
import Container from '../styles/Container';
import { PhoneLink, PhoneLinkImg } from '../styles/SideBarStyles';

const Header = styled.header.withConfig({
  shouldForwardProp: prop => prop !== 'isScrolled' && prop !== 'zIndex',
})`
  width: 100%;
  background-color: ${({ theme, isScrolled }) =>
    isScrolled ? theme.colors.backgroundColor : 'transparent'};
  transition: background-color 0.3s ease;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ zIndex }) => zIndex};
`;

const Nav = styled.nav`
  width: 100%;
  ${({ theme }) => theme.mixins.flex};
  justify-content: space-between;
  flex-direction: row;
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  padding: 0;
`;

const FixedMenu = styled.div`
  ${({ theme }) => theme.mixins.flex};
  justify-content: flex-start;
  gap: 2rem;
`;

const Logo = styled.img`
  width: 3.4rem;
  height: 8rem;
`;

const NavLinkStyled = styled(NavLink)`
  &:hover {
    color: var(--main-color);
    text-decoration: underline;
    transition: 0.3s;
  }
`;

const MenuAddition = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'isScrolled',
})`
  opacity: ${({ isScrolled }) => (isScrolled ? 1 : 0)};
  visibility: ${({ isScrolled }) => (isScrolled ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease, visibility 0.5s ease;
  ${({ theme }) => theme.mixins.flex};
  flex-direction: row;
  justify-content: flex-end;
  gap: 2.5rem;
  padding-right: 1.2rem;
`;

const Menu = () => {
  const handleSearch = query => {
    console.log('Пошук по запиту:', query);
    //додати логіку пошуку
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [zIndex, setZIndex] = useState(10);
  const location = useLocation();

  useEffect(() => {
    const isMainOrCatalogPage =
      location.pathname === '/' || location.pathname === '/catalog';

    const handleScroll = () => {
      setIsScrolled(isMainOrCatalogPage ? window.scrollY > 750 : true);
      setZIndex(window.scrollY > 30 ? 20 : 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Header isScrolled={isScrolled} zIndex={zIndex}>
      <Container>
        <Nav>
          <FixedMenu>
            <NavLink to="/">
              <Logo src="images/logo.png" alt="logo" />
            </NavLink>
            <NavLinkStyled to="catalog">Каталог</NavLinkStyled>
            <NavLinkStyled to="delivery&pay">Доставка та оплата</NavLinkStyled>
            <NavLinkStyled to="about">Про нас</NavLinkStyled>
            <NavLinkStyled to="contacts">Контакти</NavLinkStyled>
            <NavLinkStyled to="faq">FAQ</NavLinkStyled>
            <SearchBar onSearch={handleSearch} />
          </FixedMenu>
          <MenuAddition isScrolled={isScrolled}>
            <PhoneLink href="tel:+380971136969">
              <PhoneLinkImg src="images/phone.svg" alt="call" />
              +380 (97) 113-69-69
            </PhoneLink>
            <ButtonToCart />
          </MenuAddition>
        </Nav>
      </Container>
    </Header>
  );
};

export default Menu;
