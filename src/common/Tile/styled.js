import styled, { css } from "styled-components";

export const TileContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  justify-items: center;
  width: 324px;
  height: 100%; //650px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  border: 1px solid gray;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
    width: 100%;
    min-width: 324px;
    height: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: auto 1fr;
    //width: 100%;
    //height: auto;
    aspect-ratio: 1.432;
    min-width: 318px;
    min-height: 211px;
    grid-gap: 14px;
    padding: 14px 14px 0px 14px;
  }

  ${({ moviesListFlag }) =>
    moviesListFlag &&
    css`
      padding: 16px;
      transition: transform 0.3s linear;

      &:hover {
        cursor: pointer;
        transform: scale(1.02);
      }
    `}

  ${({ movieDetailsFlag }) =>
    movieDetailsFlag &&
    css`
      grid-template-columns: auto 1fr;
      margin-top: 64px;
      width: 100%;
      max-width: 1368px;
      max-height: 544;
      min-width: 318px;
      min-height: 211px;
      grid-gap: 40px;
      padding: 40px 40px 0px 40px;
    `}
`;

export const Poster = styled.img`
  width: 292px;
  height: 434px;
  margin-left: -1px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    //width: 40%;
    //min-width: 114px;
    width: 100%;
    height: 100%;
    min-height: 169px;
    //height: auto;
  }
`;

export const TileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: start;
  margin: 16px 0px 5px -1px;
  //height: 168px;
  width: 292px;
  border: 1px solid green;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: 0px;
    width: 100%;
    min-width: 126px;
  }

  ${({ moviesListFlag }) => moviesListFlag && css``}

  ${({ movieDetailsFlag }) =>
    movieDetailsFlag &&
    css`
      margin: 0px;
      width: 100%;
    `}
`;

export const TileTitle = styled.header`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-bottom: 4px;
    font-size: 16px;
    line-height: 1.2;
  }
`;

export const TileSubtitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 13px;
  }
`;

export const TileGenres = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  margin: 8px 0px 0px;
  padding-left: 0;
  list-style: none;
  border: 1px solid blue;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    //margin: 0px 0px 0px 0px;
    flex-grow: 0;
  }

  ${({ moviesListFlag }) => moviesListFlag && css``}

  ${({ movieDetailsFlag }) =>
    movieDetailsFlag &&
    css`
      flex-grow: 0;
    `}
`;

export const TileGenre = styled.li`
  padding: 8px 16px 8px;
  margin: 0px 8px 8px 0px;
  height: 34px;
  background-color: ${({ theme }) => theme.colors.mystic};
  font-size: 14px;
  line-height: 1.4;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    //margin: 0px 0px 0px 0px;
    padding: 4px 6px 4px 5px;
    height: 19px;
    font-size: 10px;
    line-height: 1.1;
  }
`;

export const TileDescription = styled.p`
  padding: 8px 16px;
  margin: 8px;
  background-color: ${({ theme }) => theme.colors.mystic};
  font-size: 14px;
  border-radius: 5px;
`;

export const RateContainer = styled.div`
  display: flex;
  justify-self: flex-end;
  border: 1px solid red;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-top: -5px;
  }
`;

export const StarIcon = styled.img`
  width: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-top: 1px;
    width: 16px;
  }
`;

export const Rate = styled.span`
  margin-left: 12px;
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.woodsmoke};
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-left: 8px;
    font-size: 13px;
  }
`;

export const VotesNr = styled.span`
  margin-left: 12px;
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.waterloo};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-left: 7px;
    font-size: 13px;
  }
`;

export const VotesLabel = styled.span`
  margin-left: 5px;
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.waterloo};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 13px;
  }
`;
