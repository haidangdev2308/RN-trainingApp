import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native'
import { images, colors, icons } from '../../constants'
import FiveStars from './FiveStars';

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const ProductItem = (props) => {
    const { item, index, onPress } = props
    return <View style={{
        flex: 0.5,
        //height: 200,
        marginLeft: index % 2 == 0 ? 10 : 0,
        marginTop: 5,
        marginRight: 10,
        marginBottom: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.disable
    }}>
        <View style={{
            flexDirection: 'row',
            marginTop: 10,
            marginHorizontal: 5
        }}>
            <Image
                style={{
                    width: 70,
                    height: 90,
                    resizeMode: 'cover',
                    borderRadius: 20,
                    marginRight: 15
                }}
                source={{
                    uri: item.url
                }} />
            <Text style={{
                color: 'black',
                fontSize: 20,
                flex: 1,
                textAlign: 'right'
            }}>$ {item.price}</Text>
        </View>
        <Text numberOfLines={1} ellipsizeMode="tail" style={{
            color: colors.primaryColor,
            fontWeight: 'bold',
            fontSize: 14,
            marginHorizontal: 10,
            marginTop: 5,
        }}>{item.productName}
        </Text>
        <View className='flex-1 mt-2'>
            {
                item.specifications.map(specification =>
                    <Text
                        key={specification}
                        style={{
                            color: 'black',
                            fontSize: 14,
                            paddingHorizontal: 10,
                            paddingBottom: 10,
                        }}>* {specification}</Text>)
            }
        </View>
        <View style={{
            flexDirection: 'row', padding: 10, borderRadius: 20,
        }}>
            <TouchableOpacity
                onPress={onPress}
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <FontAwesomeIcon
                    icon={faHeart}
                    style={{ marginEnd: 5 }}
                    size={22} color={
                        item.isSaved == undefined || item.isSaved == false ?
                            colors.disable : 'red'} />
                <Text style={{
                    color: item.isSaved == undefined || item.isSaved == false ?
                        colors.disable : 'red',
                    fontSize: 10,
                    width: 50
                }}>{item.isSaved == undefined || item.isSaved == false ?
                    '' : 'Saved'}</Text>
            </TouchableOpacity>
            <View style={{
                flex: 1,
            }}>
                <FiveStars numberOfStars={item.stars} />
                <Text style={{
                    color: colors.success,
                    fontSize: 12,
                    textAlign: 'right',
                    paddingTop: 5
                }}>{item.reviews} reviews</Text>
            </View>
        </View>
    </View>
}
export default ProductItem