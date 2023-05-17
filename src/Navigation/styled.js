import styled, { css } from "styled-components";
import { ReactComponent as Icon } from "../images/camera.svg";
import { NavLink } from "react-router-dom";
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  height: 94px;
  padding: 0 16px;
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 192px;
  flex: 1 0 192px;
  max-width: 492px;
  width: 100%;

  @media (max-width: 767px) {
    margin-left: 5px;
    margin-bottom: 10px;
    justify-content: center;
    flex: 1 0 auto;
  }
`;

export const PageTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledIcon = styled(Icon)`
  width: 40px;
  height: 40px;
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  white-space: nowrap;
`;

export const List = styled.ul`
  display: flex;
  margin-left: 0;
`;

export const ListItem = styled.li``;

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  list-style-type: none;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  border: none;
  padding: 8px 24px;
  margin-right: 5px;
  text-decoration: none;

  &.${activeClassName} {
    border: 1px solid white;
    border-radius: 24px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-right: 140px;
  width: 492px;

  @media (max-width: 767px) {
    margin-right: 0;
    width: 100%;
  }
`;
