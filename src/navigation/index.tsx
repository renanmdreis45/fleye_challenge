import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {AppState, AppStateStatus} from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import useMyNavigation from '../commom/hooks/useMyNavigation';
import BottomTabNavigator from './bottomTabNavigator';
import HomeView from '../pages/home/view';
import SearchView
 from '../pages/search/view';
import Header from '../components/header/header';
import HomeNavigator from './HomeNavigator/homeNavigator';
const Stack = createNativeStackNavigator();


const Routes = () => {


    return (
        <Stack.Navigator screenOptions={{ header: () => <Header />}}>
            <Stack.Screen name="BottomTab" component={BottomTabNavigator}/>
            <Stack.Screen name="Home" component={HomeNavigator}/>
        </Stack.Navigator>
    );

}

export default Routes;