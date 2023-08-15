import styled from 'styled-components/native';

export const CardContainer = styled.View`
    flex: 5;
    background-color: #111111;
    flex-direction: column;
    padding: 5px;
    margin-top: 30px;
`;

export const ContainerTitle = styled.View`
    position: relative;
    flex: 0.7;
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
    flex: 4.3;
    flex-direction: column;
    z-index: 2;
`;

export const MovieImage = styled.Image`
    padding-horizontal: 10px;
    height: 100%;
    width: 100%;
`;

