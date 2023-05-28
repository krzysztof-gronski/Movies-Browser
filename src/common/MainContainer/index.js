import { Container, Header, TilesContainer } from "./styled";
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

export const MainContainer = ({ genres }) => {
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();
  const page = useQueryParameter("page");
  const currentPage = useSelector(selectPage);
  useEffect(() => {
    dispatch(fetchMovies(page));
  }, [page]);
  return (
    <Container>
      <Header>Popular movies</Header>
      <TilesContainer>
        {movies &&
          movies.map((movie) => (
            <Tile
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
  );
};
