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

const Navigation = () => (
  <Wrapper>
    <NavBar>
      <PageTitle>
        <StyledIcon></StyledIcon>
        <Header>Movies Browser</Header>
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
