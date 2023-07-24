import React from 'react'
import { View } from 'react-native'
import { Settings, ProductListView, FoodList } from '../screens'
import { colors } from '../constants'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()
const UiTab = (props) => {

    return (
        <Tab.Navigator>
            <Tab.Screen name={'ProductListView'} component={ProductListView} />
            <Tab.Screen name={'FoodList'} component={FoodList} />
            <Tab.Screen name={'Settings'} component={Settings} />
        </Tab.Navigator>
    )
}

export default UiTab