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
import { isValidEmail, isValidPassword, isValidRePassword } from '../Utilies/Validations'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Register = (props) => {

  const [keyboardIsShown, setKeyboardIsShown] = useState(false)
  //biến lỗi email, pw
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorRePassword, setErrorRePassword] = useState('')
  //biến email, pw
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  //biến xac nhan valid
  const isValidationSuccess = () => {
    return email.length > 0 && password.length > 0
      && isValidEmail(email) && isValidPassword(password)
      && isValidRePassword(rePassword, password)
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
    <KeyboardAwareScrollView className="flex-[100] p-5"
      style={{ backgroundColor: colors.primaryColor }}
    >
      <View className="flex-row items-center justify-center flex-[30] mb-4">
        <Text className="flex-1 font-bold text-[30px] text-[#fff]">Here's your first step with us!</Text>
        <Image className="flex-1 w-[5px] h-[200px]" source={images.computer} />
      </View>
      <View className="flex-[50] bg-white p-4 rounded-xl">
        <Text style={{
          color: colors.primaryColor,
          fontSize: 16,
          fontWeight: 600
        }}>Email:</Text>
        <TextInput
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
        <Text style={{
          color: colors.primaryColor,
          fontSize: 16,
          fontWeight: 600
        }}>Retype password:</Text>
        <TextInput
          onChangeText={(text) => {
            setErrorRePassword(isValidRePassword(text, password) ? '' : 'Password do NOT match')
            setRePassword(text)
          }}
          className="text-black text-[16px] font-medium"
          placeholderTextColor={colors.placeholder}
          secureTextEntry={true}
          placeholder="Re-enter your password" />
        <View className="h-[1px] bg-teal-500 w-full"></View>
        <View className="h-5 ">
          <Text className="text-red-500 font-medium">{errorRePassword}</Text>
        </View>
        {
          keyboardIsShown == false &&
          <View className=" items-center gap-2 mt-4 mb-1">
            <TouchableOpacity
              disabled={isValidationSuccess() == false}

              onPress={() => { navigate('Login') }}
              style={{
                backgroundColor: isValidationSuccess() == true ? colors.primaryColor : colors.disable,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 12,
                width: '65%',
                alignSelf: 'center'
              }}>
              <Text className="text-white font-medium">Register</Text>
            </TouchableOpacity>
          </View>
        }
      </View>
      {
        keyboardIsShown == false &&
        <View className="flex-[20]">

          <View className=" mt-[50px]">
            <View className="flex-row items-center justify-center mx-12">
              <View className="h-[1px] bg-white flex-1"></View>
              <Text className="text-[#fff] text-[14px] font-normal p-2">Other methods?</Text>
              <View className="h-[1px] bg-white flex-1"></View>
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

export default Register