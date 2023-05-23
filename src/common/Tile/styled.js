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

  ${({ moviesListFlag }) =>
    moviesListFlag &&
    css`
      padding: 16px;
      transition: transform 0.3s linear;

      &:hover {
        cursor: pointer;
        transform: scale(1.02);
      }

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
  ${({ moviesListFlag }) =>
    moviesListFlag &&
    css`
      margin-bottom: 8px;
      font-weight: 500;
      font-size: 22px;
      line-height: 1.3;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin-bottom: 4px;
        font-size: 16px;
        line-height: 1.2;
      }
    `}

  ${({ movieDetailsFlag }) =>
    movieDetailsFlag &&
    css`
      margin: 8px 0px 24px;
      font-weight: 600;
      font-size: 36px;
      line-height: 1.2;
    `}
`;

export const TileSubtitle = styled.div`
  font-weight: 400;

  ${({ moviesListFlag }) =>
    moviesListFlag &&
    css`
      font-size: 16px;
      color: ${({ theme }) => theme.colors.waterloo};

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        font-size: 13px;
      }
    `}

  ${({ movieDetailsFlag }) =>
    movieDetailsFlag &&
    css`
      margin-bottom: 24px;
      font-size: 22px;
      line-height: 1.2;
      color: ${({ theme }) => theme.colors.black};
    `}
`;

export const InfoField = styled.div`
  border: 1px solid red;
  margin-bottom: 8px;
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.stormGray};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
`;

export const TextValue = styled.span`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
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
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.mystic};
  font-size: 14px;
  font-weight: 400;
  border-radius: 5px;

  ${({ moviesListFlag }) =>
    moviesListFlag &&
    css`
      margin: 0px 8px 8px 0px;
      height: 34px;
      line-height: 1.4;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        padding: 4px 6px 4px 5px;
        height: 19px;
        font-size: 10px;
        line-height: 1.1;
      }
    `}

  ${({ movieDetailsFlag }) =>
    movieDetailsFlag &&
    css`
      margin: 0px 16px 16px 0px;
      height: 30px;
      line-height: 1;
    `}
`;

export const RateContainer = styled.div`
  display: flex;
  justify-self: flex-end;
  border: 1px solid red;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-top: -5px;
  }

  ${({ moviesListFlag }) => moviesListFlag && css``}

  ${({ movieDetailsFlag }) =>
    movieDetailsFlag &&
    css`
      margin-top: 8px;
    `}
`;

export const StarIcon = styled.img`
  width: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-top: 1px;
    width: 16px;
  }
`;

export const Rate = styled.span`
  ${({ moviesListFlag }) =>
    moviesListFlag &&
    css`
      color: ${({ theme }) => theme.colors.woodsmoke};
      margin-left: 12px;
      margin-top: 2px;
      font-weight: 600;
      font-size: 16px;
      line-height: 1.5;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin-left: 8px;
        font-size: 13px;
      }
    `}

  ${({ movieDetailsFlag }) =>
    movieDetailsFlag &&
    css`
      color: ${({ theme }) => theme.colors.black};
      margin: 0px 8px;
      font-weight: 500;
      font-size: 22px;
      line-height: 1.3;
    `}
`;

export const MaxRate = styled.span`
      margin: 7px 10px 0px 0px;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.2;
      color: ${({ theme }) => theme.colors.black};
`;

export const Votes = styled.span`
  ${({ moviesListFlag }) =>
    moviesListFlag &&
    css`
      margin-left: 12px;
      margin-top: 2px;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.5;
      color: ${({ theme }) => theme.colors.waterloo};

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin-left: 7px;
        font-size: 13px;
      }
    `}

  ${({ movieDetailsFlag }) =>
    movieDetailsFlag &&
    css`
      margin-left: 0px;
      margin-top: 7px;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.2;
      color: ${({ theme }) => theme.colors.black};
    `}
`;

export const TileDescription = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.black};
`;
