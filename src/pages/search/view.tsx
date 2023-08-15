import {useNavigation, useRoute} from '@react-navigation/native';
import { SafeAreaView, StyleSheet, View, FlatList, NativeSyntheticEvent, TextInputKeyPressEventData} from 'react-native';
import Header from '../../components/header/header';
import React, { useEffect } from 'react'
import { SearchBar } from 'react-native-screens';
import Input from '../../components/Input';
import { styles } from './styles';
import Spacer from '../../components/Spacer';
import MovieCard from '../../components/MovieCard';
import { useTheme } from 'styled-components';
import { flatListStyleSheet } from '../../commom/constants/utils/flatlist';
import NotFound from '../../components/NotFound';
import useSearchController from './controller';
import useMyNavigation from '../../commom/hooks/useMyNavigation';
const SearchView: React.FC = () => {

    const { movies, setSearchText, searchText, loading} = useSearchController();
    const {navigate} = useMyNavigation();
    const {spacing, colors} = useTheme();
    const {
        params: {searchTitle},
      } = useRoute<SearchRouterProp>();
    
    useEffect(() => {
        setSearchText(searchTitle);
    }, [])

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.containerSearch}>
                <Input loading={loading} defaultValue={searchTitle} onChangeText={setSearchText} returnKeyType='done'/>
            </View>
            <View style={styles.moviesList}>
                <FlatList
                    key={'list-movies'} 
                    data={movies}
                    numColumns={3}
                    columnWrapperStyle={[
                        flatListStyleSheet.columnWrapperStyle,
                        { paddingTop: spacing.md },
                    ]}
                    ItemSeparatorComponent={() => <Spacer height={spacing.md} />}
                    renderItem={({ index, item }) => (
                        <MovieCard
                            key={index + item?.imdbID}
                            url={item?.Poster}
                            title={item.Title}
                            isFavorite={false}
                            onPress={() => navigate('Detail', { movie: item})}
                        />
                    )}
                    ListFooterComponent={() => {
                        return <Spacer height={spacing.md} />;
                    }}
                    ListEmptyComponent={() => {
                        if (!searchText.length) {
                            return (
                                <View>
                                    <Spacer height={spacing.lg} />
                                    <NotFound
                                        icon="noResults"
                                        title={'Search for a movie'}
                                    />
                                </View>
                            );
                        }

                        return null;
                    }}
                />
            </View>
        </View>
    )
}

export default SearchView;
