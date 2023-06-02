import { useEffect, useState } from "react";
import { IMAGE_PATH, tmdbApi } from "../api/apiData";
import missingMoviePoster from "../../images/missingMoviePoster.svg";
import {
  Container,
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

export const MoviesList = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const movies = useSelector(selectMovies);
  const totalPages = useSelector(selectTotalPages);
  let page = useQueryParameter("page");
  const genres = useSelector(selectGenres);
  const query = useQueryParameter("query");
  const totalResults = useSelector(selectTotalResults);

  if (!page) page = 1;

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  useEffect(() => {
    dispatch(setQuery(query ? { query: query } : { query: "" }));
    dispatch(fetchMovies(page));
  }, [page]);

  const getGenreName = (genreId) => {
    if (genres && genres.length > 0) {
      const genre = genres.find((genre) => genre.id === genreId);
      return genre ? genre.name : "";
    }
    return "";
  };

  return (
    <Container moviesListFlag>
      <Header>
        {query
          ? `Search results for “${query}” (${totalResults})`
          : `Popular Movies`}
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
            genres={movie.genre_ids.map((genreId) => getGenreName(genreId))}
            rate={movie.vote_average}
            votesNr={movie.vote_count}
          ></Tile>
        ))}
      </TilesContainer>
      <Pagination page={page} totalPages={totalPages} />
    </Container>
  );
};
