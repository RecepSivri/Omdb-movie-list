export interface IMovieState{
    movies: any[],
    pageNum: number,
    total: number,
    error: string | null,
    loading: boolean
}

export interface IMovie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface FetchMovieParams {
    name: string, page: number
}