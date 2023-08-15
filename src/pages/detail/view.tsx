import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import Header from '../../components/header/header';
import React, { useEffect } from 'react'
import Spacer from '../../components/Spacer';
import { useTheme } from 'styled-components';
import { 
    Content,
    ContainerButtons,
    WatchButton,
    TextWatchButton,
    FavoritesButton,
    TextFavoritesButton,
    CardContainer
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
        favoritesMovies
    } = useDetailController({movie});


    const isFavorite = favoritesMovies[movie.imdbID];

    return (
        <Content>
            <Spacer height={spacing.md}/>
            <BackNavigation onPress={goBack}/>
            <Spacer height={spacing.md} />
            <CardContainer>
                <CardDescription
                    id = {movie.imdbId}
                    title={movie.Title} 
                    urlImage={movie.Poster} 
                    year = {movie.Year}
                    isFavorite = {isFavorite ? true : false}
                />
                <ContainerButtons> 
                    <WatchButton onPress={() => null}>
                        <Icon icon="play" size={20}/>
                        <Spacer height={spacing.sm}/>
                        <TextWatchButton>Watch</TextWatchButton>
                    </WatchButton>
                    <FavoritesButton onPress={() => {
                        isFavorite 
                            ?  removeFavoriteMovie(movie.imdbID)
                            :  addFavoriteMovie(movie)
                    }
                    }>
                        <Icon icon="plus" size={20}/>
                        <Spacer height={spacing.sm}/>
                        <TextFavoritesButton>{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</TextFavoritesButton>
                    </FavoritesButton>
                </ContainerButtons>
            </CardContainer>

            
        </Content>
    )
}

export default DetailView;
