import { Backdrop } from "../../common/Backdrop";
import { movie } from "./sampleMovieData";
import { genres } from "./sampleMovieData";
import backdropImage from "./backdrop.png";
import { Container } from "../../common/MainContainer/styled";
import { Tile } from "../../common/Tile";
import { IMAGE_PATH } from "../api/apiData";
import { formatDate } from "../../common/Utilities";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieDetails,
  selectCredits,
  selectDetails,
} from "./movieDetailsSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const MovieDetails = () => {
  const dispatch = useDispatch();
  const movieDetails = useSelector(selectDetails);
  const credits = useSelector(selectCredits);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMovieDetails({ movieId: id }));
  }, [id, dispatch]);

  console.log(movieDetails);

  return (
    <>
      <Backdrop
        backdropImage={
          movieDetails.backdrop_path
            ? `${IMAGE_PATH}${movieDetails.backdrop_path}`
            : null
        }
        movie={movieDetails}
      ></Backdrop>
      <Container movieDetailsFlag>
        <Tile
          movieDetailsFlag
          key={movieDetails.id}
          movie={movieDetails}
          poster={
            movieDetails.poster_path
              ? `${IMAGE_PATH}${movieDetails.poster_path}`
              : null
          }
          tileTitle={movieDetails.original_title}
          tileSubtitle={formatDate(movieDetails.release_date).slice(6)}
          production={movieDetails.production_countries[0].name}
          releaseDate={formatDate(movieDetails.release_date)}
          // genres={movie.genre_ids.map((genre_id) => {
          //   return genres.find((genre) => genre.id === genre_id).name;
          // })}
          genres={movieDetails.genres.map((genre) => genre.name)}
          rate={movieDetails.vote_average}
          votesNr={movieDetails.vote_count}
          description={movieDetails.overview}
        ></Tile>
      </Container>
    </>
  );
};
