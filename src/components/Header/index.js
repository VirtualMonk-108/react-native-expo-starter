import React from "react";
import { View, StyleSheet, TouchableOpacity, SafeAreaView, Platform, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ showBackButton }) => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.headerContainer}>
            <View style={styles.leftContainer}>
                {showBackButton && (
                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                )}
                <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="search" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Ionicons name="person-circle-outline" size={40} color="turquoise" />
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
      backgroundColor: '#fff', // Match the header background color
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Additional padding for Android to account for the status bar height
    },
    headerContainer: {
      height: 60, // You can adjust this height as needed
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 15,
    },
    leftContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconButton: {
      padding: 10,
    },
    // Removed logo style since we are now using the Logo component with width and height props
  });
  
  export default Header;