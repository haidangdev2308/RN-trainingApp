import React from "react";
import { 
  Text, 
  View, 
  Image, 
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { images, icons } from "../constants";
import Icon from 'react-native-vector-icons/FontAwesome5';
const WelcomeScreen = () => {

  return (
    <View className="bg-white flex-[100]">
      <ImageBackground 
        source={images.background}
        resizeMode="cover"
        className="flex-1"
      >
        <View className="flex-[20]">
          <View className="flex-row items-center justify-start p-3">
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
        <View className="flex-[40]  flex justify-evenly items-center">
          <TouchableOpacity className="items-center justify-center border-white rounded-md border-[2px] p-4 w-[300px]">
            <Icon name="circle" color='black' size='10'></Icon>
            <Text className="font-medium text-white">Influence</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center border-white rounded-md border-[2px] p-4 w-[300px]">
            <Text className="font-medium text-white">Influence</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center border-white rounded-md border-[2px] p-4 w-[300px]">
            <Text className="font-medium text-white">Influence</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-[20] "></View>
      </ImageBackground>
    </View>
  )
}

export default WelcomeScreen