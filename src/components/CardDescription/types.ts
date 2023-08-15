import { MovieModel } from "../../commom/models/movie.model";

export interface CardDescriptionProps {
    id: string;
    title: string;
    urlImage: string;
    year: string;
    isFavorite: boolean;
    description: string;
    director: string;
    duration: string;
    addFavorites: (movie: MovieModel) => void;
    removeFavorites: (movieId: string) => void;
    movie: MovieModel;
    genre: string[];
    rating: number;
}