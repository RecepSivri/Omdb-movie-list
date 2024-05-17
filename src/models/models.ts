export interface IMovieState {
  movies: any[];
  pageNum: number;
  total: number;
  error: string | null;
  loading: boolean;
}

export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface FetchMovieParams {
  name: string;
  page: number;
}

export interface ITableProps<T> {
  data: T[];
  pageNum: number;
  total: number;
  columns: IColumn[];
  changePage: (value: number) => void;
  pageListSize: number;
  notFoundText: string;
}

export interface IColumn {
  section?: string;
  header: string;
  template?: () => JSX.Element;
  width: string;
}

export interface IPaginationProps {
  pageNum: number;
  total: number;
  changePage: (value: number) => void;
  pageListSize: number;
}

export interface ISearchInput {
  value: string;
  setValue: (value: string) => void;
}

export interface FetchDetailParams {
  id: string;
}

export interface IMovieDetail {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: IRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface IRating {
  Source: string;
  Value: string;
}

export interface IDetailState {
  data: IMovieDetail;
  error: string | null;
  loading: boolean;
}
