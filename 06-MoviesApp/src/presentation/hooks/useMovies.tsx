import { useEffect, useState } from "react"
import { Movie } from "../../core/entities/movie.entity"
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";

export const useMovies = () => {

  const [isLoading, setIsLoading] = useState( true )
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, [])
  
  const initialLoad = async () => {

    const [ nowPlayingMoviesPromise, upcomingMoviesPromise, topRatedPromise, popularPromise] = await Promise.all([
      UseCases.moviesNowPlayingUseCase( movieDBFetcher ),
      UseCases.moviesUpcomingUseCase( movieDBFetcher ),
      UseCases.moviesTopRatedUseCase( movieDBFetcher ),
      UseCases.moviesPopularUseCase( movieDBFetcher ),
    ]);


    setNowPlaying( nowPlayingMoviesPromise );
    setUpcoming( upcomingMoviesPromise );
    setTopRated( topRatedPromise );
    setPopular( popularPromise );
    
    setIsLoading( false );
  }


  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
  }
}
