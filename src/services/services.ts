import { apikey } from "../config"

export const searchMoviesService = (name: string, page: number) => {
    return fetch('https://www.omdbapi.com/?s='+name+'&apikey='+apikey+'&page='+ page)
}