import { MainContainer } from "../../common/MainContainer";
import { movie } from "./sampleMovieData";
import { genres } from "./sampleMovieData";

export const MovieDetails = () => {
   return <MainContainer movie={movie} genres={genres} />;
};
