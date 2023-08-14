import { MovieModel } from "../../../commom/models/movie.model";
import client from "../../api";
import { FetchMoviesByTextParams } from "./types";

export const fetchMoviesByText = async ({q}: FetchMoviesByTextParams) => {
    const {data} = await client.get(q + "&apikey=925eba28");

    const response = data.Search;
    return response;
}