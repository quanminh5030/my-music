import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorite from '../Favorite';
import Search from '../Search';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import NavDashboard from './NavDashboard';
import Logout from '../authentication/Logout';

const TabNavigation = () => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Dashboard'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Favorite') {
                            iconName = 'heart';
                        } else if (route.name === 'Search') {
                            iconName = 'search';
                        } else if (route.name === 'Dashboard') {
                            iconName = 'home'
                        } else if (route.name === 'logout') {
                            iconName = 'power-off'
                        }

                        return <FontAwesome5
                            name={iconName}
                            size={30}
                            color={color}
                            solid

                        />
                    }
                })}



                tabBarOptions={{
                    activeTintColor: '#d46e7a',
                    inactiveTintColor: 'pink',
                    tabStyle: { backgroundColor: '#fcf5f5' },
                    showLabel: false
                }}
            >
                <Tab.Screen name='Dashboard' component={NavDashboard} />
                <Tab.Screen name='Favorite' component={Favorite} />
                <Tab.Screen name='Search' component={Search} />
                <Tab.Screen name='logout' component={Logout} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigation;
