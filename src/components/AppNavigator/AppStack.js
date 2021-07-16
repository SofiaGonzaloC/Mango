import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BadgesTabNavigator from "../BadgesScreen/BadgesTabNavigator"
import Colors from "../../res/Colors"

import BadgesLanding from "../BadgesLanding/BadgesLanding"
import BadgesLogin from "../UsersScreen/BadgesLogin"
import BadgesSignup from "../UsersScreen/BadgesSignUp"
import BadgesScreen from '../BadgesScreen/BadgesScreen'

const Stack = createStackNavigator()

const AppStack = () => {
    return (
        <Stack.Navigator
            // Header hidden
            screenOptions={{
                headerShown:false,
                headerStyle:{
                    backgroundColor: Colors.black,
                    shadowColor: Colors.white,
                },
                headerTintColor: Colors.red
            }}
        >
            {/* Screens used */}
            <Stack.Screen 
                name="Landing"
                component={BadgesLanding}
                options={{ headerShown: false }}
            >
            </Stack.Screen>
            <Stack.Screen name="BadgesTabNavigator" component={BadgesTabNavigator}/>
            <Stack.Screen name="BadgesLogin" component={BadgesLogin}/>
            <Stack.Screen name="Badges" component={BadgesScreen}/>
            <Stack.Screen name="BadgesSignup" component={BadgesSignup}/>
        </Stack.Navigator>
    );
}

export default AppStack