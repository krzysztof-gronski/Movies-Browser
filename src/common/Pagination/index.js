import { useEffect, useState } from "react";
import {
  PageIndicator,
  PageNumber,
  Wrapper,
  Button,
  ButtonText,
} from "./styled";
import { useReplaceQueryParameter } from "../Search/queryParameters";
import { BackwardVector, ForwardVector } from "./arrows";

const Pagination = ({ page, totalPages }) => {
  const replaceQueryParameter = useReplaceQueryParameter();
  const [width, setWidth] = useState(window.innerWidth);
  window.onresize = () => setWidth(window.innerWidth);

  const currentPage = parseInt(page);
  const isSmallScreen = width < 767;
  const firstPage = 1;
  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const lastPage = totalPages;
  const pages = totalPages > 500 ? 500 : totalPages;

  const goToPage = (targetPage) => {
    replaceQueryParameter({
      key: "page",
      value: targetPage,
    });
  };

  return (
    <Wrapper>
      <Button
        onClick={() => goToPage(firstPage)}
        disabled={currentPage === 1 ? true : false}
      >
        <BackwardVector disabled={currentPage === 1 ? true : false} />
        {isSmallScreen && (
          <BackwardVector disabled={currentPage === 1 ? true : false} />
        )}
        <ButtonText>First</ButtonText>
      </Button>
      <Button
        onClick={() => goToPage(previousPage)}
        disabled={currentPage === 1 ? true : false}
      >
        <BackwardVector disabled={currentPage === 1 ? true : false} />
        <ButtonText>Previous</ButtonText>
      </Button>
      <PageIndicator>
        Page <PageNumber>{currentPage}</PageNumber> of{" "}
        <PageNumber>{pages}</PageNumber>
      </PageIndicator>
      <Button
        onClick={() => goToPage(nextPage)}
        disabled={
          currentPage === totalPages
            ? true
            : false || currentPage === totalPages
            ? true
            : false
        }
      >
        <ButtonText>Next</ButtonText>
        <ForwardVector
          disabled={
            currentPage === totalPages
              ? true
              : false || currentPage === totalPages
              ? true
              : false
          }
        />
      </Button>
      <Button
        onClick={() => goToPage(lastPage)}
        disabled={
          currentPage === totalPages ? true : false || page === totalPages ? true : false
        }
      >
        <ButtonText>Last</ButtonText>
        <ForwardVector
          disabled={
            currentPage === totalPages
              ? true
              : false || currentPage === totalPages
              ? true
              : false
          }
        />
        {isSmallScreen && (
          <ForwardVector
            disabled={
              currentPage === totalPages
                ? true
                : false || currentPage === totalPages
                ? true
                : false
            }
          />
        )}{" "}
      </Button>
    </Wrapper>
  );
};

export default Pagination;
