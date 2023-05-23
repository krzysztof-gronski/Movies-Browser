import { Container, Header, TilesContainer } from "./styled";
import { Tile } from "../Tile";
import { IMAGE_PATH } from "../../features/api/apiData";

export const MainContainer = ({ movies, genres, movie }) => {
  return movies ? (
    <Container>
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
    </Container>
  ) : movie ? (
    <>
      <Container>
        <Tile
          movieDetailsFlag
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
      </Container>
    </>
  ) : (
    <>{"Error Page"}</>
  );
};
