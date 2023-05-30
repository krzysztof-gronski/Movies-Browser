import tmdb from "./tmdb";

export const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

export const getMovies = async (page) => {
  try {
    const url = `movie/popular?language=en-US&page=${page}`;
    const response = await tmdb.get(url);

    if (!response || !response.data) {
      throw new Error("Invalid getMovies response data");
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getGenres = async () => {
  try {
    const url = "genre/movie/list?language=en";
    const response = await tmdb.get(url);

    return response.data.genres;
  } catch (error) {
    console.error(error);
  }
};

export const searchMovies = async (query) => {
  try {
    const url = `search/movie?language=en-US&query=${query}&page=1&include_adult=false`;
    const response = await tmdb.get(url);

    if (!response.data) {
      throw new Error("Invalid searchMovies response data");
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
};