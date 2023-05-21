import { useEffect, useState } from "react";
import {
  Container,
  Header,
  TilesContainer,
} from "../../common/MainContainer/styled";
import { Tile } from "../../common/Tile";
import { tmdbApi, IMAGE_PATH } from "../api/apiData";

export const PopularMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState({});

  const getPopularMovie = async () => {
    const { data } = await tmdbApi.getPopularMoviesData();
    setMovies(data.results);
  };

  const getGenres = async () => {
    const { data } = await tmdbApi.getGenresData();
    setGenres(data.genres);
    console.log(data.genres);
  };

  useEffect(() => {
    getPopularMovie();
    getGenres();
  }, []);

  return (
    <div>
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
                tileSubtitle={movie.title}
                genres={movie.genre_ids}
                rate={movie.vote_average}
                votesNr={movie.vote_count}
              ></Tile>
            ))}
        </TilesContainer>
      </Container>
    </div>
  );
};
