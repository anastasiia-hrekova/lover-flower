import styled from 'styled-components';

const ToCardButton = styled.button`
  width: 25.5rem;
  height: 5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textColor};
  border: 0.5px solid ${({ theme }) => theme.colors.textColor};
  font-family: 'Oswald', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.8rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainColor};
    border: none;
    color: ${({ theme }) => theme.colors.backgroundColor};
    transition: 0.3s;
  }
`;

const AddToCart = () => {
  return <ToCardButton>В кошик</ToCardButton>;
};

export default AddToCart;
