import React, {useState, useEffect} from "react";
import { 
  Text, 
  View, 
  Image, 
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Keyboard,
  KeyboardAvoidingView
} from "react-native";
import { images, icons, colors } from "../constants";

const Login = () => {
  const [keyboardIsShown, setKeyboardIsShown] = useState(false)

  useEffect(()=> {
    Keyboard.addListener('keyboardDidShow', ()=> {
      setKeyboardIsShown(true)
    })
    Keyboard.addListener('keyboardDidHide', ()=> {
      setKeyboardIsShown(false)
    })
  })

  return (
    <KeyboardAvoidingView className="flex-[100] bg-white p-5">
        <View className="flex-row items-center justify-center flex-[35]">
          <Text className="flex-1 font-bold text-[30px] text-[#333333]">Already have an account? </Text>
          <Image className="flex-1 w-[5px] h-[200px]" source={images.computer}/>        
        </View>
        <View className="flex-[25] gap-1">
          <Text style={{
            color: colors.primaryColor,
            fontSize: 16,
            fontWeight: 600
          }}>Email:</Text>
          <TextInput className="text-black text-[16px] font-medium"
            placeholderTextColor="rgba(0,0,0,0.3)"
            placeholder="example@gmail.com" />
          <View className="h-[1px] bg-teal-500 w-full "></View>
          <Text style={{
            color: colors.primaryColor,
            fontSize: 16,
            fontWeight: 600
          }}>Password:</Text>
          <TextInput className="text-black text-[16px] font-medium"
            placeholderTextColor="rgba(0,0,0,0.3)"
            secureTextEntry={true}
            placeholder="Enter your password" />
          <View className="h-[1px] bg-teal-500 w-full "></View>
        </View>
        { keyboardIsShown == false && <View className="items-center gap-2 flex-[15] mt-8">
          <TouchableOpacity style={{
            backgroundColor: colors.primaryColor,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 12,
            width: '65%',
            alignSelf: 'center'
          }}>
            <Text className="text-white font-medium">Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={()=> {alert('nhan dang ki')}}
           >
            <Text style={{
              color: colors.primaryColor,
              fontWeight: 500,
            }}>New user? Register now</Text>
          </TouchableOpacity>
        </View>
        }
        <View className="flex-[25] mt-[100px]">
          <View className="flex-row items-center justify-center mx-12">
            <View className="h-[1px] bg-black flex-1"></View>
            <Text className="text-[#333] text-[14px] font-normal p-2">Other methods?</Text>
            <View className="h-[1px] bg-black flex-1"></View>
          </View>
          <View className="flex-row gap-6 justify-center">
            <TouchableOpacity
              onPress={()=> {alert('dang nhap bang fb')}}
            >
              <Image source={images.facebook} className="w-[35px] h-[35px]"/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=> {alert('dang nhap bang gg')}}
            >
              <Image source={images.google} className="w-[35px] h-[35px]"/>
            </TouchableOpacity>
          </View>
        </View>
    </KeyboardAvoidingView>
  )
}

export default Login