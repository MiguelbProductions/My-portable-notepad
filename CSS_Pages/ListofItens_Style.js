import { StyleSheet } from "react-native";

export default StyleSheet.create({
    Main: {
        height: "100%",
    },

    Itens_Box: {
        paddingVertical: 10,

        borderBottomWidth: 1,
        borderColor: "lightgray",
    },

    Itens_Title: {
        fontSize: 20,

        paddingLeft: 20
    },

    AddNewItemButton: {
        position: "absolute",

        right: 20,
        bottom: 22,

        width: 55,
        height: 55,

        borderRadius: 35,

        backgroundColor: "rgb(0,100,180)"
    },

    AddNewItemText: {
        fontSize: 33,

        textAlign: "center",

        paddingTop: 3,

        color: "white",
    },

    AnnotationOptionButton: {
        position: "absolute",

        justifyContent: 'center',

        paddingLeft: 3,

        right: 28,
        bottom: 140,

        width: 40,
        height: 40,

        borderRadius: 35,

        backgroundColor: "rgb(0,100,180)"
    },

    TaskOptionButton: {
        position: "absolute",

        justifyContent: 'center',

        right: 28,
        bottom: 90,

        width: 40,
        height: 40,

        borderRadius: 35,
        backgroundColor: "rgb(0,100,180)",
    },

    OptionImage: {
        width: 25,
        height: 25,    

        alignSelf: 'center',

        marginBottom: 2,
    },
    
    Title_Box: {
        paddingVertical: 15,

        backgroundColor: "rgb(0, 135, 230)",
    },

    Title: {
        fontSize: 25,

        marginLeft: 25,

        width: "75%",

        color: "#ffffff",
    },

    SearchBox: {
        position: "absolute",

        top: "50%",
        right: 25
    },

    SearchButton: {
        width: 28,
        height: 28,
    }
}); 