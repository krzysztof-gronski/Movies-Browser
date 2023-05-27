import {
  MaxRate,
  MobileVotes,
  Rate,
  RateContainer,
  StarIcon,
  TileContent,
  TileTitle,
  Votes,
} from "../TileContent";
import { BackdropContainer, BackdropImage, ContentContainer } from "./styled";
import starIcon from "../TileContent/star.svg";

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
            <MobileVotes backdropFlag>{movie.vote_count + "       votes"}</MobileVotes>
          </RateContainer>
          <Votes backdropFlag>{movie.vote_count + "       votes"}</Votes>
        </TileContent>
      </ContentContainer>
    </BackdropContainer>
  );
};
