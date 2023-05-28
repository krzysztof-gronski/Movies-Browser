import { Backdrop } from "../../common/Backdrop";
import { MainContainer } from "../../common/MainContainer";
import { movie } from "./sampleMovieData";
import { genres } from "./sampleMovieData";
import backdropImage from "./backdrop.png";

export const MovieDetails = () => {
  return (
    <>
      <Backdrop backdropImage={backdropImage} movie={movie}></Backdrop>
      <MainContainer movie={movie} genres={genres} />
    </>
  );
};
