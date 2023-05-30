import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Header,
  TilesContainer,
} from "../../common/MainContainer/styled";
import { Tile } from "../../common/Tile";
import { IMAGE_PATH } from "../api/apiData";
import {
  fetchPeople,
  selectPage,
  selectPeople,
  selectTotalPages,
} from "./peopleListSlice";
import { useEffect } from "react";
import { useQueryParameter } from "../../common/Search/queryParameters";
import Pagination from "../../common/Pagination";
import missingPersonPoster from "../../images/missingPersonPoster.svg";
export const PeopleList = () => {
  const dispatch = useDispatch();
  const myPeople = useSelector(selectPeople);
  const totalPages = useSelector(selectTotalPages);

  const page = useQueryParameter("page");

  useEffect(() => {
    dispatch(fetchPeople(page));
  }, [dispatch, page]);

  return (
    <Container peopleListFlag>
      <Header>Popular people</Header>
      <TilesContainer peopleListFlag>
        {myPeople.map((person) => (
          <Tile
            peopleListFlag
            key={person.id}
            poster={
              person.profile_path
                ? `${IMAGE_PATH}${person.profile_path}`
                : `${missingPersonPoster}`
            }
            tileTitle={person.name ? person.name : ""}
          ></Tile>
        ))}
      </TilesContainer>
      <Pagination page={page} totalPages={totalPages} />
    </Container>
  );
};
