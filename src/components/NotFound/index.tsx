import React from "react";
import { useTheme } from "styled-components";
import Icon from "../Icon";
import Spacer from "../Spacer";
import {Text} from "react-native";


import { Container } from "./styles";
import { NotFoundProps } from "./types";

const NotFound = ({icon = 'noResults', title, color}: NotFoundProps) => {
    const {colors, spacing} = useTheme();

    return (
        <Container>
            <Icon icon={icon} size={100} color={color || colors.caption} />
            <Spacer height={spacing.md} />
            {!!title && (
                <Text style={{color: colors.caption, fontSize: 20}}>
                    {title}
                </Text>
            )}
        </Container>
    )
}

export default NotFound;