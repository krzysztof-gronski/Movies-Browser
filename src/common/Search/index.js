import { useLocation, useHistory } from "react-router-dom";
import { Input } from "./styled";

const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get("search");

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);
    if (target.value === "") {
      searchParams.delete("search");
    } else {
      searchParams.set("search", target.value);
    }
    const newSearch = searchParams.toString();

    return history.push(`${location.pathname}?${newSearch}`);
  };

  return (
    <Input
      onChange={onInputChange}
      value={query || ""}
      placeholder={`Search for movies...`}
    />
  );
};

export default Search;
