import React, {useState} from 'react';
import { MovieModel } from '../../models/movie.model';
import { FavoritesMoviesContextProps, FavoritesMoviesProps, FavoritesMoviesState } from './types';


export const FavoritesMoviesContext = 
    React.createContext<FavoritesMoviesContextProps>(
        {} as FavoritesMoviesContextProps,
    );

const FavoritesMovies = ({children}: FavoritesMoviesProps) => {

    const [favoritesMovies, setFavoritesMovies] = React.useState<FavoritesMoviesState>({});

    const addFavoriteMovie = (movie: MovieModel) => {
        setFavoritesMovies(prev => ({...prev, [movie.imdbID]: movie}));
    };

    const removeFavoriteMovie = (movieId: string) => {
        setFavoritesMovies(prevMovies => {
            if(prevMovies[movieId]) {
                delete prevMovies[movieId]
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