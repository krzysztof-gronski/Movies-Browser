import { useHistory, useLocation } from "react-router-dom";
import { Input } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import searchQueryParamName from "./searchQueryParamName";
import { useEffect, useRef } from "react";
import { moviesListReloadDebounce } from "../../features/MoviesList/moviesListSlice";
import { useDispatch } from "react-redux";
import { peopleListReloadDebounce } from "../../features/PeopleList/peopleListSlice";

const Search = () => {
  const location = useLocation();
  let query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();
  const inputRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();

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
      query = target.value;
      dispatch(moviesListReloadDebounce({query}));
      //window.location.reload();
    } else {
      history.push(`/people?search=${target.value}&page=1`);
      dispatch(peopleListReloadDebounce());
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
