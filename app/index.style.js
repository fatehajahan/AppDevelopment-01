const { StyleSheet } = require("react-native");

const style = StyleSheet.create({
    //container
    container: {
        flex: 1,
        padding: 20
    },
   
    // registration box
    registrationBox: {
        backgroundColor: "#EEEFE0",
        padding: 20,
        borderRadius: 8,
        elevation: 5, // shadowr jonno
    },
    regHeader: {
        color: "#131D4F",
        fontWeight: "bold",
        fontSize: 16
    },
    regName: {
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        borderRadius: 5,
        marginTop: 15,
    },

    //reg button
    regBtn: {
        backgroundColor: "#5459AC",
        padding: 7,
        marginTop: 20,
        borderRadius: 10
    }
})

export default style