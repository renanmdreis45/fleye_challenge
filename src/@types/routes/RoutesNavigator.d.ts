import { NavigatorScreenParams, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MovieModel } from "../../commom/models/movie.model";


declare global {
    export type RoutesParamList = {
        Home: {searchTitle: string};
        Search: {listMovies: MovieModel[], searchTitle: string};
        Detail: {movie: MovieModel};
    };


    export type RoutesStackNavigationProp = NativeStackNavigationProp<
        RoutesParamList
    >;

    export type SearchRouterProp = RouterProp<RoutesParamList, 'Search'>;
    export type DetailRouterProp = RouterProp<RoutesParamList, 'Detail'>;
}