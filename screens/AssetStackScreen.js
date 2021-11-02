import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import AssetScreen from './AssetScreen'
import AssetDetailScreen from './AssetDetailScreen'

const AssetStack = createStackNavigator()

const AssetStackScreen = () => {
    return (
        <AssetStack.Navigator>
            <AssetStack.Screen name="Assets" component={AssetScreen} 
                options = {{
                    headerStyle: {
                      backgroundColor: 'tomato',
                    },
                    headerTitleStyle: {
                      color: 'white'
                    }
                  }}
            />
            <AssetStack.Screen name="Details" component={AssetDetailScreen} 
                options = {{
                    headerStyle: {
                      backgroundColor: 'tomato',
                    },
                    headerTitleStyle: {
                      color: 'white'
                    }
                  }}
            />
        </AssetStack.Navigator>
    )
}

export default AssetStackScreen
