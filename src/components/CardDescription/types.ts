import { MovieModel } from "../../commom/models/movie.model";

export interface CardDescriptionProps {
    id: string;
    title: string;
    urlImage: string;
    year: string;
    isFavorite: boolean;
}