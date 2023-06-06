import {
  Wrapper,
  StyledIcon,
  NavBar,
  Header,
  PageTitle,
  List,
  ListItem,
  SearchWrapper,
  StyledNavLink,
} from "./styled";
import Search from "../Search/index";
import { StyledLink } from "../Tile/styled";
import { useHistory, useLocation } from "react-router-dom";
import searchQueryParamName from "../Search/searchQueryParamName";
import { useReplaceQueryParameter } from "../Search/queryParameters";

const Navigation = () => {
  const replaceQueryParameter = useReplaceQueryParameter();

  const location = useLocation();
  const history = useHistory();

  const loadPopularMovies = () => {
    // const searchParams = new URLSearchParams(location.search);
    // searchParams.set("search", "");
    // history.push(`${location.pathname}?${searchParams.toString()}`);
    replaceQueryParameter({ key: searchQueryParamName, value: undefined });
    //window.location.reload();
  };

  return (
    <Wrapper>
      <NavBar>
        <PageTitle>
          <StyledLink
            className={location.pathname.includes("movie") ? "active" : ""}
             to=""
            
          >
            <StyledIcon onClick={loadPopularMovies}></StyledIcon>
          </StyledLink>
          <StyledLink
            className={location.pathname.includes("movie") ? "active" : ""}
            to="/movies?page=1"
          >
            <Header>Movies Browser</Header>
          </StyledLink>
        </PageTitle>
        <List>
          <ListItem>
            <StyledNavLink
              className={location.pathname.includes("movie") ? "active" : ""}
              to="/movies?page=1"
            >
              Movies
            </StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink
              className={location.pathname.includes("person") ? "active" : ""}
              to="/people?page=1"
            >
              People
            </StyledNavLink>
          </ListItem>
        </List>
      </NavBar>
      <SearchWrapper>
        <Search />
      </SearchWrapper>
    </Wrapper>
  );
};
export default Navigation;
