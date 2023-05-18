import { StyleSheet } from "react-native";
import Constants from 'expo-constants'

export default StyleSheet.create({

    Title_Box: {
        paddingVertical: 15,

        backgroundColor: "rgb(0, 135, 230)",
    },

    Title: {
        
        fontSize: 25,

        textAlign: "left",

        color: "#ffffff",

        width: "66%"
    },

    RowContainer: {
        flexDirection: "row",
        
        alignItems: "center",
    },

    LeftIcon: {
        width: 30,
        height: 30,

        marginLeft: 17,
        marginRight: 15,
    },

    SaveBox: {
        position: "absolute",

        right: 22,
    },

    SaveIcon: {

        width: 30,
        height: 30,
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
    }   
})