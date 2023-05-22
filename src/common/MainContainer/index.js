import {
  Container,
  Header,
  TilesContainer,
} from "./styled";
import { Tile } from "../Tile";
import { IMAGE_PATH } from "../../features/api/apiData";


export const MainContainer = ({movies,genres}) => {
  console.log(genres);
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
            tileSubtitle={movie.title}
            genres={movie.genre_ids}
            rate={movie.vote_average}
            votesNr={movie.vote_count}
          ></Tile>
        ))}
    </TilesContainer>
  </Container>
  );
};
