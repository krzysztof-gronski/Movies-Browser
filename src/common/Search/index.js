import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { Input } from "./styled";

const Search = () => {
  const location = useLocation()
  const query = (new URLSearchParams(location.search)).get("search");

  return (
    <Input 
  value={query || ""}
  placeholder={`Search for movies...`} 
  />
  )
};

export default Search;
