import React from "react";
import { Text, View, Image } from "react-native";
import {
  WelcomeScreen,
  Login , 
  Register,
  FoodList,
  ProductListView, 
  Settings
} from "./screens"
// import UiTab from "./navigation/UiTab";
import AppTab from "./navigation/AppTab";
const App = () => {

  return (
    // <WelcomeScreen/>
    // <Login/>
    // <Register/>
    // <FoodList/>
    // <ProductListView/>
    // <Settings/>
    <AppTab/>
  )
}

export default App