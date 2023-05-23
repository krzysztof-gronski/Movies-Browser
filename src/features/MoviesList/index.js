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
  };

  useEffect(() => {
    getPopularMovie();
    getGenres();
  }, []);

  console.log(movies);
  console.log(genres);

  return <MainContainer movies={movies} genres={genres} />;
};
