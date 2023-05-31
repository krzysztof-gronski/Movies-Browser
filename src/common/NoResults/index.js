import { Container, Header } from "../MainContainer/styled";
import { NoResultsImage } from "./styled";
import noResultsImage from "./noresults.svg";

export const NoResults = () => {
  const searchQuery = "sample Query";

  return (
    <Container noResults>
      <Header
        noResults
      >{`Sorry, there are no results for "${searchQuery}"`}</Header>
      <NoResultsImage src={noResultsImage} />
    </Container>
  );
};
