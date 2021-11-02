import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import AssetScreen from './screens/AssetScreen';
import AssetStackScreen from './screens/AssetStackScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else {
              iconName = focused ? 'bar-chart' : 'bar-chart-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'red',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} 
          options = {{
            headerStyle: {
              backgroundColor: 'tomato',
            },
            headerTitleStyle: {
              color: 'white'
            }
          }}
        />
        <Tab.Screen name="Asset" component={AssetStackScreen}
          options = {{
            headerShown: false
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

