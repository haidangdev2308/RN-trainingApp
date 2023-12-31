import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Platform
} from "react-native";
import { images, icons } from "../constants";
import { UiButton } from "../components";

const WelcomeScreen = (props) => {

  const [accountTypes, setActiveAccount] = useState([
    {
      name: 'Influencer',
      isSelected: true
    },
    {
      name: 'Business',
      isSelected: false
    },
    {
      name: 'Individual',
      isSelected: false
    }
  ])

  //lấy prop từ navigation
  const { navigation, route } = props
  //hàm có sẵn từ navigation
  const { navigate, goBack } = navigation


  return (
    <View className="bg-white flex-[100]">
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        className="flex-1"
      >
        <View className="flex-[20]">
          <View className="flex-row items-center justify-start p-3"
          style={{marginTop: Platform.OS === 'ios'? 40: 0}}>
            <Image
              source={icons.moon}
              className="w-[30px] h-[30px] ml-[10px] mr-[5px]"
            />
            <Text className="font-semibold uppercase text-[#fff] text-[20px]">HaiDangBlog.co</Text>
            <View className="flex-1"></View>
            <Image
              source={icons.question}
              className="w-[30px] h-[30px] bg-blue-400 mr-[10px]"
            />
          </View>
        </View>
        <View className="flex-[20] flex justify-center items-center gap-2 ">
          <Text>Welcome to</Text>
          <Text className="uppercase font-extrabold text-white">HaiDangBlog.co !</Text>
          <Text>Please select your account type</Text>
        </View>
        <View className="flex-[40] items-center ">
          {
            accountTypes.map((item, index) =>
              <UiButton onPress={() => {//tạo biến là mảng mới sao chép mảng cũ, nếu giống name thì select
                let newAccountTypes = accountTypes.map(newItem => {
                  return {
                    ...newItem,
                    isSelected: newItem.name == item.name
                  }
                }
                )
                setActiveAccount(newAccountTypes)
              }} key={index} title={item.name} isSelected={item.isSelected} />
            )
          }
        </View>
        <View className="flex-[20] items-center">
          <UiButton title={'login'.toUpperCase()} onPress={() => { navigate("Login") }} />
          <Text>Want to register new account?</Text>
          <TouchableOpacity onPress={() => { navigate('Register') }} >
            <Text className="underline font-medium">Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default WelcomeScreen