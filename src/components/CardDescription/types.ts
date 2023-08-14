import { MovieModel } from "../../commom/models/movie.model";

export interface CardDescriptionProps {
    id: string;
    title: string;
    urlImage: string;
    isFavorite: boolean;
    year: string;
    addFavorites: (movie: MovieModel) => void;
    removeFavorites: (movie: MovieModel) => void;
}