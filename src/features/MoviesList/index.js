import { useEffect, useState } from "react";
import { tmdbApi } from "../api/apiData";
import { MainContainer } from "../../common/MainContainer";

export const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState({});

  const getPopularMovie = async () => {
    const { data } = await tmdbApi.getPopularMoviesData();
    setMovies(data.results);
  };

  const getGenres = async () => {
    const { data } = await tmdbApi.getGenresData();
    setGenres(data.genres);
    console.log(data.genres);
  };

  useEffect(() => {
    getPopularMovie();
    getGenres();
  }, []);

  return (
    <MainContainer movies={movies}/>
  );
};
