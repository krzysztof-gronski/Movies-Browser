import { Container, Header } from "../MainContainer/styled";
import { Spinner } from "./styled";

export const Loader = () => {
  const searchQuery = "sample Query";

  return (
    <Container search>
      <Header search>{`Search results for "${searchQuery}"`}</Header>
      <Spinner></Spinner>
    </Container>
  );
};
