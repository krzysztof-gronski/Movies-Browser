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
