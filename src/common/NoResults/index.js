import { MainContainer } from "../MainContainer";

export const NoResults = ({ search }) => {
  const searchQuery = "sample Query";

  return <MainContainer noResults={searchQuery} />;
};
