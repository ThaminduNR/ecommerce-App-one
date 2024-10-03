import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import AccountScreen from '../screens/AccountScreen';
import SearchScreen from '../screens/SearchScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarIcon: ({focused}) => {
            let iconName = '';
            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Cart') {
              iconName = 'bag-check-outline';
            } else if (route.name === 'Account') {
              iconName = 'person-circle-outline';
            } else if (route.name === 'Search') {
              iconName = 'search-outline';
            }
            const iconSize = 25;
            return (
              <Ionicons
                name={iconName}
                size={iconSize}
                color={focused ? '#485460' : '#1e272e'}
              />
            );
          },

          tabBarStyle: {
            height: 60,
            paddingTop: 10,
            paddingBottom: 5,
          },
          tabBarActiveTintColor: '#485460',
          tabBarInactiveTintColor: '#1e272e',
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'Poppins-Regular',
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;