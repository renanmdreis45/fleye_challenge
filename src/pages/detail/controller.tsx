import {useEffect, useMemo, useState} from 'react';
import { UseDetailsController } from './types';
import useFavoritesMovies from '../../commom/hooks/useFavoritesMovies';

const useDetailController = ({movie}: UseDetailsController) => {

    const {favoritesMovies, addFavoriteMovie, removeFavoriteMovie} = useFavoritesMovies();


  return {
    addFavoriteMovie,
    removeFavoriteMovie,
    favoritesMovies
  };
};

export default useDetailController;