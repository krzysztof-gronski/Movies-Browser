import { Container, Header, TilesContainer } from "./styled";
import { Tile } from "../Tile";
import { IMAGE_PATH } from "../../features/api/apiData";
import { formatDate } from "../Utilities";
import { Spinner } from "../Loader/styled";

export const MainContainer = ({ movies, genres, movie, search }) => {
  return movies ? (
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
  ) : (
    <>{"Error Page"}</>
  );
};
