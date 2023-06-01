import { useParams } from "react-router-dom";
import { Container } from "../../common/MainContainer/styled";
import { Tile } from "../../common/Tile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetailsForPerson, selectDetails } from "./personDetailsSlice";

export const PersonDetails = () => {
  const dispatch = useDispatch();
  const personDetails = useSelector(selectDetails);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailsForPerson({ personId: id }));
  }, [id, dispatch]);

  console.log(personDetails);

  return (
      <Container personDetailsFlag>
        <Tile>{"person details"}</Tile>
      </Container>
  );
};
