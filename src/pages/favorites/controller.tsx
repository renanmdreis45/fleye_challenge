import {useMemo, useState} from 'react';
import useFavoritesMovies from '../../commom/hooks/useFavoritesMovies';
import { MovieModel } from '../../commom/models/movie.model';
import { SortedBy } from '../../commom/constants/utils/sort';

const useFavoritesController = () => {

    const {favoritesMovies} = useFavoritesMovies();
    const [sortedOrder, setSortedOrder] = useState<SortedBy>('asc');

    const favoritesList = useMemo<Array<MovieModel>>(() => {
        if(favoritesMovies?.length && Object.keys(favoritesMovies).length) {
            return Object.values(favoritesMovies).sort((a, b) => {
                if(sortedOrder === 'asc') {
                    return a.Title.localeCompare(b.Title);
                } else {
                    return b.Title.localeCompare(b.Title)
                }
            })
        }
        return [];
    }, [favoritesMovies, sortedOrder])

    return {favoritesList, sortedOrder, setSortedOrder};
}

export default useFavoritesController;