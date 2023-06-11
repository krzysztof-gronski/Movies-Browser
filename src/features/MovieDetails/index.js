import { Backdrop } from "../../common/Backdrop";
import {
  Container,
  ContentContainer,
  Header,
  TilesContainer,
} from "../../common/MainContainer/styled";
import { Tile } from "../../common/Tile";
import { StyledLink } from "../MovieDetails/styled";
import { IMAGE_PATH, BACK_IMAGE_PATH } from "../api/apiData";
import { formatDate } from "../../common/Utilities";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieDetails,
  selectCast,
  selectCrew,
  selectDetails,
  selectStatus,
} from "./movieDetailsSlice";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import missingMoviePoster from "../../images/missingMoviePoster.svg";
import missingPersonPoster from "../../images/missingPersonPoster.svg";
import { Loader } from "../../common/Loader";
import { ErrorPage } from "../../common/ErrorPage";
import { nanoid } from "@reduxjs/toolkit";
import {
  selectInputQuery,
  setInputQuery,
  setURLQuery,
} from "../../common/Navigation/navigationSlice";

export const MovieDetails = () => {
  const dispatch = useDispatch();
  const movieDetails = useSelector(selectDetails);
  const castPeople = useSelector(selectCast);
  const crewPeople = useSelector(selectCrew);
  const inputQuery = useSelector(selectInputQuery);
  const history = useHistory();
  let status = useSelector(selectStatus);
  //const someRef = useRef(null);

  if (inputQuery) {
    const urlQuery = inputQuery;
    dispatch(setURLQuery({ urlQuery }));
    const query = "";
    dispatch(setInputQuery({ inputQuery: query }));
    history.push(`/movies?search=${urlQuery}&page=1`);
  }

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMovieDetails({ movieId: id }));
  }, [id, dispatch]);

  //let str = "dsfdf";

  // window.addEventListener("resize", () => {
  //   if (window.innerWidth <= 772) {
  //     someRef.current.production = "fdfjjj";
  //   }
  // });

  return status === "loading" ? (
    <Loader />
  ) : status === "error" ? (
    <ErrorPage />
  ) : (
    movieDetails && (
      <>
        {movieDetails.backdrop_path ? (
          <Backdrop
            backdropImage={
              movieDetails.backdrop_path
                ? `${BACK_IMAGE_PATH}${movieDetails.backdrop_path}`
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
          { !!castPeople[0] ? (
            <ContentContainer>
              <Header>Cast</Header>
              <TilesContainer peopleListFlag>
                {castPeople.map((person) => (
                  <StyledLink to={`/person/${person.id}`}>
                    <Tile
                      peopleListFlag
                      key={nanoid()}
                      poster={
                        person.profile_path
                          ? `${IMAGE_PATH}${person.profile_path}`
                          : `${missingPersonPoster}`
                      }
                      tileTitle={person.name ? person.name : ""}
                      tileSubtitle={person.character ? person.character : ""}
                    ></Tile>
                  </StyledLink>
                ))}
              </TilesContainer>
            </ContentContainer>
          ) : null}
          { !!crewPeople[0] ? (
            <ContentContainer>
              <Header>Crew</Header>
              <TilesContainer peopleListFlag>
                {crewPeople
                  ? crewPeople.map((person) => (
                      <StyledLink to={`/person/${person.id}`}>
                        <Tile
                          peopleListFlag
                          key={nanoid()}
                          poster={
                            person.profile_path
                              ? `${IMAGE_PATH}${person.profile_path}`
                              : `${missingPersonPoster}`
                          }
                          tileTitle={person.name ? person.name : ""}
                          tileSubtitle={person.job ? person.job : ""}
                        ></Tile>
                      </StyledLink>
                    ))
                  : null}
              </TilesContainer>
            </ContentContainer>
          ) : null}
        </Container>
      </>
    )
  );
};
