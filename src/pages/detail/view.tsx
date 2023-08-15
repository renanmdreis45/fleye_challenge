import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import Header from '../../components/header/header';
import React, { useEffect } from 'react'
import Spacer from '../../components/Spacer';
import { useTheme } from 'styled-components';
import { 
    Content,
} from './styles';
import BackNavigation from '../../components/BackNavigation';
import { useNavigation, useRoute } from '@react-navigation/native';
import CardDescription from '../../components/CardDescription';
import useDetailController from './controller';
import { MovieModel } from '../../commom/models/movie.model';
import Icon from '../../components/Icon';

const DetailView: React.FC = () => {

    const {spacing, colors} = useTheme();

    const {goBack} = useNavigation();



    const {
        params: {movie},
      } = useRoute<DetailRouterProp>();

    const {
        addFavoriteMovie,
        removeFavoriteMovie,
        favoritesMovies,
        movieInfo,
        setMovieInfo
    } = useDetailController({movie});


    const isFavorite = favoritesMovies[movie.imdbID];

    return (
        <Content>
            <Spacer height={spacing.md}/>
            <BackNavigation onPress={goBack}/>
            <Spacer height={spacing.md} />
            <CardDescription
                id = {movie.imdbID}
                title={movie.Title} 
                urlImage={movie.Poster} 
                year = {movie.Year}
                isFavorite = {isFavorite ? true : false}
                director={movieInfo?.diretor}
                description={movieInfo.description}
                duration={movieInfo.duration}
                addFavorites={addFavoriteMovie}
                removeFavorites={removeFavoriteMovie}
                movie={movie}
                genre={movieInfo.genre}
                rating={movieInfo.rating}
            />
        </Content>
    )
}

export default DetailView;
