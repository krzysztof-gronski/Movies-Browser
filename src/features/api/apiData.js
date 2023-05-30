import tmdb from "./tmdb";

export const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

export const tmdbApi = {
  getPopularMoviesData: (page) => {
    const url =
      `movie/popular?language=en-US&page=${page}`
    return tmdb.get(url);
  },
  getGenresData: () => {
    const url = "genre/movie/list?language=en";
    return tmdb.get(url);
  },
};
