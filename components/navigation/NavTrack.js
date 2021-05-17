import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Album from '../songComponent/Album';
import Lyric from '../songComponent/Lyric';
import Track from '../songComponent/Track';

const NavTrack = ({artistId, artistName}) => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName='Album'
        >
            <Stack.Screen
                name='Album'
                component={Album}
                options={{ headerShown: false }}
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

export default NavTrack
