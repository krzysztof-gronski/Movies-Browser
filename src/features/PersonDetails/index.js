import { Container } from "../../common/MainContainer/styled";
import { Tile } from "../../common/Tile";
import { useDispatch, useSelector } from "react-redux";

export const PersonDetails = () => {
  const dispatch = useDispatch();

  return (
      <Container personDetailsFlag>
        <Tile></Tile>
      </Container>
  );
};
