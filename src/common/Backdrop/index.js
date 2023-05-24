import { MaxRate, Rate, RateContainer, StarIcon, TileContent, TileTitle, Votes } from "../TileContent";
import { BackdropContainer, BackdropImage } from "./styled";
import starIcon from "../TileContent/star.svg";

export const Backdrop = ({ backdropImage, movie }) => {
  return (
    <BackdropContainer>
      <BackdropImage src={backdropImage} alt="backdrop" />
      <TileContent backdropFlag>
        <TileTitle movieDetailsFlag>{movie.original_title}</TileTitle>
        <RateContainer movieDetailsFlag>
          <StarIcon src={starIcon} />
          <Rate movieDetailsFlag>{movie.vote_average}</Rate>
          <MaxRate>{"/ 10"}</MaxRate>
          <Votes movieDetailsFlag>{movie.vote_count + "       votes"}</Votes>
        </RateContainer>
      </TileContent>
    </BackdropContainer>
  );
};
