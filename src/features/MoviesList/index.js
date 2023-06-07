import { useEffect, useState } from "react";
import missingMoviePoster from "../../images/missingMoviePoster.svg";
import {
  Container,
  ContentContainer,
  Header,
  TilesContainer,
} from "../../common/MainContainer/styled";
import { Tile } from "../../common/Tile";
import Pagination from "../../common/Pagination";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../common/Search/queryParameters";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../common/Loader";
import { ErrorPage } from "../../common/ErrorPage";
import { NoResults } from "../../common/NoResults";
import {
  fetchGenres,
  fetchMovies,
  selectGenres,
  selectMovies,
  selectStatus,
  selectTotalPages,
  selectTotalResults,
  setQuery,
} from "./moviesListSlice";
import { IMAGE_PATH } from "../api/apiData";

export const MoviesList = () => {
  const dispatch = useDispatch();
  let status = useSelector(selectStatus);
  const movies = useSelector(selectMovies);
  const totalPages = useSelector(selectTotalPages);
  let page = useQueryParameter("page");
  const genres = useSelector(selectGenres);
  const query = useQueryParameter("search");
  const totalResults = useSelector(selectTotalResults);

  if (!page) page = 1;

  useEffect(() => {
    dispatch(setQuery(query ? { query: query } : { query: "" }));
    dispatch(fetchMovies(page));
  }, [page, dispatch, query]);

  return status === "loading" ? (
    <Loader />
  ) : status === "error" ? (
    <ErrorPage />
  ) : query && movies.length <= 0 ? (
    <NoResults />
  ) : (
    <Container moviesListFlag>
      <ContentContainer>
        <Header>
          {query
            ? `Search results for "${query}" (${totalResults})`
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
