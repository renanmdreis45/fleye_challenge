import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {AppState, AppStateStatus} from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import HomeView from '../../pages/home/view';
import SearchView from '../../pages/search/view';

const Stack = createNativeStackNavigator();


const HomeNav = () => {

    return (
        <Stack.Navigator screenOptions={{ header: () => null}}>
            <Stack.Screen name="Home" component={HomeView}/>
            <Stack.Screen name="Search" component={SearchView} />
        </Stack.Navigator>
    );

}

export default HomeNav;