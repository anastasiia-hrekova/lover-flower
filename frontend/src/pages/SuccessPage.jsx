import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../styles/Container';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const SuccessBlock = styled.div`
  width: 100%;
  height: 110rem;
  background-image: url(images/access-payment.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 19rem;
  color: ${({ theme }) => theme.colors.textColor};
`;

const Title = styled.h1`
  font-size: 10rem;
  font-weight: 400;
  line-height: 12rem;
  letter-spacing: 0.02rem;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: 'Cormorant', serif;
  text-transform: uppercase;
  margin-bottom: 8rem;
  position: relative;
`;

const TitleLine = styled.span`
  position: absolute;
  width: 35rem;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.accentColor};
  content: '';
  top: 75%;
  left: 5%;
`;

const TitleSpan = styled.span`
  margin-left: 45rem;
`;

const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.04rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const ToMain = styled(NavLink)`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.04rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mainColor};
  text-decoration: underline;
  margin-top: 4rem;
`;

const SuccessPage = () => {
  const location = useLocation();
  const { orderNumber } = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SuccessBlock>
        <Container>
          <TextBlock>
            <div>
              <Title>
                Ваше замовлення <br /> <TitleLine />
                <TitleSpan>прийнято!</TitleSpan>
              </Title>
              <Text>Ваш номер замовлення - {orderNumber}</Text>
              <Text>
                Дякуємо за замовлення! <br />
                Ви отримаєте повідомлення про статус вашого замовлення
              </Text>
              <ToMain to="/">На головну</ToMain>
            </div>
          </TextBlock>
        </Container>
      </SuccessBlock>
      <Footer />
    </>
  );
};

export default SuccessPage;
