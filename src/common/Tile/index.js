import { nanoid } from "@reduxjs/toolkit";
import starIcon from "../TileContent/star.svg";
import { Poster, TileContainer } from "./styled";

import {
  TileTitle,
  TileContent,
  TileSubtitle,
  TileGenres,
  TileGenre,
  StarIcon,
  RateContainer,
  Rate,
  InfoField,
  Label,
  TextValue,
  TileDescription,
  Votes,
  MaxRate,
} from "../TileContent";

export const Tile = ({
  poster,
  tileTitle,
  tileSubtitle,
  production,
  releaseDate,
  genres,
  rate,
  votesNr,
  description,
  moviesListFlag,
  movieDetailsFlag,
}) => {
  return moviesListFlag ? (
    <TileContainer moviesListFlag>
      <Poster src={poster} alt="poster" />
      <TileContent moviesListFlag>
        <TileTitle moviesListFlag>{tileTitle}</TileTitle>
        <TileSubtitle moviesListFlag>{tileSubtitle}</TileSubtitle>
        <TileGenres moviesListFlag>
          {genres.map((genre) => (
            <TileGenre moviesListFlag key={nanoid()}>
              {genre}
            </TileGenre>
          ))}
        </TileGenres>
        <RateContainer moviesListFlag>
          <StarIcon src={starIcon} />
          <Rate moviesListFlag>{rate}</Rate>
          <Votes moviesListFlag>{votesNr + " votes"}</Votes>
        </RateContainer>
      </TileContent>
    </TileContainer>
  ) : movieDetailsFlag ? (
    <TileContainer movieDetailsFlag>
      <Poster src={poster} alt="poster" />
      <TileContent movieDetailsFlag>
        <TileTitle movieDetailsFlag>{tileTitle}</TileTitle>
        <TileSubtitle movieDetailsFlag>{tileSubtitle}</TileSubtitle>
        <InfoField>
          <Label>{"Production:"}</Label>
          <TextValue>{production}</TextValue>
        </InfoField>
        <InfoField>
          <Label>{"Release date:"}</Label>
          <TextValue>{releaseDate}</TextValue>
        </InfoField>
        <TileGenres movieDetailsFlag>
          {genres.map((genre) => (
            <TileGenre movieDetailsFlag key={nanoid()}>
              {genre}
            </TileGenre>
          ))}
        </TileGenres>
        <RateContainer movieDetailsFlag>
          <StarIcon src={starIcon} />
          <Rate movieDetailsFlag>{rate}</Rate>
          <MaxRate>{"/ 10"}</MaxRate>
          <Votes movieDetailsFlag>{votesNr + "       votes"}</Votes>
        </RateContainer>
        <TileDescription>{description}</TileDescription>
      </TileContent>
    </TileContainer>
  ) : (
    <></>
  );
};
