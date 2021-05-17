import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Lyric from '../songComponent/Lyric';
import Dashboard from '../Dashboard';
import SongsByCountry from '../dashboard/SongsByCountry';
import SongsByGenre from '../dashboard/SongsByGenre';

const NavDashboard = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName='Dashboard'
        >
            <Stack.Screen
                name='Dashboard'
                component={Dashboard}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='SongsByCountry'
                component={SongsByCountry}
                options={{
                    headerTitleStyle: { fontSize: 1 },
                    headerStatusBarHeight: 10,
                    headerBackTitleVisible: false,
                    headerTintColor: 'white',
                    headerTransparent: true,
                }}

            />

            <Stack.Screen
                name='SongsByGenre'
                component={SongsByGenre}
                options={{
                    headerTitleStyle: { fontSize: 1 },
                    headerStatusBarHeight: 10,
                    headerBackTitleVisible: false,
                    headerTintColor: 'white',
                    headerTransparent: true,
                }}

            />


            <Stack.Screen
                name='Lyric'
                component={Lyric}
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

export default NavDashboard
