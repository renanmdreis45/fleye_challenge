import { MovieModel } from "../../models/movie.model";

export type FavoritesMoviesState = {[key: string|number] : MovieModel};

export interface FavoritesMoviesContextProps {
    addFavoriteMovie: (movie: MovieModel) => void;
    removeFavoriteMovie: (movieId: string) => void;
    favoritesMovies: FavoritesMoviesState;
}

export interface FavoritesMoviesProps {
    children: React.ReactNode;
}
