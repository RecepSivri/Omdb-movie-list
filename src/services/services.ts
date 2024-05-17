import { apikey } from "../config";

export const searchMoviesService = (
  name: string,
  page: number,
  year: string,
) => {
  const fetchValue =
    year === ""
      ? "https://www.omdbapi.com/?s=" +
        name +
        "&apikey=" +
        apikey +
        "&page=" +
        page
      : "https://www.omdbapi.com/?s=" +
        name +
        "&apikey=" +
        apikey +
        "&page=" +
        page +
        "&y=" +
        year;
  return fetch(fetchValue);
};

export const getMovieById = (id: string) => {
  return fetch("https://omdbapi.com/?i=" + id + "&apikey=" + apikey);
};
