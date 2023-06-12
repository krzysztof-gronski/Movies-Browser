import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    align-items: flex-start;
    padding: 24px 16px;
  }

  ${({ moviesListFlag }) =>
    moviesListFlag &&
    css`
      padding: 0px 40px;

      @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
        align-items: flex-start;
        padding: 0px 1vw;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        align-items: flex-start;
        padding: 0px 2vw;
      }
    `}

  ${({ movieDetailsFlag }) =>
    movieDetailsFlag &&
    css`
      padding: 0px 40px 50px;

      @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
        align-items: flex-start;
        padding: 56px 2vw;
      }
    `}

    ${({ personDetailsFlag }) =>
    personDetailsFlag &&
    css`
      padding: 0px 40px 50px;

      @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
        align-items: flex-start;
        padding: 56px 12px;
      }
    `}

    ${({ peopleListFlag }) =>
    peopleListFlag &&
    css`
      padding: 0px 40px;
    `}

    ${({ search }) =>
    search &&
    css`
      padding: 0px 40px 50px;
    `}

    ${({ noResults }) =>
    noResults &&
    css`
      padding: 0px 40px 50px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        align-items: center;
        padding: 24px 16px;
      }
    `}

    ${({ error }) =>
    error &&
    css`
      padding: 0px 40px 50px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        align-items: center;
        padding: 24px 16px;
      }
    `}
`;

export const ContentContainer = styled.div`
  margin: 0px 0px;
  padding: 60px 0px 0px;
  //border: 1px solid red;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
    width: 100%;
    padding: 40px 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 100%;
    padding: 20px 0px;
  }
`;

export const TilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  justify-items: center;
  width: 1372px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
    grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
    justify-items: stretch;
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
    width: 100%;
  }

  ${({ peopleListFlag }) =>
    peopleListFlag &&
    css`
      grid-template-columns: repeat(6, 208px);

      @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
        grid-template-columns: repeat(auto-fill, minmax(236px, 1fr));
        width: 100%;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        padding: 0px 0px;
        grid-gap: 16px;
        width: 100%;
      }
    `}
`;

export const Header = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin: 0px 0px 24px 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
    margin: 0px 0px 24px 0px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 18px;
    margin: 0px 0px 12px 0px;
  }

  ${({ search }) =>
    search &&
    css`
      align-self: flex-start;
      font-weight: 600;
      font-size: 36px;
      line-height: 1.15;
      margin: 4vh 14.3vw 6vw 14.3vw;

      @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
        margin: 4vh 14.3vw 6vw 14.3vw;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        font-weight: 500;
        font-size: 4.4vw;
        margin: 0vh 5vw 7.5vw 5vw;
      }
    `}

  ${({ noResults }) =>
    noResults &&
    css`
      align-self: flex-start;
      font-weight: 600;
      font-size: 36px;
      line-height: 1.15;
      margin: 4vh 14.3vw 2vw 14.3vw;

      @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
        margin: 4vh 14.3vw 2vw 14.3vw;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        font-weight: 600;
        font-size: 4.4vw;
        margin: 0vh 5vw 2vw 5vw;
      }
    `}

  ${({ error }) =>
    error &&
    css`
      font-weight: 600;
      font-size: 36px;
      line-height: 1.15;
      margin: 1.9vw 0vw 1.2vw;

      @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
        margin: 1.9vw 0vw 1.2vw;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        font-weight: 600;
        font-size: 4.4vw;
        margin: 1.9vw 0vw 1.2vw;
      }
    `}

    ${({ peopleListFlag }) =>
    peopleListFlag &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
        margin: 0px 0px 24px 0px;
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        font-size: 18px;
        margin: 0px 0px 12px 0px;
      }
    `}
`;

export const Message = styled.p`
  margin: 0px;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.2;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-weight: 500;
    font-size: 3.4vw;
  }
`;
