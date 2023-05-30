import { tmdbApi } from "../api/apiData";

export const getMovies = async (page) => {
  try {
    const response = await tmdbApi.getPopularMoviesData(page);

    if (!response || !response.data) {
      throw new Error("Invalid response data");
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getGenres = async () => {
  try {
    const response = await tmdbApi.getGenresData();

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await tmdbApi.searchMoviesData(query);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
};