import styled, { css } from "styled-components";

export const RateContainer = styled.div`
  display: flex;
  justify-self: flex-end;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-top: -5px;
  }

  ${({ moviesListFlag }) => moviesListFlag && css``}

  ${({ movieDetailsFlag }) =>
    movieDetailsFlag &&
    css`
      margin-top: 8px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin-top: 2px;
      }
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

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        width: 16px;
      }
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

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        font-weight: 500;
        margin: 5px 0px 0px 7px;
        font-size: 13px;
        line-height: 1;
        color: ${({ theme }) => theme.colors.woodsmoke};
      }
    `}

    ${({ backdropFlag }) =>
    backdropFlag &&
    css`
      margin: 1px 0px 0px 8px;
      font-weight: 500;
      font-size: 30px;
      line-height: 1.3;
      color: ${({ theme }) => theme.colors.white};

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin: 5px 0px 0px 5px;
        font-weight: 600;
        font-size: 14px;
        line-height: 1.1;
      }
    `}
`;

export const MaxRate = styled.span`
  margin: 7px 10px 0px 0px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }

  ${({ backdropFlag }) =>
    backdropFlag &&
    css`
      margin: 15px 0px 0px 7px;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.2;
      color: ${({ theme }) => theme.colors.white};

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin: 10px 0px 0px 4px;
        font-weight: 400;
        font-size: 10px;
        line-height: 0.8;
      }
    `}
`;

export const Votes = styled.span`
  font-weight: 400;

  ${({ moviesListFlag }) =>
    moviesListFlag &&
    css`
      margin-left: 12px;
      margin-top: 2px;
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
      font-size: 14px;
      line-height: 1.2;
      color: ${({ theme }) => theme.colors.black};

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin: 5px 0px 0px 8px;
        font-weight: 400;
        font-size: 13px;
        line-height: 1;
        color: ${({ theme }) => theme.colors.waterloo};
      }
    `}

    ${({ backdropFlag }) =>
    backdropFlag &&
    css`
      margin-top: 14px;
      color: ${({ theme }) => theme.colors.white};

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        display: none;
      }
    `}
`;

export const MobileVotes = styled.span`
  font-weight: 400;

  ${({ backdropFlag }) =>
    backdropFlag &&
    css`
      display: none;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin: 10px 0px 0px 9px;
        display: inline;
        font-size: 10px;
        line-height: 0.8;
      }
    `}
`;