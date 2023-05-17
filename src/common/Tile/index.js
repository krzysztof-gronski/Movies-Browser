import { nanoid } from "@reduxjs/toolkit";

import {
  Poster,
  TileContainer,
  TileTitle,
  TileContent,
  TileSubtitle,
  TileGenres,
  TileGenre,
} from "./styled";

export const Tile = ({ poster, tileTitle, tileSubtitle, genres }) => {
  return (
    <TileContainer>
      <Poster src={poster} alt="poster" />
      <TileContent>
        <TileTitle>{tileTitle}</TileTitle>
        <TileSubtitle>{tileSubtitle}</TileSubtitle>
        <TileGenres>
          {genres.map((genre) => (
            <TileGenre key={nanoid()}>{genre}</TileGenre>
          ))}
        </TileGenres>
      </TileContent>
    </TileContainer>
  );
};
