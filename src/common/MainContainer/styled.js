import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  margin: 0 auto;
  padding: 56px 40px;
  align-items: center;
  justify-content: center;
`;

export const TilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  justify-items: center;
  width: 1372px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
    grid-template-columns: repeat(3, 1fr);
    width: 1026px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
    width: 678px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    width: 326px;
  }
`;

export const Header = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin: 0px 0px 24px -1086px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
    margin: 0px 0px 24px -740px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: 0px 0px 24px -390px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 0px 0px 24px -40px;
  }
`;
