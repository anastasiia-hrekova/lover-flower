import { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
  background-color: #00000033;
  backdrop-filter: blur(20px);
`;

const ModalBlock = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 54rem;
  height: auto;
  margin: 0 auto;
  z-index: 1000;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.modalBack};
  color: ${({ theme }) => theme.colors.textColor};

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url(/images/modal-before.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: -2;
  }
`;

const Title = styled.h3`
  font-size: 4rem;
  font-weight: 400;
  line-height: 4.9rem;
  letter-spacing: 0.02rem;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: 'Cormorant', serif;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Line = styled.div`
  width: 10rem;
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  margin-bottom: 1rem;
`;

const Text = styled.p`
  width: 31rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.02rem;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormInputs = styled.input`
  width: 100%;
  height: 6rem;
  padding: 2rem;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  margin-bottom: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.mainColor};
    font-family: 'Oswald', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.1rem;
    letter-spacing: 0.04rem;
    text-transform: uppercase;
  }
`;

const Button = styled.button`
  width: 25.5rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.backgroundColor};
  border: none;
  cursor: pointer;
  transition: 0.3s ease;
  font-family: 'Oswald', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.8rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin-top: 1rem;
  margin-bottom: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
    color: ${({ theme }) => theme.colors.textColor};
  }
`;

const PrivacyBlock = styled.p`
  position: relative;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: 'Oswald', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.2rem;
  letter-spacing: 0.02rem;
  width: 32.7rem;
`;

const PrivacyBlockSpan = styled.span`
  color: ${({ theme }) => theme.colors.accentColor};
  text-decoration: underline;
`;

const Modal = ({ isClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={isClose} />
      <ModalBlock>
        <CloseBtn onClick={isClose}>
          <img src="/images/closeX.png" alt="close" />
        </CloseBtn>

        {isSubmitted ? (
          <Title style={{ textAlign: 'center' }}>
            Дякуємо! Наш менеджер зв'яжеться із вами найближчим часом.
          </Title>
        ) : (
          <>
            <Title>Замовити дзвінок</Title>
            <Line />
            <Text>
              Впишіть свої дані і ми зв'яжемося з Вами. Ваші дані за жодних
              обставин не будуть передані третім особам.
            </Text>
            <ModalForm onSubmit={handleSubmit}>
              <label htmlFor="name" />
              <FormInputs
                id="name"
                placeholder="Ваше ім'я"
                autoComplete="name"
                required
              />
              <label htmlFor="phone" />
              <FormInputs
                id="phone"
                placeholder="+380 (97) 777-77-77"
                autoComplete="tel"
                required
              />
              <Button type="submit">Відправити</Button>
              <PrivacyBlock>
                Натискаючи на кнопку «До Оплати», я даю свою згоду на обробку
                персональних даних, відповідно до
                <PrivacyBlockSpan>Політики конфіденційності</PrivacyBlockSpan>,
                а також ознайомлений з умовами оплати та доставки
              </PrivacyBlock>
            </ModalForm>
          </>
        )}
      </ModalBlock>
    </>,
    document.getElementById('modal-root'),
  );
};

export default Modal;
