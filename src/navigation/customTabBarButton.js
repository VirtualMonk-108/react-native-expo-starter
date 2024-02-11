import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CustomTabBarButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.button}>
                <Ionicons name="add" size={40} color="#FFF" />
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        top: -30,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "turquoise",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    }
});

export default CustomTabBarButton;