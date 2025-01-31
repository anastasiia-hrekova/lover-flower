import { Link, useNavigate } from 'react-router-dom';
import ButtonLink from '../components/ButtonLink';
import Sidebar from '../components/Sidebar';
import CardsCarousel from '../components/CardsCarousel';
import Footer from '../components/Footer';
import Container from '../styles/Container';
import styled from 'styled-components';

// MAIN STYLES

const Hero = styled.section`
position: relative;
width: 100%;
height: 130rem;
background-image: url(images/hero-background.jpg);
background-repeat: no-repeat;
background-size: cover;
background-position: center;

  &::after {
    position: absolute;
    width: 100%;
    height: 102rem;
    background-image: url(images/hero-img.png);
    content: '';
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 0;
    top: 0;

`;

// HERO SECTION

const HeroBlock = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: relative;
  flex-direction: column;
  width: 100%;
  top: 9.5rem;
`;

const HeroTitle = styled.h1`
  position: relative;
  font-size: 25rem;
  font-weight: 300;
  line-height: 24.7rem;
  font-family: 'Cormorant', serif;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  z-index: 2;
`;

const HeroTitleSpan = styled.span`
  font-size: 25rem;
  font-weight: 300;
  line-height: 24.7rem;
  font-family: 'Cormorant', serif;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  z-index: -1;
  margin-left: 8%;
`;

const HeroInfo = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  gap: 47px;
  z-index: 2;
  font-family: 'Oswald', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 3rem;
  letter-spacing: 0.02rem;
`;

// CATALOG SECTION

const Catalog = styled.section`
  width: 100%;
  height: 100rem;
  margin-top: 2rem;
  background-image: url(images/home-catalog.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center -15rem;
`;

const CatalogBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3rem;
  padding: 0 4rem;
`;

const CatalogDescribtion = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  flex-direction: column;
  gap: 1rem;
`;

const CatalogTitle = styled.h2`
  font-family: 'Cormorant', serif;
  font-size: 10rem;
  font-weight: 400;
  line-height: 12rem;
  letter-spacing: 0.02rem;
  text-transform: uppercase;
`;

const CatalogText = styled.p`
  font-size: 2rem;
  font-weight: 300;
  line-height: 2.6rem;
  width: 46rem;
  margin-left: 9.5rem;
  font-family: 'Oswald', sans-serif;
`;

const CatalogContainers = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 2rem;
  backdrop-filter: blur(2rem);
  font-family: 'Oswald', sans-serif;
  padding: 3rem;
  padding-left: 5rem;
`;

const CatalogContainersTitle = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  line-height: 4.4rem;
  color: ${({ theme }) => theme.colors.mainColor};
  letter-spacing: 0.04rem;
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const CatalogContainersList = styled.ul`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.7rem;
  list-style: disc;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  margin-bottom: 2.4rem;
`;

const LinkStyled = styled(Link)`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.8rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.accentColor};
  margin-left: 65%;
`;

const CatalogBouqets = styled.div`
  width: 44rem;
  height: 28rem;
  margin-top: 12rem;
  margin-left: 8rem;
`;

const CatalogFlowers = styled.div`
  width: 54rem;
  height: 31rem;
  margin-top: -8rem;
`;

const CatalogOther = styled.div`
  width: 54rem;
  height: 26rem;
`;

// BESTSELLER SECTION

const Bestsellers = styled.section`
  width: 100%;
  height: 110rem;
  background-image: url(images/bestseller_back.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 10rem;
`;

const BestsellersBlock = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  margin-bottom: 18rem;
  background-image: url(images/bestsellers.png);
  background-repeat: no-repeat;
  background-size: 90rem 65rem;
  background-position: right 2.5rem;
  padding-top: 0;
`;

const BestsellersTitle = styled.h2`
  font-size: 10rem;
  font-weight: 400;
  line-height: 12rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  text-align: center;
`;

const BestsellersTitleSpan = styled.span`
  font-size: 10rem;
  font-weight: 400;
  line-height: 12rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  margin-left: -100%;
`;

const BestsellersText = styled.p`
  font-size: 2rem;
  font-weight: 300;
  line-height: 3rem;
  text-align: center;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 0.02rem;
  margin-bottom: 8.6rem;
`;

const BestsellersList = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  margin-bottom: 6rem;

  img {
    filter: grayscale(1);

    &:hover {
      filter: grayscale(0);
      transition: 0.4s, ease;
    }
  }
`;

const BestsellersLink = styled(Link)`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.8rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.accentColor};
  margin-right: 80%;
`;

// ORDER SECTION

const Order = styled.section`
  position: relative;
  width: 100%;
  margin-bottom: 16rem;

  &::before {
    position: absolute;
    width: 100%;
    height: 102rem;
    content: '';
    background-image: url(images/order-section.png);
    background-repeat: no-repeat;
    background-size: 45rem 84.5rem;
    background-position: left 4rem;
    z-index: 2;
  }

  &::after {
    position: absolute;
    width: 30rem;
    height: 20rem;
    content: '';
    background-image: url(images/order-section-lover-flower.png);
    background-repeat: no-repeat;
    background-size: 30rem 20rem;
    background-position: center;
    right: 10%;
    top: 85%;
  }
`;

const OrderTitle = styled.h2`
  font-size: 10rem;
  font-weight: 400;
  line-height: 12rem;
  font-family: 'Cormorant', serif;
  letter-spacing: 0.02rem;
  text-transform: uppercase;
  margin-bottom: 6.5rem;
`;

const OrderList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-left: 35%;
  gap: 11.5rem;

  &::before {
    content: '';
    position: absolute;
    top: -3rem;
    left: 4%;
    transform: translateX(-50%);
    width: 6.5rem;
    height: 1rem;
    background-color: ${({ theme }) => theme.colors.accentColor};
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0.1rem;
    height: 44rem;
    background-color: ${({ theme }) => theme.colors.accentColor};
  }
`;

const OrderListBlock = styled.div`
  width: 26.5rem;
  display: flex;
  flex-direction: column;
`;

const OrderItem = styled.li`
  font-family: 'Oswald', sans-serif;
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 1.2rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  margin-bottom: 4rem;
`;

const OrderItemTitle = styled.h4`
  font-size: 3rem;
  font-weight: 700;
  line-height: 4.5rem;
  color: ${({ theme }) => theme.colors.accentColor};
`;

const OrderItemText = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  color: ${({ theme }) => theme.colors.textColor};
`;

// SPECIAL SECTION

const Special = styled.section`
  position: relative;
  width: 100%;
  margin-bottom: 18.2rem;
  text-transform: uppercase;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 80rem;
    background-image: url(images/special.png);
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    z-index: -1;
    right: 0;
    top: 0;
  }
`;

const SpecialTitle = styled.h2`
  position: relative;
  font-size: 10rem;
  font-weight: 400;
  line-height: 12rem;
  font-family: 'Cormorant', serif;
  letter-spacing: 0.02rem;
  margin-bottom: 3rem;
`;

const SpecialTitleSpan = styled.span`
  position: relative;
  font-size: 10rem;
  font-weight: 400;
  line-height: 12rem;
  font-family: 'Cormorant', serif;
  letter-spacing: 0.02rem;
  margin-left: 35%;
  margin-bottom: 3rem;

  &::before {
    position: absolute;
    width: 25.5rem;
    height: 0.1rem;
    @include size(25.5rem, 0.1rem);
    content: '';
    background-color: ${({ theme }) => theme.colors.accentColor};
    top: 50%;
    margin-left: -78%;
  }
`;

const SpecialTitleImg = styled.img`
  position: absolute;
  right: 0;
  top: 0;
`;

const SpecialContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
`;

const SpecialText = styled.div`
  width: 25.5rem;
  display: flex;
  align-items: left;
  flex-direction: column;
  margin-left: 10%;
  gap: 4rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  font-family: 'Oswald', sans-serif;
`;

const SpecialList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  list-style: disc;

  &::before {
    content: '';
    position: absolute;
    width: 2rem;
    height: 6rem;
    background-image: url(images/arrow-oval.svg);
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
    left: -10%;
    top: 100%;
  }
`;

const SpecialImages = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  height: 29.2rem;
  margin-left: 7%;
`;

// QUESTION SECTION

const Questions = styled.section`
  position: relative;
  width: 100%;
  height: 66.6rem;
  background-color: #0f2222;
  backdrop-filter: blur(8px);

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100rem;
    background-image: url(images/questions-section.png);
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
    top: -15%;
    z-index: 1;
  }
`;

const QuestionsBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const QuestionsTitle = styled.h2`
  font-family: 'Cormorant', serif;
  font-size: 10rem;
  font-weight: 400;
  line-height: 12rem;
  z-index: 2;
  text-transform: uppercase;
  letter-spacing: 0.02rem;
`;

const QuestionsTitleSpan = styled.span`
  font-family: 'Cormorant', serif;
  font-size: 10rem;
  font-weight: 400;
  line-height: 12rem;
  z-index: 2;
  text-transform: uppercase;
  letter-spacing: 0.02rem;
  margin-left: 25%;
`;

const QuestionsInfo = styled.div`
  display: flex;
  align-items: right;
  justify-content: right;
  flex-direction: column;
  width: 44.5rem;
  margin-top: 10rem;
  gap: 3rem;
`;

const QuestionsInfoText = styled.p`
  position: relative;
  margin-left: 40%;
  width: 25.5rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 0.04rem;
  text-transform: uppercase;

  &::before {
    position: absolute;
    content: '';
    top: -5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 25.5rem;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.colors.mainColor};
  }
`;

const QuestionsForm = styled.form`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  z-index: 3;
`;

const QuestionsFormInput = styled.input`
  width: 44.5rem;
  height: 6rem;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.inputTextColor};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04rem;
  padding: 2rem;
  cursor: pointer;
`;

const QuestionsFormArea = styled.textarea`
  width: 44.5rem;
  height: 12rem;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.inputTextColor};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04rem;
  padding: 2rem;
  cursor: pointer;
`;

const QuestionsFormText = styled.p`
  width: 34.2rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2rem;
  text-align: left;
  letter-spacing: 0.02rem;
`;

const QuestionsFormTextSpan = styled.span`
  width: 34.2rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2rem;
  text-align: left;
  letter-spacing: 0.02rem;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.accentColor};
`;

// INSTAGRAM SECTION

const Instagram = styled.section`
  padding: 20rem 0;
  background-image: url(images/social-section-back.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center -6rem;
`;

const InstagramBlock = styled.div`
  position: relative;
  ${({ theme }) => theme.mixins.flex};
  justify-content: space-between;
  flex-direction: row;
  gap: 3rem;
`;

const InstagramTitle = styled.img`
  position: absolute;
  top: -8rem;
  right: 10%;
  width: 35rem;
  height: 15rem;
`;

const InstagramSocials = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-top: 12rem;
  margin-right: 4rem;
`;

const InstagramSocialsImg = styled.img`
  width: 4rem;
  height: 4rem;
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
          <HeroBlock>
            <div>
              <HeroTitleSpan>Lover</HeroTitleSpan>
              <HeroTitle>Flower</HeroTitle>
            </div>
            <HeroInfo>
              <p>Створюєм для тих, хто цінує свіжість та витонченність</p>
              <ButtonLink text="Дивитись каталог" onNavigate={handleNavigate} />
            </HeroInfo>
          </HeroBlock>
        </Container>
        <Sidebar />
      </Hero>

      <Catalog>
        <Container>
          <CatalogBlock>
            <CatalogDescribtion>
              <CatalogTitle>Каталог</CatalogTitle>
              <CatalogText>
                У нас найбільший вибір увітів, букетів, листівок та подарунків.
                Ми завжди допоможемо вам підібрати букет для вашої події, наш
                менеджер вас проконсультує і допоможе визначитись із вибором
              </CatalogText>
              <CatalogText>
                Ознайомтесь із розділами нашого каталогу
              </CatalogText>
            </CatalogDescribtion>
            <CatalogBouqets>
              <CatalogContainers>
                <CatalogContainersTitle>
                  Готові букети із сухоквітів
                </CatalogContainersTitle>
                <CatalogContainersList>
                  <li>Букети</li>
                  <li>Для інтер'єру</li>
                  <li>Композиції</li>
                </CatalogContainersList>
                <LinkStyled to="catalog">Дивитись каталог</LinkStyled>
              </CatalogContainers>
            </CatalogBouqets>
            <CatalogFlowers>
              <CatalogContainers>
                <CatalogContainersTitle>Квіти</CatalogContainersTitle>
                <CatalogContainersList>
                  <li>Збірні букети</li>
                  <li>Монобукети</li>
                  <li>Композиції із квітів</li>
                  <li>Троянди</li>
                  <li>Весільні</li>
                </CatalogContainersList>
                <LinkStyled to="catalog">Дивитись каталог</LinkStyled>
              </CatalogContainers>
            </CatalogFlowers>
            <CatalogOther>
              <CatalogContainers>
                <CatalogContainersTitle>Додатково</CatalogContainersTitle>
                <CatalogContainersList>
                  <li>Шари</li>
                  <li>Іграшки</li>
                  <li>Листівки</li>
                  <li>Упаковка</li>
                </CatalogContainersList>
                <LinkStyled to="catalog">Дивитись каталог</LinkStyled>
              </CatalogContainers>
            </CatalogOther>
          </CatalogBlock>
        </Container>
      </Catalog>

      <Bestsellers>
        <Container>
          <BestsellersBlock>
            <BestsellersTitle>
              <BestsellersTitleSpan>Популярні</BestsellersTitleSpan> <br />
              букети
            </BestsellersTitle>
            <BestsellersText>
              Найулюбленіші композиції наших клієнтів
            </BestsellersText>
            <BestsellersList>
              <CardsCarousel />
            </BestsellersList>
            <BestsellersLink to="catalog">
              Дивитись весь каталог
              <img src="images/arrow-catalog.svg" alt="arrow" />
            </BestsellersLink>
          </BestsellersBlock>
        </Container>
      </Bestsellers>

      <Order>
        <Container>
          <div>
            <OrderTitle>Як зробити замовлення</OrderTitle>
            <OrderList>
              <OrderListBlock>
                <OrderItem>
                  <OrderItemTitle>1 шаг</OrderItemTitle>
                  <OrderItemText>
                    Оберіть які квіти чи подарунки ви хочете замовити
                  </OrderItemText>
                </OrderItem>
                <OrderItem>
                  <OrderItemTitle>2 шаг</OrderItemTitle>
                  <OrderItemText>
                    Оформіть замовлення, і ит відправимо вам підтвердження на
                    електронну адресу. а також менеджер зв'яжеться з вами по
                    телефону чи Whatsupp
                  </OrderItemText>
                </OrderItem>
                <OrderItem>
                  <OrderItemTitle>3 шаг</OrderItemTitle>
                  <OrderItemText>
                    Наші флористи дбайливо підійдуть до створення букета квітів
                    в той же день, або прямо перед важливою подією
                  </OrderItemText>
                </OrderItem>
              </OrderListBlock>
              <OrderListBlock>
                <OrderItem>
                  <OrderItemTitle>4 шаг</OrderItemTitle>
                  <OrderItemText>
                    Наш кур'єр доставить ваше замовлення за вказанною адресою,
                    та повідомить вас про доставку
                  </OrderItemText>
                </OrderItem>
                <OrderItem>
                  <OrderItemTitle>5 шаг</OrderItemTitle>
                  <OrderItemText>
                    Насолождуйтесь квітами, або даруйте свою любов та увагу
                    коханим та рідним
                  </OrderItemText>
                </OrderItem>
              </OrderListBlock>
            </OrderList>
          </div>
        </Container>
      </Order>

      <Special>
        <Container>
          <div>
            <SpecialTitle>
              Особливий <br />
              <SpecialTitleSpan> привід?</SpecialTitleSpan>
              <SpecialTitleImg
                src="images/holiday-section-1.png"
                alt="bouquet"
                loading="lazy"
              />
            </SpecialTitle>

            <SpecialContent>
              <SpecialText>
                <p>
                  Ми готові прийти на допомогу та зібрати унікальний букет, на
                  будь-який смак, бюджет та для будь-якої події за вашим
                  індивідуальним замовленням.
                </p>
                <SpecialList>
                  <li>врахуємо навіть найвишуканіші побажання;</li>
                  <li>
                    підберемо найсвіжіші квіти та зробимо унікальний букет чи
                    композицію;
                  </li>
                  <li>сплатити можна при отриманні або онлайн на сайті</li>
                </SpecialList>
                <ButtonLink text="Зібрати букет" />
              </SpecialText>
              <SpecialImages>
                <img
                  src="images/holiday-section-2.png"
                  alt="bouquet"
                  loading="lazy"
                />
                <img
                  src="images/holiday-section-3.png"
                  alt="bouquet"
                  loading="lazy"
                />
                <img
                  src="images/holiday-section-4.png"
                  alt="bouquet"
                  loading="lazy"
                />
              </SpecialImages>
            </SpecialContent>
          </div>
        </Container>
      </Special>

      <Questions>
        <Container>
          <QuestionsBlock>
            <QuestionsTitle>
              Залишились <br />
              <QuestionsTitleSpan>питання?</QuestionsTitleSpan>
            </QuestionsTitle>
            <QuestionsInfo>
              <QuestionsInfoText>
                Надішліть ваше запитання, замовлення, пропозицію або скаргу
                через форму зворотного зв'язку, і наш спеціаліст зв'яжеться з
                вами протягом 15 хвилин.
              </QuestionsInfoText>
              <QuestionsForm>
                <QuestionsFormInput type="text" placeholder="Ваше ім`я" />
                <QuestionsFormInput
                  type="tel"
                  placeholder="+38-(097)-777-77-77"
                />
                <QuestionsFormArea
                  rows="5"
                  cols="20"
                  placeholder="Ваш коментарій"
                />
                <ButtonLink text="Надіслати" />
                <QuestionsFormText>
                  Натискаючи на кнопку «Надіслати», я даю свою згоду на обробку
                  персональних даних відповідно до
                  <QuestionsFormTextSpan>
                    Політики конфіденційності
                  </QuestionsFormTextSpan>
                </QuestionsFormText>
              </QuestionsForm>
            </QuestionsInfo>
          </QuestionsBlock>
        </Container>
      </Questions>

      <Instagram>
        <Container>
          <InstagramBlock>
            <InstagramBlock>
              <img src="images/inst1.png" alt="ins1" loading="lazy" />
              <img src="images/inst2.png" alt="ins2" loading="lazy" />
              <img src="images/inst3.png" alt="ins3" loading="lazy" />
              <img src="images/inst4.png" alt="ins4" loading="lazy" />
            </InstagramBlock>
            <InstagramTitle
              src="images/our-social-networks.png"
              alt="Our social media"
            />
            <InstagramSocials>
              <li>
                <a href="https://www.instagram.com/">
                  <InstagramSocialsImg
                    src="images/instagram.png"
                    alt="instagram"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.whatsapp.com/?lang=uk">
                  <InstagramSocialsImg
                    src="images/whats-up.png"
                    alt="whats-up"
                  />
                </a>
              </li>
              <li>
                <a href="tel:+380971136969">
                  <InstagramSocialsImg src="images/call.png" alt="call" />
                </a>
              </li>
            </InstagramSocials>
          </InstagramBlock>
        </Container>
      </Instagram>

      <Footer />
    </main>
  );
};

export default HomePage;
