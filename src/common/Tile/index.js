import { nanoid } from "@reduxjs/toolkit";
import starIcon from "../TileContent/star.svg";
import { Poster, TileContainer, TileLink } from "./styled";

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
  MobileTileDescription,
} from "../TileContent";

export const Tile = ({
  movie,
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
  peopleListFlag,
}) => {
  return moviesListFlag ? (
    <TileLink to={`/movie/${movie.id}`}>
      <TileContainer moviesListFlag>
        <Poster moviesListFlag src={poster} alt="poster" />
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
    </TileLink>
  ) : movieDetailsFlag ? (
    <TileContainer movieDetailsFlag>
      <Poster movieDetailsFlag src={poster} alt="poster" />
      <TileContent movieDetailsFlag>
        <TileTitle movieDetailsFlag>{tileTitle}</TileTitle>
        <TileSubtitle movieDetailsFlag>{tileSubtitle}</TileSubtitle>
        <InfoField>
          <Label>{"Production:"}</Label>
          <TextValue movieDetailsFlag>{production}</TextValue>
        </InfoField>
        <InfoField>
          <Label>{"Release date:"}</Label>
          <TextValue movieDetailsFlag>{releaseDate}</TextValue>
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
      <MobileTileDescription>{description}</MobileTileDescription>
    </TileContainer>
  ) : peopleListFlag ? (
    <>
      <TileContainer peopleListFlag>
        <Poster peopleListFlag src={poster} alt="poster" />
        <TileContent peopleListFlag>
          <TileTitle peopleListFlag>{tileTitle}</TileTitle>
        </TileContent>
        <MobileTileDescription peopleListFlag>{description}</MobileTileDescription>
      </TileContainer>
    </>
  ) : (
    <></>
  );
};
