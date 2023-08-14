import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TextInput`
  font-size: 14px;
  border-radius: ${({theme}) => theme.borders.radius.small}px;
  background-color: ${({theme}) => theme.colors.backgroundColorSearch};
  color: ${({theme}) => theme.colors.caption};
  padding-left: ${Platform.OS === 'ios' ? '35px' : '50px'};
  padding-right: ${Platform.OS === 'ios' ? '35px' : '50px'};
  borderWidth: 0.3px;
  borderColor: #BEBEBE;
  align-items: center;
  height: 50%;
  width: 100%;
`;

export const Content = styled.View`
  flex-direction: 'row';
  align-items: 'center';
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const AbsoluteIcon = styled.View`
  position: absolute;
  left: ${({theme}) =>
    Platform.OS === 'ios' ? theme.spacing.sm : theme.spacing.md}px;
`;

export const AbsoluteLoading = styled.View`
  position: absolute;
  right: ${({theme}) =>
    Platform.OS === 'ios' ? theme.spacing.sm : theme.spacing.md}px;
`;