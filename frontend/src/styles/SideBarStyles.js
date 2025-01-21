import styled from 'styled-components';

export const PhoneLink = styled.a`
  color: ${({ theme }) => theme.colors.mainColor};
  margin-bottom: 0.6rem;
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 2.4rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-family: 'Oswald', sans-serif;
  cursor: pointer;
`;

export const PhoneLinkImg = styled.img`
  margin-right: 0.6rem;
`;

export const SidebarBlock = styled.div`
  ${({ theme }) => theme.mixins.flex};
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 0.1rem;
  gap: 6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const AccentText = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.mainColor};
`;

export const SidebarText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 2rem;
  margin-bottom: 2rem;
`;

export const SocialSide = styled.div`
  align-self: flex-end;
  width: 6rem;
  height: 15.4rem;
  background-color: rgba(0, 0, 0, 0.441);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  margin-top: 2rem;
  margin-bottom: 11rem;
  padding: 1.5rem;
`;

export const ListSide = styled.ul`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  gap: 2rem;
`;

export const SocialImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const SidebarCall = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

export const CallBtn = styled.button`
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
`;

export const SidebarCart = styled.div`
  background-color: rgba(0, 0, 0, 0.441);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  padding: 1.5rem;
  align-self: flex-end;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.04);
  }
`;
