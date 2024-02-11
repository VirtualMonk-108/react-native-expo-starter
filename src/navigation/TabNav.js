import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Activity from "../screens/Activity";
import Orders from "../screens/Orders";
import Dashboard from "../screens/Dashboard";


import CustomTabBarButton from "./customTabBarButton";

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let iconComponent = Ionicons; // Default icon set

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Activity') {
                        iconName = focused ? 'graph' : 'graph-outline';
                        iconComponent = MaterialCommunityIcons; // Use MaterialCommunityIcons for  icons
                    } else if (route.name === 'Orders') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    } else if (route.name === 'Dashboard') {
                        iconName = focused ? 'trophy' : 'trophy-outline';
                        iconComponent = MaterialCommunityIcons; // Use MaterialCommunityIcons for  icons
                    }

                    // You can return any component that you like here!
                    return React.createElement(iconComponent, { name: iconName, size, color });
                },
                tabBarActiveTintColor: 'turquoise', // Example active color
                tabBarInactiveTintColor: 'gray', // Example inactive color
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    ...styles.tabBar,
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Activity" component={Activity} />
            <Tab.Screen name="Add" component={Home} options={{
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props} />
                )
            }} />
            <Tab.Screen name="Orders" component={Orders} />
            <Tab.Screen name="Dashboard" component={Dashboard} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
      borderTopWidth: 0, // Remove default border
      backgroundColor: 'white', // Your tab bar's background color
      elevation: 20, // Shadow for Android
      // Shadow for iOS
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: -1 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
    },
    // other styles for your custom tab bar
  });

export default TabNav;