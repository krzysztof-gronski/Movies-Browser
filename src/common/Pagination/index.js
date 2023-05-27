import { useState } from "react";
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

  const isSmallScreen = width < 767;
  const firstPage = 1;
  const previousPage = page - 1;
  const nextPage = page + 1;
  const lastPage = 500;
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
        disabled={page === 1 ? true : false}
      >
        <BackwardVector disabled={page === 1 ? true : false} />
        {isSmallScreen && (
          <BackwardVector disabled={page === 1 ? true : false} />
        )}
        <ButtonText>First</ButtonText>
      </Button>
      <Button
        onClick={() => goToPage(previousPage)}
        disabled={page === 1 ? true : false}
      >
        <BackwardVector disabled={page === 1 ? true : false} />
        <ButtonText>Previous</ButtonText>
      </Button>
      <PageIndicator>
        Page <PageNumber>{page}</PageNumber> of <PageNumber>{pages}</PageNumber>
      </PageIndicator>
      <Button
        onClick={() => goToPage(nextPage)}
        disabled={page === 500 ? true : false || page === 500 ? true : false}
      >
        <ButtonText>Next</ButtonText>
        <ForwardVector
          disabled={page === 500 ? true : false || page === 500 ? true : false}
        />
      </Button>
      <Button
        onClick={() => goToPage(lastPage)}
        disabled={page === 500 ? true : false || page === 500 ? true : false}
      >
        <ButtonText>Last</ButtonText>
        <ForwardVector
          disabled={page === 500 ? true : false || page === 500 ? true : false}
        />
        {isSmallScreen && (
          <ForwardVector
            disabled={
              page === 500 ? true : false || page === 500 ? true : false
            }
          />
        )}{" "}
      </Button>
    </Wrapper>
  );
};

export default Pagination;
