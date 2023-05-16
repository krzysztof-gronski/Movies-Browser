import styled from "styled-components";

export const Container = styled.div`
  max-width: 1920px;
  border: 1px solid red;
  margin: 0 auto;
  padding: 20px 40px;
  align-content: center;
`;

export const TilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid blue;
  grid-gap: 24px;
  align-items: center;
  justify-items: center;
`;
