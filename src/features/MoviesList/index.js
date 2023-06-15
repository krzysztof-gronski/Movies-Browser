import { useEffect } from "react";
import missingMoviePoster from "../../images/missingMoviePoster.svg";
import {
  Container,
  ContentContainer,
  Header,
  TilesContainer,
} from "../../common/Container";
import { Tile } from "../../common/Tile";
import Pagination from "../../common/Pagination";
import { useQueryParameter } from "../../common/Search/queryParameters";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../common/Loader";
import { ErrorPage } from "../../common/ErrorPage";
import { NoResults } from "../../common/NoResults";
import {
  fetchMovies,
  fetchSearchMovies,
  selectGenres,
  selectMovies,
  selectStatus,
  selectTotalPages,
  selectTotalResults,
} from "./moviesListSlice";
import { IMAGE_PATH } from "../api/apiData";
import {
  selectInputQuery,
  selectQueryLabel,
  setURLQuery,
} from "../../common/Navigation/navigationSlice";

export const MoviesList = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const movies = useSelector(selectMovies);
  const totalPages = useSelector(selectTotalPages);
  let page = useQueryParameter("page");
  const genres = useSelector(selectGenres);
  const urlQuery = useQueryParameter("search");
  const queryLabel = useSelector(selectQueryLabel);
  let inputQuery = useSelector(selectInputQuery);
  const totalResults = useSelector(selectTotalResults);

  if (!page) page = 1;

  useEffect(() => {
    dispatch(setURLQuery(urlQuery ? { urlQuery: urlQuery } : { urlQuery: "" }));
    if (inputQuery) {
      dispatch(fetchSearchMovies(page));
    } else {
      dispatch(fetchMovies(page));
    }
  }, [page, dispatch, urlQuery]);

  return status === "loading" ? (
    <Loader />
  ) : status === "error" ? (
    <ErrorPage />
  ) : (urlQuery || inputQuery) && movies.length <= 0 ? (
    <NoResults />
  ) : (
    <Container moviesListFlag>
      <ContentContainer>
        <Header>
          {queryLabel
            ? `Search results for “${queryLabel}” (${totalResults})`
            : "Popular movies"}
        </Header>
        <TilesContainer>
          {movies.map((movie) => (
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
      <Pagination page={page} totalPages={totalPages} />
    </Container>
  );
};
