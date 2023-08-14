import { SafeAreaView, Pressable, View, Text, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/header/header';
import { styles } from './styles';
import React from 'react';
import Input from '../../components/Input';
import { colors } from '../../commom/constants/styles/colors';
import useHomeController from './controller';
import Spacer from '../../components/Spacer';
import { useTheme } from 'styled-components/native';
import Icon from '../../components/Icon';
import homeBg from '../../assets/images/home_bg.png';
import useMyNavigation from '../../commom/hooks/useMyNavigation';

const HomeView: React.FC = () => {

    const {
        searchText,
        setSearchText,
        loading,
        handleSearchMovies
    } = useHomeController();

    const { colors, spacing } = useTheme();
    const {navigate} = useMyNavigation();
  


    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ImageBackground source={homeBg} style={{ position: 'relative', height: '100%' }}>
                <LinearGradient
                    colors={["#111111", "rgba(0,0,0,0)"]}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: '100%'
                    }}
                />
                <View>
                    <View style={styles.section}>
                        <View style={styles.containerContent}>
                            <View style={styles.containerHeader}>
                                <Text style={styles.header}>Unlimited movies and series</Text>
                            </View>
                            <View style={styles.containerSubtitle}>
                                <Text style={styles.subtitle}>Find your favorite movies and TV shows in one place!</Text>
                            </View>
                            <Spacer height={spacing.sm} />
                            <View style={styles.containerSearch}>
                                <Input loading={loading} onChangeText={setSearchText}/>
                                <Pressable style={styles.searchButton} onPress={() => handleSearchMovies(searchText)}>
                                    <Text style={styles.textButton}> Search </Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default HomeView;
