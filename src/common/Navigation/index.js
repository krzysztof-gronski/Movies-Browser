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

const Navigation = () => (
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
          <StyledNavLink to="/movies?page=1">Movies</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/people?page=1">People</StyledNavLink>
        </ListItem>
      </List>
    </NavBar>
    <SearchWrapper>
      <Search />
    </SearchWrapper>
  </Wrapper>
);

export default Navigation;
