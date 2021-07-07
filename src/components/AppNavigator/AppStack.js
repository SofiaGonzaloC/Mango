import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BadgesTabNavigator from "../BadgesScreen/BadgesTabNavigator"
import Colors from "../../res/Colors"

import BadgesLanding from "../BadgesLanding/BadgesLanding"
import BadgesLogin from "../BadgesLogin/BadgesLogin"
import BadgesSignup from "../BadgesSignup/BadgesSignUp"

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
                <Stack.Screen name="BadgesTabNavigator" component={BadgesTabNavigator}/>
                <Stack.Screen name="BadgesLogin" component={BadgesLogin}/>
                <Stack.Screen name="BadgesSignUp" component={BadgesSignup}/>
            </Stack.Screen>
        </Stack.Navigator>
    );
}

export default AppStack