import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    TextInput: {
        borderWidth: 2,
        borderColor: "#5F33E1",
        borderRadius: 10,
        paddingLeft: 15,
    },
    ModalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    ModalView: {
        width: '70%',
        margin: 20,
        borderColor: '#5F33E1',
        borderWidth: 2,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    ModalElements: {
        alignItems: 'stretch',
        gap: 20,
        width: '100%',
    },
    TimeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    TimeText: {
        color: "#5F33E1",
        fontWeight: 'bold',
        fontSize: 16
    },
    FinishButton: {
        marginTop: 50
    }
})