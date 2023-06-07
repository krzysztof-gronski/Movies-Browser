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
  } else if (location.pathname.includes("people")) {
    message = "Search results for popular people...";
  } else if (location.pathname.includes("movie")) {
    message = "Loading movie details...";
  } else {
    message = "Loading person details...";
  }

  return (
    <Container search>
      <Header search>{message}</Header>
      <Spinner></Spinner>
    </Container>
  );
};
