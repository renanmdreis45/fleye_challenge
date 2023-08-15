import React, {useEffect, useMemo} from "react";
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
} from "./styles";
import { CardDescriptionProps } from "./types";
import Spacer from "../Spacer";
import { useTheme } from "styled-components";
import Icon from "../Icon";
import useFavoritesMovies from "../../commom/hooks/useFavoritesMovies";

const CardDescription = ({id, title, urlImage, year, isFavorite}: CardDescriptionProps) => {

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
                {isFavorite && <Icon icon="favorite" size={30} style={{position: 'absolute', zIndex: 1, right: 30, top: 10}}/>}
                <MovieImage source={{uri: urlImage}} resizeMode="contain" />
                <Spacer height={spacing.md}/>
            </ContainerImage>
        </CardContainer>
    )
}

export default CardDescription;