import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import { Input } from "./styled";
import searchQueryParamName from "./searchQueryParamName";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
const Search = () => {
  // const query = useQueryParameter("search");
  // const replaceQueryParameter = useReplaceQueryParameter();

  // const location = useLocation();

  // const onInputChange = ({ target }) => {
  //   if (target.value === "") {
  //     replaceQueryParameter({
  //       key: searchQueryParamName,
  //       value: "",
  //     });
  //   }
  //   replaceQueryParameter({
  //     key: searchQueryParamName,
  //     value: query === "" ? undefined : target.value,
  //   });
  // };

  return (
    <>
      <Input
        // onChange={onInputChange}
        placeholder={`search for movies`}
      />
    </>
  );
};

export default Search;
