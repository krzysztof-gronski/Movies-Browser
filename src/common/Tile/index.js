import { nanoid } from "@reduxjs/toolkit";
import starIcon from "./star.svg";

import {
  Poster,
  TileContainer,
  TileTitle,
  TileContent,
  TileSubtitle,
  TileGenres,
  TileGenre,
  StarIcon,
  RateContainer,
  Rate,
  VotesNr,
  VotesLabel,
} from "./styled";

export const Tile = ({ poster, tileTitle, tileSubtitle, genres, rate, votesNr }) => {
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
        <RateContainer>
          <StarIcon src={starIcon} />
          <Rate>{rate}</Rate>
          <VotesNr>{votesNr}</VotesNr>
          <VotesLabel>votes</VotesLabel>
        </RateContainer>
      </TileContent>
    </TileContainer>
  );
};
