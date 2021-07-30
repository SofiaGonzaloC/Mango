import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { Login } from "./Profile"
import ProfileEdit from "./ProfileEdit"
import Profile from "./Profile"
import { Colors } from "react-native/Libraries/NewAppScreen"

const Stack = createStackNavigator()

const UserStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: Colors.black,
                    shadowColor: Colors.black
                },
                headerTintColor: Colors.white
        }}>
            <Stack.Screen 
                name="Profile"
                component={Profile}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="ProfileEdit"
                component={ProfileEdit}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default UserStack