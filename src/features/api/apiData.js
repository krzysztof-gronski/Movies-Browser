import tmdb from "./tmdb";

export const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
export const BACK_IMAGE_PATH = "https://image.tmdb.org/t/p/original";
const API_KEY = "f864c444928645f66814d9fbaba37ee6";

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

export const searchMovie = async (query,page) => {
  const url = `search/movie?language=en-US&query=${query}&include_adult=false&page=${page}`;
  const response = await tmdb.get(url);

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.data;
};

export const getMovieDetails = async (movieId) => {
  // In case of problems with the data request, the code with api_key
  // `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  //const url = `movie/${movieId}?language=en-US`;
  const url = `movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  const response = await tmdb.get(url);
  if (!response || !response.data) {
    throw new Error("Invalid response data");
  }
  return await response.data;
};

export const getMovieCredits = async (movieId) => {
  try {
    // `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    const url = `movie/${movieId}/credits?language=en-US`;
    const response = await tmdb.get(url);

    if (!response || !response.data) {
      throw new Error("Invalid response data");
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getPeople = async (page) => {
  try {
    const url = `person/popular?language=en-US&page=${page}`;
    const response = await tmdb.get(url);

    if (!response || !response.data) {
      throw new Error("Invalid getPeople response data");
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getPersonDetails = async (personId) => {
  try {
    const url = `person/${personId}?language=en-US&api_key=${API_KEY}`;
    const response = await tmdb.get(url);

    if (!response || !response.data) {
      throw new Error("Invalid response data");
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getPersonCredits = async (personId) => {
  try {
    const url = `person/${personId}/movie_credits?language=en-US&api_key=${API_KEY}`;
    const response = await tmdb.get(url);

    if (!response || !response.data) {
      throw new Error("Invalid response data");
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const searchPerson = async (query) => {
  const url = `search/person?language=en-US&query=${query}&include_adult=false`;
  const response = await tmdb.get(url);

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.data;
};
