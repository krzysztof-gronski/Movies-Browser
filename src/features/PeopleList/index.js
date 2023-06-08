import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Header,
  TilesContainer,
} from "../../common/MainContainer/styled";
import { Tile } from "../../common/Tile";
import missingPersonPoster from "../../images/missingPersonPoster.svg";
import { IMAGE_PATH } from "../api/apiData";
import {
  fetchPeople,
  selectPeople,
  selectStatus,
  selectTotalPages,
  setQuery,
} from "./peopleListSlice";
import { useEffect } from "react";
import { useQueryParameter } from "../../common/Search/queryParameters";
import Pagination from "../../common/Pagination";
import { Loader } from "../../common/Loader";
import { ErrorPage } from "../../common/ErrorPage";
import { NoResults } from "../../common/NoResults";
import { StyledLink } from "./styled";

export const PeopleList = () => {
  const dispatch = useDispatch();
  let status = useSelector(selectStatus);
  const people = useSelector(selectPeople);
  const totalPages = useSelector(selectTotalPages);
  let page = useQueryParameter("page");
  const query = useQueryParameter("search");

  if (!page) page = 1;

  useEffect(() => {
    dispatch(setQuery(query ? { query: query } : { query: "" }));
    dispatch(fetchPeople(page));
  }, [page]);

  return status === "loading" ? (
    <Loader />
  ) : status === "error" ? (
    <ErrorPage />
  ) : query && people.length <= 0 ? (
    <NoResults />
  ) : (
    <Container peopleListFlag>
      <Header peopleListFlag>Popular people</Header>
      <TilesContainer peopleListFlag>
        {people.map((person) => (
          <StyledLink to={`/person/${person.id}`}>
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
          </StyledLink>
        ))}
      </TilesContainer>
      <Pagination page={page} totalPages={totalPages} />
    </Container>
  );
};
