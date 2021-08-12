import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
const Tab=createBottomTabNavigator();
export default function TabNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
            <Tab.Screen name="Homeis" component={Homeis}/>
            <Tab.Screen name="Setting" component={Setting}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
 function Homeis() {
    return (
        <View>
            <Text style={{justifyContent: 'center', alignItems: 'center' }} >tab Navigation</Text>
        </View>
    )
}
function Setting() {
    return (
        <View>
            <Text style={{justifyContent: 'center', alignItems: 'center' }} >tab Navigation</Text>
        </View>
    )
}
