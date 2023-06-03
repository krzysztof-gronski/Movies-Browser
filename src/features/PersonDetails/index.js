import { useParams } from "react-router-dom";
import { Container } from "../../common/MainContainer/styled";
import { Tile } from "../../common/Tile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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

  let imgPath = "https://image.tmdb.org/t/p/w500"+personDetails.profile_path;

  return (
      <Container personDetailsFlag>
        <div>{`${personDetails.name}`}</div>
        <div>{`${personDetails.birthday}`}</div>
        <div>{`${personDetails.place_of_birth}`}</div>
        <div>{`${personDetails.biography}`}</div>
        <img src={imgPath}/>
      </Container>
  );
};
