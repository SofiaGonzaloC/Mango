import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './src/components/AppNavigator/AppStack'
import BadgesTabNavigator from './src/components/BadgesScreen/BadgesTabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  )
};

export default App;