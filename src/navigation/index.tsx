import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {AppState, AppStateStatus} from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import useMyNavigation from '../commom/hooks/useMyNavigation';
import BottomTabNavigator from './bottomTabNavigator';
import Header from '../components/header/header';
import DetailView from '../pages/detail/view';
import HomeView from '../pages/home/view';
import SearchView from '../pages/search/view';

const Stack = createNativeStackNavigator();


const Routes = () => {

    return (
        <Stack.Navigator screenOptions={{ header: () => null}}>
            <Stack.Screen name="BottomTab" component={BottomTabNavigator}/>
            <Stack.Screen name="Detail" component={DetailView} />
        </Stack.Navigator>
    );

}

export default Routes;