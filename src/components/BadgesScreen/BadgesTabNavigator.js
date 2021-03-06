import React from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BadgesStack from './BadgesStack'
import Colors from '../../res/Colors'
import FavoritesStack from '../Favorites/FavoritesStack'
import UserStack from '../UsersScreen/UserStack'

const Tabs = createBottomTabNavigator()

const BadgesTabNavigator = () => {
    return(
        <Tabs.Navigator
            tabBarOptions={{
                showLabel: false,
                tintColor: Colors.black,
                activeTintColor: Colors.black,
                style:{
                    backgroundColor: Colors.white
                },
        }}>
            <Tabs.Screen
                name="Favorites"
                component={FavoritesStack}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Image 
                            style={{tintColor: color, width: size, height:size}}
                            source={require("../../assets/notFavorite.png")}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="Badges"
                component={BadgesStack}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Image 
                            style={{tintColor: color, width: size, height:size}}
                            source={require("../../assets/home.png")}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="Profile"
                component={UserStack}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Image 
                            style={{tintColor: color, width: size, height:size}}
                            source={require("../../assets/profile.png")}
                        />
                    ),
                }}
            />
        </Tabs.Navigator>
    )
}

export default BadgesTabNavigator