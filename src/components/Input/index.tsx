import React from "react";
import {ActivityIndicator, Platform} from 'react-native';
import {useTheme} from 'styled-components/native';
import {AbsoluteLoading, Container, Content} from './styles';
import {InputProps} from './types';
import Icon from "../Icon";

const Input = ({loading, ...props}: InputProps) => {
    const {colors} = useTheme();

    return(
        <Content>
            <Icon style={{width: 25, position: 'absolute', zIndex: 1, marginLeft: 17}} icon="search" color='#BEBEBE' />
            <Container
                placeholder='Search'
                selectionColor={colors.backgroundColor}
                placeholderTextColor={colors.inputTextSearch}
                {...props}
            >
                {loading && (
                    <AbsoluteLoading>
                        <ActivityIndicator
                            size={Platform.OS === 'ios' ? 'small' : 'large'}
                            color={colors.secondary}
                        />
                    </AbsoluteLoading>
                )}
            </Container>
        </Content>
    )


}

export default Input;