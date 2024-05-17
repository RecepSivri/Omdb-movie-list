import { apikey } from "../config";

export const searchMoviesService = (
  name: string,
  page: number,
  year: string,
  type: string,
) => {
  let fetchValue =
    "https://www.omdbapi.com/?s=" +
    name +
    "&apikey=" +
    apikey +
    "&page=" +
    page;

  if (year !== "") {
    fetchValue += "&y=" + year;
  }

  if (type !== "") {
    fetchValue += "&type=" + type;
  }

  return fetch(fetchValue);
};

export const getMovieById = (id: string) => {
  return fetch("https://omdbapi.com/?i=" + id + "&apikey=" + apikey);
};
