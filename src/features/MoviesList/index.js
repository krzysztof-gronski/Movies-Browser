import { useEffect, useState } from "react";
import { tmdbApi } from "../api/apiData";
import { MainContainer } from "../../common/MainContainer";

export const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState({});
  const [page, setPage] = useState();
  const [totalPages, setTotalPages] = useState();

  const getPopularMovie = async () => {
    const { data } = await tmdbApi.getPopularMoviesData();
    setMovies(data.results);
  };
  const getPage = async () => {
    const { data } = await tmdbApi.getPopularMoviesData();
    setPage(data.page);
  };
  const getTotalPages = async () => {
    const { data } = await tmdbApi.getPopularMoviesData();
    setTotalPages(data.total_pages);
  };

  const getGenres = async () => {
    const { data } = await tmdbApi.getGenresData();
    setGenres(data.genres);
  };

  useEffect(() => {
    getPopularMovie();
    getGenres();
    getPage();
    getTotalPages();
  }, []);

  return (
    <MainContainer
      totalPages={totalPages}
      page={page}
      movies={movies}
      genres={genres}
    />
  );
};
