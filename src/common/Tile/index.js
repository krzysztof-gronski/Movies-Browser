import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import starIcon from "../TileContent/star.svg";
import { Poster, TileContainer, StyledLink } from "./styled";

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
  personDetailsFlag,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  window.onresize = () => setWidth(window.innerWidth);
  const isSmallScreen = width < 767;

  return moviesListFlag ? (
    <StyledLink to={`/movie/${movie.id}`}>
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
    </StyledLink>
  ) : movieDetailsFlag ? (
    <TileContainer movieDetailsFlag>
      <Poster movieDetailsFlag src={poster} alt="poster" />
      <TileContent movieDetailsFlag>
        <TileTitle movieDetailsFlag>{tileTitle}</TileTitle>
        <TileSubtitle movieDetailsFlag>{tileSubtitle}</TileSubtitle>
        {production ? (
          <InfoField>
            <Label movieDetailsFlag>{"Production:"}</Label>
            <TextValue movieDetailsFlag>{production}</TextValue>
          </InfoField>
        ) : null}
       {releaseDate ? (
          <InfoField>
            <Label movieDetailsFlag>{"Release date:"}</Label>
            <TextValue movieDetailsFlag>{releaseDate}</TextValue>
          </InfoField>
        ) : null}
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
        <TileContent peopleListFlag>
          <Poster peopleListFlag src={poster} alt="poster" />
          <TileTitle peopleListFlag>{tileTitle}</TileTitle>
        </TileContent>
        <MobileTileDescription peopleListFlag>
          {description}
        </MobileTileDescription>
      </TileContainer>
    </>
  ) : personDetailsFlag ? (
    <>
      <TileContainer personDetailsFlag>
        <Poster personDetailsFlag src={poster} alt="poster" />
        <TileContent personDetailsFlag>
          <TileTitle personDetailsFlag>{tileTitle}</TileTitle>
          <InfoField personDetailsFlag>
            <Label personDetailsFlag>
              {!isSmallScreen ? "Date of birth:" : "Birth:"}
            </Label>
            <TextValue personDetailsFlag>{releaseDate}</TextValue>
          </InfoField>
          <InfoField personDetailsFlag>
            <Label personDetailsFlag>{"Place of birth:"}</Label>
            <TextValue personDetailsFlag>{production}</TextValue>
          </InfoField>
          <TileDescription personDetailsFlag>{description}</TileDescription>
        </TileContent>
        <MobileTileDescription personDetailsFlag>
          {description}
        </MobileTileDescription>
      </TileContainer>
    </>
  ) : (
    <></>
  );
};
