import React from 'react'
import { View } from 'react-native'
import { Settings, ProductListView, FoodList } from '../screens'
import { colors } from '../constants'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faListUl, faUtensils, faGear } from '@fortawesome/free-solid-svg-icons'

const Tab = createBottomTabNavigator()
const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: 'black',
    tabBarActiveBackgroundColor: colors.primaryColor,
    tabBarInactiveBackgroundColor: colors.primaryColor,
    tabBarBackground: () => {
        <View style={{ backgroundColor: colors.primaryColor, flex: 1 }} />
    },
    tabBarIcon: ({ focused, size, color }) => {
        const screenName = route.name
        if (screenName == 'ProductListView') {
        }
        return <FontAwesomeIcon
            icon={screenName == 'ProductListView' ? faListUl
                : screenName == 'FoodList' ? faUtensils
                    : screenName == 'Settings' ? faGear : faGear}
            color={focused ? 'white' : colors.disable}
            size={22}
        />
    }
})

const UiTab = (props) => {

    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name={'ProductListView'}
                component={ProductListView}
                options={{
                    tabBarLabel: 'Products',
                    tabBarLabelStyle: {
                        fontSize: 12
                    }
                }}
            />
            <Tab.Screen name={'FoodList'} component={FoodList}
                options={{
                    tabBarLabel: 'Foods',
                    tabBarLabelStyle: {
                        fontSize: 12
                    }
                }}
            />
            <Tab.Screen name={'Settings'} component={Settings}
                options={{
                    tabBarLabelStyle: {
                        fontSize: 12
                    }
                }} />
        </Tab.Navigator>
    )
}

export default UiTab