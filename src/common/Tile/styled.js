import { Link } from "react-router-dom";
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

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        grid-template-columns: 1fr 1.2fr;
        margin-top: -12px;
        min-width: 318px;
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
      max-height: 1200px;
      min-width: 318px;
      min-height: 211px;
      grid-gap: 40px;
      padding: 40px 40px 0px 40px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        grid-template-columns: 1fr 1.2fr;
        margin-top: -12px;
        min-width: 318px;
        min-height: 211px;
        grid-gap: 14px;
        padding: 14px 14px 0px 14px;
      }
    `}
    
    ${({ peopleListFlag }) =>
    peopleListFlag &&
    css`
      width: 208px;
      min-width: 136px;
      min-height: 245px;
      max-width: 208px;
      max-height: 350px;
      height: 350px;
      transition: transform 0.3s linear;

      &:hover {
        cursor: pointer;
        transform: scale(1.02);
      }

      /* @media (max-width: 1020px) {
        width: auto;
        display: block;
        max-width:150px;
        min-width:190px;
      } */

      /* @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        /* width: auto;
        display: block;
        min-width: 136px;
        min-height: 245px;
        max-height: 339px; */

      /* height:180px; */
      /* } */

      /* @media (max-width: 1020px) {
        width: auto;
      } */
      @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
        width: auto;
        display: block;
        max-width: 185px;
        min-width: 170px;
      }

      @media (max-width: 1020px) {
        min-width: 160px;
        max-width: 175px;
        max-height: 320px;
      }

      @media (max-width: 767px) {
        /* min-width: 140px;
        max-width: 160px;
        max-height: 339px;
        min-height: 245px;
        height: 320px; */

        // nowe
        min-width: 145px;
        max-width: 160px;
        max-height: 300px;
      }

      @media (max-width: 460px) {
        min-width: 130px;
        max-width: 140px;
        max-height: 245px;
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
      }
    `}

  ${({ personDetailsFlag }) =>
    personDetailsFlag &&
    css`
      max-height: 564px;
      /* height:auto; */
      min-height: 163px;
      max-width: 399px;
      min-width: 116px;
    `}


  ${({ peopleListFlag }) =>
    peopleListFlag &&
    css`
      display: block;
      padding: 10px;
      max-width: 190px;
      width: 190px;
      max-height: 250px;
      border-radius: 20px;

      @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}px) {
        width: 100%;
        margin-left: 5px;
        max-width: 165px;
        min-width: 150px;
      }

      @media (max-width: 1020px) {
        min-width: 140px;
        max-width: 160px;
        width: 100%;
        max-height: 300px;
        margin-left: 10px;
      }

      @media (max-width: 767px) {
        min-width: 130px;
        max-width: 145px;
        width: 100%;
        margin-left: 8px;
      }
      @media (max-width: 460px) {
        min-width: 120px;
        max-width: 135px;
        width: 100%;
        margin-left: 0;
      }
    `}
`;

export const TileLink = styled(Link)`
  text-decoration: none;
`;
