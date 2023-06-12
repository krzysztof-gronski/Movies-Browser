import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const TileContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  justify-items: center;
  width: 324px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;

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
        width: 90vw;
        height: auto;
        grid-template-columns: 1fr 1fr;
        min-width: 280px;
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

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        grid-template-columns: 1fr 1.2fr;
        margin-top: -12px;
        min-width: 280px;
        min-height: 211px;
        grid-gap: 14px;
        padding: 14px 14px 0px 14px;
      }
    `}

    ${({ personDetailsFlag }) =>
    personDetailsFlag &&
    css`
      grid-template-columns: auto 1fr;
      margin-top: 64px;
      width: 100%;
      max-width: 1368px;
      /* max-height: 1200px; */
      min-width: 318px;
      min-height: 211px;
      grid-gap: 40px;
      padding: 40px 40px 0px 40px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        grid-template-columns: 1fr 1.2fr;
        margin-top: -12px;
        min-width: 290px;
        min-height: 365px;
        grid-gap: 14px;
        padding: 14px 14px 0px 14px;
      }
    `}

    ${({ peopleListFlag }) =>
    peopleListFlag &&
    css`
      width: 208px;
      transition: transform 0.3s linear;
      padding-left: 0px;
      padding-top: 4px;
      padding-bottom: 16px;
      grid-gap: 16px;

      &:hover {
        cursor: pointer;
        transform: scale(1.02);
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
        grid-gap: 0px;
        width: 100%;
        min-width: 236px;
        height: 100%;
        padding: 16px 16px;
        margin: 0px 0px;
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        display: flex;
        flex-direction: column;
        width: 42vw;
        min-width: 120px;
        height: 100%;
        padding: 8px 8px;
        margin: 0px 0px;
        gap: 8px;
      }
    `}
`;

export const Poster = styled.img`
  ${({ moviesListFlag }) =>
    moviesListFlag &&
    css`
      width: 292px;
      height: 434px;
      margin-left: -1px;
      border-radius: 5px;

      @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
        width: 100%;
        height: auto;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        width: 100%;
        height: 100%;
        min-height: 169px;
        min-width: 114px;
      }
    `}
  ${({ movieDetailsFlag }) =>
    movieDetailsFlag &&
    css`
      width: 292px;
      height: 434px;
      margin-left: -1px;
      border-radius: 5px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        width: 100%;
        height: auto;
        min-height: 169px;
      }
    `}

    ${({ personDetailsFlag }) =>
    personDetailsFlag &&
    css`
      max-height: 564px;
      min-height: 163px;
      max-width: 399px;
      min-width: 116px;
      border-radius: 5px;
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        width: 100%;
        height: auto;
      }
    `}

    ${({ peopleListFlag }) =>
    peopleListFlag &&
    css`
      width: 177px;
      height: 260px;
      margin-top: 12px;
      border-radius: 5px;
      @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
        width: 100%;
        height: auto;
        margin: 0px 0px;
        padding: 0px 0px;
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        width: 100%;
        height: auto;
      }
    `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
