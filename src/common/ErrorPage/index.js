import { Container, Header, Message } from "../MainContainer/styled";
import { ErrorImage, LinkButton } from "./styled";

export const ErrorPage = () => {
  return (
    <Container error>
      <ErrorImage src={ErrorImage} />
      <Header error>{"Ooops! Something went wrong..."}</Header>{" "}
      <Message>Please check your network connection</Message>
      <Message>and try again</Message>
      <LinkButton to="/">Back to home page</LinkButton>
    </Container>
  );
};
