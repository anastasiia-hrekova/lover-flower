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
background-image: url(/images/hero-background.jpg);
background-repeat: no-repeat;
background-size: cover;
background-position: center;

@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 56rem;
  }

  &::after {
    position: absolute;
    width: 100%;
    height: 102rem;
    background-image: url(/images/hero-img.png);
    content: '';
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 0;
    top: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 44rem;
    z-index: 2;
  }

`;

// HERO SECTION

const HeroBlock = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: relative;
  flex-direction: column;
  width: 100%;
  top: 9.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 0;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 5rem;
    line-height: 6.5rem;
    letter-spacing: 0.1rem;
    text-align: center;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 5rem;
    line-height: 6.5rem;
    letter-spacing: 0.1rem;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 47rem;
    font-size: 1.4rem;
    line-height: 2.1rem;
    width: 21rem;
    text-align: center;
  }
`;

// CATALOG SECTION

const Catalog = styled.section`
  width: 100%;
  height: 100rem;
  margin-top: 2rem;
  background-image: url(/images/home-catalog.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center -15rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background-image: url(/images/catalog-section-mobile.png);
    background-position: center;
    height: 150rem;
    margin-top: 16rem;
  }
`;

const CatalogBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3rem;
  padding: 0 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    padding: 0;
  }
`;

const CatalogDescribtion = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 10rem;
  }
`;

const CatalogTitle = styled.h2`
  font-family: 'Cormorant', serif;
  font-size: 10rem;
  font-weight: 400;
  line-height: 12rem;
  letter-spacing: 0.02rem;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 4rem;
    line-height: 4.9rem;
  }
`;

const CatalogText = styled.p`
  font-size: 2rem;
  font-weight: 300;
  line-height: 2.6rem;
  width: 46rem;
  margin-left: 9.5rem;
  font-family: 'Oswald', sans-serif;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const CatalogContainers = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 2rem;
  backdrop-filter: blur(2rem);
  font-family: 'Oswald', sans-serif;
  padding: 3rem;
  padding-left: 5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    text-align: center;
    margin-left: 4rem;
  }
`;

const CatalogBouqets = styled.div`
  width: 44rem;
  height: 28rem;
  margin-top: 12rem;
  margin-left: 8rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 auto;
    width: 30rem;
  }
`;

const CatalogFlowers = styled.div`
  width: 54rem;
  height: 31rem;
  margin-top: -8rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 auto;
    width: 30rem;
  }
`;

const CatalogOther = styled.div`
  width: 54rem;
  height: 26rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 auto;
    width: 30rem;
  }
`;

// BESTSELLER SECTION

const Bestsellers = styled.section`
  width: 100%;
  height: 110rem;
  background-image: url(/images/bestseller_back.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 10rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: -70%;
  }
`;

const BestsellersBlock = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  margin-bottom: 18rem;
  background-image: url(/images/bestsellers.png);
  background-repeat: no-repeat;
  background-size: 90rem 65rem;
  background-position: right 2.5rem;
  padding-top: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background-image: none;
  }
`;

const BestsellersTitle = styled.h2`
  font-size: 10rem;
  font-weight: 400;
  line-height: 12rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 4rem;
    line-height: 4.9rem;
  }
`;

const BestsellersTitleSpan = styled.span`
  font-size: 10rem;
  font-weight: 400;
  line-height: 12rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  margin-left: -100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 4rem;
    line-height: 4.9rem;
    margin-left: 0;
  }
`;

const BestsellersText = styled.p`
  font-size: 2rem;
  font-weight: 300;
  line-height: 3rem;
  text-align: center;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 0.02rem;
  margin-bottom: 8.6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.4rem;
    line-height: 2.1rem;
    margin-left: 20%;
    letter-spacing: 0.04rem;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: auto;
    width: 30rem;
  }
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
    background-image: url(/images/order-section.png);
    background-repeat: no-repeat;
    background-size: 45rem 84.5rem;
    background-position: left 4rem;
    z-index: 2;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      background-size: 28rem 64rem;
    }
  }

  &::after {
    position: absolute;
    width: 30rem;
    height: 20rem;
    content: '';
    background-image: url(/images/order-section-lover-flower.png);
    background-repeat: no-repeat;
    background-size: 30rem 20rem;
    background-position: center;
    right: 10%;
    top: 85%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      background-size: 15rem 10rem;
      right: -8%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 65rem;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 4rem;
    line-height: 4.9rem;
  }
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

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      left: 53%;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0.1rem;
    height: 44rem;
    background-color: ${({ theme }) => theme.colors.accentColor};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const OrderListBlock = styled.div`
  width: 26.5rem;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    z-index: 2;
    width: 15rem;
    margin-bottom: -2rem;

    > :first-child {
      margin-left: 52%;
      width: 13rem;
    }

    > :nth-child(2) {
      margin-left: 15%;
      width: 20rem;
    }

    > :nth-child(3) {
      margin-left: -10%;
      width: 21rem;
    }
  }
`;

const OrderListBlock2 = styled.div`
  width: 26.5rem;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    z-index: 2;
    width: 30rem;
    margin-left: -50%;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
    line-height: 3rem;
  }
`;

const OrderItemText = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  color: ${({ theme }) => theme.colors.textColor};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.4rem;
    line-height: 1.7rem;
    text-transform: none;
  }
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
    background-image: url(/images/special.png);
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    z-index: -1;
    right: 0;
    top: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: -20%;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 4rem;
    line-height: 4.9rem;
  }
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

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 9.8rem;
      margin-left: -78%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 4rem;
    line-height: 4.9rem;
  }
`;

const SpecialTitleImg = styled.img`
  position: absolute;
  right: 0;
  top: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 30rem;
  }
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
    background-image: url(/images/arrow-oval.svg);
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
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
    background-image: url(/images/questions-section.png);
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
    top: -15%;
    z-index: 1;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      top: -38%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 85rem;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 4rem;
    line-height: 4.9rem;
    margin-top: 3rem;
    margin-left: 1rem;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 4rem;
    line-height: 4.9rem;
    margin-left: 0;
  }
`;

const QuestionsInfo = styled.div`
  display: flex;
  align-items: right;
  justify-content: right;
  flex-direction: column;
  width: 44.5rem;
  margin-top: 10rem;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: absolute;
    margin-top: 33rem;
    margin-left: 1rem;
    width: 30rem;
    z-index: 5;
  }
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

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 0;
    width: 100%;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

const QuestionsFormText = styled.p`
  width: 34.2rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2rem;
  text-align: left;
  letter-spacing: 0.02rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 25rem;
  }
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
  background-image: url(/images/social-section-back.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center -6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background-image: url(/images/instagram-bottom-mobile.png);
    background-position: center bottom;
    background-size: contain;
    margin-top: -30%;
    padding-bottom: 8rem;
  }
`;

const InstagramBlock = styled.div`
  position: relative;
  ${({ theme }) => theme.mixins.flex};
  justify-content: space-between;
  flex-direction: row;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 6px;
  }
`;

const InstagramBlockImages = styled.div`
  position: relative;
  ${({ theme }) => theme.mixins.flex};
  justify-content: space-between;
  flex-direction: row;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 20%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 6px;
  }
`;

const InstagramImages = styled.img`
  width: 15rem;
  height: 15rem;
`;

const InstagramTitle = styled.img`
  position: absolute;
  top: -8rem;
  right: 10%;
  width: 35rem;
  height: 15rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 19rem;
    height: 12.1rem;
    right: 40%;
  }
`;

const InstagramSocials = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-top: 12rem;
  margin-right: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: absolute;
    top: -38%;
    right: -10%;
  }
`;

const InstagramSocialsImg = styled.img`
  width: 4rem;
  height: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 2rem;
    height: 2rem;
  }
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
              <img src="/images/arrow-catalog.svg" alt="arrow" />
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
              <OrderListBlock2>
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
              </OrderListBlock2>
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
                src="/images/holiday-section-1.png"
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
                  src="/images/holiday-section-2.png"
                  alt="bouquet"
                  loading="lazy"
                />
                <img
                  src="/images/holiday-section-3.png"
                  alt="bouquet"
                  loading="lazy"
                />
                <img
                  src="/images/holiday-section-4.png"
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
                <QuestionsFormInput
                  id="name"
                  type="text"
                  placeholder="Ваше ім`я"
                  autoComplete="name"
                />
                <QuestionsFormInput
                  id="tel"
                  type="tel"
                  placeholder="+38-(097)-777-77-77"
                  autoComplete="tel"
                />
                <QuestionsFormArea
                  id="text"
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
            <InstagramBlockImages>
              <InstagramImages
                src="/images/inst1.png"
                alt="ins1"
                loading="lazy"
              />
              <InstagramImages
                src="/images/inst2.png"
                alt="ins2"
                loading="lazy"
              />
              <InstagramImages
                src="/images/inst3.png"
                alt="ins3"
                loading="lazy"
              />
              <InstagramImages
                src="/images/inst4.png"
                alt="ins4"
                loading="lazy"
              />
            </InstagramBlockImages>
            <InstagramTitle
              src="/images/our-social-networks.png"
              alt="Our social media"
            />
            <InstagramSocials>
              <li>
                <a href="https://www.instagram.com/">
                  <InstagramSocialsImg
                    src="/images/instagram.png"
                    alt="instagram"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.whatsapp.com/?lang=uk">
                  <InstagramSocialsImg
                    src="/images/whats-up.png"
                    alt="whats-up"
                  />
                </a>
              </li>
              <li>
                <a href="tel:+380971136969">
                  <InstagramSocialsImg src="/images/call.png" alt="call" />
                </a>
              </li>
            </InstagramSocials>
          </InstagramBlock>
        </Container>
      </Instagram>

      {/* <Footer /> */}
    </main>
  );
};

export default HomePage;
