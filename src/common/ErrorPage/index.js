import { Container, Header, Message } from "../Container";
import { ErrorImage, LinkButton } from "./styled";
import errorImage from "./error.svg";

export const ErrorPage = () => {
  return (
    <Container error>
      <ErrorImage src={errorImage} />
      <Header error>{"Ooops! Something went wrong..."}</Header>{" "}
      <Message>Please check your network connection</Message>
      <Message>and try again</Message>
      <LinkButton to="/">Back to home page</LinkButton>
    </Container>
  );
};
