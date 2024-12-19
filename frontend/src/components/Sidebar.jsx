import ButtonToCart from './ButtonToCart';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__block">
        <div>
          <h3 className="sidebar__accent">zakaz@loverflower.ua</h3>
          <p className="sidebar__text">
            Доставка 24/7 після узгодження з оператором
          </p>
          <h3 className="sidebar__accent">вул. Тараса Шевченка 67</h3>
          <p className="sidebar__text">
            10:00 до 21:00 <br /> без вихідних
          </p>
        </div>
        <div className="sidebar__social">
          <ul className="sidebar__social-list">
            <li>
              <a href="https://www.instagram.com/">
                <img
                  className="sidebar__social-img"
                  src="images/instagram.png"
                  alt="instagram"
                />
              </a>
            </li>
            <li>
              <a href="https://www.whatsapp.com/?lang=uk">
                <img
                  className="sidebar__social-img"
                  src="images/whats-up.png"
                  alt="whats-up"
                />
              </a>
            </li>
            <li>
              <a href="tel:+380971136969">
                <img
                  className="sidebar__social-img"
                  src="images/call.png"
                  alt="call"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar__call">
          <h3 className="sidebar__call-number">+380 (97) 113-69-69</h3>
          <div className="sidebar__call-btn">
            <a className="sidebar__call-number" href="tel:+380971136969">
              <img
                className="sidebar__call-icon"
                src="images/phone.svg"
                alt="call"
              />
              Замовити дзвінок
            </a>
          </div>
        </div>
        <div className="sidebar__cart">
          <ButtonToCart />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
