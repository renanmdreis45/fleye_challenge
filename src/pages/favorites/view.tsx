import { View, FlatList} from 'react-native';
import React from 'react';
import Header from '../../components/header/header';
import { 
    Container,
    HeaderContainer,
    HeaderTitle,
    FavoritesListContainer
 } from './styles';
import useFavoritesController from './controller';
import { useTheme } from 'styled-components';
import { flatListStyleSheet } from '../../commom/constants/utils/flatlist';
import Spacer from '../../components/Spacer';
import MovieCard from '../../components/MovieCard';
import NotFound from '../../components/NotFound';
import useMyNavigation from '../../commom/hooks/useMyNavigation';

const FavoriteView: React.FC = () => {

    const {navigate} = useMyNavigation();
    const {spacing} = useTheme();
    const {favoritesList, setSortedOrder, sortedOrder} = useFavoritesController();
    
    
    return (
        <Container>
            <Header />
            <HeaderContainer>
                <HeaderTitle>Your favorites</HeaderTitle>
            </HeaderContainer>
            <FavoritesListContainer>
            <FlatList
                    key={'list-movies'} 
                    data={favoritesList}
                    numColumns={3}
                    columnWrapperStyle={[
                        flatListStyleSheet.columnWrapperStyle,
                    ]}
                    ItemSeparatorComponent={() => <Spacer height={spacing.md} />}
                    renderItem={({ index, item }) => (
                        <MovieCard
                            key={index + item?.imdbID}
                            url={item?.Poster}
                            title={item.Title}
                            isFavorite={true}
                            onPress={() => navigate('Detail', { movie: item})}
                        />
                    )}
                    ListFooterComponent={() => {
                        return <Spacer height={spacing.md} />;
                    }}
                    ListEmptyComponent={() => {
                        if (!favoritesList?.length) {
                            return (
                                <View>
                                    <Spacer height={spacing.lg} />
                                    <NotFound
                                        icon="noResults"
                                        title={"You don't have favorite yet"}
                                    />
                                </View>
                            );
                        }

                        return null;
                    }}
                />
            </FavoritesListContainer>
        </Container>
    )
}

export default FavoriteView;
