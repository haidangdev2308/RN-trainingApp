import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native'
import { images, colors, icons, fontSizes } from '../../constants'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'

function FiveStars(props) {
    //i
    const { numberOfStars } = props
    return <View style={{
        flexDirection: 'row', justifyContent: 'flex-end'
    }}>
        {[0, 1, 2, 3, 4].map(item => <FontAwesomeIcon
            key={`${item}`}
            icon={faStar}
            style={{ marginEnd: 2 }}
            size={8} color={item <= numberOfStars - 1 ? colors.warning : colors.disable}
        />)}
    </View>
}
export default FiveStars