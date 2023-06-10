import { useHistory, useLocation } from "react-router-dom";
import { Input } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import searchQueryParamName from "./searchQueryParamName";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { reloadPage, setQuery } from "../Navigation/navigationSlice";

const Search = () => {
  const [x,setX]=useState(localStorage.getItem("query"));
  const location = useLocation();
  //const queryURL = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();
  const inputRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  //if(queryURL)setX(queryURL);

  const onInputChange = ({ target }) => {
    setX(target.value);

    // if (target.value === "") {
    //   replaceQueryParameter({
    //     key: searchQueryParamName,
    //     value: "",
    //   });
    // }
    // replaceQueryParameter({
    //   key: searchQueryParamName,
    //   value: target.value.trim() !== "" ? target.value : undefined,
    // });
    if (
      location.pathname.includes("/movies") ||
      location.pathname.includes("/movie")
    ) {
      //history.push(`/movies?search=${target.value}&page=1`);

      let newURL=`http://localhost:3001/#/movies?search=${target.value}&page=1`;
      
      //window.location.reload();
      //window.history.pushState('page2', 'Title', '/people');
      const query = target.value;
      //localStorage.setItem("query",query);
      dispatch(setQuery({query}));
      dispatch(reloadPage({newURL}));
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
