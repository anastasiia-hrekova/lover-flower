import { NavLink } from 'react-router-dom';
import Container from '../styles/Container';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  gap: 2rem;
  font-family: 'Oswald', sans-serif;
  margin-top: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    margin-bottom: 2rem;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.mainColor};
`;

const Info = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const NavLinkTitle = styled(NavLink)`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.mainColor};
`;

const FooterBlocks = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  text-transform: uppercase;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.8rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items: center;
    text-align: center;
    gap: 0;
    width: 100%;
  }
`;

const LogoMobile = styled(NavLink)`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
  }
`;

const LogoDesktop = styled(NavLink)`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const FooterPayment = styled(FooterBlocks)`
  width: 24.4rem;

  p {
    margin-top: 1rem;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      text-transform: none;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    order: 3;
  }
`;

const FooterAddressTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.mainColor};
`;

const FooterSocial = styled.ul`
  margin-top: 1.8rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;

  img {
    width: 2.4rem;
    height: 2.4rem;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

const Footer = () => {
  return (
    <footer>
      <Container>
        <FooterStyles>
          <LogoMobile to="/">
            <img className="menu__logo" src="/images/logo.png" alt="logo" />
          </LogoMobile>
          <FooterPayment>
            <LogoDesktop to="/">
              <img className="menu__logo" src="/images/logo.png" alt="logo" />
            </LogoDesktop>
            <div>
              <FooterTitle>Реквізити</FooterTitle>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam ad officia tempora consectetur voluptatibus laudantium
                dicta ipsa vitae magnam, obcaecati ex assumenda, blanditiis,
                quisquam amet fuga quos? Vitae, blanditiis velit!
              </p>
            </div>
          </FooterPayment>
          <FooterBlocks>
            <FooterTitle>Каталог</FooterTitle>
            <Info>
              <NavLink to="catalog">Популярні</NavLink> <br />
              <NavLink to="catalog">Сухоквіти</NavLink> <br />
              <NavLink to="catalog">Букети троянд</NavLink> <br />
              <NavLink to="catalog">Копозиції із квітів</NavLink> <br />
              <NavLink to="catalog">Індивідуальний букет</NavLink> <br />
              <NavLink to="catalog">Букет на свято</NavLink> <br />
              <NavLink to="catalog">Упаковка подарунків</NavLink> <br />
              <NavLink to="catalog">Шари</NavLink> <br />
              <NavLink to="catalog">Листівки</NavLink> <br />
              <NavLink to="catalog">Конверти</NavLink> <br />
            </Info>
          </FooterBlocks>
          <FooterBlocks>
            <FooterTitle>Букет</FooterTitle>
            <Info>
              <NavLink to="catalog">Для дівчини</NavLink> <br />
              <NavLink to="catalog">Для чоловіка</NavLink> <br />
              <NavLink to="catalog">Для дружини</NavLink> <br />
              <NavLink to="catalog">Для мами</NavLink> <br />
              <NavLink to="catalog">Для колеги</NavLink> <br />
              <NavLink to="catalog">Для керівника</NavLink> <br />
              <NavLink to="catalog">Для доньки</NavLink> <br />
              <NavLink to="catalog">Для дітей</NavLink> <br />
            </Info>
          </FooterBlocks>
          <FooterBlocks>
            <NavLinkTitle to="delivery&pay">Доставка та оплата</NavLinkTitle>
            <br />
            <NavLinkTitle to="about">Про нас</NavLinkTitle>
            <br />
            <NavLinkTitle to="faq">FAQ</NavLinkTitle>
            <br />
            <NavLinkTitle to="contacts">Контакти</NavLinkTitle>
            <br />
            <NavLinkTitle to="corporation">
              Для корпоративних <br /> клієнтів
            </NavLinkTitle>
            <br />
          </FooterBlocks>
          <FooterBlocks>
            <div>
              <FooterAddressTitle>zakaz@loverflower.ua</FooterAddressTitle>
              <p>Доставка 24/7 після узгодження з оператором</p>
              <br />
              <FooterAddressTitle>вул. Тараса Шевченка 67</FooterAddressTitle>
              <p>
                10:00 до 21:00 <br /> без вихідних
              </p>
              <br />
              <FooterAddressTitle>+380 (97) 113-69-69</FooterAddressTitle>
              <p>Прийом дзвінків цілодобово</p>
              <br />

              <FooterSocial>
                <li>
                  <a href="https://www.instagram.com/">
                    <img src="/images/instagram.png" alt="instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.whatsapp.com/?lang=uk">
                    <img src="/images/whats-up.png" alt="whats-up" />
                  </a>
                </li>
                <li>
                  <a href="tel:+380971136969">
                    <img src="/images/call.png" alt="call" />
                  </a>
                </li>
              </FooterSocial>
            </div>
          </FooterBlocks>
        </FooterStyles>
      </Container>
    </footer>
  );
};

export default Footer;
