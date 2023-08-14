import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import Header from '../../components/header/header';
import React from 'react'
import Spacer from '../../components/Spacer';
import { useTheme } from 'styled-components';
import { Content } from './styles';
import BackNavigation from '../../components/BackNavigation';
import { useNavigation, useRoute } from '@react-navigation/native';
import CardDescription from '../../components/CardDescription';
import useDetailController from './controller';
import { MovieModel } from '../../commom/models/movie.model';

const DetailView: React.FC = () => {

    const {spacing, colors} = useTheme();

    const {goBack} = useNavigation();



    const {
        params: {movie},
      } = useRoute<DetailRouterProp>();

    const {
        addFavoriteMovie,
        removeFavoriteMovie,
        favoritesMovies
    } = useDetailController({movie});

    console.log(movie);
    return (
        <Content>
            <Spacer height={spacing.md}/>
            <BackNavigation onPress={goBack}/>
            <Spacer height={spacing.md} />
            <CardDescription
                id = {movie.imdbId}
                title={movie.Title} 
                urlImage={movie.Poster} 
                type={movie.Type}
                year = {movie.Year}
            />
        </Content>
    )
}

export default DetailView;
