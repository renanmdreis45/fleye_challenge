import React   from "react";
import { 
    CardContainer, 
    ContainerTitle, 
    TitleSection,
    TextTitle,
    TextSubtitle,
    RatingSection,
    Rating,
    Span,
    ContainerImage, 
    MovieImage,
    ContainerButtons,
    WatchButton,
    TextWatchButton,
    FavoritesButton,
    TextFavoritesButton,
    ContainerDescription,
    TextDescription,
    TextDirector
} from "./styles";
import { CardDescriptionProps } from "./types";
import Spacer from "../Spacer";
import { useTheme } from "styled-components";
import Icon from "../Icon";

const CardDescription = ({id, title, urlImage, year, isFavorite, description, director, duration, removeFavorites, addFavorites, movie, genre, rating}: CardDescriptionProps) => {

    const {spacing} = useTheme();

    return(
        <CardContainer>
            <ContainerTitle>
                <TitleSection>
                    <TextTitle>{title}</TextTitle>
                    <TextSubtitle>{year} {duration ?  <Span> ● </Span> : ""} {duration}</TextSubtitle>
                </TitleSection>
                <RatingSection>
                    <Spacer width={spacing.md} />
                    <Icon icon="imdbIcon" size={30}/>
                    <Spacer width={spacing.md} />
                    <Rating>{rating}</Rating>
                </RatingSection>
            </ContainerTitle>
            <Spacer height={spacing.sm} />
            <ContainerImage>
                {isFavorite && <Icon icon="favorite" size={30} style={{position: 'absolute', zIndex: 1, right: 0, top: 0}}/>}
                <MovieImage source={{uri: urlImage}} resizeMode="contain" />
                <Spacer height={spacing.md}/>
            </ContainerImage>
            <Spacer height={spacing.md} />
            <ContainerButtons> 
                    <WatchButton onPress={() => null}>
                        <Icon icon="play" size={20}/>
                        <Spacer width={spacing.sm}/>
                        <TextWatchButton>Watch</TextWatchButton>
                    </WatchButton>
                    <FavoritesButton onPress={() => {
                        isFavorite 
                            ?  removeFavorites(id)
                            :  addFavorites(movie)
                    }
                    }>
                        <Icon icon="plus" size={20}/>
                        <Spacer width={spacing.sm}/>
                        <TextFavoritesButton>{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</TextFavoritesButton>
                    </FavoritesButton>
                </ContainerButtons>
            <ContainerDescription>
                <Spacer height={spacing.md}/>
                <TextDescription>
                    {genre?.map((g: string, index: number) => {
                        if(index != genre?.length - 1) {
                            return (
                                <TextDescription>{g}<Span> ● </Span></TextDescription>
                            )
                        } else {
                            return (
                                <TextDescription>{g}</TextDescription>
                            )
                        }
                    })}
                </TextDescription>
                <Spacer height={spacing.sm}/>
                <TextDescription>{director && <TextDirector>Director:</TextDirector>} {director}</TextDescription>
                <Spacer height={spacing.sm}/>
                <TextDescription>{description}</TextDescription>
            </ContainerDescription>
        </CardContainer>
    )
}

export default CardDescription;