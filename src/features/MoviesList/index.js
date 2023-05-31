import { useEffect } from "react";
import { IMAGE_PATH } from "../api/apiData";
import noPoster from "../../images/noPoster.jpg";
import {
  Container,
  Header,
  TilesContainer,
} from "../../common/MainContainer/styled";
import { Tile } from "../../common/Tile";
import Pagination from "../../common/Pagination";
import { useQueryParameter } from "../../common/Search/queryParameters";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectGenres,
  selectMovies,
  selectTotalPages,
  selectStatus,
} from "./moviesListSlice";
import { ErrorPage } from "../../common/ErrorPage";
import { NoResults } from "../../common/NoResults";
import { Loader } from "../../common/Loader";

export const MoviesList = () => {
  const movies = useSelector(selectMovies);
  const genres = useSelector(selectGenres);
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();
  const page = useQueryParameter("page") || 1;
  const search = useQueryParameter("search");
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchMovies(page));
  }, [page, dispatch]);

  return ( status === "loading" ? (
    <Loader />
  ) : status === "error" ? (
    <ErrorPage />
  ) : search && movies.length <= 0 ? (
    <NoResults />
  ) : (
    <Container moviesListFlag search>
      <Header search>{search ? "Search" : "Popular movies"}</Header>
      <TilesContainer>
        {movies.map((movie) => (
          <Tile
            moviesListFlag
            key={movie.id}
            movie={movie}
            poster={
              movie.poster_path
                ? `${IMAGE_PATH}${movie.poster_path}`
                : `${noPoster}`
            }
            tileTitle={movie.original_title}
            tileSubtitle={
              movie.release_date ? movie.release_date.slice(0, 4) : ""
            }
            genres={movie.genre_ids.map((genre_id) => {
              return genres.find((genre) => genre.id === genre_id).name;
            })}
            rate={movie.vote_average}
            votesNr={movie.vote_count}
          ></Tile>
        ))}
      </TilesContainer>
      <Pagination page={page} totalPages={totalPages} />
    </Container>
  )
  )
};
