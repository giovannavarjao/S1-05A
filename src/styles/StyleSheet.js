import { StyleSheet } from 'react-native'



export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    fundo: {
        width: '100%',
        height: '100%'
    },

    image1: {
        width: 150,
        height: 150,
    },

    secondaryContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputName: {
        height: 90,
        backgroundColor: 'pink',
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        margin: 20,
    },

    LoginText: {
        textAlign: 'center',
    }
})

export default styles;