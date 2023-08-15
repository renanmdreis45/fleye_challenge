import {Platform} from 'react-native';
import styled from 'styled-components/native';


export const Content = styled.SafeAreaView`
    flex: 5;
    backgroundColor: #111111;
    padding: 20px;
`;

export const ColumnCover = styled.View`
    flex-direction: row;
`;


export const ContainerButtons = styled.View`
    position: relative;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    height: 3%;
    flex: 0.5;
    margin-top: 25px;
    padding-horizontal: 10px;
`;

export const WatchButton = styled.Pressable`
    background-color: #FF6900;
    position: relative;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    width: 35%;
    padding: 10px;
`;

export const TextWatchButton = styled.Text`
    font-weight: 500;
    color: white;
    font-size: 14px;
`;

export const FavoritesButton = styled.Pressable`
    background-color: #111111;
    position: relative;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    width: 60%;
    padding-horizontal: 5px;
    border-color: white;
    border-width: 1px;
`;

export const TextFavoritesButton = styled.Text`
    color: white;
    font-weight: 500;
    font-size: 14px;
`;

export const CardContainer = styled.View`
    height: 90%;
`;