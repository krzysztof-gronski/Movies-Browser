import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  margin: 0 auto;
  padding: 56px 40px;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
    align-items: flex-start;
    padding: 56px 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    align-items: flex-start;
    padding: 24px 16px;
  }
`;

export const TilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  justify-items: center;
  width: 1372px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
    grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
    width: 100%;
  }
`;

export const Header = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin: 0px 0px 24px -1086px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
    margin: 2px 0px 24px 0px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 18px;
    margin: 2px 0px 12px 0px;
  }
`;
