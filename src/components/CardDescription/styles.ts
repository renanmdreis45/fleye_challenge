import styled from 'styled-components/native';

export const CardContainer = styled.View`
    flex: 10;
    background-color: #111111;
    flex-direction: column;
    padding: 5px;
    margin-top: 30px;
`;

export const ContainerTitle = styled.View`
    position: relative;
    flex: 0.9;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
`;

export const TextTitle = styled.Text`
    color: white;
    font-weight: 600;
    font-size: 18px;
`;

export const TextSubtitle = styled.Text`
    color: white;
    font-size: 14px;
    font-weight: 300;
`;

export const TitleSection = styled.View`
    position: relative;
    flex-direction: column;
    justify-content: space-between;
`;

export const ContainerImage = styled.View`
    position: relative;
    flex: 7;
    flex-direction: column;
`;

export const MovieImage = styled.Image`
    padding-horizontal: 10px;
    height: 80%;
    width: 100%;
`;

export const ContainerButtons = styled.View`
    position: relative;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    height: 12%;
    margin-top: 10px;
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
    border-width: 1px;
    border-color: white;
    width: 60%;
    padding-horizontal: 5px;
`;

export const TextFavoritesButton = styled.Text`
    color: white;
    font-weight: 500;
    font-size: 14px;
`;
