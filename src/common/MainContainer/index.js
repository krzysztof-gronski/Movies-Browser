import { Container, TilesContainer, Header } from "./styled";
import { Tile } from "../Tile";
import { sampleTiles } from "./sampleTiles";

export const MainContainer = () => {
  return (
    <Container>
      <Header>Popular movies</Header>
      <TilesContainer>
        {sampleTiles.map((tile) => (
          <Tile
            poster={tile.poster}
            tileTitle={tile.tileTitle}
            tileSubtitle={tile.tileSubtitle}
            genres={tile.genres}
          ></Tile>
        ))}
      </TilesContainer>
    </Container>
  );
};
