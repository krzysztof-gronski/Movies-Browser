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
