import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 104px;
  margin-top: 40px;
`;

export const Button = styled.button`
  background: #d6e4ff;
  min-width: 76px;
  max-width: 108px;
  height: 36px;
  border-radius: 5px;
  white-space: nowrap;
  padding: 8px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  margin: 0 12px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.pattensBlue};
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border: none;
  &:disabled {
    background-color: ${({ theme }) => theme.colors.mystic};
  }
  @media (max-width: 767px) {
    height: 24px;
    max-width: 38px;
    min-width: 29px;
    padding: 8px 6px;
  }
`;

export const ButtonText = styled.span`
  @media (max-width: 767px) {
    display: none;
  }
`;

export const PageIndicator = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 16px;
  line-height: 24px;
  margin-left: 24px;
  margin-right: 24px;
  @media (max-width: 767px) {
    font-size: 10px;
    margin-left: 8px;
    margin-right: 8px;
    padding: 0;
  }
`;
export const PageNumber = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: 767px) {
    font-size: 10px;
  }
`;

export const VectorSvg = styled.svg`
  width: 8px;
  height: 11px;
  fill: none;
`;
