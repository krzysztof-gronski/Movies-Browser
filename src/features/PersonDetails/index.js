import { useParams } from "react-router-dom";
import { Container } from "../../common/MainContainer/styled";
import { Tile } from "../../common/Tile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { IMAGE_PATH } from "../api/apiData";
import missingPersonPoster from "../../images/missingPersonPoster.svg";
import { getDetailsForPerson, selectCast, selectCrew, selectDetails } from "./personDetailsSlice";

export const PersonDetails = () => {
  const dispatch = useDispatch();
  const personDetails = useSelector(selectDetails);
  const crewData = useSelector(selectCrew);
  const castData = useSelector(selectCast);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailsForPerson({ personId: id }));
  }, [id, dispatch]);

  console.log(personDetails);

  return (
    personDetails && (
      <Container personDetailsFlag>
        <Tile
          personDetailsFlag
          key={personDetails.id}
          person={personDetails}
          poster={
            personDetails.profile_path
              ? `${IMAGE_PATH}${personDetails.profile_path}`
              : `${missingPersonPoster}`
          }
          tileTitle={personDetails.name}
          tileSubtitle={
            personDetails.birthday ? personDetails.birthday.slice(0, 4) : ""
          }
          production={
            personDetails.place_of_birth ? personDetails.place_of_birth : ""
          }
          description={personDetails.biography}
        ></Tile>
      </Container>
    )
  );
};
