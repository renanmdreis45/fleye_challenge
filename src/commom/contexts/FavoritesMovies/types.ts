import { MovieModel } from "../../models/movie.model";

export type FavoritesMoviesState = {[key: string] : MovieModel};

export interface FavoritesMoviesContextProps {
    addFavoriteMovie: (movie: MovieModel) => void;
    removeFavoriteMovie: (movie: MovieModel) => void;
    favoritesMovies: FavoritesMoviesState;
}

export interface FavoritesMoviesProps {
    children: React.ReactNode;
}
