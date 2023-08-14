import {useCallback, useEffect, useState} from 'react';
import { MovieModel } from '../../commom/models/movie.model';
import { fetchMoviesByText } from '../../repositories/search/moviesByText/moviesByText.repository';
import { useDebouncedCallback } from 'use-debounce';
import useMyNavigation from '../../commom/hooks/useMyNavigation';
import useSearchController from '../search/controller';
const useHomeController = () => {

    const [movies, setMovies] = useState<MovieModel[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string>("");
    const {navigate, getState} = useMyNavigation();
    

    const handleSearchMovies = useCallback(async (search?: string) => {
        if(!search) {
            setMovies([]);
            return;
        }

        try { 
            //setLoading(true);
            let response = await fetchMoviesByText({q: search}); 
            setMovies([...response]);
            if(getState().index === 0) {
                navigate('SearchNav', {listMovies: response, searchTitle: search as string}); 
            } 
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }, []);

    const debouncedSearchMovies = useDebouncedCallback(handleSearchMovies, 700);

    useEffect(() => {
        if(searchText.length === 0) {
            debouncedSearchMovies();
        }
    }, [debouncedSearchMovies, searchText.length])


    return {
        movies,
        setMovies,
        searchText,
        setSearchText,
        loading,
        handleSearchMovies,
    };
};

export default useHomeController;