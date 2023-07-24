
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { StackRouter } from 'react-navigation'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
    WelcomeScreen,
    Register,
    Login
} from '../screens'
import UiTab from './UiTab'
import React from 'react'

const Stack = createNativeStackNavigator()
const AppTab = () => {

    return <NavigationContainer>
        <Stack.Navigator initialRouteName='WelcomeScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"WelcomeScreen"} component={WelcomeScreen} />
            {/* <Stack.Screen name={'Login'} component={Login} />
            <Stack.Screen name={'Register'} component={Register} />
            <Stack.Screen name={'UiTab'} component={UiTab} /> */}
        </Stack.Navigator>
    </NavigationContainer>
}

export default AppTab