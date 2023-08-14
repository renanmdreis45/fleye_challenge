import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {AppState, AppStateStatus} from "react-native";
import {createNativeStackNavigator,} from '@react-navigation/native-stack';
import { StackActions } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import useMyNavigation from '../../commom/hooks/useMyNavigation';
import HomeView from '../../pages/home/view';
import SearchView from '../../pages/search/view';


const HomeNavigator = () => {

    const Stack = createNativeStackNavigator();

    const {reset, getState, dispatch, addListener, removeListener, pop} = useMyNavigation();

    const [appState, setAppState] = useState<AppStateStatus>(
        AppState.currentState,
      );

    
    return (
        <Stack.Navigator initialRouteName='HomeNav' screenOptions={{ header: () => null}}>
            <Stack.Screen name="HomeNav" component={HomeView}/>
            <Stack.Screen name="SearchNav" component={SearchView}/>
        </Stack.Navigator>
    );

}

export default HomeNavigator;