import React, {useState} from 'react';
import { MovieModel } from '../../models/movie.model';
import { FavoritesMoviesContextProps, FavoritesMoviesProps, FavoritesMoviesState } from './types';


export const FavoritesMoviesContext = 
    React.createContext<FavoritesMoviesContextProps>(
        {} as FavoritesMoviesContextProps,
    );

const FavoritesMovies = ({children}: FavoritesMoviesProps) => {

    const [favoritesMovies, setFavoritesMovies] = useState<FavoritesMoviesState>({});

    const addFavoriteMovie = (movie: MovieModel) => {
        setFavoritesMovies(prevMovies => ({...prevMovies, [movie.imdbId]: movie}))
    };

    const removeFavoriteMovie = (movie: MovieModel) => {
        setFavoritesMovies(prevMovies => {
            if(prevMovies[movie.imdbId]) {
                delete prevMovies[movie.imdbId]
            }

            return {...prevMovies};
        });
    };


    return (
        <FavoritesMoviesContext.Provider
            value={{addFavoriteMovie, removeFavoriteMovie, favoritesMovies}}>
            {children}
        </FavoritesMoviesContext.Provider>
    );
};

export default FavoritesMovies;