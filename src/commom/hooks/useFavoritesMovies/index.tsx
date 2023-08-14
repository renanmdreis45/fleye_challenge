import {useContext} from 'react';
import { FavoritesMoviesContext } from '../../contexts/FavoritesMovies';


const useFavoritesMovies = () => {
    const context = useContext(FavoritesMoviesContext);

    if(!context) {
        throw new Error(
            'useFavoritesMovies must be used within a FavoritesMoviesProvider',
        );
    }
    return context;

};

export default useFavoritesMovies;