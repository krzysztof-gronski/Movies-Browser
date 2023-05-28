import { Container, Header, Message, TilesContainer } from "./styled";
import { Tile } from "../Tile";
import { IMAGE_PATH } from "../../features/api/apiData";
import Pagination from "../Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectMovies,
  selectPage,
} from "../../features/MoviesList/moviesListSlice";
import { useEffect } from "react";
import { useQueryParameter } from "../Search/queryParameters";
import { formatDate } from "../Utilities";
import { Spinner } from "../Loader/styled";
import { NoResultsImage } from "../NoResults/styled";
import noReultsImage from "../NoResults/noresults.svg";
import errorImage from "../ErrorPage/error.svg";
import { ErrorImage, LinkButton } from "../ErrorPage/styled";

export const MainContainer = ({
  genres,
  movie,
  search,
  noResults,
  error,
}) => {
  
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();
  const page = useQueryParameter("page");
  const currentPage = useSelector(selectPage);
  useEffect(() => {
    dispatch(fetchMovies(page));
  }, [page]);
  
  return movies.length>0 ? (
    <Container moviesListFlag>

      <Header>Popular movies</Header>
      <TilesContainer>
        {movies &&
          movies.map((movie) => (
            <Tile
              moviesListFlag
              key={movie.id}
              movie={movie}
              poster={
                movie.poster_path ? `${IMAGE_PATH}${movie.poster_path}` : null
              }
              tileTitle={movie.original_title}
              tileSubtitle={movie.release_date.slice(0, 4)}
              genres={movie.genre_ids.map((genre_id) => {
                return genres.find((genre) => genre.id === genre_id).name;
              })}
              rate={movie.vote_average}
              votesNr={movie.vote_count}
            ></Tile>
          ))}
      </TilesContainer>
      <Pagination page={currentPage} totalPages={"500"} />
    </Container>
  ) : movie ? (
    <>
      <Container movieDetailsFlag>
        <Tile
          movieDetailsFlag
          key={movie.id}
          movie={movie}
          poster={
            movie.poster_path ? `${IMAGE_PATH}${movie.poster_path}` : null
          }
          tileTitle={movie.original_title}
          tileSubtitle={movie.release_date.slice(0, 4)}
          production={movie.production}
          releaseDate={formatDate(movie.release_date)}
          genres={movie.genre_ids.map((genre_id) => {
            return genres.find((genre) => genre.id === genre_id).name;
          })}
          rate={movie.vote_average}
          votesNr={movie.vote_count}
          description={movie.overview}
        ></Tile>
      </Container>
    </>
  ) : search ? (
    <Container search>
      <Header search>{`Search results for "${search}"`}</Header>
      <Spinner></Spinner>
    </Container>
  ) : noResults ? (
    <Container noResults>
      <Header
        noResults
      >{`Sorry, there are no results for "${noResults}"`}</Header>
      <NoResultsImage src={noReultsImage} />
    </Container>
  ) : (
    <Container error>
      <ErrorImage src={errorImage} />
      <Header error>{"Ooops! Something went wrong..."}</Header>{" "}
      <Message>Please check your network connection</Message>
      <Message>and try again</Message>
      <LinkButton to="/">Back to home page</LinkButton>
    </Container>
  );
};
