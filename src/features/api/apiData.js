import tmdb from "./tmdb";

export const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

export const tmdbApi = {
  getPopularMoviesData: () => {
    const url =
      "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
    return tmdb.get(url);
  },
  getGenresData: () => {
    const url = "genre/movie/list?language=en";
    return tmdb.get(url);
  },
};
