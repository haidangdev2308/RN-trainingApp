import React from "react";
import { Text, View, Image, ImageBackground} from "react-native";


const MainScreen = () => {

  return (
    <View className="bg-white flex-[100]">
      <ImageBackground 
        source={require('../assets/img/bg2.jpg')}
        resizeMode="cover"
        className="flex-1"
      >
        <View className="flex-[20]">
          <View className="flex-row items-center justify-start p-3">
            <Image 
              source={require('../assets/img/icon_fire.png')}
              className="w-[30px] h-[30px] ml-[10px] mr-[5px]"
            />
            <Text className="font-semibold text-[#fff] text-[20px]">HaiDangBlog.co</Text>
            <View className="flex-1"></View>
            <Image 
              source={require('../assets/img/icon_question.png')}
              className="w-[30px] h-[30px] bg-blue-400 mr-[10px]"
            />
          </View>
        </View>
        <View className="flex-[20] bg-black">
          <Text>Welcome to</Text>
          <Text>Welcome to</Text>
          <Text>Welcome to</Text>
        </View>
        <View className="flex-[40] bg-slate-600"></View>
        <View className="flex-[20] bg-red-700"></View>
      </ImageBackground>
    </View>
  )
}

export default MainScreen