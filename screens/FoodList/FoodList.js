import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList,
    SafeAreaView
} from "react-native";
import { images, icons, colors } from "../../constants";
import FoodItem from "./FoodItem";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass, faFilter } from '@fortawesome/free-solid-svg-icons'

const FoodList = () => {

    const [foods, setFood] = useState([
        {
            name: 'Asado',
            img: 'https://tomate.com.vn/wp-content/uploads/2022/05/mon-ngon-tay-ban-nha-4.jpg',
            status: 'Opening soon',
            price: 1234,
            website: 'https://web-eid.eu',
            social:
            {
                facebook: 'https://www.facebook.com/',
                instagram: 'https://www.instagram.com/',
            }
        },
        {
            name: 'Chimichurri',
            img: 'https://visana.vn/wp-content/uploads/2019/02/Patatas-bravas.jpg',
            status: 'Opening now',
            price: 123.53,
            website: 'https://web-eid.eu',
            social:
            {
                facebook: 'https://www.facebook.com/',
            }
        },
        {
            name: 'Dulce de leche,Cows roaming Argentina`s expansive',
            img: 'https://pasgo.vn/Common/ChuyenDoiAnh?quality=100&link=https://pastaxi-manager.onepas.vn/content/uploads/articles/dungtv/anh-chuoi-nha-hang/thai-food-hn/chuoi-nha-hang-thai-food-3.jpg',
            status: 'Closing soon',
            price: 1234.3,
            website: 'https://web-eid.eu',
            social:
            {
                twitter: 'https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Dvi',
                instagram: 'https://www.instagram.com/',
            }
        },
        {
            name: 'Alfajores',
            img: 'https://media-cdn.tripadvisor.com/media/photo-s/18/a5/6a/8d/photo0jpg.jpg',
            status: 'Closing now',
            price: 1234,
            website: 'https://web-eid.eu',
            social:
            {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Dvi',
                instagram: 'https://www.instagram.com/',
            }
        },
        {
            name: 'Empanadas',
            img: 'https://duhoc.thanhgiang.com.vn/sites/default/files/bulgogi.jpg',
            status: 'Coming soon',
            price: 1234,
            website: 'https://web-eid.eu',
            social:
            {
                twitter: 'https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Dvi',
            }
        },
        {
            name: 'Matambre arrollado',
            img: 'https://static.kinhtedothi.vn/w960/images/upload/2021/12/22/9f1b737f-00b8-4431-af57-05c626034225.jpg',
            status: 'Opening now',
            price: 1234,
            website: 'https://web-eid.eu',
            social:
            {
                facebook: 'https://www.facebook.com/',
                instagram: 'https://www.instagram.com/',
            }
        },
    ])

    const [categories, setCategories] = useState([
        {
            name: 'BBQ',
            url: 'https://images.foody.vn/BlogsContents/46444498_1785582584898023_6834569445101273088_n(1).jpg'
        },
        {
            name: 'Breakfast',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbI9Yiwl7Yc5OjdsDhT88vVakLuJceGiPJIdy2iUjCcW0mho3MTPQfAMVsvOsRLUMdGr8&usqp=CAU'
        },
        {
            name: 'Coffee',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR12qcjgUCbektxgkXY2cgWu_MfPCG3-eDfWruf19VOdo45be0Xzo6pUJTQx0hW4QrO_FU&usqp=CAU'
        },
        {
            name: 'Noodles',
            url: 'https://static.toiimg.com/photo/52467119.cms'
        },
        {
            name: 'Hot dogs',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNjeiTctEE8JCDkPBzQ9ymmBS1zMt3Mws-xo25gnbVFByCZ0NVuwiL2VZicgbS49jz7c&usqp=CAU'
        },
        {
            name: 'Dinner',
            url: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/01/22/12/dinner-table.jpg?width=1200'
        },
        {
            name: 'Beverages',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHzVkc-LPuqE-DXVUkTznfkCadCqCYzcfoBA&usqp=CAU'
        },
        {
            name: 'Dessert',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW08jAcTeGjQRVr9NAITfKF3nbRB5RPef2VA&usqp=CAU'
        },
        {
            name: 'Wine',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUB_gxlZAGsGjHOwSU6mIc_L4X18yTAffJT-ocG6Y-5WqZSORqytoBaMkA5qcgeC2FeZA&usqp=CAU'
        },
    ])

    const [searchText, setSearchText] = useState('')
    const filteredFoods = () => foods.filter(eachFood => eachFood.name.toLowerCase()
        .includes(searchText.toLowerCase()))


    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1">
                <View className='h-[70px] flex-row p-4 items-center justify-center'>
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        size={20} color={'black'}
                        style={{
                            position: 'absolute',
                            top: 26,
                            left: 24
                        }}
                    />
                    <TextInput
                        autoCorrect={false}
                        onChangeText={(text) => {
                            setSearchText(text)
                        }}
                        style={{
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            height: 40,
                            flex: 1,
                            marginEnd: 8,
                            borderRadius: 5,
                            opacity: 0.8,
                            paddingStart: 30,
                            fontSize: 16,
                            fontWeight: '500'
                        }} />
                    <FontAwesomeIcon icon={faFilter} size={30} color={'black'} />
                </View>
                <View style={{
                    height: 100,
                }}>
                    <View style={{
                        height: 2,
                        backgroundColor: colors.disable,
                    }} />
                    <FlatList
                        horizontal
                        data={categories}
                        keyExtractor={item => item.name}
                        renderItem={({ item }) => {
                            return <TouchableOpacity
                                onPress={() => {
                                    alert(`press ${item.name}`)
                                }}
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Image
                                    style={{
                                        width: 40,
                                        height: 40,
                                        resizeMode: 'cover',
                                        borderRadius: 25,
                                        marginHorizontal: 17,
                                        marginBottom: 6
                                    }}
                                    source={{
                                        uri: item.url
                                    }} />
                                <Text style={{
                                    color: 'black',
                                    fontSize: 14,

                                }}>{item.name}</Text>
                            </TouchableOpacity>
                        }}
                        style={{ flex: 1 }}>
                    </FlatList>
                    <View style={{ height: 2, backgroundColor: colors.disable }} />
                </View>
                {filteredFoods().length > 0 ? <FlatList

                    data={filteredFoods()}
                    renderItem={({ item }) => <FoodItem
                        onPress={() => {
                            alert(`You press item's name: ${item.name}`)
                        }}
                        food={item} key={item.name} />}
                    keyExtractor={item => item.name}
                /> : <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        color: 'black',
                        fontSize: 25
                    }}>No food found</Text>
                </View>}
            </View>
        </SafeAreaView>
    )
}

export default FoodList