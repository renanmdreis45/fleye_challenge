import { MovieModel } from "../../../commom/models/movie.model";
import client from "../../api";
import { FetchMoviesByTextParams } from "./types";

export const fetchMoviesByText = async ({q}: FetchMoviesByTextParams) => {
    const params = {
        apikey: '925eba28',
        s: q,
    }
    const {data} = await client.get('',{params});
    const response = data.Search;
    return response;
}

export const fetchMovieById = async ({q}: FetchMoviesByTextParams) => {
    const params = {
        apikey: '925eba28',
        i: q,
    }
    const {data} = await client.get('',{params});
    const response = data;
    return response;
}