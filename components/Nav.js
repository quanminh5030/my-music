import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorite from './tabs/Favorite';
import Search from './tabs/Search';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Dashboard from './tabs/Dashboard';

const Nav = () => {
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
                <Tab.Screen name='Dashboard' component={Dashboard} />
                <Tab.Screen name='Favorite' component={Favorite} />
                <Tab.Screen name='Search' component={Search} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Nav;
