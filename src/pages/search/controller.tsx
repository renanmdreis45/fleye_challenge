import {useCallback, useEffect, useState} from 'react';
import { MovieModel } from '../../commom/models/movie.model';
import { fetchMoviesByText } from '../../repositories/search/moviesByText/moviesByText.repository';
import { useDebouncedCallback } from 'use-debounce';
import useMyNavigation from '../../commom/hooks/useMyNavigation';
const useSearchController = () => {


    const [movies, setMovies] = useState<Array<MovieModel>>([]);
    const [searchText, setSearchText] = useState<string>("");

    const handleSearchMovies = useCallback(async (search?: string) => {
        if(!search) {
            setMovies([]);
            return;
        }

        try {
            const response = await fetchMoviesByText({q: search});
            setMovies(response);
        } catch (error) {
            console.log(error);
        } 
    }, []);

    const debouncedSearchMovies = useDebouncedCallback(handleSearchMovies, 700);

    useEffect(() => {
        if(searchText.length === 0) {
            debouncedSearchMovies();
        }
    }, [debouncedSearchMovies, searchText.length])


    return {
        searchText,
        setSearchText,
        movies,
        setMovies,
        handleSearchMovies
    };
};

export default useSearchController;