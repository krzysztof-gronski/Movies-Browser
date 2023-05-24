import styled, { css } from "styled-components";

export const TileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: start;
  margin: 16px 0px 5px -1px;
  width: 292px;
  border: 1px solid green;

  ${({ moviesListFlag }) =>
    moviesListFlag &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
        width: 100%;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin: 0px;
        width: 100%;
        min-width: 126px;
      }
    `}

  ${({ movieDetailsFlag }) =>
    movieDetailsFlag &&
    css`
      margin: 0px;
      width: 100%;
    `}

    ${({ backdropFlag }) =>
    backdropFlag &&
    css`
      position: absolute;
      left: 15%;
      bottom: 20%;
      width: 70%;
      align-self: flex-start;
      margin-bottom: 3%;
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

    ${({ backdropFlag }) =>
    backdropFlag &&
    css`
      font-weight: 600;
      font-size: 64px;
      line-height: 1.2;
      color: ${({ theme }) => theme.colors.white};

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        font-size: 24px;
      }
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

    ${({ backdropFlag }) =>
    backdropFlag &&
    css`
      margin-top: 21px;
      color: ${({ theme }) => theme.colors.white};
    `}
`;

export const StarIcon = styled.img`
  width: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-top: 1px;
    width: 16px;
  }

  ${({ backdropFlag }) =>
    backdropFlag &&
    css`
      width: 40px;
    `}
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

    ${({ backdropFlag }) =>
    backdropFlag &&
    css`
      margin: 1px 0px 0px 8px;
      font-weight: 500;
      font-size: 30px;
      line-height: 1.3;
      color: ${({ theme }) => theme.colors.white};
    `}
`;

export const MaxRate = styled.span`
  margin: 7px 10px 0px 0px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.black};

  ${({ backdropFlag }) =>
    backdropFlag &&
    css`
      margin: 15px 0px 0px 7px;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.2;
      color: ${({ theme }) => theme.colors.white};
    `}
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

    ${({ backdropFlag }) =>
    backdropFlag &&
    css`
      margin-top: 14px;
      color: ${({ theme }) => theme.colors.white};
    `}
`;

export const TileDescription = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.black};
`;
