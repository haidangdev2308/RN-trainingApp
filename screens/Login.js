import React, { useState, useEffect } from "react";
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
import { isValidEmail, isValidPassword } from '../Utilies/Validations'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Login = (props) => {

  const [keyboardIsShown, setKeyboardIsShown] = useState(false)
  //biến lỗi email, pw
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  //biến email, pw
  const [email, setEmail] = useState('hd12345@gmail.com')
  const [password, setPassword] = useState('12345')
  //biến xac nhan valid
  const isValidationSuccess = () => {
    return email.length > 0 && password.length > 0
      && isValidEmail(email) && isValidPassword(password)
  }

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShown(true)
    })
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShown(false)
    })
  })

  //lấy prop từ navigation
  const { navigation, route } = props
  //hàm có sẵn từ navigation
  const { navigate, goBack } = navigation

  return (
    <KeyboardAwareScrollView className="flex-[100] bg-white p-5">
      <View className="flex-row items-center justify-center flex-[35] mb-6">
        <Text className="flex-1 font-bold text-[30px] text-[#333333]">Already have an account? </Text>
        <Image className="flex-1 w-[5px] h-[200px]" source={images.computer} />
      </View>
      <View className="flex-[25]">
        <Text style={{
          color: colors.primaryColor,
          fontSize: 16,
          fontWeight: 600
        }}>Email:</Text>
        <TextInput
          value="hd12345@gmail.com"
          onChangeText={(text) => {
            setErrorEmail(isValidEmail(text) ? '' : 'Email is not in correct format')
            setEmail(text)
          }}
          className="text-black text-[16px] font-medium"
          placeholderTextColor={colors.placeholder}
          placeholder="example@gmail.com" />
        <View className="h-[1px] bg-teal-500 w-full "></View>
        <View className="h-5">
          <Text className="text-red-500 font-medium">{errorEmail}</Text>
        </View>
        <Text style={{
          color: colors.primaryColor,
          fontSize: 16,
          fontWeight: 600
        }}>Password:</Text>
        <TextInput
          value="12345"
          onChangeText={(text) => {
            setErrorPassword(isValidPassword(text) ? '' : 'Password must be at least 3 characters')
            setPassword(text)
          }}
          className="text-black text-[16px] font-medium"
          placeholderTextColor={colors.placeholder}
          secureTextEntry={true}
          placeholder="Enter your password" />
        <View className="h-[1px] bg-teal-500 w-full"></View>
        <View className="h-5 ">
          <Text className="text-red-500 font-medium">{errorPassword}</Text>
        </View>
      </View>
      {
        keyboardIsShown == false &&
        <View className="flex-[40]">
          <View className=" items-center gap-2 mt-8">
            <TouchableOpacity
              disabled={isValidationSuccess() == false}

              onPress={() => { navigate('UiTab') }}
              style={{
                backgroundColor: isValidationSuccess() == true ? colors.primaryColor : colors.disable,
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
              onPress={() => { navigate('Register') }}
            >
              <Text style={{
                color: colors.primaryColor,
                fontWeight: 500,
              }}>New user? Register now</Text>
            </TouchableOpacity>
          </View>
          <View className=" mt-[50px]">
            <View className="flex-row items-center justify-center mx-12">
              <View className="h-[1px] bg-black flex-1"></View>
              <Text className="text-[#333] text-[14px] font-normal p-2">Other methods?</Text>
              <View className="h-[1px] bg-black flex-1"></View>
            </View>
            <View className="flex-row gap-6 justify-center">
              <TouchableOpacity
                onPress={() => { alert('dang nhap bang fb') }}
              >
                <Image source={images.facebook} className="w-[35px] h-[35px]" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { alert('dang nhap bang gg') }}
              >
                <Image source={images.google} className="w-[35px] h-[35px]" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      }
    </KeyboardAwareScrollView>
  )
}

export default Login