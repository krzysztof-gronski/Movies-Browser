import { useLocation } from "react-router-dom";
import { Input } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import searchQueryParamName from "./searchQueryParamName";

const Search = () => {
  const location = useLocation();
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    if (target.value === "") {
      replaceQueryParameter({
        key: searchQueryParamName,
        value: "",
      });
    }
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <Input
      onChange={onInputChange}
      value={query || ""}
      placeholder={`Search for ${
        location.pathname.includes("/movies") ? "movies" : "people"
      }...`}
    />
  );
};

export default Search;
