import { StyleSheet } from "react-native"
import homeBg from '../../assets/images/home_bg.png';

export const styles = StyleSheet.create({
    container: {
        margin: 'auto',
        flex: 1,
        backgroundColor: '#111111',
        height: 'auto',
        width: 'auto',
    },

    containerSearch: {
        width: '100%',
        height: '15%',
        marginTop: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    
    moviesList: {
        paddingHorizontal: 15,
        paddingVertical: 5,
    }

})