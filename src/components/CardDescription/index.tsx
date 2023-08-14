import React, {useMemo} from "react";
import { MovieModel } from "../../commom/models/movie.model";
import {useWindowDimensions, Pressable, Text} from 'react-native';


import { 
    CardContainer, 
    ContainerTitle, 
    TitleSection,
    TextTitle,
    TextSubtitle,
    ContainerImage, 
    MovieImage, 
    ContainerButtons, 
    WatchButton, 
    TextWatchButton, 
    FavoritesButton, 
    TextFavoritesButton,
} from "./styles";
import { CardDescriptionProps } from "./types";
import Spacer from "../Spacer";
import { useTheme } from "styled-components";
import Icon from "../Icon";

const CardDescription = ({id, title, urlImage, isFavorite, year}: CardDescriptionProps) => {

    const {spacing} = useTheme();

    return(
        <CardContainer>
            <ContainerTitle>
                <TitleSection>
                    <TextTitle>{title}</TextTitle>
                    <TextSubtitle>{year}</TextSubtitle>
                </TitleSection>
            </ContainerTitle>
            <Spacer height={spacing.sm} />
            <ContainerImage>
                <MovieImage source={{uri: urlImage}} resizeMode="contain" />
                <Spacer height={spacing.md}/>
                <ContainerButtons> 
                    <WatchButton onPress={() => null}>
                        <Icon icon="play" size={20}/>
                        <Spacer height={spacing.sm}/>
                        <TextWatchButton>Watch</TextWatchButton>
                    </WatchButton>
                    <FavoritesButton onPress={() => null}>
                        <Icon icon="plus" size={20}/>
                        <Spacer height={spacing.sm}/>
                        <TextFavoritesButton>Adicionar aos favoritos</TextFavoritesButton>
                    </FavoritesButton>
                </ContainerButtons>
            </ContainerImage>
        </CardContainer>
    )
}

export default CardDescription;