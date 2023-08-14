import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

declare global {
    export type BottomTabParamList = {
        Home: undefined;
        Favorites: undefined;
    };

    export type HomeBottomTabNavigatorProps = BottomTabNavigationProp<
        BottomTabParamList,
        "Home"
    >
}