import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Keyboard,
} from "react-native";
import { images, icons, colors } from "../../constants";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const FoodItem = (props) => {
    const { food, onPress } = props

    const getColorFromStatus = (status) => {

        switch (status.toLowerCase().trim()) {
            case 'opening now':
                return colors.success
                break;
            case 'opening soon':
                return colors.success
                break;
            case 'coming soon':
                return colors.alert
                break;
            case 'closing soon':
                return colors.warning
                break;
            case 'closing now':
                return colors.warning
                break;
            default:
                break;
        }
    }

    return (
        <TouchableOpacity onPress={onPress} className=" h-[150px] p-4 flex-row">
            <Image
                className='h-[100px] w-[100px] object-cover rounded-lg'
                source={{
                    uri: food.img
                }} />
            <View className="ml-3 flex-1">
                <Text className="h-[22px] text-black font-bold text-[15px] overflow-hidden">{food.name}</Text>
                <View className="bg-black h-[1px] w-full"></View>
                <View className="flex-row gap-1">
                    <Text style={{ color: colors.disable, fontSize: 15 }}>Status:</Text>
                    <Text className='uppercase font-medium' style={{
                        color: getColorFromStatus(food.status)
                    }}>{food.status}</Text>
                </View>
                <Text
                    style={{ color: colors.disable, fontSize: 15 }}
                >Price: {food.price} $</Text>
                <Text
                    style={{ color: colors.disable, fontSize: 15 }}
                >Food type: pizza</Text>
                <Text
                    style={{ color: colors.disable, fontSize: 15 }}
                >Website: {food.website}</Text>
                <View className="flex-row gap-2">
                    {
                        food.social.facebook && <FontAwesomeIcon icon={faFacebook}
                            style={{}} color={colors.disable} size={22} />
                    }
                    {
                        food.social.twitter && <FontAwesomeIcon icon={faTwitter}
                            style={{}} color={colors.disable} size={22} />
                    }
                    {
                        food.social.instagram && <FontAwesomeIcon icon={faInstagram}
                            style={{}} color={colors.disable} size={22} />
                    }
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default FoodItem