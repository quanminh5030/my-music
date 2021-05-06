import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavoriteList from '../songComponent/FavoriteList';
import Lyric from '../songComponent/Lyric';

function Favorite() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName='Favorite'>
      <Stack.Screen
        name='Favorite'
        component={FavoriteList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Lyric'
        component={Lyric}
        options={{
          headerTitleStyle: {fontSize: 1},
          headerStatusBarHeight: 10,
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTintColor: 'pink',

        }}
      />
    </Stack.Navigator>
  )
}


export default Favorite
