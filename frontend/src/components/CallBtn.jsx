import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { PhoneLink, PhoneLinkImg } from '../styles/SideBarStyles';

const CallBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.441);
  backdrop-filter: blur(8px);
  border: none;
  border-radius: 1rem;
  padding: 1.2rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.04);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const CallBtnMob = styled.button`
  display: none;
  background-color: rgba(0, 0, 0, 0.441);
  backdrop-filter: blur(8px);
  border: none;
  border-radius: 50%;
  padding: 1.2rem;
  right: 10%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

const CallBtnComponent = () => {
  let [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : 'auto';
  }, [modalOpen]);

  return (
    <div>
      {/* DESKTOP VERSION */}
      <CallBtn onClick={() => setModalOpen(!modalOpen)}>
        <PhoneLink>
          <PhoneLinkImg src="/images/phone.svg" alt="call" />
          Замовити дзвінок
        </PhoneLink>
      </CallBtn>

      {/* MOBILE VERSION */}
      <CallBtnMob onClick={() => setModalOpen(!modalOpen)}>
        <PhoneLink>
          <PhoneLinkImg src="/images/phone.svg" alt="call" />
        </PhoneLink>
      </CallBtnMob>

      {modalOpen && <Modal isClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default CallBtnComponent;
