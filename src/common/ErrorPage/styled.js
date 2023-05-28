import { Link } from "react-router-dom";
import styled from "styled-components";

export const ErrorImage = styled.img`
  width: 100px;
  margin-top: 7vw;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 80px;
    margin-top: 7vw;
  }
`;

export const LinkButton = styled(Link)`
  margin: 1.2vw;
  padding: 16px 24px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  background-color: ${({ theme }) => theme.colors.cornflowerBlue};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 1s;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: 2vw;
    padding: 14px 18px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.cornflowerBlueLight};
  }
`;
