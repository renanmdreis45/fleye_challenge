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
    flex: 1.2;
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

export const Span = styled.Text`
    font-size: 14px;
    color: gray;
`;
export const TitleSection = styled.ScrollView`
    position: relative;
    flex-direction: column;
    width: 70%;
    height: 100%; 
`;

export const RatingSection = styled.View`
    background-color: #333333;
    align-items: center;
    flex-direction: row;
    position: relative;
    padding-horinzontal: 10px;
    height: 40%;
    width: 25%;
    border-radius: 50px;
    top: 0px;
    right: 0px;
`;

export const Rating = styled.Text`
    color: white;
    font-size: 12px;
    font-weight: 700;
`;

export const ContainerImage = styled.View`
    position: relative;
    flex: 4.3;
    flex-direction: column;
    z-index: 2;
`;

export const MovieImage = styled.Image`
    padding-horizontal: 10px;
    height: 100%;
    width: 100%;
`;


export const ContainerButtons = styled.View`
    position: relative;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    flex: 0.6;
    margin-top: 5px;
    padding-horizontal: 10px;
`;

export const WatchButton = styled.Pressable`
    background-color: #FF6900;
    flex-direction: row;
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
    flex-direction: row;
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

export const ContainerDescription = styled.ScrollView`
    flex: 3;
    flex-direction: column;
    margin-top: 5px;
    padding: 5px;
`;

export const TextDescription = styled.Text`
    color: white;
    font-size: 14px;
`;

export const TextDirector = styled.Text`
    font-weight: 700;
`;
