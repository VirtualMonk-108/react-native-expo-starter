import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNav from './TabNav';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="TabNav" component={TabNav} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}

export default Routes;