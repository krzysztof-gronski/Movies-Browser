import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  ContentContainer,
  Header,
  TilesContainer,
} from "../../common/Container";
import { Tile } from "../../common/Tile";
import missingPersonPoster from "../../images/missingPersonPoster.svg";
import { IMAGE_PATH } from "../api/apiData";
import {
  fetchPeople,
  fetchSearchPeople,
  selectPeople,
  selectStatus,
  selectTotalPages,
  selectTotalResults,
} from "./peopleListSlice";
import { useEffect } from "react";
import { useQueryParameter } from "../../common/Search/queryParameters";
import Pagination from "../../common/Pagination";
import { Loader } from "../../common/Loader";
import { ErrorPage } from "../../common/ErrorPage";
import { NoResults } from "../../common/NoResults";
import { StyledLink } from "./styled";
import {
  selectInputQuery,
  selectQueryLabel,
  setURLQuery,
} from "../../common/Navigation/navigationSlice";

export const PeopleList = () => {
  const dispatch = useDispatch();
  let status = useSelector(selectStatus);
  const people = useSelector(selectPeople);
  const totalPages = useSelector(selectTotalPages);
  const totalResults = useSelector(selectTotalResults);
  let page = useQueryParameter("page");
  const urlQuery = useQueryParameter("search");
  const inputQuery = useSelector(selectInputQuery);
  const queryLabel = useSelector(selectQueryLabel);

  if (!page) page = 1;

  useEffect(() => {
    dispatch(setURLQuery(urlQuery ? { urlQuery: urlQuery } : { urlQuery: "" }));
    if (inputQuery) {
      dispatch(fetchSearchPeople(page));
    } else {
      dispatch(fetchPeople(page));
    }
  }, [page, dispatch, urlQuery]);

  return status === "loading" ? (
    <Loader />
  ) : status === "error" ? (
    <ErrorPage />
  ) : (urlQuery || inputQuery) && people.length <= 0 ? (
    <NoResults />
  ) : (
    <Container peopleListFlag>
      <ContentContainer>
        <Header peopleListFlag>
          {queryLabel
            ? `Search results for “${queryLabel}” (${totalResults})`
            : "Popular people"}
        </Header>
        <TilesContainer peopleListFlag>
          {people.map((person) => (
            <StyledLink key={person.id} to={`/person/${person.id}`}>
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
      </ContentContainer>
      <Pagination page={page} totalPages={totalPages} />
    </Container>
  );
};
