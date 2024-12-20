import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div className="footer__payment">
          <NavLink to="/">
            <img className="menu__logo" src="/images/logo.png" alt="logo" />
          </NavLink>
          <h3 className="footer__title">Реквізити</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam ad
            officia tempora consectetur voluptatibus laudantium dicta ipsa vitae
            magnam, obcaecati ex assumenda, blanditiis, quisquam amet fuga quos?
            Vitae, blanditiis velit!
          </p>
        </div>
        <div className="footer__catalog">
          <h3 className="footer__title">Каталог</h3>
          <div>
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
          </div>
        </div>
        <div className="footer__boquets">
          <h3 className="footer__title">Букет</h3>
          <div>
            <NavLink to="catalog">Для дівчини</NavLink> <br />
            <NavLink to="catalog">Для чоловіка</NavLink> <br />
            <NavLink to="catalog">Для дружини</NavLink> <br />
            <NavLink to="catalog">Для мами</NavLink> <br />
            <NavLink to="catalog">Для колеги</NavLink> <br />
            <NavLink to="catalog">Для керівника</NavLink> <br />
            <NavLink to="catalog">Для доньки</NavLink> <br />
            <NavLink to="catalog">Для дітей</NavLink> <br />
          </div>
        </div>
        <div className="footer__menu">
          <NavLink className="footer__title" to="delivery&pay">
            Доставка та оплата
          </NavLink>
          <br />
          <NavLink className="footer__title" to="about">
            Про нас
          </NavLink>
          <br />
          <NavLink className="footer__title" to="faq">
            FAQ
          </NavLink>
          <br />
          <NavLink className="footer__title" to="contacts">
            Контакти
          </NavLink>
          <br />
          <NavLink className="footer__title" to="corporation">
            Для корпоративних <br /> клієнтів
          </NavLink>
          <br />
        </div>
        <div className="footer__address">
          <div>
            <h3 className="footer__address-title">zakaz@loverflower.ua</h3>
            <p>Доставка 24/7 після узгодження з оператором</p>
            <br />
            <h3 className="footer__address-title">вул. Тараса Шевченка 67</h3>
            <p>
              10:00 до 21:00 <br /> без вихідних
            </p>
            <br />
            <h3 className="footer__address-title">+380 (97) 113-69-69</h3>
            <p>Прийом дзвінків цілодобово</p>
            <br />

            <ul className="footer__social">
              <li>
                <a href="https://www.instagram.com/">
                  <img
                    className="footer__social-img"
                    src="images/instagram.png"
                    alt="instagram"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.whatsapp.com/?lang=uk">
                  <img
                    className="footer__social-img"
                    src="images/whats-up.png"
                    alt="whats-up"
                  />
                </a>
              </li>
              <li>
                <a href="tel:+380971136969">
                  <img
                    className="footer__social-img"
                    src="images/call.png"
                    alt="call"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
