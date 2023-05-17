import { StyleSheet } from "react-native";
import Constants from 'expo-constants'

export default StyleSheet.create({
    Main: {
        height: "100%",
    },

    TextBox: {
        marginVertical: 10,
        marginHorizontal: 5,
    },

    TextContent: {
        fontSize: 17,
    },

    TextNoContent: {
        fontSize: 17,
        opacity: 0.4
    },

    TextInput: {
        fontSize: 17,

        marginVertical: 10,
        marginHorizontal: 5,

        textAlignVertical: "top",
    },

    CreateButton: {
        position: "absolute",

        right: 20,
        bottom: 22,

        width: 55,
        height: 55,

        borderRadius: 35,

        backgroundColor: "rgb(0,100,180)"
    },

    CreateButton: {
        fontSize: 33,

        textAlign: "center",

        paddingTop: 3,

        color: "white",
    },

    ConfigButton: {
        position: "absolute",

        right: 20,
        bottom: 28,

        width: 85,
        height: 45,

        borderRadius: 35,

        backgroundColor: "rgb(0,100,180)"
    },

    ConfigButtonText: {
        fontSize: 20,

        textAlign: "center",

        paddingTop: 7,

        color: "white",
    }
})