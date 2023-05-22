import { useState } from "react";
import { ButtonWrapper, PageIndicator, PageNumber, Wrapper } from "./styled";
import Button from "./button";
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 500;

  return (
    <Wrapper>
      <ButtonWrapper>
        <Button text={"First"} align="left" />
        <Button text={"Previous"} align="left" />
      </ButtonWrapper>
      <PageIndicator>
        Page <PageNumber>{currentPage}</PageNumber> of{" "}
        <PageNumber>{totalPages}</PageNumber>
      </PageIndicator>
      <ButtonWrapper>
        <Button blue text={"Next"} align="right" />
        <Button blue text={"Last"} align="right" />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Pagination;
