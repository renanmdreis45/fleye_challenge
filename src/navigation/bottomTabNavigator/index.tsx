import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";
import HomeView from "../../pages/home/view";
import Icon from "../../components/Icon";
import FavoriteView from "../../pages/favorites/view";
import HomeNavigator from '../HomeNavigator/homeNavigator';
import useMyNavigation from '../../commom/hooks/useMyNavigation';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
    const { colors } = useTheme();

    const {dispatch, reset} = useMyNavigation();
    
    return (
        <BottomTab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.active,
                tabBarInactiveTintColor: colors.caption,
                tabBarStyle: {
                    backgroundColor: colors.secondary,
                },
                unmountOnBlur: true,
                header: () => null
            }}
        >
            <BottomTab.Screen options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon icon="home" size={size} color={color} />
                )
            }}
                component={HomeNavigator}
                name="Home"
            />
            <BottomTab.Screen options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon icon="favorites" size={size} color={color} />
                )
            }}
                component={FavoriteView}
                name="Favorites"
            />
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigator;