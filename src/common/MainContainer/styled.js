import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  border: 1px solid red;
  margin: 0 auto;
  padding: 56px 40px;
  align-items: center;
  justify-content: center;
`;

export const TilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid blue;
  grid-gap: 24px;
  justify-items: center;
  width: 1372px;
`;

export const Header = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin: 0px 0px 24px -1086px;
`;
