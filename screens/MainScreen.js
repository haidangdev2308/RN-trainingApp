import React from "react";
import { Alert, Text } from "react-native";


const MainScreen = (props) => {
  console.log(props.y);
  return (
    <Text>hellsdf  {props.x + props.y}</Text>
  )
}

export default MainScreen