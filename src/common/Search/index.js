import { useHistory, useLocation } from "react-router-dom";
import { Input } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import searchQueryParamName from "./searchQueryParamName";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { inputDelay } from "../../features/MovieDetails/movieDetailsSlice";
import { setInputQuery, setInputRef } from "../Navigation/navigationSlice";

const Search = () => {
  const location = useLocation();
  //const query = useQueryParameter(searchQueryParamName);
  const [query, setQuery] = useState("");
  const replaceQueryParameter = useReplaceQueryParameter();
  const inputRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();

  //console.log(inputRef);
  // if (inputRef) {
  //   dispatch(setInputRef(inputRef ));
  // }

  const onInputChange = ({ target }) => {
    setQuery(target.value);
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
    if (location.pathname.includes("/movies")) {
      const inputQuery = target.value;
      dispatch(setInputQuery({ inputQuery, inputRef }));
      //dispatch(setInputQuery({ inputQuery, inputRef }));
      history.push(`/movies?search=${target.value}&page=1`);
    } else if (location.pathname.includes("/movie/")) {
      dispatch(inputDelay({ inputRef }));
    } else {
      history.push(`/people?search=${target.value}&page=1`);
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
