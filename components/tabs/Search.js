import React from 'react';
import SearchForm from '../SearchForm';
import Song from '../songComponent/Song';
import { createStackNavigator } from '@react-navigation/stack';
import Lyric from '../songComponent/Lyric';

function Search() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName='Search'
        >
            <Stack.Screen
                name='Search'
                component={SearchForm}
                options={{ headerShown: false }}
            />
            <Stack.Screen name='Song' component={Song} options={{
                headerTitleStyle: { fontSize: 1 },
                headerStatusBarHeight: 10,
                headerBackTitleVisible: false,
                headerTintColor: 'white',
                headerTransparent: true,
            }}

            />

            <Stack.Screen name='Lyric' component={Lyric}
                options={{
                    headerTitleStyle: { fontSize: 1 },
                    headerStatusBarHeight: 10,
                    headerBackTitleVisible: false,
                    headerTransparent: true,
                    headerTintColor: 'pink',
                }}
            />
        </Stack.Navigator>
    )
}

export default Search
