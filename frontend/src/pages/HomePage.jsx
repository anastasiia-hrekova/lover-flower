import { Link, useNavigate } from 'react-router-dom';
import ButtonLink from '../components/ButtonLink';
import Sidebar from '../components/Sidebar';
import CardsCarousel from '../components/CardsCarousel';
import Footer from '../components/Footer';
import Container from '../styles/Container';
import styled from 'styled-components';

const Hero = styled.section`
position: relative;
width: 100%;
height: 130rem;
  background-image: url(../assets/hero-background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &::after {
    position: absolute;
    width: 100%;
height: 102rem;
    background-image: url(/assets/hero-img.png);
    content: '';
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 0;
    top: 0;
`;

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('catalog');
  };

  return (
    <main className="home">
      <Hero>
        <Container>
          <div className=" hero__block">
            <div>
              <span className="hero__title-back">Lover</span>
              <h1 className="hero__title">Flower</h1>
            </div>
            <div className="hero__info">
              <p>Створюєм для тих, хто цінує свіжість та витонченність</p>
              <ButtonLink text="Дивитись каталог" onNavigate={handleNavigate} />
            </div>
          </div>
        </Container>
        <Sidebar />
      </Hero>

      <section className="catalog">
        <Container>
          <div className="catalog__block">
            <div className="catalog__describtion">
              <h2 className="catalog__title">Каталог</h2>
              <p className="catalog__describtion-text">
                У нас найбільший вибір увітів, букетів, листівок та подарунків.
                Ми завжди допоможемо вам підібрати букет для вашої події, наш
                менеджер вас проконсультує і допоможе визначитись із вибором
              </p>
              <p className="catalog__describtion-text">
                Ознайомтесь із розділами нашого каталогу
              </p>
            </div>
            <div className="catalog__bouqets catalog__containers">
              <h3 className="catalog__containers-title">
                Готові букети із сухоквітів
              </h3>
              <ul className="catalog__containers-list">
                <li>Букети</li>
                <li>Для інтер'єру</li>
                <li>Композиції</li>
              </ul>
              <Link className="catalog__containers-link" to="catalog">
                Дивитись каталог
              </Link>
            </div>
            <div className="catalog__flowers catalog__containers">
              <h3 className="catalog__containers-title">Квіти</h3>
              <ul className="catalog__containers-list">
                <li>Збірні букети</li>
                <li>Монобукети</li>
                <li>Композиції із квітів</li>
                <li>Троянди</li>
                <li>Весільні</li>
              </ul>
              <Link className="catalog__containers-link" to="catalog">
                Дивитись каталог
              </Link>
            </div>
            <div className="catalog__other catalog__containers">
              <h3 className="catalog__containers-title">Додатково</h3>
              <ul className="catalog__containers-list">
                <li>Шари</li>
                <li>Іграшки</li>
                <li>Листівки</li>
                <li>Упаковка</li>
              </ul>
              <Link className="catalog__containers-link" to="catalog">
                Дивитись каталог
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bestsellers">
        <Container>
          <div className="bestsellers__block">
            <h2 className="bestsellers__title">
              <span className="bestsellers__title-left">Популярні</span> <br />
              букети
            </h2>
            <p className="bestsellers__text">
              Найулюбленіші композиції наших клієнтів
            </p>
            <div className="bestsellers__list">
              <CardsCarousel />
            </div>
            <Link className=" bestsellers__link" to="catalog">
              Дивитись весь каталог
              <img src="/images/arrow-catalog.svg" alt="arrow" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="order">
        <Container>
          <div className=" order__block">
            <h1 className="order__title">Як зробити замовлення</h1>
            <ul className="order__list">
              <div className="order__list-section">
                <li className="order__item">
                  <h4 className="order__item-title">1 шаг</h4>
                  <p className="order__item-text">
                    Оберіть які квіти чи подарунки ви хочете замовити
                  </p>
                </li>
                <li className="order__item">
                  <h4 className="order__item-title">2 шаг</h4>
                  <p className="order__item-text">
                    Оформіть замовлення, і ит відправимо вам підтвердження на
                    електронну адресу. а також менеджер зв'яжеться з вами по
                    телефону чи Whatsupp
                  </p>
                </li>
                <li className="order__item">
                  <h4 className="order__item-title">3 шаг</h4>
                  <p className="order__item-text">
                    Наші флористи дбайливо підійдуть до створення букета квітів
                    в той же день, або прямо перед важливою подією
                  </p>
                </li>
              </div>
              <div className="order__list-section">
                <li className="order__item">
                  <h4 className="order__item-title">4 шаг</h4>
                  <p className="order__item-text">
                    Наш кур'єр доставить ваше замовлення за вказанною адресою,
                    та повідомить вас про доставку
                  </p>
                </li>
                <li className="order__item">
                  <h4 className="order__item-title">5 шаг</h4>
                  <p className="order__item-text">
                    Насолождуйтесь квітами, або даруйте свою любов та увагу
                    коханим та рідним
                  </p>
                </li>
              </div>
            </ul>
          </div>
        </Container>
      </section>

      <section className="special">
        <Container>
          <div className="special__block">
            <h2 className="special__title">
              Особливий <br />
              <span className="special__title-line"> привід?</span>
              <img
                className="special__title-img"
                src="images/holiday-section-1.png"
                alt="bouquet"
              />
            </h2>

            <div className="special__content">
              <div className="special__text">
                <p>
                  Ми готові прийти на допомогу та зібрати унікальний букет, на
                  будь-який смак, бюджет та для будь-якої події за вашим
                  індивідуальним замовленням.
                </p>
                <ul className="special__text-list">
                  <li>врахуємо навіть найвишуканіші побажання;</li>
                  <li>
                    підберемо найсвіжіші квіти та зробимо унікальний букет чи
                    композицію;
                  </li>
                  <li>сплатити можна при отриманні або онлайн на сайті</li>
                </ul>
                <ButtonLink text="Зібрати букет" />
              </div>
              <div className="special__images">
                <img src="images/holiday-section-2.png" alt="bouquet" />
                <img src="images/holiday-section-3.png" alt="bouquet" />
                <img src="images/holiday-section-4.png" alt="bouquet" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="question">
        <Container>
          <div className="question__block">
            <h2 className="question__title">
              Залишились <br />
              <span className="question__title-right">питання?</span>
            </h2>
            <div className="question__info">
              <p className="question__info-text">
                Надішліть ваше запитання, замовлення, пропозицію або скаргу
                через форму зворотного зв'язку, і наш спеціаліст зв'яжеться з
                вами протягом 15 хвилин.
              </p>
              <form className="question__form">
                <input
                  className="question__form-input"
                  type="text"
                  placeholder="Ваше ім`я"
                />
                <input
                  className="question__form-input"
                  type="tel"
                  placeholder="+38-(097)-777-77-77"
                />
                <textarea
                  className="question__form-area"
                  rows="5"
                  cols="20"
                  placeholder="Ваш коментарій"
                />
                <ButtonLink text="Надіслати" />
                <p className="question__form-text">
                  Натискаючи на кнопку «Надіслати», я даю свою згоду на обробку
                  персональних даних відповідно до
                  <span className="question__form-text-accent">
                    Політики конфіденційності
                  </span>
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>

      <section className="instagram">
        <Container>
          <div className="instagram__block">
            <div className="instagram__block">
              <img src="/images/inst1.png" alt="ins1" />
              <img src="/images/inst2.png" alt="ins2" />
              <img src="/images/inst3.png" alt="ins3" />
              <img src="/images/inst4.png" alt="ins4" />
            </div>
            <img
              className="instagram__title"
              src="/images/our-social-networks.png"
              alt="Our social media"
            />
            <ul className="instagram__socials">
              <li>
                <a href="https://www.instagram.com/">
                  <img
                    className="instagram__socials-img"
                    src="images/instagram.png"
                    alt="instagram"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.whatsapp.com/?lang=uk">
                  <img
                    className="instagram__socials-img"
                    src="images/whats-up.png"
                    alt="whats-up"
                  />
                </a>
              </li>
              <li>
                <a href="tel:+380971136969">
                  <img
                    className="instagram__socials-img"
                    src="images/call.png"
                    alt="call"
                  />
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
};

export default HomePage;
