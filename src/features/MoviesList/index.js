import { useEffect, useState } from "react";
import { tmdbApi } from "../api/apiData";
import { MainContainer } from "../../common/MainContainer";

export const MoviesList = () => {
  const [genres, setGenres] = useState({});

  const getGenres = async () => {
    const { data } = await tmdbApi.getGenresData();
    setGenres(data.genres);
  };

  useEffect(() => {
    getGenres();
  }, []);

  return <MainContainer genres={genres} />;

};
