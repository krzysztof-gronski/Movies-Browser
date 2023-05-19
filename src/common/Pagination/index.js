import { useState } from "react";
import {
  Button,
  ButtonWrapper,
  PageIndicator,
  PageNumber,
  Wrapper,
} from "./styled";
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 500;

  return (
    <Wrapper>
      <ButtonWrapper>
        <Button>First</Button>
        <Button>Previous</Button>
      </ButtonWrapper>
      <PageIndicator>
        Page <PageNumber>{currentPage}</PageNumber> of{" "}
        <PageNumber>{totalPages}</PageNumber>
      </PageIndicator>
      <ButtonWrapper>
        <Button blue>Next</Button>
        <Button blue>Last</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Pagination;
