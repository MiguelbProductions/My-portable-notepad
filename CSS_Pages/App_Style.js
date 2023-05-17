import { StyleSheet } from "react-native";

export default StyleSheet.create({
    Main: {
        height: "100%",
    },

    Annotation_Box: {
        paddingVertical: 10,

        borderBottomWidth: 1,
        borderColor: "lightgray",
    },

    Annotation_Title: {
        fontSize: 20,

        paddingLeft: 20
    },

    AddAnnotationButton: {
        position: "absolute",

        right: 20,
        bottom: 22,

        width: 55,
        height: 55,

        borderRadius: 35,

        backgroundColor: "rgb(0,100,180)"
    },

    AddAnnotationButtonText: {
        fontSize: 33,

        textAlign: "center",

        paddingTop: 3,

        color: "white",
    },
})