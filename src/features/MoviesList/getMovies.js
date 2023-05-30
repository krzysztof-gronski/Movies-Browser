import { tmdbApi } from "../api/apiData";

export const getMovies = async (page) => {
  try {
    const response = await tmdbApi.getPopularMoviesData(page);
    console.log(response.data);

    if (!response || !response.data) {
      throw new Error("Invalid response data");
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
