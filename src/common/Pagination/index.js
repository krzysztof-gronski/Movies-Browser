import { useEffect, useState } from "react";
import { PageIndicator, PageNumber, Wrapper } from "./styled";
import Button from "./button";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../Search/queryParameters";

const Pagination = () => {
  const firstPage = 1;
  const totalPages = 500;

  const page = useQueryParameter("page");

  const [currentPage, setCurrentPage] = useState(1);

  const replaceQueryParameter = useReplaceQueryParameter();

  useEffect(() => {
    setCurrentPage(page || firstPage);
  }, [page]);

  const goToPage = (pageNumber) => {
    replaceQueryParameter({
      key: "page",
      value: pageNumber,
    });
  };

  return (
    <Wrapper>
      <Button
        text={"First"}
        align="left"
        onClick={() => goToPage(firstPage)}
        disabled={currentPage === 1 ? true : false}
      />
      <Button
        text={"Previous"}
        align="left"
        onClick={() => goToPage(+currentPage - 1)}
        disabled={currentPage === 1 ? true : false}
      />
      <PageIndicator>
        Page <PageNumber>{+currentPage}</PageNumber> of{" "}
        <PageNumber>{totalPages}</PageNumber>
      </PageIndicator>
      <Button
        text={"Next"}
        align="right"
        onClick={() => goToPage(+currentPage + 1)}
      />
      <Button
        text={"Last"}
        align="right"
        onClick={() => goToPage(totalPages)}
      />
    </Wrapper>
  );
};

export default Pagination;
