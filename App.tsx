import HomeView from './src/pages/home/view';
import React from 'react'
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './src/commom/constants/styles/theme/defaultTheme';
import BottomTabNavigator from './src/navigation/bottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/navigation';
import Header from './src/components/header/header';
import FavoritesMovies from './src/commom/contexts/FavoritesMovies';
export default function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <FavoritesMovies>
          <Routes />
        </FavoritesMovies>
      </NavigationContainer>
    </ThemeProvider>
  );
}
