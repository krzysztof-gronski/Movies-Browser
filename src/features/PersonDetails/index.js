import { useParams } from "react-router-dom";
import {
  Container,
  ContentContainer,
  Header,
  TilesContainer,
} from "../../common/MainContainer/styled";
import { Tile } from "../../common/Tile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { IMAGE_PATH } from "../api/apiData";
import missingPersonPoster from "../../images/missingPersonPoster.svg";
import missingMoviePoster from "../../images/missingMoviePoster.svg";
import {
  getDetailsForPerson,
  selectCast,
  selectCrew,
  selectDetails,
} from "./personDetailsSlice";
import { formatDate } from "../../common/Utilities";
  selectPersonGenres,
  selectStatus,
} from "./personDetailsSlice";
import { Loader } from "../../common/Loader";
import { ErrorPage } from "../../common/ErrorPage";

export const PersonDetails = () => {
  const dispatch = useDispatch();
  const personDetails = useSelector(selectDetails);
  const crewData = useSelector(selectCrew);
  const castData = useSelector(selectCast);
  const status = useSelector(selectStatus);
  const genres = useSelector(selectPersonGenres);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailsForPerson({ personId: id }));
  }, [id, dispatch]);

  console.log(crewData);

  return (
    status === "loading" ? (
      <Loader />
    ) : status === "error" ? (
      <ErrorPage />
    ) : (
    personDetails && (
      <Container personDetailsFlag>
        <Tile
          personDetailsFlag
          key={personDetails.id}
          person={personDetails}
          poster={
            personDetails.profile_path
              ? `${IMAGE_PATH}${personDetails.profile_path}`
              : `${missingPersonPoster}`
          }
          tileTitle={personDetails.name}
          releaseDate={
            personDetails.birthday ? formatDate(personDetails.birthday) : ""
          }
          production={
            personDetails.place_of_birth ? personDetails.place_of_birth : ""
          }
          description={personDetails.biography}
        ></Tile>

        <ContentContainer>
          <Header>{`Movies - cast (${castData.length})`}</Header>
          <TilesContainer>
            {castData.map((movie) => (
              <Tile
                moviesListFlag
                key={movie.id}
                movie={movie}
                poster={
                  movie.poster_path
                    ? `${IMAGE_PATH}${movie.poster_path}`
                    : `${missingMoviePoster}`
                }
                tileTitle={movie.original_title}
                tileSubtitle={
                  movie.release_date ? movie.release_date.slice(0, 4) : ""
                }
                genres={movie.genre_ids.map(
                  (genreId) => genres.find((genre) => genre.id === genreId).name
                )}
                rate={movie.vote_average}
                votesNr={movie.vote_count}
              ></Tile>
            ))}
          </TilesContainer>
        </ContentContainer>
        <ContentContainer>
          <Header>{`Movies - crew (${crewData.length})`}</Header>
          <TilesContainer>
            {crewData.map((movie) => (
              <Tile
                moviesListFlag
                key={movie.id}
                movie={movie}
                poster={
                  movie.poster_path
                    ? `${IMAGE_PATH}${movie.poster_path}`
                    : `${missingMoviePoster}`
                }
                tileTitle={movie.original_title}
                tileSubtitle={
                  movie.release_date ? movie.release_date.slice(0, 4) : ""
                }
                genres={movie.genre_ids.map(
                  (genreId) => genres.find((genre) => genre.id === genreId).name
                )}
                rate={movie.vote_average}
                votesNr={movie.vote_count}
              ></Tile>
            ))}
          </TilesContainer>
        </ContentContainer>
      </Container>
    )
  )
  );
};
