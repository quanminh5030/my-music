import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorite from './tabs/Favorite';
import Search from './tabs/Search';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Nav = () => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Favorite') {
                            iconName = 'heart';
                        } else if (route.name === 'Search') {
                            iconName = 'search';
                        }

                        return <FontAwesome
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    }
                })}

                tabBarOptions={{
                    activeTintColor: 'black',
                    inactiveTintColor: 'gray'
                }}
            >
                <Tab.Screen name='Favorite' component={Favorite} />
                <Tab.Screen name='Search' component={Search} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Nav;
