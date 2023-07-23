import React, { Component } from 'react'
import {
    TouchableOpacity,
    Text,
    View,
} from 'react-native'
import { colors } from '../constants'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const UiHeader = (props) => {
    const {
        title,
        leftIconName,
        rightIconName,
        onPressLeftIcon,
        onPressRightIcon
    } = props
    return <View style={{
        height: 55,
        backgroundColor: colors.primaryColor,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        {/* {leftIconName != undefined ? <Icon            
            name={leftIconName}
            style={{ padding: 10 }}
            size={23} color={'white'}
            onPress={onPressLeftIcon}
        /> : <View style={{width: 50, height: 50 }}/>} */}
        <Text style={{
            fontSize: 20,
            alignSelf: 'center',
            lineHeight: 45,
            color: 'white'
        }}>{title.toUpperCase()}</Text>
        {/* {rightIconName != undefined ? <Icon            
            name={rightIconName}
            style={{ padding: 10 }}
            size={18} color={'white'}
            onPress={onPressRightIcon}
        /> : <View style={{width: 50, height: 50, }}/>}         */}
    </View>
}
export default UiHeader