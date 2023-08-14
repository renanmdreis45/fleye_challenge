import {useNavigation, useRoute} from '@react-navigation/native';
import { SafeAreaView, StyleSheet, View, FlatList, NativeSyntheticEvent, TextInputKeyPressEventData} from 'react-native';
import Header from '../../components/header/header';
import React, { useEffect } from 'react'
import { SearchBar } from 'react-native-screens';
import Input from '../../components/Input';
import { styles } from './styles';
import useHomeController from '../home/controller';
import Spacer from '../../components/Spacer';
import MovieCard from '../../components/MovieCard';
import { useTheme } from 'styled-components';
import { flatListStyleSheet } from '../../commom/constants/utils/flatlist';
import NotFound from '../../components/NotFound';
import useSearchController from './controller';
const SearchView: React.FC = () => {

    const { movies, setSearchText, searchText, handleSearchMovies, setMovies, loading} = useHomeController();
    const {spacing, colors} = useTheme();
    const {
        params: {searchTitle, listMovies},
      } = useRoute<SearchRouterProp>();
      
    const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        if(searchText.length > 4) {
            handleSearchMovies(searchText)
        } 
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerSearch}>
                <Input loading={loading} defaultValue={searchTitle} onChangeText={setSearchText} onKeyPress={(e) => handleKeyPress(e)} />
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
                            key={item?.imdbId}
                            url={item?.Poster}
                            title={item.Title}
                            description={"asasa"}
                            isFavorite={false}
                            // onPress={() => navigate('Detail', { show: item.show })}
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
