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

    section: {
        position: 'relative',
        height: '40%',
        width: '100%',
        marginTop: 50,
        paddingHorizontal: 16,
    },

    containerContent: {
        position: 'relative',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },

    containerHeader: {
        padding: 5,
    },

    containerSubtitle: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    header: {
        color: '#FFFFFF',
        fontSize: 36,
    },

    subtitle: {
        color: '#FFFFFF',
        fontSize: 18,
    },

    containerSearch: {
        padding: 10,
        position: "relative",
        width: "100%",
        height: "100%",
    },

    searchButton: {
        backgroundColor: '#FF6900',
        position: 'relative',
        height: '40%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textButton: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    }

})