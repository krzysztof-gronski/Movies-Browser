import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Icon } from "../../images/camera.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background: ${({ theme }) => theme.colors.black};
  align-items: center;
  height: 94px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex-wrap: wrap;
    width: 100%;
    height: 142px;
  }
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    justify-content: space-around;
    flex-grow: 1;
    padding-top: 5px;
    margin-left: 0;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    font-weight: 500;
    line-height: 17px;
  }
`;

export const List = styled.ul`
  display: flex;
  margin-right: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding-left: 0;
  }
`;

export const SearchWrapper = styled.div`
  flex-basis: 432px;
  margin-right: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex-grow: 1;
    margin: 0 20px 10px 20px;
  }
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
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
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
