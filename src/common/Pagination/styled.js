import styled, { css } from "styled-components";
import arrowIcon from "../../images/Vector.svg";
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 104px;
`;

export const ButtonWrapper = styled.div`
  margin-left: 24px;
  margin-right: 24px;
`;

export const Button = styled.button`
  background: #e5e5e5;
  min-width: 76px;
  max-width: 106px;
  height: 36px;
  border-radius: 5px;
  padding: 8px 28px;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  margin: 0 12px 0 12px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.mystic};
  border: none;
  background-image: url("${arrowIcon}");
  background-repeat: no-repeat;
  background-position: 8px center;

  ${({ blue }) =>
    blue &&
    css`
      background: ${({ theme }) => theme.colors.pattensBlue};
      background-image: url("${arrowIcon}");
      background-repeat: no-repeat;
      background-position: 8px center;
      padding: 8px 28px;
    `}
`;

export const PageIndicator = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 16px;
  line-height: 24px;
`;
export const PageNumber = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
`;
