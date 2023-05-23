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

export const Tile = ({
  poster,
  tileTitle,
  tileSubtitle,
  genres,
  rate,
  votesNr,
  moviesListFlag,
  movieDetailsFlag,
}) => {
  return moviesListFlag ? (
    <TileContainer moviesListFlag>
      <Poster src={poster} alt="poster" />
      <TileContent moviesListFlag>
        <TileTitle>{tileTitle}</TileTitle>
        <TileSubtitle>{tileSubtitle}</TileSubtitle>
        <TileGenres moviesListFlag>
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
  ) : movieDetailsFlag ? (
    <TileContainer movieDetailsFlag>
      <Poster src={poster} alt="poster" />
      <TileContent movieDetailsFlag>
        <TileTitle>{tileTitle}</TileTitle>
        <TileSubtitle>{tileSubtitle}</TileSubtitle>
        <TileGenres movieDetailsFlag>
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
  ) : (
    <></>
  );
};
