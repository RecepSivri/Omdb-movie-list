import { apikey } from "../config";

export const searchMoviesService = (name: string, page: number) => {
  return fetch(
    "https://www.omdbapi.com/?s=" +
      name +
      "&apikey=" +
      apikey +
      "&page=" +
      page,
  );
};

export const getMovieById = (id: string) => {
  return fetch("https://omdbapi.com/?i=" + id + "&apikey=" + apikey);
};
