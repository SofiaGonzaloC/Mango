// structure of the screens

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BadgeLanding from '../BadgesLanding/BadgeLanding'
import BadgesDetail from '../BadgesDetail/BadgesDetail'
import Colors from "../../res/Colors"

const Stack = createStackNavigator()

const BadgesStack = () =>{
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor: Colors.white,
                    shadowColor: Colors.white,
                },
                headerTintColor: Colors.white,
            }}>
            <Stack.Screen 
                name="Landing" 
                component={BadgeLanding} 
            />
            <Stack.Screen name="Badges" component={BadgesScreen} />
            <Stack.Screen name="BadgesDetail" component={BadgesDetail} />
            <Stack.Screen name="BadgesEdit" component={BadgesEdit} />
        </Stack.Navigator>
    );
}

export default BadgesStack;