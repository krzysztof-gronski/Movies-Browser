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
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <NavBar>
        <PageTitle>
          <StyledLink to={`/movies?page=1`}>
            <StyledIcon></StyledIcon>
          </StyledLink>
          <StyledLink to={`/movies?page=1`}>
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
