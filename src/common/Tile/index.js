import {
  Poster,
  TileContainer,
  TileTitle,
  TileContent,
  TileYear,
  TileGenres,
  TileGenre
} from "./styled";

export const Tile = ({ poster }) => {
  return (
    <TileContainer>
      <Poster src={poster} alt="poster" />
      <TileContent>
        <TileTitle>Mulan</TileTitle>
        <TileYear>2020</TileYear>
        <TileGenres>
          <TileGenre>Action</TileGenre>
          <TileGenre>Adventure</TileGenre>
        </TileGenres>
      </TileContent>
    </TileContainer>
  );
};
