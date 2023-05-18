import styled, { css } from "styled-components";
import { ReactComponent as Icon } from "../images/camera.svg";
import { NavLink } from "react-router-dom";
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background: black;
  align-items: center;
  height: 94px;

  @media (max-width: 767px) {
    width: 100%;
    justify-content: flex-end;
    flex-wrap: wrap;
    height: 142px;
  }
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    padding-top: 5px;
  }
`;

export const PageTitle = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

export const StyledIcon = styled(Icon)`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  @media (max-width: 767px) {
    width: 17px;
    height: 17px;
  }
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  white-space: nowrap;
  @media (max-width: 767px) {
    font-size: 13px;
    font-weight: 500;
    line-height: 17px;
  }
`;

export const List = styled.ul`
  display: flex;
  margin-right: 5px;
  @media (max-width: 767px) {
    padding-left: 10px;
    padding-right: 15px;
  }
`;

export const SearchWrapper = styled.div`
  flex-basis: 432px;

  @media (max-width: 767px) {
    flex-basis: 288px;
    margin: 16px;
  }
`;

export const ListItem = styled.li`
  @media (max-width: 767px) {
  }
`;

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
  text-decoration: none;

  @media (max-width: 767px) {
    font-size: 12px;
    font-weight: 600;
    line-height: 17px;
    padding: 8px 12px;
  }

  &.${activeClassName} {
    border: 1px solid white;
    border-radius: 24px;
  }
`;
