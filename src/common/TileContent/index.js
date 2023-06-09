import styled, { css } from "styled-components";

export const TileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: start;
  margin: 16px 0px 5px -1px;
  width: 292px;

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

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        min-width: 126px;
      }
    `}
    ${({ peopleListFlag }) =>
    peopleListFlag &&
    css`
      gap: 10px;
      margin: 0px 0px;

      @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
        width: 100%;
        height: auto;
        margin: 16px 0px 0px;
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin: 2px 0px -38px;
        width: 100%;
      }
    `}

    ${({ personDetailsFlag }) =>
    personDetailsFlag &&
    css`
      margin: 0px;
      width: 100%;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        min-width: 126px;
      }
    `}


    ${({ backdropFlag }) =>
    backdropFlag &&
    css`
      position: absolute;
      left: 5%;
      bottom: 10%;
      width: 70%;
      align-self: flex-start;
      margin-bottom: 3%;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin-bottom: 3%;
      }
    `}

    ${({ peopleListFlag }) =>
    peopleListFlag &&
    css`
      margin: 0 10px;
      width: auto;
      justify-self: center;
    `}
`;

export const TileTitle = styled.header`
  color: ${({ theme }) => theme.colors.woodsmoke};
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

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin: 1px 0px 0px 0px;
        font-weight: 500;
        font-size: 16px;
        line-height: 1.3;
      }
    `}

    ${({ personDetailsFlag }) =>
    personDetailsFlag &&
    css`
      margin: 8px 0px 24px;
      font-weight: 600;
      font-size: 36px;
      line-height: 1.2;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin: 1px 0px 8px 0px;
        font-weight: 500;
        font-size: 14px;
        line-height: 1.3;
      }
    `}

    ${({ backdropFlag }) =>
    backdropFlag &&
    css`
      font-weight: 600;
      font-size: 4vw;
      line-height: 1.2;
      color: ${({ theme }) => theme.colors.white};

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin-bottom: 8px;
        font-size: 24px;
      }
    `}

    ${({ peopleListFlag }) =>
    peopleListFlag &&
    css`
      width: 180px;
      padding: 0 2px;
      font-weight: 500;
      font-size: 22px;
      line-height: 1.3;
      text-align: center;
      align-self: center;
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        font-size: 14px;
        width: auto;
      }
    `}
`;

export const TileSubtitle = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.woodsmoke};

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

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin: 4px 0px 6px 0px;
        font-size: 13px;
        color: ${({ theme }) => theme.colors.waterloo};
      }
    `}

    ${({ peopleListFlag }) =>
    peopleListFlag &&
    css`
      font-size: 18px;
      line-height: 27px;
      font-weight: 400;
      text-align: center;
      align-self: center;
      margin-bottom: 10px;
      color: ${({ theme }) => theme.colors.waterloo};
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        font-size: 13px;
        line-height: 16.9px;
      }
    `}
`;

export const InfoField = styled.div`
  margin-bottom: 8px;

  ${({ personDetailsFlag }) =>
    personDetailsFlag &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin-bottom: 0px;
        margin-top: 2px;
      }
    `}
`;

export const ProductionInfo = styled.div`
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const ProductionShortInfo = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: block;
    margin-bottom: 0px;
  }
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.stormGray};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;

  ${({ movieDetailsFlag }) =>
    movieDetailsFlag &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        display: none;
        font-size: 13px;
      }
    `}

  ${({ personDetailsFlag }) =>
    personDetailsFlag &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        font-size: 12px;
        margin-right: 4px;
      }
    `}
`;

export const TextValue = styled.span`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-left: 0px;
  }

  ${({ movieDetailsFlag }) =>
    movieDetailsFlag &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        font-weight: 400;
        font-size: 12px;
        line-height: 1.3;
      }
    `}
  ${({ personDetailsFlag }) =>
    personDetailsFlag &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        font-weight: 400;
        font-size: 12px;
        line-height: 1.3;
      }
    `}
`;

export const TileGenres = styled.ul`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-grow: 1;
  margin: 8px 0px 0px;
  padding-left: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-grow: 0;
  }

  ${({ moviesListFlag }) => moviesListFlag && css``}

  ${({ movieDetailsFlag }) =>
    movieDetailsFlag &&
    css`
      flex-grow: 0;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin: -2px 0px 0px 0px;
        flex-grow: 0;
      }
    `}
`;

export const TileGenre = styled.li`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.mystic};
  color: ${({ theme }) => theme.colors.woodsmoke};
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

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin: 0px 8px 8px 0px;
        padding: 4px 6px 4px 5px;
        height: 19px;
        font-size: 10px;
        line-height: 1.1;
      }
    `}
`;

export const TileDescription = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const MobileTileDescription = styled.p`
  display: none;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: block;
    grid-column-end: span 2;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.6;
    margin-top: 10px;
  }
`;
