import styled from 'styled-components';

const Container = styled.div`
  max-width: 124rem;
  margin: 0 auto;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 60.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 32rem;
  }
`;

export default Container;
