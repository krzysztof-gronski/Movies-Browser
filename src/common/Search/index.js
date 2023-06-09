import { useHistory, useLocation } from "react-router-dom";
import { Input } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import searchQueryParamName from "./searchQueryParamName";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { reloadPage } from "../Navigation/navigationSlice";
import { setQuery } from "../../features/MoviesList/moviesListSlice";

const Search = () => {
  const [x,setX]=useState("");
  const location = useLocation();
  //const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();
  const inputRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const onInputChange = ({ target }) => {
    setX(target.value);
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
      const query = target.value;
      //dispatch(setQuery({query}));
      dispatch(reloadPage({query}));
      //window.location.reload();
    } else {
      window.location="/people";
      //history.push(`/people?search=${target.value}&page=1`);
      //window.location.reload();
    }
  };

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, [query]);

  return (
    <Input
      ref={inputRef}
      onChange={onInputChange}
      value={x}
      placeholder={`Search for ${
        location.pathname.includes("/movie") ? "movies" : "people"
      }...`}
    />
  );
};

export default Search;
