import { useEffect } from "react";
import { Input } from "./styled";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "./queryParameters";
import searchQueryParamName from "./searchQueryParamName";
import { searchMoviesData, clearSearchResults } from "../../features/MoviesList/moviesListSlice";

const Search = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParam = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();
  const searchResults = useSelector((state) => state.moviesList.movies);

  const onInputChange = ({target}) => {
    const inputValue = target.value.trim();

    if (inputValue === "") {
      replaceQueryParameter({
        key: searchQueryParamName,
        value: undefined,
      });
    } else {
      replaceQueryParameter({
        key: searchQueryParamName,
        value: inputValue,
      });
    }
  };

  useEffect(() => {
    const searchMovies = async () => {
      if (queryParam) {
        dispatch(searchMoviesData(queryParam));
      } else {
        dispatch(clearSearchResults());
      }
    };

    searchMovies();
  }, [queryParam, dispatch]);

  return (
    <Input
      onChange={onInputChange}
      value={queryParam || ""}
      placeholder={`Search for ${
        location.pathname.includes("/movies") ? "movies" : "people"
      }...`}
    />
  );
};

export default Search;