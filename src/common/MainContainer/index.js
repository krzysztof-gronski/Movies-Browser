import { Container, TilesContainer } from "./styled"

export const MainContainer = ({content}) => {
  return (
<Container>
    <TilesContainer>{content}</TilesContainer>
</Container>
  )
}
