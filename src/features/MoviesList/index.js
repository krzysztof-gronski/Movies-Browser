import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMoviesData } from "./moviesListSlice"
import { MainContainer } from "../../common/MainContainer";
import { tmdbApi } from "../api/apiData";
import { selectMovies, selectLoading, selectError } from "./moviesListSlice";

export const MoviesList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      try {
        const response = await tmdbApi.getGenresData();
        setGenres(response.data.genres);
      } catch (error) {
        console.error("Error getting genres:", error);
      }
    };

    getGenres();
  }, []);

  useEffect(() => {
    dispatch(getPopularMoviesData());
  }, [dispatch]);

  return (
    <MainContainer movies={movies} genres={genres} loading={loading} error={error} />
  );
};

export default MoviesList;