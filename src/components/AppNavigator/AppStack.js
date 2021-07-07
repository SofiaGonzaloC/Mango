import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BadgesTabNavigator from "../BadgesScreen/BadgesTabNavigator"
import BadgesLanding from "../BadgesLanding/BadgesLanding"
import Colors from "../../res/Colors"

const Stack = createStackNavigator()

const AppStack = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown:false,
                headerStyle:{
                    backgroundColor: Colors.black,
                    shadowColor: Colors.white,
                },
                headerTintColor: Colors.red
            }}
        >
            <Stack.Screen 
                name='Landing' 
                component={BadgesLanding}
                options={{ headerShown: false }}
            >
                <Stack.Screen name="BadgesTabNavigator" component={BadgesTabNavigator} /> 
            </Stack.Screen>
        </Stack.Navigator>
    );
}

export default AppStack