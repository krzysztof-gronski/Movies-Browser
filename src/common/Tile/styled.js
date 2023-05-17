import styled from "styled-components";

export const TileContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  justify-items: center;
  align-items: center;
  grid-gap: 16px;
  width: 324px;
  height: 650px;
  border: 1px solid orange;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  //margin: 2px 2px;
`;

export const Poster = styled.img`
  width: 292px;
  height: 434px;
`;

export const TileContent = styled.div`
  border: 1px solid blue;
  justify-self: start;
  margin: -20px 0px;
`;

export const TileTitle = styled.header`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
`;

export const TileYear = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.waterloo};
`;

export const TileGenres = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -8px;
  padding-left: 0;
  list-style: none;
`;

export const TileGenre = styled.li`
  padding: 8px 16px;
  margin: 8px;
  background-color: ${({ theme }) => theme.colors.mystic};
  font-size: 14px;
  border-radius: 5px;
`;

export const TileDescription = styled.p`
  padding: 8px 16px;
  margin: 8px;
  background-color: ${({ theme }) => theme.colors.mystic};
  font-size: 14px;
  border-radius: 5px;
`;
