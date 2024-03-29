import { THE_MOVIE_DB_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    // api_key: 'a7b1892159d5f01da5aceb8640b8796c',
    api_key: THE_MOVIE_DB_KEY ?? 'no-key',
    language: 'es'
  }
});