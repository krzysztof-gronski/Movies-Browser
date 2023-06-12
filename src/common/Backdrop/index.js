import { TileContent, TileTitle } from "../TileContent";
import {
  MaxRate,
  MobileVotes,
  Rate,
  RateContainer,
  StarIcon,
  Votes,
} from "../RateContainer";
import { BackdropContainer, BackdropImage, ContentContainer } from "./styled";
import starIcon from "../RateContainer/star.svg";

export const Backdrop = ({ backdropImage, movie }) => {
  return (
    <BackdropContainer>
      <BackdropImage src={backdropImage} alt="backdrop" />
      <ContentContainer>
        <TileContent backdropFlag>
          <TileTitle backdropFlag>{movie.original_title}</TileTitle>
          <RateContainer backdropFlag>
            <StarIcon src={starIcon} backdropFlag />
            <Rate backdropFlag>{movie.vote_average}</Rate>
            <MaxRate backdropFlag>{"/ 10"}</MaxRate>
            <MobileVotes backdropFlag>
              {movie.vote_count + "       votes"}
            </MobileVotes>
          </RateContainer>
          <Votes backdropFlag>{movie.vote_count + "       votes"}</Votes>
        </TileContent>
      </ContentContainer>
    </BackdropContainer>
  );
};
