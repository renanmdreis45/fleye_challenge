import React from 'react';
import { useTheme } from 'styled-components';
import Icon from '../Icon';

import { Container } from './styles';
import { BackNavigationProps } from './types';

const BackNavigation = ({onPress}: BackNavigationProps) => {

    const {colors}= useTheme();

    return (
        <Container onPress={onPress} hitSlop={40}>
            <Icon icon="arrowLeft" color={colors.white} size={40}/>
        </Container>
    )
}

export default BackNavigation;