import React, {memo, useMemo} from 'react';
import {Pressable, useWindowDimensions, Text} from 'react-native';
import {useTheme} from 'styled-components/native';
import Icon from '../Icon';
import Spacer from '../Spacer';

import {
  CenterIconAndImage,
  Container,
  CardImage,
} from './styles';
import {MovieCardProps} from './types';

const aspectRatio = 9 / 12.5;
const widthPercentage = 0.3;

const MovieCard = ({onPress, title, url, isFavorite}: MovieCardProps) => {

  const {width} = useWindowDimensions();

  const widthShowCover = useMemo(() => {
    return width * widthPercentage;
  }, [width]);
  
  return (
    <Pressable
      onPress={onPress}
      accessibilityLabel={title}
      accessibilityRole="button">
      <Container width={widthShowCover}>
        <CenterIconAndImage>
          {isFavorite && (
              <Icon icon="favorite" size={20} style={{position: 'absolute', zIndex: 1, right: 10, top: 5}}/>
          )}
          <CardImage
            hasBackground={!url}
            source={{uri: url}}
            resizeMode="contain"
            style={{
              aspectRatio: aspectRatio,
              width: widthShowCover,
            }}
          />
        </CenterIconAndImage>
      </Container>
    </Pressable>
  );
};

export default memo(MovieCard);