import { Link } from "react-router-dom";
import styled from "styled-components";

export const ErrorImage = styled.img`
  width: 100px;
  margin-top: 7vw;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 100px;
    margin-top: 10vw;
  }
`;

export const LinkButton = styled(Link)`
 
`;