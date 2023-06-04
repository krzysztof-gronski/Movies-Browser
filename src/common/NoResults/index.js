import { Container, Header } from "../MainContainer/styled";
import { NoResultsImage } from "./styled";
import noResultsImage from "./noresults.svg";
import { useQueryParameter } from "../Search/queryParameters";

export const NoResults = () => {
  const query = useQueryParameter("search");

  return (
    <Container noResults>
      <Header
        noResults
      >{`Sorry, there are no results for "${query}"`}</Header>
      <NoResultsImage src={noResultsImage} />
    </Container>
  );
};
