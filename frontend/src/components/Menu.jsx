import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import ButtonToCart from '../features/ButtonToCart';
import Container from '../styles/Container';
import { PhoneLink, PhoneLinkImg } from '../styles/SideBarStyles';
import { AccentText, SidebarText, SocialImg } from '../styles/SideBarStyles';

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
    height: 8rem;
  }
`;

const NavDesktop = styled.nav`
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const NavMobile = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'isOpen',
})`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 75%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  transition: left 0.3s ease-in-out;
  padding: 3rem 2rem;
  z-index: 100;
`;

const MobileMenuButton = styled.button`
  position: absolute;
  top: 3.5rem;
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 2rem;
  height: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

const MainTitle = styled.img.withConfig({
  shouldForwardProp: prop => prop !== 'isScrolled' && prop !== 'isMobile',
})`
  opacity: ${({ isScrolled, isMobile }) => (isScrolled && isMobile ? 1 : 0)};
  visibility: ${({ isScrolled, isMobile }) =>
    isScrolled && isMobile ? 'visible' : 'hidden'};
  transition: opacity 0.5s ease, visibility 0.5s ease;
  position: absolute;
  width: 10rem;
  top: 2.2rem;
  left: 33%;
  z-index: 9999;
  background: red;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    opacity: 0;
    visibility: hidden;
  }
`;

const CartBtn = styled.div`
  position: absolute;
  display: none;
  top: 3rem;
  right: 10%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

const CloseMobile = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 1.2rem;
`;

const LinksBlockMob = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const MenuLine = styled.div`
  border: 1px solid #555555;
  width: 10rem;
  margin-bottom: 2rem;
`;

const InfoBlocks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  width: 18rem;
`;

const FixedMenu = styled.div`
  ${({ theme }) => theme.mixins.flex};
  justify-content: flex-start;
  gap: 2rem;
`;

const PrivacyText = styled.p`
  font-family: 'Oswald', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.04rem;
  color: #555555;
  margin-bottom: 1rem;
`;

const SocialBlock = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Logo = styled.img`
  width: 3.4rem;
  height: 8rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 2.2rem;
    height: 4.8rem;
  }
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const isMainOrCatalogPage =
      location.pathname === '/' || location.pathname === '/catalog';

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      const scrollThreshold = window.innerWidth <= 768 ? 100 : 750;
      setIsScrolled(
        isMainOrCatalogPage ? window.scrollY > scrollThreshold : true,
      );
      setZIndex(window.scrollY > 30 ? 20 : 10);
    };
    handleScroll();
    handleResize();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location, isMobileMenuOpen, isMobile, isScrolled]);

  return (
    <Header isScrolled={isScrolled} zIndex={zIndex}>
      <Container>
        {/* DESKTOP MENU */}
        <NavDesktop>
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
        </NavDesktop>

        {/* MOBILE MENU */}

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)}>
          <img src="/images/humbMenu.png" alt="Open" />
        </MobileMenuButton>
        <MainTitle src="/images/mobile-flower.png" alt="Lover Flower" />
        <CartBtn>
          <ButtonToCart />
        </CartBtn>

        <NavMobile isOpen={isMobileMenuOpen}>
          <CloseMobile onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/images/closeX.png" alt="Close" />
          </CloseMobile>
          <div>
            <NavLink to="/">
              <Logo src="/images/logo.png" alt="logo" />
            </NavLink>
            <SearchBar />
            <LinksBlockMob>
              <NavLinkStyled to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Головна
              </NavLinkStyled>
              <NavLinkStyled
                to="catalog"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Каталог
              </NavLinkStyled>
              <NavLinkStyled
                to="delivery&pay"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Доставка та оплата
              </NavLinkStyled>
              <NavLinkStyled
                to="about"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Про нас
              </NavLinkStyled>
              <NavLinkStyled
                to="contacts"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Контакти
              </NavLinkStyled>
              <NavLinkStyled
                to="faq"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </NavLinkStyled>
              <NavLinkStyled
                to="corporation"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Для корпоративних клієнтів
              </NavLinkStyled>
            </LinksBlockMob>
            <MenuLine />
            <InfoBlocks>
              <div>
                <AccentText>zakaz@loverflower.ua</AccentText>
                <SidebarText>
                  Доставка 24/7 після узгодження з оператором
                </SidebarText>
              </div>
              <div>
                <AccentText>вул. Тараса Шевченка 67</AccentText>
                <SidebarText>
                  10:00 до 21:00 <br /> без вихідних
                </SidebarText>
              </div>
            </InfoBlocks>
            <PrivacyText>Політика конфіденційності</PrivacyText>
            <PrivacyText>Обробка персональних даних</PrivacyText>
            <PhoneLink href="tel:+380971136969">+380 (97) 113-69-69</PhoneLink>

            <SocialBlock>
              <li>
                <a href="https://www.instagram.com/">
                  <SocialImg src="/images/instagram.png" alt="instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.whatsapp.com/?lang=uk">
                  <SocialImg src="/images/whats-up.png" alt="whats-up" />
                </a>
              </li>
              <li>
                <a href="tel:+380971136969">
                  <SocialImg src="/images/call.png" alt="call" />
                </a>
              </li>
            </SocialBlock>
          </div>
        </NavMobile>
      </Container>
    </Header>
  );
};

export default Menu;
