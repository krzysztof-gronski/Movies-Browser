import { useEffect, useState } from "react";
import {
  PageIndicator,
  PageNumber,
  Wrapper,
  Button,
  ButtonText,
} from "./styled";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../Search/queryParameters";
import { BackwardVector, ForwardVector } from "./arrows";

const Pagination = () => {
  const firstPage = 1;
  const totalPages = 500;

  const [width, setWidth] = useState(window.innerWidth);
  window.onresize = () => setWidth(window.innerWidth);

  const page = useQueryParameter("page");

  const [currentPage, setCurrentPage] = useState(1);

  const replaceQueryParameter = useReplaceQueryParameter();

  useEffect(() => {
    setCurrentPage(parseInt(page) || firstPage);
  }, [page]);

  const isSmallScreen = width < 767;

  return (
    <Wrapper>
      <Button disabled={currentPage === 1 ? true : false}>
        <BackwardVector disabled={currentPage === 1 ? true : false} />
        {isSmallScreen && (
          <BackwardVector disabled={currentPage === 1 ? true : false} />
        )}
        <ButtonText>First</ButtonText>
      </Button>
      <Button disabled={currentPage === 1 ? true : false}>
        <BackwardVector disabled={currentPage === 1 ? true : false} />
        <ButtonText>Previous</ButtonText>
      </Button>
      <PageIndicator>
        Page <PageNumber>{currentPage}</PageNumber> of{" "}
        <PageNumber>{totalPages}</PageNumber>
      </PageIndicator>
      <Button disabled={currentPage === 500 ? true : false || currentPage === 500? true:false}>
        <ButtonText>Next</ButtonText>
        <ForwardVector  disabled={currentPage === 500 ? true : false || currentPage === 500? true:false} />
      </Button>
      <Button  disabled={currentPage === 500 ? true : false || currentPage === 500? true:false}>
        <ButtonText>Last</ButtonText>
        <ForwardVector  disabled={currentPage === 500 ? true : false || currentPage === 500? true:false} />
        {isSmallScreen && (
          <ForwardVector disabled={currentPage === 500 ? true : false || currentPage === 500? true:false} />
        )}{" "}
      </Button>
    </Wrapper>
  );
};

export default Pagination;
