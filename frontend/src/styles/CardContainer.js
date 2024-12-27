import styled from 'styled-components';

export const CardContainer = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: row;
  gap: 2rem;
`;
