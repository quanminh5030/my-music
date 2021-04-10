import React from 'react';
import SearchForm from '../SearchForm';
import Song from '../songComponent/Song';
import { createStackNavigator } from '@react-navigation/stack';


function Search() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName='Search'>
            <Stack.Screen name='Search' component={SearchForm} />
            <Stack.Screen name='Song' component={Song} />
        </Stack.Navigator>
    )
}

export default Search
