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
  height: 45.5rem;
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
    background-image: url(images/modal-before.png);
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

const Modal = ({ isClose }) => {
  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={isClose} />
      <ModalBlock>
        <CloseBtn onClick={isClose}>
          <img src="images/closeX.png" alt="close" />
        </CloseBtn>
        <Title>Замовити дзвінок</Title>
        <Line />
        <Text>
          Впишіть свої дані і ми зв'яжемося з Вами. Ваші дані за жодних обставин
          не будуть передані третім особам.
        </Text>
      </ModalBlock>
    </>,
    document.getElementById('modal-root'),
  );
};

export default Modal;
