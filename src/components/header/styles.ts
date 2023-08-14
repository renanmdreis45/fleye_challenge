import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header : {
        display: 'flex',
        marginTop: 30,
        alignItems: 'center',
        flexDirection: 'row',
        height: 72,
        width: '100%',
        backgroundColor: '#111111',
    },
    
    logoHeader: {
        position: 'relative',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        height: 24,
        width: '100%'
    },

    logo: {
        position: 'relative',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
