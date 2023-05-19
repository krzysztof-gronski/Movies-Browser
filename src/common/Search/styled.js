import styled from "styled-components";
import icon from "../../images/search.svg";
import smallIcon from "../../images/smallSearch.svg";

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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 44px;
    font-size: 13px;
    background-image: url("${smallIcon}");
    padding-left: 45px;
  }
`;
