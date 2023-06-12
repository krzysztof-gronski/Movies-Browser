import { useHistory, useLocation } from "react-router-dom";
import { Input } from "./styled";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputDelay } from "../../features/MovieDetails/movieDetailsSlice";
import {
  selectPreviousPage,
  setInputQuery,
} from "../Navigation/navigationSlice";
import { personInputDelay } from "../../features/PersonDetails/personDetailsSlice";

const Search = () => {
  const location = useLocation();
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  let previousPage = useSelector(selectPreviousPage);

  const onInputChange = ({ target }) => {
    setQuery(target.value);

    if (location.pathname.includes("/movies")) {
      const inputQuery = target.value;
      dispatch(setInputQuery({ inputQuery }));
      history.push(`/movies?search=${target.value}&page=1`);
    } else if (location.pathname.includes("/movie/")) {
      dispatch(inputDelay({ inputRef }));
    } else if (location.pathname.includes("/people")) {
      const inputQuery = target.value;
      dispatch(setInputQuery({ inputQuery }));
      history.push(`/people?search=${target.value}&page=1`);
    } else if (location.pathname.includes("/person/")) {
      dispatch(personInputDelay({ inputRef }));
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [query]);

  useEffect(() => {
    inputRef.current.value = "";
    setQuery("");
  }, [previousPage]);

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
