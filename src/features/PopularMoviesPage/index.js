import { useEffect, useState } from "react";
import tmdb from "../api/tmdb";
import {
  Container,
  Header,
  TilesContainer,
} from "../../common/MainContainer/styled";
import { Tile } from "../../common/Tile";

export const PopularMoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const getPopularMovieData = async () => {
    const { data } = await tmdb
      .get(
        "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
      )
      .catch((error) => {
        alert(error);
      });

    setMovies(data.results);
  };
  useEffect(() => {
    getPopularMovieData();
  }, []);

  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

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

