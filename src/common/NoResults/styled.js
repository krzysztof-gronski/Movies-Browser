import styled from "styled-components";

export const NoResultsImage = styled.img`
  width: 35vw;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 60vw;
  }
`;
