import styled from 'styled-components';

const ButtonToLink = styled.button`
  width: 22rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.backgroundColor};
  padding-left: 1.5rem;
  font-family: 'Oswald', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.8rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.colors.buttonHover};
    color: ${({ theme }) => theme.colors.textColor};
    transition: 0.5s;
  }

  &:active {
    box-shadow: inset 0 0 10px #00000055;
  }
`;

const ButtonLink = ({ text, onNavigate }) => {
  return <ButtonToLink onClick={onNavigate}>{text}</ButtonToLink>;
};

export default ButtonLink;
