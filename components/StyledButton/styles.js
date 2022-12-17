import { PermissionsAndroid, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10
    },
    button: {
        backgroundColor: 'green',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    text: {
        fontSize: 12,
        fontWeight: '500',
        textTransform: 'uppercase'
    }
})

export default styles;