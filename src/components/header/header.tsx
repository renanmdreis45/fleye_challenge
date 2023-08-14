import { View, Image} from "react-native";
import { styles } from "./styles";
import React from 'react';
import logo from "../../assets/images/logo.png"
export const Header: React.FC = () => {
    
    return (
        <View style={styles.header}>
            <View style={styles.logoHeader}>
                <Image source={logo}/>
            </View>
        </View>
    );

}




export default Header;