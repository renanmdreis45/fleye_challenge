import { NavigatorScreenParams, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MovieModel } from "../../commom/models/movie.model";


declare global {
    export type RoutesParamList = {
        HomeNav: {searchTitle: string};
        SearchNav: {listMovies: MovieModel[], searchTitle: string};
    };


    export type RoutesStackNavigationProp = NativeStackNavigationProp<
        RoutesParamList
    >;

    export type SearchRouterProp = RouterProp<RoutesParamList, 'SearchNav'>;
}