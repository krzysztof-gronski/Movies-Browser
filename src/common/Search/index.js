import { useHistory, useLocation } from "react-router-dom";
import { Input } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import searchQueryParamName from "./searchQueryParamName";
import { useEffect, useRef } from "react";

const Search = () => {
  const location = useLocation();
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();
  const inputRef = useRef(null);
  const history = useHistory();

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
    if (
      location.pathname.includes("/movies") ||
      location.pathname.includes("/movie")
    ) {
      history.push(`/movies?search=${target.value}&page=1`);
      //window.location.reload();
    } else {
      history.push(`/people?search=${target.value}&page=1`);
      //window.location.reload();
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [query]);

  return (
    <Input
      ref={inputRef}
      onChange={onInputChange}
      value={query || ""}
      placeholder={`Search for ${
        location.pathname.includes("/movie") ? "movies" : "people"
      }...`}
    />
  );
};

export default Search;
