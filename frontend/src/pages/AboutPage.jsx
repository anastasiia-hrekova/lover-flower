import Breadcrumbs from '../components/BreadcrumbsContainer';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Container from '../styles/Container';

const About = styled.div`
  position: relative;
  background-image: url(/images/about-background.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  content: '';
  width: 100%;
  height: 250rem;
  margin-top: 10rem;

  &::after {
    position: absolute;
    background-image: url(/images/about-after.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    content: '';
    width: 80rem;
    height: 58rem;
    top: -8rem;
    right: 0;
    z-index: 11;
  }
`;

const AboutTitle = styled.h1`
  font-size: 10rem;
  font-weight: 400;
  line-height: 12rem;
  letter-spacing: 0.02rem;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: 'Cormorant', serif;
  text-transform: uppercase;
  margin-left: 12rem;
  margin-bottom: 9.8rem;
`;

const AboutSpan = styled.h2`
  position: relative;
  font-size: 6rem;
  font-weight: 400;
  line-height: 6.4rem;
  letter-spacing: 0.02rem;
  color: ${({ theme }) => theme.colors.mainColor};
  font-family: 'Cormorant', serif;
  text-transform: uppercase;
  margin-left: 35rem;
  margin-bottom: 1.6rem;
`;

const AboutTextSpan = styled.span`
  position: absolute;
  content: '';
  width: 6rem;
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  bottom: 25%;
  left: 25rem;
`;

const AboutBlock = styled.div`
  position: absolute;
  width: 50%;
  height: 28rem;
  padding: 4rem 2rem;
  background-color: #00000033;
  border: none;
  right: 0;
  z-index: 12;
  margin-bottom: 10rem;
`;

const AboutBlockTitle = styled.p`
  font-size: 2rem;
  font-weight: 300;
  line-height: 2.6rem;
  letter-spacing: 0.02rem;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
  margin-bottom: 2rem;
`;

const AboutBlockText = styled.p`
  font-size: 2rem;
  font-weight: 300;
  line-height: 2.6rem;
  letter-spacing: 0.04rem;
  font-family: 'Oswald', sans-serif;
  width: 60rem;
`;

const AboutSpanTitle = styled.h2`
  font-size: 6rem;
  font-weight: 400;
  line-height: 6.4rem;
  letter-spacing: 0.02rem;
  color: ${({ theme }) => theme.colors.mainColor};
  font-family: 'Cormorant', serif;
  text-transform: uppercase;
  margin-left: 35rem;
  margin-bottom: 2rem;
  margin-top: 40rem;
`;

const AboutText = styled.p`
  font-size: 2rem;
  font-weight: 300;
  line-height: 2.6rem;
  letter-spacing: 0.02rem;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
  margin-left: 35rem;
  margin-bottom: 10rem;
`;

const AboutContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: disc;
  margin-left: 50%;
  margin-bottom: 16rem;

  li {
    font-size: 2rem;
    font-weight: 300;
    line-height: 3.4rem;
    letter-spacing: 0.04rem;
    font-family: 'Oswald', sans-serif;
  }
`;

const FinalWords = styled.h3`
  font-size: 6rem;
  font-weight: 400;
  line-height: 6.4rem;
  letter-spacing: 0.02rem;
  font-family: 'Cormorant', serif;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 4rem;
`;

const AboutPage = () => {
  return (
    <>
      <About>
        <Container>
          <Breadcrumbs />
          <AboutTitle>Про нас</AboutTitle>
          <AboutSpan>
            Lover <br /> Flower <AboutTextSpan></AboutTextSpan>
          </AboutSpan>
          <AboutBlock>
            <AboutBlockTitle>
              молода команда різних людей з однаковими цінностями.
            </AboutBlockTitle>
            <AboutBlockText>
              Ми вважаємо, що задоволення від якості триває довше, ніж
              задоволення від найнижчої ціни. І тому у створення нашої букетерії
              ми вклали все, чим маємо: душу, серце, час і мрії! Ми готові вам
              обіцяти тільки те, що можемо зробити. А робимо ми лише
              найякісніше, найцікавіше та обов'язково унікальне. Ми завжди чесні
              зі своїми клієнтами у всьому – у нашому каталозі тільки ті букети,
              які ви справді зможете купити.
            </AboutBlockText>
          </AboutBlock>
          <AboutSpanTitle>Гарантії</AboutSpanTitle>
          <AboutText>
            Кожна квітка унікальна і щоб ви були впевнені в якості, ми надішлемо
            вам фотографію саме вашого букета до його відправки одержувачу. Вся
            надана Вами інформація є конфіденційною і буде відома тільки нам та
            кур'єру для здійснення доставки.
          </AboutText>
          <AboutSpan>
            Замовлення букетів на <br />
            сайті компанії <br /> Lower Flower – це:
          </AboutSpan>
          <AboutContent>
            <li>вибір відтінків та сортів квіток у будь-яку пору року;</li>
            <li>відправка фото готової композиції перед відправкою;</li>
            <li>можливість замовити квіти із доставкою протягом години;</li>
            <li>
              вигідні ціни – на сайті лише ті варіанти, які Ви зможете купити;
            </li>
            <li>повна конфіденційність на замовлення;</li>
            <li>
              ми підбираємо листівку, повітряну кулю, подарунок за Вашим
              бажанням;
            </li>
            <li>
              у нашому затишному квітковому магазині квіти, які приємно
              дарувати.
            </li>
          </AboutContent>
          <FinalWords>
            Природна гармонія кольору, неповторність бутонів та Ваші почуття у
            ніжних пелюстках не залишать нікого байдужим.
          </FinalWords>
          <AboutText>
            Ви вибираєте та замовляєте квітковий сюрприз, <br />а ми вкладаємо в
            нього душу!
          </AboutText>
        </Container>
      </About>
      <Footer />
    </>
  );
};

export default AboutPage;
