
import { Container, Header, TilesContainer } from "../../common/MainContainer/styled";
import { Tile } from "../../common/Tile";
import missingPersonPoster from "../../images/missingPersonPoster.svg";
import { IMAGE_PATH } from "../api/apiData";
import { samplePeople } from "./samplePeople";

export const PeopleList = () => { 
    
  return (
    <Container peopleListFlag>
      <Header>Popular people</Header>
      <TilesContainer peopleListFlag>
        {samplePeople.map((person) => (
          <Tile
            peopleListFlag
            key={person.id}
            poster={
              person.profile_path
                ? `${IMAGE_PATH}${person.profile_path}`
                : `${missingPersonPoster}`
            }
            tileTitle={person.name ? person.name : ""}
          ></Tile>
        ))}
      </TilesContainer>
      {/* <Pagination page={page} totalPages={totalPages} /> */}
    </Container>
  );
};
