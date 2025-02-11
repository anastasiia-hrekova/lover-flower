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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
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
  position: relative;
  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    text-decoration: underline;
    transition: 0.3s;
  }
`;

const DropdownMenu = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'isOpen',
})`
  position: absolute;
  top: 58%;
  left: 12%;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: 10px 0;
  width: 26rem;
`;

const DropdownItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    background: rgba(0, 0, 0, 0.4);
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [zIndex, setZIndex] = useState(10);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  return (
    <Header isScrolled={isScrolled} zIndex={zIndex}>
      <Container>
        <Nav>
          <FixedMenu>
            <NavLink to="/">
              <Logo src="/images/logo.png" alt="logo" />
            </NavLink>
            <div
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <NavLinkStyled to="catalog">Каталог</NavLinkStyled>
              <DropdownMenu isOpen={isDropdownOpen}>
                <DropdownItem to="/catalog?sort=hydra">
                  Букет із гортензій
                </DropdownItem>
                <DropdownItem to="/catalog?sort=peonies">
                  Букет із півоній
                </DropdownItem>
                <DropdownItem to="/catalog?sort=chrysant">
                  Букет із хризантем
                </DropdownItem>
                <DropdownItem to="/catalog?sort=isTop">Популярне</DropdownItem>
                <DropdownItem to="/catalog?sort=rose">
                  Букети троянд
                </DropdownItem>
              </DropdownMenu>
            </div>
            <NavLinkStyled to="delivery&pay">Доставка та оплата</NavLinkStyled>
            <NavLinkStyled to="about">Про нас</NavLinkStyled>
            <NavLinkStyled to="contacts">Контакти</NavLinkStyled>
            <NavLinkStyled to="faq">FAQ</NavLinkStyled>
            <SearchBar />
          </FixedMenu>
          <MenuAddition isScrolled={isScrolled}>
            <PhoneLink href="tel:+380971136969">
              <PhoneLinkImg src="/images/phone.svg" alt="call" />
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
