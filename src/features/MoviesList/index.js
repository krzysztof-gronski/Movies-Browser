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
import { useQueryParameter } from "../../common/Search/queryParameters";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectMovies, selectTotalPages } from "./moviesListSlice";

export const MoviesList = () => {
  const [genres, setGenres] = useState({});
  const movies = useSelector(selectMovies);
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();
  const page = useQueryParameter("page");
  useEffect(() => {
    dispatch(fetchMovies(page));
  }, [dispatch, page]);

  const getGenres = async () => {
    const { data } = await tmdbApi.getGenresData();
    setGenres(data.genres);
  };

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <Container moviesListFlag>
      <Header>Popular movies</Header>
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
  );
};
