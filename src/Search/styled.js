import styled from "styled-components";
import icon from "../images/search.svg";

export const Input = styled.input`
  padding: 12px 12px 12px 64px;
  width: 100%;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.mystic};
  border-radius: 33px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  background-image: url("${icon}");
  background-repeat: no-repeat;
  background-position: 25px center;
`;

