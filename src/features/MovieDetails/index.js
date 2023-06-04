import { Backdrop } from "../../common/Backdrop";
import {
  Container,
  ContentContainer,
  Header,
  TilesContainer,
} from "../../common/MainContainer/styled";
import { Tile } from "../../common/Tile";
import { StyledLink } from "../MovieDetails/styled";
import { IMAGE_PATH } from "../api/apiData";
import { formatDate } from "../../common/Utilities";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieDetails,
  selectCast,
  selectCrew,
  selectDetails,
} from "./movieDetailsSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import missingMoviePoster from "../../images/missingMoviePoster.svg";
import missingPersonPoster from "../../images/missingPersonPoster.svg";

export const MovieDetails = () => {
  const dispatch = useDispatch();
  const movieDetails = useSelector(selectDetails);
  const castPeople = useSelector(selectCast);
  const crewPeople = useSelector(selectCrew);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMovieDetails({ movieId: id }));
  }, [id, dispatch]);

  console.log(movieDetails);

  return (
    movieDetails && (
      <>
        {movieDetails.backdrop_path ? (
          <Backdrop
            backdropImage={
              movieDetails.backdrop_path
                ? `${IMAGE_PATH}${movieDetails.backdrop_path}`
                : null
            }
            movie={movieDetails}
          ></Backdrop>
        ) : null}
        <Container movieDetailsFlag>
          <Tile
            movieDetailsFlag
            key={movieDetails.id}
            movie={movieDetails}
            poster={
              movieDetails.poster_path
                ? `${IMAGE_PATH}${movieDetails.poster_path}`
                : missingMoviePoster
            }
            tileTitle={movieDetails.original_title}
            tileSubtitle={
              movieDetails.release_date
                ? movieDetails.release_date.slice(0, 4)
                : ""
            }
            production={
              movieDetails.production_countries
                ? movieDetails.production_countries.length > 0
                  ? movieDetails.production_countries
                      .map((productionObj) => productionObj.name)
                      .join(", ")
                  : ""
                : ""
            }
            releaseDate={
              movieDetails.release_date
                ? formatDate(movieDetails.release_date)
                : ""
            }
            genres={
              movieDetails.genres
                ? movieDetails.genres.map((genre) => genre.name)
                : [""]
            }
            rate={movieDetails.vote_average}
            votesNr={movieDetails.vote_count}
            description={movieDetails.overview}
          ></Tile>
          <ContentContainer>
            <Header>Cast</Header>
            <TilesContainer peopleListFlag>
              {castPeople
                ? castPeople.map((person) => (
                    <StyledLink to={`/person/${person.id}`}>
                      <Tile
                        peopleListFlag
                        key={person.id}
                        poster={
                          person.profile_path
                            ? `${IMAGE_PATH}${person.profile_path}`
                            : `${missingPersonPoster}`
                        }
                        tileTitle={person.name ? person.name : ""}
                      ></Tile>
                    </StyledLink>
                  ))
                : null}
            </TilesContainer>
          </ContentContainer>
          <ContentContainer>
            <Header>Crew</Header>
            <TilesContainer peopleListFlag>
              {crewPeople
                ? crewPeople.map((person) => (
                    <StyledLink to={`/person/${person.id}`}>
                      <Tile
                        peopleListFlag
                        key={person.id}
                        poster={
                          person.profile_path
                            ? `${IMAGE_PATH}${person.profile_path}`
                            : `${missingPersonPoster}`
                        }
                        tileTitle={person.name ? person.name : ""}
                      ></Tile>
                    </StyledLink>
                  ))
                : null}
            </TilesContainer>
          </ContentContainer>
        </Container>
      </>
    )
  );
};
