import { useLocation } from "react-router-dom";
import { Container, Header } from "../MainContainer/styled";
import { useQueryParameter } from "../Search/queryParameters";
import { Spinner } from "./styled";

export const Loader = () => {
  const query = useQueryParameter("search");
  const location = useLocation();
  let message;
  if (query) {
    message = `Search results for "${query}"`;
  } else if (location.pathname.includes("movies")) {
    message = "Search results for popular movies...";
  } else {
    message = "Loading...";
  }

  return (
    <Container search>
      <Header search>{message}</Header>
      <Spinner></Spinner>
    </Container>
  );
};
