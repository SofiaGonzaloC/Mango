import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Favorites from "./Favorites"
import Colors from "../../res/Colors"

const Stack = createStackNavigator();

const FavoritesStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Favorites" component={Favorites} />
        </Stack.Navigator>
    )
}

export default FavoritesStack