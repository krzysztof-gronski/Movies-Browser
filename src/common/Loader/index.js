import { Container, Header } from "../MainContainer/styled";
import { useQueryParameter } from "../Search/queryParameters";
import { Spinner } from "./styled";

export const Loader = () => {
  const query = useQueryParameter("search");

  return (
    <Container search>
      <Header search>{`Search results for "${query}"`}</Header>
      <Spinner></Spinner>
    </Container>
  );
};
