import { apiKey } from "../MoviesList/key";

export const getPopularPeople = async (page) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=en-US&page=${page}`
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
