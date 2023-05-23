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
import Search from "../Search";

const Navigation = () => (
  <Wrapper>
    <NavBar>
      <PageTitle>
        <StyledIcon></StyledIcon>
        <Header>Movies Browser</Header>
      </PageTitle>
      <List>
        <ListItem>
          <StyledNavLink exact to="/">
            Movies
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/people">People</StyledNavLink>
        </ListItem>
      </List>
    </NavBar>
    <SearchWrapper>
      <Search />
    </SearchWrapper>
  </Wrapper>
);

export default Navigation;
