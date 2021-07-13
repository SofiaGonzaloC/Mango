// structure of the screens

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BadgesLanding from '../BadgesLanding/BadgesLanding'
import BadgesDetail from '../BadgesDetail/BadgesDetail'
import BadgesScreen from '../BadgesScreen/BadgesScreen'
import BadgesEdit from '../BadgesEdit/BadgesEdit'
import BadgesLogin from '../UsersScreen/BadgesLogin'
import BadgesSignup from "../UsersScreen/BadgesSignUp"
import Colors from "../../res/Colors"

const Stack = createStackNavigator()

const BadgesStack = () =>{
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerStyle:{
                    backgroundColor: Colors.black,
                    shadowColor: Colors.black,
                },
                headerTintColor: Colors.white,
            }}>

            <Stack.Screen name="Badges" component={BadgesScreen} />
            <Stack.Screen name="BadgesDetail" component={BadgesDetail} />
            <Stack.Screen name="BadgesEdit" component={BadgesEdit} />
            <Stack.Screen name="BadgesLogin" component={BadgesLogin} />
            <Stack.Screen name="BadgesSignup" component={BadgesSignup} />
        </Stack.Navigator>
    );
}

export default BadgesStack;