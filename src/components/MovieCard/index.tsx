import React, {memo, useMemo} from 'react';
import {Pressable, useWindowDimensions, Text} from 'react-native';
import {useTheme} from 'styled-components/native';
import Icon from '../Icon';
import Spacer from '../Spacer';

import {
  CenterIconAndImage,
  Container,
  CardImage,
  IconAbsolute,
} from './styles';
import {MovieCardProps} from './types';

const aspectRatio = 9 / 12.5;
const widthPercentage = 0.3;

const MovieCard = ({onPress, title, description, url, isFavorite}: MovieCardProps) => {

  const {width} = useWindowDimensions();
  const {colors, spacing} = useTheme();

  const widthShowCover = useMemo(() => {
    return width * widthPercentage;
  }, [width]);
  console.log(title);
  return (
    <Pressable
      onPress={onPress}
      accessibilityLabel={title}
      accessibilityRole="button">
      <Container width={widthShowCover}>
        <CenterIconAndImage>
          <CardImage
            hasBackground={!url}
            source={{uri: url}}
            resizeMode="contain"
            style={{
              aspectRatio: aspectRatio,
              width: widthShowCover,
            }}
          />

          {isFavorite && (
            <IconAbsolute>
              <Icon icon="favorites" size={20}  color='#F04438'/>
            </IconAbsolute>
          )}
        </CenterIconAndImage>
      </Container>
    </Pressable>
  );
};

export default memo(MovieCard);