import {useCallback, useEffect, useMemo, useState} from 'react';
import { UseDetailsController } from './types';
import useFavoritesMovies from '../../commom/hooks/useFavoritesMovies';
import { fetchMovieById } from '../../repositories/search/moviesByText/moviesByText.repository';

const useDetailController = ({movie}: UseDetailsController) => {

    const {favoritesMovies, addFavoriteMovie, removeFavoriteMovie} = useFavoritesMovies();
    const [movieInfo, setMovieInfo] = useState({
      diretor: "",
      description: "",
      duration: "",
      genre: [],
      rating: 0,
    })

    useEffect(() => {
      fetchMovieInfo();
    }, [])

    const fetchMovieInfo = useCallback( async () => {
        const response = await fetchMovieById({q: movie.imdbID});

        const genres = response.Genre.trim().split(',');
        console.log(response);
        setMovieInfo({
          diretor: response.Director && response.Director != "N/A" ? response.Director : "",
          description: response.Plot && response.Plot != "N/A" ? response.Plot : "",
          duration: response.Runtime && response.Runtime != "N/A" ? response.Runtime : "",
          genre: genres.length ? genres : [""],
          rating: response.imdbRating && response.imdbRating != "N/A" ? parseInt(response.imdbRating) : 0,
        })

    }, [])

  return {
    addFavoriteMovie,
    removeFavoriteMovie,
    favoritesMovies,
    movieInfo,
    setMovieInfo,
  };
};

export default useDetailController;