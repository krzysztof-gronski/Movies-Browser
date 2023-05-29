import { Backdrop } from "../../common/Backdrop";
import { movie } from "./sampleMovieData";
import { genres } from "./sampleMovieData";
import backdropImage from "./backdrop.png";
import { Container } from "../../common/MainContainer/styled";
import { Tile } from "../../common/Tile";
import { IMAGE_PATH } from "../api/apiData";
import { formatDate } from "../../common/Utilities";

export const MovieDetails = () => {
  return (
    <>
      <Backdrop backdropImage={backdropImage} movie={movie}></Backdrop>
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
  );
};
