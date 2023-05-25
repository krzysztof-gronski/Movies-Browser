import styled, { css } from "styled-components";
import { ReactComponent as Icon } from "../../images/Vector.svg";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 104px;
`;

export const StyledButton = styled.button`
  background: #d6e4ff;
  min-width: 76px;
  max-width: 106px;
  height: 36px;
  border-radius: 5px;
  white-space: nowrap;
  padding: 8px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  margin: 0 12px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.mystic};
  border: none;
  &:disabled {
    background: #e5e5e5;
  }
`;

export const StyledIcon = styled(Icon)`
  margin-right: 8px;
  ${({ rotate }) =>
    rotate &&
    css`
      rotate: 180deg;
      margin-left: 8px;
      margin-right: 0;
    `}
`;

export const ButtonText = styled.span``;

export const PageIndicator = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 16px;
  line-height: 24px;
  margin-left: 24px;
  margin-right: 24px;
`;
export const PageNumber = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
`;
